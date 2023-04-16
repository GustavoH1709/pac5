import { ReactNode } from "react";

type props = {
  children: ReactNode;
};

export function CardBody({ children }: props) {
  return <div className="flex">{children}</div>;
}
