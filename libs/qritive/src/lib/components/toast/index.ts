import { message } from "antd";
import { ArgsProps } from "antd/lib/message";

interface IToastMessage {
    config: ArgsProps;
}

export const ToastInfo = ({config}:IToastMessage) => {
    return message.info(config)
}

export const ToastSuccess = ({config}:IToastMessage) => {
    return message.success(config)
}

export const ToastError = ({config}:IToastMessage) => {
    return message.error(config)
}

export const ToastWarning = ({config}:IToastMessage) => {
    return message.warning(config)
}

export const ToastLoading = ({config}:IToastMessage) => {
    return message.loading(config)
}