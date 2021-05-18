import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    
} from "react-native";
import { data } from "../../global/Home";
import { height, width } from "../../global/Dimensions";
import { Audio } from "expo-av";

const Post:React.FC<{
    thumbnail: any
}> = ({
    thumbnail
}) =>{
    // const loadAudio = async() =>{
    //     const { sound } = await Audio.Sound.createAsync(
    //         require("../../assets/mafiosa.mp3")
    //     );
    //     sound.playAsync();
    // }
    // React.useEffect(() =>{
    //     loadAudio();
    // },[])
    return (
        <View style={styles.postContainer}>
            <Image 
                source={{
                    uri: thumbnail
                }}
                style={styles.postVideo}
                resizeMode="cover"
            />
        </View>
    )
}

const Explore = () =>{
    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                keyExtractor={item => item.index + ""}
                style={styles.feed}
                showsVerticalScrollIndicator={false}
                pagingEnabled
                renderItem={({ item }) =>(
                    <Post 
                        thumbnail={item.thumbnail}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    feed: {
        // marginTop: -33
    },
    postContainer: {
        height: height,
        width,
        alignItems: "center",
        justifyContent: "center"
    },
    postVideo: {
        height: "100%",
        width
    }
})

export default Explore;
