import React from "react";
import CardAvatar from "./CardAvatar";

const Index:React.FC<{
    type: "card-avatar",
    thumbnail: any
}> = ({
    type,
    thumbnail
}) =>(
    <>
        {
            (type === "card-avatar") && (
                <CardAvatar 
                    authorThumbnail={thumbnail}
                />
            )
        }
    </>
);

export default Index;
