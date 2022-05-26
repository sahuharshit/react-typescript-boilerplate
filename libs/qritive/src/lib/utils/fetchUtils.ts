import axios, { AxiosInstance } from "axios";
import { get } from "lodash";
import * as qs from "query-string";

export let defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  credentials: "include",
};

/**
 * Created a default timeout of 5seconds. Please make sure
 * that the API should not be taking more than 200-500ms to
 * resolve. If it does, raise a ticket on JIRA indicating the
 * endpoint of the API.
 */
export const axiosInstance: AxiosInstance = axios.create({
  //   baseURL: `${process.env.NX_REACT_APP_BASE_URL}/api`,
  timeout: 5000,
  headers: {
    ...defaultHeaders,
  },
});

/**
 * This is a request interceptor i.e. we can send any kind of
 * data herein in the config file. Seldom use, but very useful
 * to set Headers and specifying cache resolutions and matching
 * up etags for cache results.
 */
axiosInstance.interceptors.request.use((config) => {
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const responseStatusCode = error.response.status;
    switch (responseStatusCode) {
      case 404: {
        console.error({
          type: "error",
          message: get(
            error,
            "response.data",
            "URL doesnot exist on Specified Resource"
          ),
        });
        break;
      }

      case 401: {
        console.error({
          type: "error",
          message: get(error, "response.data", "User Unauthorized"),
        });
        break;
      }

      case 500: {
        console.error({
          type: "error",
          message: get(error, "response.data", "Internal Server Error"),
        });
        break;
      }

      default: {
        console.error({
          type: "error",
          message: get(error, "response.data", "Oops! Something went wrong !!"),
        });
        break;
      }
    }
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

/**
 * here is a simple representation of how the API calls should be made
 * on top of every request.
 */
class FetchUtilsClass {
  getRequest = async (url: string) => {
    return axiosInstance.get(url);
  };

  patchRequest = async (url: string, body: any) => {
    return axiosInstance.patch(url, body);
  };

  putRequest = async (url: string, body: any) => {
    return axiosInstance.put(url, body);
  };

  postRequest = async (url: string, body: any) => {
    return axiosInstance.post(url, body);
  };

  deleteRequest = async (url: string) => {
    return axiosInstance.delete(url);
  };
  generateQueryString = (qparams: any) => {
    return "?" + qs.stringify(qparams);
  };
}
const FetchUtils = new FetchUtilsClass();

export { FetchUtils };