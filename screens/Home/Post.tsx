import React from "react";
import { View } from "react-native";
import styles from "../../layout";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";

const Post:React.FC<{
    authorThumbnail: any,
    authorName: String,
    releaseDate: String,
    thumbnail: any
}> = ({
    authorThumbnail,
    authorName,
    releaseDate,
    thumbnail
}) =>(
    <View style={styles.home.post.feedItem}>
        <PostHeader 
            authorName={authorName}
            authorThumbnail={authorThumbnail}
            releaseDate={releaseDate}
        />
        <PostContent 
            thumbnail={thumbnail}
        />
    </View>
);


export default Post;
