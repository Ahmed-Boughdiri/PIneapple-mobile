import { StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    mainTabIconContainer: {
        height: 80,
        width: 80,
        backgroundColor: theme.colors.primary,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -45,
        borderWidth: 3,
        borderColor: theme.colors.white
    }
})

export default styles;
