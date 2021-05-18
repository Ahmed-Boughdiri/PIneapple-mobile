import React from "react";
import { 
    StatusBar,
    NativeSyntheticEvent,
    TextInputChangeEventData
} from "react-native";
import { SearchBar } from "react-native-elements";
import theme from "../../theme";
import styles from "../../layout";

const Header:React.FC<{
    searchValue: unknown,
    setSearchValue: 
        (e:NativeSyntheticEvent<TextInputChangeEventData>) => void
}> = ({
    searchValue,
    setSearchValue
}) =>(
    <>
        <StatusBar 
            backgroundColor={theme.colors.dark}
        />
        <SearchBar 
            platform={"default"}
            placeholder="Searching For a Song ..."
            value={searchValue as string}
            onChange={
                (e:NativeSyntheticEvent<TextInputChangeEventData>) =>
                    setSearchValue(e)
            }
            style={styles.search.header.searchInput}
            containerStyle={styles.search.header.searchInputContainer}
        />
    </>
);

export default Header;
