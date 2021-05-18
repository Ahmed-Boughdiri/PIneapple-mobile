import React from "react";
import { 
    View, 
    Text,
    StatusBar
} from "react-native";
import styles from "../../layout";
import theme from "../../theme";

const Header = () =>(
    <View style={styles.home.header.headerContainer}>
        <StatusBar backgroundColor={theme.colors.dark} />
        <Text style={styles.home.header.headerTitle}>Home</Text>
    </View>
);

export default Header;
