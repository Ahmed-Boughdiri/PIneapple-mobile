import React from "react";
import { View } from "react-native";
import styles from "../../layout";
import Header from "./HomeCardHeader";
import Content from "./HomeCardContent";

const HomeCard:React.FC<{
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
        <Header 
            authorName={authorName}
            authorThumbnail={authorThumbnail}
            releaseDate={releaseDate}
        />
        <Content 
            thumbnail={thumbnail}
        />
    </View>
);


export default HomeCard;
