import { StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    tabIconContainer: {
        alignItems: "center",
        justifyContent: "center",
        top: 2
    },
    tabLabel: {
        color: theme.colors.unfocused,
        fontSize: 12
    },
});

export default styles;

