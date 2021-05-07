import React from "react";
import {
    View,
    Text,
    Image
} from "react-native";
import theme from "../../theme";
import styles from "../../layout";
import layout from "../../layout";
import Icon from "../../components/Icons";

const PostIcon:React.FC<{
    icon: any,
    label: String
}> = ({
    icon,
    label
}) =>{
    const getIconSize = (label: String) =>{
        switch(label) {
            case "Comment":
                return 20
            case "Dislike":
                return 26
            default:
                return 22
        }
    }
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
