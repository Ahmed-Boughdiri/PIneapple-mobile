import React from "react";
import { 
    Avatar as ReactNativeElementAvatar,
} from "react-native-elements";

const Avatar:React.FC<{
    authorThumbnail: any
}> = ({
    authorThumbnail
}) =>(
    <ReactNativeElementAvatar 
        rounded
        source={{
            uri: authorThumbnail
        }}
        containerStyle={{
            height: 50,
            width: 50,
            borderRadius: 25,
        }}
        avatarStyle={{
            height: 50,
            width: 50,
            borderRadius: 25
        }}
    />
);

export default Avatar;

