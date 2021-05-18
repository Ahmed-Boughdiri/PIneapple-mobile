import { StyleSheet } from "react-native"; 
import { width } from "../../global/Dimensions";
import theme from "../../theme";

const styles = StyleSheet.create({
    searchInput: {
        color: "#fff",
        fontSize: 15,
        marginTop: 1,
        borderRadius: 20
    },
    searchInputContainer: {
        width,
        backgroundColor: theme.colors.dark,
        borderTopWidth: 0,
        paddingBottom: 15
    },
});

export default styles;
