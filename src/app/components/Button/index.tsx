"use client";

import React from "react";
import { ButtonProps } from "./type";

const Button = ({ className, children, onClick, disabled=false }: ButtonProps) => {
   return (
      <button disabled={disabled} onClick={onClick} className={className}>
         {children}
      </button>
   );
};

export default Button;
