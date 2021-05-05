import React from "react";
import TabIcon from "./TabIcon";
import theme from "../../theme";

const SearchTabIcon:React.FC<{
    focused: Boolean
}> = ({
    focused
}) =>(
    <TabIcon 
        focused={focused}
        icon={theme.icons.search}
        label="Search"
        sizes={{
            height: 30,
            width: 30
        }}
        marginTop={-5}
    />
)

export default SearchTabIcon;

