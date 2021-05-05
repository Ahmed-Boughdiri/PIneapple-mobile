import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

const Favourite = () =>{
    return (
        <View style={styles.container}>
            <Text>This is the Favourite Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    }
})

export default Favourite;
