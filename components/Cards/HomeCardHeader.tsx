import React from "react";
import { 
    View, 
    Text,
    Image
} from "react-native";
import Avatar from "../Avatar";
import styles from "../../layout";
import theme from "../../theme";

const HomeCardHeader:React.FC<{
    authorThumbnail: any,
    authorName: String,
    releaseDate: String
}> = ({
    authorThumbnail,
    authorName,
    releaseDate
}) =>(
    <View style={styles.home.post.feedItemHeader}>
        <Avatar 
            type="card-avatar"
            thumbnail={authorThumbnail}
        />

        <View
            style={styles.home.postHeader.headerDetailsContainer}
        >
            <View>
                <Text style={styles.home.post.authroName}>
                    {authorName}
                </Text>
                <Text style={styles.home.post.releaseDate}>
                    {releaseDate}
                </Text>
            </View>
            <Image 
                source={theme.icons.more}
                height={24}
                width={24}
                style={{
                    height: 24,
                    width: 24,
                    marginRight: 4
                }}
            />
        </View>
    </View>
)

export default HomeCardHeader;

