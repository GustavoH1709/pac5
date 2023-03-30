import React, { ButtonHTMLAttributes } from 'react'

type props = {
    disabled?: boolean;
    onClick: any;
    children: React.ReactNode;
    type: "button" | "submit" | "reset" | undefined;
}

export function ButtonForm({
  disabled = false,
  onClick = (e: any) => {},
  children = null,
  type = "button"
} : props) {
  return (
    <div className="flex flex-col row">
      <button
      type={type}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
      onClick={onClick}
      disabled={disabled}
    >
        {children}
      </button>
    </div>
  );
}
