import React from "react";
import {
    View,
    Image
} from "react-native";
import styles from "../../layout";
import Footer from "./HomeCardFooter";

const HomeCardContent:React.FC<{
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
        <Footer />
    </View>
);

export default HomeCardContent;
