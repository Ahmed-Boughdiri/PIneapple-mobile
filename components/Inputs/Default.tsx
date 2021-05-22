import React from "react";
import { 
    View, 
    StyleSheet,
    Text,
    TextInput,
    Image
} from "react-native";
import theme from "../../theme";

const Default:React.FC<{
    placeholder: String,
    icon: any,
    iconSize?: Number,
    height?: Number,
    width?: Number,
    spacing?: Number
}> = ({
    placeholder,
    icon,
    iconSize=30,
    height,
    width,
    spacing=8
}) =>(
    <View style={styles.container}>
        <Image 
            source={icon}
            style={{
                height: iconSize ? iconSize as number : height as number,
                width: iconSize ? iconSize as number : width as number,
                tintColor: theme.colors.white,
                marginRight: spacing as number
            }}
        />
        <TextInput 
            placeholder={placeholder as string}
            placeholderTextColor="#fff"
            style={{
                color: theme.colors.white
            }}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        backgroundColor: theme.colors.inputBgColor,
        borderRadius: 5,
        paddingHorizontal: 18,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8
    },
});

export default Default;
