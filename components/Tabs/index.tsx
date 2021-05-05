import React from "react";
import Tab from "../../global/Tab";
import styles from "../../layout";
import {
    FavouriteTabIcon,
    HomeTabIcon,
    SearchTabIcon,
    SettingsTabIcon,
    MainTabIcon
} from "./TabIcons";
import {
    Home,
    Explore,
    Favourite,
    Search,
    Settings 
} from "../../screens";

const Tabs = () =>{
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: styles.tabs.tabsContainer.tabsContainer
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({ focused }) =>
                        <HomeTabIcon focused={focused} />
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={Search} 
                options={{
                    tabBarIcon: ({ focused }) =>
                        <SearchTabIcon focused={focused} />
                }}
            />
            <Tab.Screen 
                name="Explore" 
                component={Explore} 
                options={{
                    tabBarIcon: () =>
                        <MainTabIcon />
                }}
            />
            <Tab.Screen 
                name="Favourite" 
                component={Favourite} 
                options={{
                    tabBarIcon: ({ focused }) =>
                        <FavouriteTabIcon focused={focused} />
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={Settings} 
                options={{
                    tabBarIcon: ({ focused }) =>
                        <SettingsTabIcon focused={focused} />
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;
