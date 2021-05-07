import { StyleSheet } from "react-native";
import { width } from "../../global/Dimensions";

const styles = StyleSheet.create({
    headerContainer: {
        width,
        paddingTop: 58,
        paddingBottom: 16,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        elevation: 8,
        shadowColor: "#454D65",
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
        fontWeight: "700"
    },
});

export default styles;
