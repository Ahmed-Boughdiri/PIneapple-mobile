import React from "react";
import TabIcon from "./TabIcon";
import theme from "../../theme";

const SettingsTabIcon:React.FC<{
    focused: Boolean
}> = ({
    focused
}) =>(
    <TabIcon 
        focused={focused}
        icon={theme.icons.settings}
        label="Settings"
        sizes={{
            height: 26,
            width: 26
        }}
        marginTop={-1}
    />
)

export default SettingsTabIcon;

