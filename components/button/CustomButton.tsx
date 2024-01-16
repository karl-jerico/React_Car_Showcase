"use client";

import React from "react";
import classNames from "classnames";
import { CustomButtonProps } from "@/types";

const CustomButton = ({ title, containerStyles, handleClick, btnType }: CustomButtonProps) => {  
    const buttonClasses = classNames("custom-btn", containerStyles);

  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={buttonClasses}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton