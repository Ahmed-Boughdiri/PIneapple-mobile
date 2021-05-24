import { StyleSheet } from "react-native";
import { width } from "../../global/Dimensions";
import theme from "../../theme";

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
    optionsContainer: {
        width: "100%",
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-between"
    },
    forgetPassword: {
        marginTop: 8,
        color: theme.colors.white,
        textAlign: "right"
    },
    iDontHaveAnAccount: {
        marginTop: 8,
        color: theme.colors.white,
        textAlign: "left"
    }
});
