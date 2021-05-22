import { StyleSheet } from "react-native";
import { height, width } from "../../global/Dimensions";
import theme from "../../theme";

const styles = StyleSheet.create({
    container: {
        height,
        width,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.bgColor,
        position: "absolute",
        top: 0,
        left: 0,
    },
    feed: {
        marginHorizontal: 12,
        paddingTop: 10,
    },
});

export default styles;

