import React from "react";
import { View } from "react-native";
import Icon from "../Icons";
import styles from "../../layout";
import theme from "../../theme";

const HomeCardFooter = () =>(
    <View
        style={styles.home.postFooter.postIconsContainer}
    >
        <Icon 
            type="card-icon"
            icon={theme.icons.heart}
            label="Like"
        />
        
        <Icon 
            type="card-icon"
            icon={theme.icons.like}
            label="Dislike"
        />
        
        <Icon 
            type="card-icon"
            icon={theme.icons.comment}
            label="Comment"
        />
    </View>
);

export default HomeCardFooter;
