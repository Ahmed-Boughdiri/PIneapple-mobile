import React from "react";
import { 
    View, 
    StyleSheet,
    Image,
    Text,
    Animated
} from "react-native";
import theme from "../../theme";
import { data } from "../../global/Home";
import { height, width } from "../../global/Dimensions";
import Swiper from "react-native-deck-swiper";
import { Text as Title } from "react-native-elements";

const Card:React.FC<{
    thumbnail: any
}> = ({
    thumbnail
}) =>(
    <View style={styles.cardContainer}>
        <Image 
            source={{ uri: thumbnail }}
            style={{
                width: "195%",
                height: "100%",
                left: "-50%"
            }}
            resizeMode="stretch"
        />
    </View>
)

const Explore = () =>{
    const nopeOpacity = new Animated.Value(0);
    const likedOpacity = new Animated.Value(0);
    const superLikedOpacity = new Animated.Value(0);
    const nopeComponentOpacity = nopeOpacity.interpolate({
        inputRange: [0, 220],
        outputRange: [0, 1],
    });
    const likedComponentOpacity = likedOpacity.interpolate({
        inputRange: [0, 180],
        outputRange: [0, 1]
    });
    const superLikedComponentOpacity = superLikedOpacity.interpolate({
        inputRange: [0, 60],
        outputRange: [0, 1]
    })
    const handleNope = () =>{
        Animated.timing(
            nopeOpacity, 
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            },
        ).start()
    }
    const handleLiked = () =>{
        Animated.timing(
            likedOpacity, 
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }
        ).start()
    }
    const handleSuperLiked = () =>{
        Animated.timing(
            superLikedOpacity,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }
        ).start();
        // Animated.timing(
        //     superLikedOpacity,
        //     {
        //         toValue: 0,
        //         duration: 300,
        //         useNativeDriver: true,
        //         delay: 600
        //     }
        // ).start();
    }
    const handleSwiping = (
        rangeX: Number, 
        rangeY: Number
    ) =>{ 
        if(rangeX > 0)
            nopeOpacity.setValue(rangeX as number);    
        else if (rangeX < 0)
            likedOpacity.setValue(-(rangeX as number));     
    }
    return (
        <View style={styles.container}>
            <Swiper
                cards={data}
                renderCard={(item) => (
                    <Card thumbnail={item.thumbnail} />
                )}
                onSwipedAll={() => {console.log('onSwipedAll')}}
                cardIndex={0}
                backgroundColor={"transparent"}
                stackSize= {3} 
                onSwipedRight={handleNope}
                onSwipedLeft={handleLiked}
                onSwipedTop={handleSuperLiked}
                onSwipedBottom={handleSuperLiked}
                onSwiping={handleSwiping}
            >
                
            </Swiper>
            <View style={styles.optionsContainer}>
                <View style={styles.optionContainer}>
                    <Image 
                        source={theme.icons.didnt_like}
                        style={{
                            height: 40,
                            width: 40
                        }}
                    />
                </View>
                <View style={styles.optionContainer}>
                    <Image 
                        source={theme.icons.super_liked}
                        style={{
                            height: 45,
                            width: 45
                        }}
                    />
                </View>
                <View style={styles.optionContainer}>
                    <Image 
                        source={theme.icons.liked}
                        style={{
                            height: 40,
                            width: 40
                        }}
                    />
                </View>
            </View>
            <Animated.View 
                style={{
                    ...styles.nope,
                    opacity: nopeComponentOpacity
                }}
            >
                <Title 
                    h3
                    style={styles.nopeText}
                >
                    Nope
                </Title>
            </Animated.View>
            <Animated.View 
                style={{
                    ...styles.liked,
                    opacity: likedComponentOpacity
                }}
            >
                <Title 
                    h3
                    style={styles.likedText}
                >
                    Like
                </Title>
            </Animated.View>
            <Animated.View 
                style={{
                    ...styles.superLiked,
                    opacity: superLikedOpacity
                }}
            >
                <Title 
                    h3
                    style={styles.superLikedText}
                >
                    Super Like
                </Title>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.bgColor,
        paddingTop: 0
    },
    cardContainer: {
        width: "100%",
        height: height * 0.68,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: theme.colors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        overflow: "hidden"
    },
    optionsContainer: {
        width: 270,
        height: 80,
        left: (width - 270) / 2,
        top: height * 0.63,
        zIndex: 999,
        position: "absolute",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    optionContainer: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        alignItems: "center",
        justifyContent: "center"
    },
    nope: {
        height: 70,
        width: 170,
        borderWidth: 7,
        borderColor: "#ff0800",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: height * 0.14,
        left: width * 0.45,
        transform: [
            { rotate: "210deg" },
            // { scale: 0.7 }
        ],
        opacity: 0,
    },
    nopeText: {
        color: "#ff0800",
        transform: [
            { rotate: "180deg" },
        ]
    },
    liked: {
        height: 70,
        width: 170,
        borderWidth: 7,
        borderColor: "#00A86B",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: height * 0.15,
        left: width * 0.065,
        transform: [{ rotate: "140deg" }],
        opacity: 0,
    },
    likedText: {
        color: "#00A86B",
        transform: [{ rotate: "180deg" }]
    },
    superLiked: {
        height: 70,
        width: 170,
        borderWidth: 7,
        borderColor: "#3FE0D0",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: height * 0.1,
        left: (width - 170) / 2,
        opacity: 0,
    },
    superLikedText: {
        color: "#3FE0D0",
    }
})

export default Explore;
