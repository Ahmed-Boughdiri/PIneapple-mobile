import { StyleSheet } from "react-native";
import { width } from "../../global/Dimensions";
import theme from "../../theme";

const styles = StyleSheet.create({
    headerContainer: {
        width,
        paddingTop: 10,
        paddingBottom: 16,
        backgroundColor: theme.colors.dark,
        alignItems: "center",
        justifyContent: "center",
        elevation: 8,
        shadowColor: theme.colors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        zIndex: 10
    },
    headerTitle: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700",
        color: theme.colors.white
    },
});

export default styles;
