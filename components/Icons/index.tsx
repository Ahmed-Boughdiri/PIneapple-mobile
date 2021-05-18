import React from "react";
import Default from "./Default";
import {
    StyleProp,
    ImageStyle
} from "react-native";
import CardIcon from "./CardIcon";

const Index:React.FC<{
    type: "default" | "card-icon",
    icon: any,
    size?: Number,
    height?: Number,
    width?: Number,
    color?: String,
    style?: StyleProp<ImageStyle>,
    label?: String
}> = ({
    type,
    icon,
    color,
    height,
    style,
    width,
    size,
    label=""
}) =>(
    <>
        {
            (type === "default") && (
                <Default 
                    icon={icon}
                    color={color}
                    height={height}
                    width={width}
                    size={size}
                    style={style}
                />
            )
        }
        {
            (type === "card-icon") && (
                <CardIcon 
                    icon={icon}
                    label={label}
                />
            )
        }
    </>
);

export default Index;
