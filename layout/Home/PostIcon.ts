import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
    postIconContainer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    postIconLabel: {
        textAlign: "center",
        color: theme.colors.dark,
        fontWeight: "700",
        marginLeft: 5
    }
});

export default styles

