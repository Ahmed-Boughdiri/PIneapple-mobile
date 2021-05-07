import { StyleSheet } from "react-native";
import { width } from "../../global/Dimensions";

const styles = StyleSheet.create({
    feedItem: {
        width: (width - 24),
        backgroundColor: "#fff",
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginVertical: 8,
    },
    feedItemHeader: {
        width: "100%",
        flexDirection: "row"
    },
    authroName: {
        textAlign: "left",
        fontSize: 15,
        fontWeight: "700",
        color: "#454D65",
    },
    releaseDate: {
        textAlign: "left",
        fontSize: 11,
        color: "#C4C6CE",
    },
});

export default styles;
