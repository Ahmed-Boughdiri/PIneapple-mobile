import React from "react";
import {
    View,
    Image
} from "react-native";
import styles from "../../layout";
import PostFooter from "./PostFooter";

const PostContent:React.FC<{
    thumbnail: any
}> = ({
    thumbnail
}) =>(
    <View
        style={styles.home.postContent.container}
    >
        <Image 
            source={{
                uri: thumbnail
            }}
            resizeMode="cover"
            style={styles.home.postContent.thumbnail}
        />
        <PostFooter />
    </View>
);

export default PostContent;
