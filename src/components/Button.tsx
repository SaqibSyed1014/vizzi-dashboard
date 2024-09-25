import Image from "next/image";
import React from "react";

interface ButtonProps {
    type: "submit" | "reset" | "button",
    label: string,
    hasIcon?: boolean,
    icon?: React.ReactNode,
    isPrimary?: boolean,
    isSecondary?: boolean
}

export const Button: React.FC<ButtonProps> = ({ type, label, hasIcon, icon, isPrimary, isSecondary }) => {
    const baseStyles = "flex justify-center items-center gap-2 rounded-lg border font-normal px-3 py-1";
    const primaryBtnStyles =  isPrimary ? "text-white bg-primary border-primary" : "";
    const secondaryBtnStyles = isSecondary ? "border-grey-medium text-coal" : "";

    const combinedStyles = `${baseStyles} ${primaryBtnStyles} ${secondaryBtnStyles}`;

    return (
        <button type={type} className={combinedStyles}>
            <div className="shrink-0">{hasIcon && icon}</div>
            {label}
        </button>
    )
}
