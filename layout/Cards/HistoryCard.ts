import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        padding: 0,
        margin: 0,
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 8
    },
    cardContentWrapper: {
        width: "100%",
        paddingHorizontal: 15,
        marginTop: 10,
        marginBottom: 15
    },
    cardDescription: {
        fontSize: 15,
        marginTop: 2,
        color: theme.colors.unfocused
    },
    cardHeaderContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
});

export default styles;
