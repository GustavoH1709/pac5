import type { FormEvent, MouseEventHandler } from "react";

export type buttonProps = {
    type: string;
    label?: string;
    action: undefined | MouseEventHandler<HTMLButtonElement> | FormEvent<HTMLFormElement>;
    color?: string | undefined;
    icon?: undefined;
  };
  
export  type props = {
    actions?: buttonProps[] | undefined;
    title: string;
}