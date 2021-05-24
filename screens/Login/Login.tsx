import React,{ useState } from "react";
import { 
    View, 
    Text,
    TouchableOpacity
} from "react-native";
import theme from "../../theme";
import { 
    Input, 
    Button,
    Alert
} from "../../components";
import { width } from "../../global/Dimensions";
import { useNavigation } from "@react-navigation/native";
import { useLoginUser } from "../../hooks";
import styles from "../../layout";

const Login = () =>{
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { error, handleLogin } = useLoginUser(
        email,
        password
    );
    return (
        <View style={styles.login.main.container}>
            {
                error ? (
                    <Alert 
                        type="default"
                        title={error}
                        styles={{
                            width: width * 0.8,
                            marginBottom: 20
                        }}
                    />
                ) : null
            }
            <View style={styles.login.main.wrapper}>

                { /* Email Input */ }
                <Input 
                    type="default"
                    placeholder="Enter Email ..."
                    icon={theme.icons.email}
                    value={email}
                    handleChnage={(value: String) =>setEmail(value as string)}
                />
                { /****************/ }

                { /* Password Input */ }
                <Input 
                    type="default"
                    placeholder="Enter Password ..."
                    icon={theme.icons.password}
                    iconSize={20}
                    spacing={17}
                    value={password}
                    handleChnage={(value: String) =>setPassword(value as string)}
                    secureText={true}
                />
                { /******************/ }

                <Button 
                    type="default"
                    title="Log in"
                    onPress={handleLogin}
                />
                <View style={styles.login.main.optionsContainer}>
                    <TouchableOpacity
                        onPressIn={() =>navigation.navigate("register")}
                    >
                        <Text style={styles.login.main.iDontHaveAnAccount}>
                            I don't Have An Account
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.login.main.forgetPassword}>
                            Forget Password?
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
}

export default Login;
