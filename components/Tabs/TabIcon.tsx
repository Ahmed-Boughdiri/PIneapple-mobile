import React from "react";
import { 
    View, 
    Text, 
    Image 
} from "react-native";
import styles from "../../layout";
import theme from "../../theme";

const TabIcon:React.FC<{
    focused: Boolean,
    icon: any,
    label: String,
    sizes?: {
        height: Number,
        width: Number
    },
    marginTop?: Number
}> = ({
    focused,
    icon,
    label,
    sizes={
        height: 25,
        width: 25
    },
    marginTop=0
}) =>{
    const tabColor = focused ? theme.colors.white : theme.colors.unfocused;
    return (
        <View style={styles.tabs.tabIcon.tabIconContainer}>
            <Image 
                source={icon}
                resizeMode="contain"
                style={{
                    tintColor: tabColor,
                    height: sizes.height as number,
                    width: sizes.width as number,
                    marginTop: marginTop as number
                }}
            />
            <Text 
                style={{ 
                    ...styles.tabs.tabIcon.tabLabel, 
                    color: tabColor
                }}
            >
                { label }
            </Text>
        </View>
    )
};

export default TabIcon;