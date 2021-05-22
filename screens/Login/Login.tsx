import React from "react";
import { 
    View, 
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import theme from "../../theme";
import { Input, Button } from "../../components";
import { width } from "../../global/Dimensions";

const Login:React.FC<Navigator> = ({  }) =>{
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Input 
                    type="default"
                    placeholder="Enter Email ..."
                    icon={theme.icons.email}
                />
                <Input 
                    type="default"
                    placeholder="Enter Password ..."
                    icon={theme.icons.password}
                    iconSize={20}
                    spacing={17}
                />
                <Button 
                    type="default"
                    title="Log in"
                />
                <TouchableOpacity>
                    <Text style={styles.forgetPassword}>
                        Forget Password?
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.dark,
        alignItems: "center",
        justifyContent: "center",
    },
    wrapper: {
        width: width * 0.8
    },
    forgetPassword: {
        marginTop: 8,
        color: theme.colors.white,
        textAlign: "center"
    }
});

export default Login;
