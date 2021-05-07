import React from "react";
import { View, Text } from "react-native";
import styles from "../../layout";

const Header = () =>(
    <View style={styles.home.header.headerContainer}>
        <Text style={styles.home.header.headerTitle}>Home</Text>
    </View>
);

export default Header;
