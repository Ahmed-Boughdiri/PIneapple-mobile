import React from "react";
import TabIcon from "./TabIcon";
import theme from "../../theme";

const HomeTabIcon:React.FC<{
    focused: Boolean
}> = ({
    focused
}) =>(
    <TabIcon 
        focused={focused} 
        icon={theme.icons.home} 
        label="Home"
        sizes={{
            height: 25,
            width: 25
        }}
    />
);

export default HomeTabIcon;

