import React,{ useState } from "react";
import { 
    View, 
    TouchableOpacity,
    Text,
} from "react-native";
import { 
    Input, 
    Button,
    Alert
} from "../../components";
import theme from "../../theme";
import { width } from "../../global/Dimensions";
import { useRegisterUser } from "../../hooks";
import styles from "../../layout";

const Register:React.FC = () =>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { handleRegisterUser, error } = useRegisterUser(
        username,
        email,
        password,
        confirmPassword
    );
    return (
        <View style={styles.register.main.container}>
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
            <View style={styles.register.main.wrapper}>
                { /* UserName Input */ }
                <Input 
                    type="default"
                    placeholder="Enter Username ..."
                    icon={theme.icons.user}
                    iconSize={23}
                    spacing={15}
                    value={username}
                    handleChnage={(e: String) =>setUsername(e as string)}
                />
                { /******************/ }

                { /* Email Input */ }
                <Input 
                    type="default"
                    placeholder="Enter Email ..."
                    icon={theme.icons.email}
                    value={email}
                    handleChnage={(e: String) =>setEmail(e as string)}
                />
                { /***************/ }

                { /* Password Input */ }
                <Input 
                    type="default"
                    placeholder="Enter Password ..."
                    icon={theme.icons.password}
                    iconSize={20}
                    spacing={17}
                    value={password}
                    handleChnage={(e: String) =>setPassword(e as string)}
                    secureText={true}
                />
                { /*******************/ }

                { /* Confirm Password */ }
                <Input 
                    type="default"
                    placeholder="Confirm Password ..."
                    icon={theme.icons.password}
                    iconSize={20}
                    spacing={17}
                    value={confirmPassword}
                    handleChnage={(e: String) =>setConfirmPassword(e as string)}
                    secureText={true}
                />
                { /*********************/ }

                <Button 
                    type="default"
                    title="Register"
                    onPress={handleRegisterUser}
                />
                <TouchableOpacity>
                    <Text style={styles.register.main.alreadyHaveAnAccount}>
                        I Aleady Have An Account
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Register;
