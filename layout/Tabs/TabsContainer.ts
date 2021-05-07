import { StyleSheet } from "react-native";
import { width } from "../../global/Dimensions";
import theme from "../../theme";

const styles = StyleSheet.create({
    tabsContainer: {
        marginBottom: 5,
        height: 75,
        width: (width * 0.95),
        alignSelf: "center",
        borderRadius: 15,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 10,
        backgroundColor: theme.colors.dark,
        position: "absolute",
        zIndex: 999,
        left: ((width * 0.05) / 2),
    }
})

export default styles;
