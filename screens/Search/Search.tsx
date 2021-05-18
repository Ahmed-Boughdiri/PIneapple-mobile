import React,{ useState } from "react";
import { View } from "react-native";
import Header from "./Header";
import Feed from "./Feed";
import styles from "../../layout";

const Search = () =>{
    const [searchValue, setSearchValue] = useState<unknown>("");
    return (
        <View style={styles.search.main.container}>
            <Header 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <Feed />
        </View>
    )
}

export default Search;
