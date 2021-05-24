import React from "react";
import Default from "./Default";
import {
    StyleProp,
    ViewStyle
} from "react-native";

const Index:React.FC<{
    type: "default",
    styles?: StyleProp<ViewStyle>,
    title: String
}> = ({
    type,
    styles,
    title
}) =>(
    <>
        {
            (type === "default") && (
                <Default 
                    title={title}
                    componentStyles={styles}
                />
            )
        }
    </>
);

export default Index;
