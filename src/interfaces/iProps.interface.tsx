import { ReactNode } from "react";

export interface IProps {
    children?: ReactNode,
    className?: string,
    [key: string]: any
}