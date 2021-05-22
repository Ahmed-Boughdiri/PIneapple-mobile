import React from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    Button
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Register = () =>{
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>
                This is The Register Screen
            </Text>
            <Button 
                title="GO To Main"
                onPress={() => navigation.navigate("main")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Register;
