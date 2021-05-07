import React from "react";
import { 
    Image, 
    ImageStyle, 
    StyleProp 
} from "react-native";

const Icon:React.FC<{
    icon: any,
    size?: Number,
    height?: Number,
    width?: Number,
    color?: String,
    style?: StyleProp<ImageStyle>
}> = ({
    icon,
    size,
    height,
    width,
    color="#000",
    style
}) =>{
    let iconDimensions;
    if(size)
        iconDimensions = {
            height: size,
            width: size
        }
    else
        iconDimensions = {
            height,
            width
        }
    return (
        <Image 
            source={icon}
            height={24}
            width={24}
            style={{
                height: iconDimensions.height as number,
                width: iconDimensions.width as number,
                tintColor: color,
                ...style as StyleProp<any>
            }}
        />
    );
}

export default Icon;

