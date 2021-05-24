import { StyleSheet } from "react-native";
import theme from "../../theme";
import { width } from "../../global/Dimensions";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.dark,
        alignItems: "center",
        justifyContent: "center",
    },
    wrapper: {
        width: width * 0.8
    },
    alreadyHaveAnAccount: {
        marginTop: 8,
        color: theme.colors.white,
        textAlign: "center"
    }
});
