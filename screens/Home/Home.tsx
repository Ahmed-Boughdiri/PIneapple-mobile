import React from "react";
import { 
    View, 
    FlatList,
} from "react-native";
import Post from "./Post";
import { data } from "../../global/Home";
import Header from "./Header";
import styles from "../../layout";

const Home = () =>{
    return (
        <View style={styles.home.main.container}>
            <Header />
            <FlatList 
                data={data}
                style={styles.home.main.feed}
                keyExtractor={item =>item.index + ""}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>(
                    <Post 
                        authorThumbnail={item.authorThumbnail} 
                        authorName={item.authorName}
                        releaseDate={item.releaseDate}
                        thumbnail={item.thumbnail}
                    />
                )}
            />
        </View>
    )
}

export default Home;
