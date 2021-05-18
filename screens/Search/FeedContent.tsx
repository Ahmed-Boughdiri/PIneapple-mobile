import React from "react";
import { 
    FlatList, 
    Animated,
} from "react-native";
import { data } from "../../global/Home";
import { Card } from "../../components";

const FeedContent:React.FC<{
    scrolledY: Animated.Value
}> = ({
    scrolledY
}) =>(
    <FlatList 
        data={data}
        renderItem={
            ({ item }) => 
                <Card 
                    type="history"
                    title={item.title} 
                    description={item.description} 
                    thumbnail={item.thumbnail}
                />
        }
        keyExtractor={item =>item.index + ""}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([
            {
                nativeEvent: {
                    contentOffset: {
                        y: scrolledY
                    }
                }
            },
        ], { useNativeDriver: false })}
        scrollEventThrottle={16}
    />
);


export default FeedContent;
