import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const Settings = () =>{
    return (
        <View style={styles.container}>
            <Text>This is The Settings Screen</Text>
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

export default Settings;
