import { message } from "antd";
import { ArgsProps } from "antd/lib/message";

export const toastInfo = (config:ArgsProps) => {
    return message.info(config)
}

export const toastSuccess = (config:ArgsProps) => {
    return message.success(config)
}

export const toastError = (config:ArgsProps) => {
    return message.error(config)
}

export const toastWarning = (config:ArgsProps) => {
    return message.warning(config)
}

export const toastLoading = (config:ArgsProps) => {
    return message.loading(config)
}