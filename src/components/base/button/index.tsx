import type { JSX } from "react"
import { clx } from "utilities/cls";


type ButtonProps = {
    variant?: "contained" | "outlined" | "text";
    color?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const colors = {
    primary : "bg-amber-700",
    secondary : "bg-red-100"
}

export const Button: React.FC<ButtonProps> = ({ variant = "contained", children, color = "primary", ...props }): JSX.Element => {



    return (() => {
        switch (variant) {
            case "contained":

                return (
                    <button className={clx("p-2 bg-red-100 rounded-3xl", colors[color])}{...props}>{children}</button>
                )
            case "outlined":
                return (
                    <button {...props}>outlined</button>
                )
            case "text":
                return (
                    <button{...props}>text</button>
                )
            default:
                return (
                    <button{...props}>outlined</button>
                )
        }
    })();
}