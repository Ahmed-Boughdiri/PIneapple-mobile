import React from "react";
import Default from "./Default";

const Index:React.FC<{
    type: "default",
    placeholder?: String,
    icon?: any,
    iconSize?: Number,
    height?: Number,
    width?: Number,
    spacing?: Number,
    value: any,
    handleChnage: 
        (value: String) => void,
    secureText?: Boolean
}> = ({
    type,
    placeholder="",
    icon="",
    iconSize,
    height,
    width,
    spacing,
    value,
    handleChnage,
    secureText=false
}) =>(
    <>
        {
            (type === "default") && (
                <Default
                    placeholder={placeholder}
                    icon={icon}
                    iconSize={iconSize}
                    height={height}
                    width={width}
                    spacing={spacing}
                    value={value}
                    handleChange={handleChnage}
                    secureText={secureText}
                />
            )
        }
    </>
)

export default Index;
