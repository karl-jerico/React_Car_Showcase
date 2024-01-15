"use client";

import React from "react";
import classNames from "classnames";
import { CustomButtonProps } from "@/types";

const CustomButton = ({ title, containerStyles, handleClick }: CustomButtonProps) => {
    console.log("containerStyles:", containerStyles);
  
    const buttonClasses = classNames("custom-btn", containerStyles);
    console.log("buttonClasses:", buttonClasses);

  return (
    <button
      disabled={false}
      type="button"
      className={buttonClasses}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton