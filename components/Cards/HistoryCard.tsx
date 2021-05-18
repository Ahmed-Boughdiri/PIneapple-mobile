import React from "react";
import {
    View,
    Image,
    Text
} from "react-native";
import { 
    Card as ReactNativeCard,
    Text as Title
} from "react-native-elements";
import theme from "../../theme";
import styles from "../../layout";

const Card:React.FC<{
    title: String,
    description: String,
    thumbnail: any
}> = ({
    title,
    description,
    thumbnail
}) =>(
    <ReactNativeCard containerStyle={styles.cards.historyCard.cardContainer}>
        <ReactNativeCard.Image 
            source={{ uri: thumbnail }}
        />
            <View style={styles.cards.historyCard.cardContentWrapper}>
                <View style={styles.cards.historyCard.cardHeaderContainer}>
                    <Title h4>{title}</Title>
                    <Image 
                        source={theme.icons.more} 
                        style={{
                            height: 30,
                            width: 30
                        }}
                    />
                </View>
                <Text style={styles.cards.historyCard.cardDescription}>
                    {description}
                </Text>
            </View>
    </ReactNativeCard>
);

export default Card;
