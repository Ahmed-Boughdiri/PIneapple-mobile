import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

const Explore = () =>{
    return (
        <View style={styles.container}>
            <Text>This is The Explore Screen</Text>
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

export default Explore;
