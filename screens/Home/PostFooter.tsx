import React from "react";
import { View } from "react-native";
import PostIcon from "./PostIcon";
import styles from "../../layout";
import theme from "../../theme";

const PostFooter = () =>(
    <View
        style={styles.home.postFooter.postIconsContainer}
    >
        <PostIcon 
            icon={theme.icons.heart}
            label="Like"
        />
        
        <PostIcon 
            icon={theme.icons.like}
            label="Dislike"
        />
        
        <PostIcon 
            icon={theme.icons.comment}
            label="Comment"
        />
    </View>
);

export default PostFooter;
