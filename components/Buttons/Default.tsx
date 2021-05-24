import React from "react";
import { 
    TouchableOpacity, 
    StyleSheet,
    Text
} from "react-native";
import theme from "../../theme";

const Default:React.FC<{
    title: String,
    onPress: () => void
}> = ({
    title,
    onPress
}) =>(
    <TouchableOpacity 
        onPress={() => console.log("")}
        style={styles.container}
        onPressIn={onPress}
    >
        <Text style={styles.btnTitle}>
            {title}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.primary,
        borderRadius: 5
    },
    btnTitle: {
        textAlign: "center",
        color: theme.colors.white,
        fontSize: 15
    }
});

export default Default;
