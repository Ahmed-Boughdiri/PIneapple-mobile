import { StyleSheet } from "react-native";
import { height, width } from "../../global/Dimensions";

const styles = StyleSheet.create({
    container: {
        height,
        width,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d8d5db",
        position: "absolute",
        top: 0,
        left: 0,
    },
    feed: {
        marginHorizontal: 12,
    },
});

export default styles;

