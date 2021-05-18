import React from "react";
import { Animated } from "react-native";
import { Container } from "../../components";
import styles from "../../layout";
import FeedContent from "./FeedContent";

const Feed = () =>{
    const scrolledY = new Animated.Value(0);
    const titleSize = scrolledY.interpolate({
        inputRange: [0, 35],
        outputRange: [22, 19]
    });
    const titleOpacity = scrolledY.interpolate({
        inputRange: [0, 35],
        outputRange: [1, 0]
    });
    const deviderHeight = scrolledY.interpolate({
        inputRange: [0, 35],
        outputRange: [10, 3]
    });
    return (
        <>
            <Animated.View 
                style={{
                    height: deviderHeight
                }}
            />
            <Container>
                <Animated.Text 
                    style={{
                        ...styles.search.feed.historyTitle,
                        fontSize: titleSize,
                        opacity: titleOpacity
                    }}
                >
                    History:
                </Animated.Text>
                <FeedContent scrolledY={scrolledY} />
            </Container>
        </>
    );
}

export default Feed
