import React from "react";
import { 
    View, 
    StyleSheet,
} from "react-native";
import theme from "../../theme";
import { height, width } from "../../global/Dimensions";
import { BarIndicator } from "react-native-indicators";

const Default = () =>(
    <View style={styles.container}>
        <BarIndicator 
            color={theme.colors.primary}
            size={60}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        height,
        width,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.dark,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 999
    }
});

export default Default;
