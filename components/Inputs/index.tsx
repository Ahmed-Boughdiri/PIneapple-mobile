import React from "react";
import Default from "./Default";

const Index:React.FC<{
    type: "default",
    placeholder?: String,
    icon?: any,
    iconSize?: Number,
    height?: Number,
    width?: Number,
    spacing?: Number
}> = ({
    type,
    placeholder="",
    icon="",
    iconSize,
    height,
    width,
    spacing
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
                />
            )
        }
    </>
)

export default Index;
