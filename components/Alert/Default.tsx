import React from "react";
import { 
    View, 
    StyleSheet,
    Text,
    StyleProp,
    ViewStyle
} from "react-native";

const Default:React.FC<{
    componentStyles: StyleProp<any>,
    title: String
}> = ({ 
    componentStyles={},
    title
}) =>(
    <View 
        style={{
            ...styles.container,
            ...componentStyles
        }}
    >
        <Text style={styles.alertText}>
            { title }
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: undefined,
        minHeight: 50,
        backgroundColor: "rgba(255,0,0, 0.2)",
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "rgba(255,0,0, 0.6)",
        borderWidth: 4,
        paddingHorizontal: 8,
        paddingVertical: 5
    },
    alertText: {
        color: "rgba(255,0,0, 0.6)",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "normal",
    }
});

export default Default;
