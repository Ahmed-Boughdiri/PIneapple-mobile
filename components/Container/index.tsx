import React from "react";
import {
    View,
    StyleProp,
    ViewStyle
} from "react-native";
import styles from "../../layout";

const Container:React.FC<{
    styles?: StyleProp<ViewStyle>,
}> = ({
    children,
    styles: componentStyles
}) =>(
    <View 
        style={[
            componentStyles, 
            styles.container.containerWrapper
        ]}
    >
        {
            children
        }
    </View>
);

export default Container;

