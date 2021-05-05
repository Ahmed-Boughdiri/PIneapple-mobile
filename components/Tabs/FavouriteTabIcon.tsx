import React from "react";
import TabIcon from "./TabIcon";
import theme from "../../theme";

const FavouriteTabIcon:React.FC<{
    focused: Boolean
}> = ({
    focused
}) =>(
    <TabIcon 
        focused={focused}
        icon={theme.icons.favourite}
        label="Favourite"
        sizes={{
            height: 27,
            width: 27
        }}
        marginTop={-2}
    />
)

export default FavouriteTabIcon;
