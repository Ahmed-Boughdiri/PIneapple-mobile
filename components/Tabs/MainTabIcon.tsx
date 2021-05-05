import React from "react";
import { 
    View, 
    Image 
} from "react-native";
import styles from "../../layout";
import theme from "../../theme";

const MainTabIcon = () =>(
    <View style={styles.tabs.mainTabIcon.mainTabIconContainer}>
        <Image
            source={theme.icons.explore}
            style={{
                height: 45,
                width: 45,
                tintColor: theme.colors.white
            }}
        />
    </View>
);

export default MainTabIcon;

