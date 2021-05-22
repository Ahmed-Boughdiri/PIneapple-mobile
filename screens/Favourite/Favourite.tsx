import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList
} from "react-native";
import theme from "../../theme";
import { Header, Container } from "../../components";
import { Text as Title } from "react-native-elements";
import { data } from "../../global/Favourite";

const Card:React.FC<{
    title: String,
    views: String,
    thumbnail: any
}> = ({
    title,
    views,
    thumbnail
}) =>(
    <View style={styles.cardContainer}>
        <View style={styles.cardInfo}>
            <Image 
                source={{ uri: thumbnail }}
                style={{
                    height: 55,
                    width: 55
                }}
            />
            <View style={styles.cardInfoContent}>
                <Title style={styles.cardTitle}>
                    {title}
                </Title>
                <Text style={styles.cardName}>
                    { views }
                </Text>
            </View>
        </View>
        <View style={styles.optionsContainer}>
            <Image 
                source={theme.icons.heart}
                style={{
                    height: 26,
                    width: 26,
                    marginRight: 20
                }}
            />
            <Image 
                source={theme.icons.more_vertical}
                style={{
                    height: 30,
                    width: 30
                }}
            />
        </View>
    </View>
)

const Favourite = () =>{
    return (
        <View style={styles.container}>
            <Header 
                type="default"
                title="Favourite"
            />
            <Container>
                <FlatList 
                    data={data}
                    keyExtractor={(item) =>item.index + ""}
                    renderItem={({ item }) =>(
                        <Card 
                            title={item.title}
                            thumbnail={item.authorThumbnail}
                            views={item.views}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    style={styles.contentWrapper}
                />
            </Container>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.bgColor
    },
    contentWrapper: {
        paddingTop: 20,
    },
    cardContainer: {
        height: 55,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 8
    },
    cardInfo: {
        height: "100%",
        alignItems: "center",
        flexDirection: "row",
    },
    cardInfoContent: {
        marginLeft: 10
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold"
    },
    cardName: {
        color: theme.colors.unfocused
    },
    optionsContainer: {
        alignItems: "center",
        flexDirection: "row"
    }
})

export default Favourite;
