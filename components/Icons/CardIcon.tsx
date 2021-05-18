import React from "react";
import {
    View,
    Text,
} from "react-native";
import theme from "../../theme";
import styles from "../../layout";
import layout from "../../layout";
import Icon from "./Default";

function getIconSize(label: String): Number {
    switch(label) {
        case "Comment":
            return 20
        case "Dislike":
            return 26
        default:
            return 22
    }
}

const PostIcon:React.FC<{
    icon: any,
    label: String
}> = ({
    icon,
    label
}) =>{
    return (
        <View
            style={layout.home.postIcon.postIconContainer}
        >
            <Icon 
                icon={icon}
                size={getIconSize(label)}
                color={theme.colors.dark}
                style={{
                    marginTop: (label === "Comment") ? 3 : 0
                }}
            />
            <Text
                style={styles.home.postIcon.postIconLabel}
            >{label}</Text>
        </View>
    ); 
}

export default PostIcon;
