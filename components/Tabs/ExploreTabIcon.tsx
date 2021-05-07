import React from "react";
import TabIcon from "./TabIcon";
import theme from "../../theme";

const ExploreTabIcon:React.FC<{
    focused: Boolean
}> = ({
    focused
}) =>(
    <TabIcon 
        focused={focused}
        icon={theme.icons.explore}
        label="Search"
        sizes={{
            height: 30,
            width: 30
        }}
        marginTop={-5}
    />
);

export default ExploreTabIcon;

