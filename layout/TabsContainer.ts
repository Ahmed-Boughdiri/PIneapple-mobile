import { StyleSheet } from "react-native";
import { width } from "../global/Dimensions";
import theme from "../theme";

const styles = StyleSheet.create({
    tabsContainer: {
        marginBottom: 20,
        height: 75,
        width: (width * 0.95),
        alignSelf: "center",
        borderRadius: 15,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 1,
        borderWidth: 0,
        backgroundColor: theme.colors.dark,
        position: "relative",
        zIndex: 999
    }
})

export default styles;
