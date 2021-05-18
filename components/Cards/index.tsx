import React from "react";
import HistoryCard from "./HistoryCard";
import HomeCard from "./HomeCard";

const Card:React.FC<{
    type: "history" | "home",
    title?: String,
    thumbnail?: any,
    description?: String,
    authorName?: String,
    authorThumbnail?: any,
    releaseDate?: String,
}> = ({
    type,
    title="",
    thumbnail="",
    description="",
    authorName="",
    authorThumbnail,
    releaseDate=""
}) =>(
    <>
        {
            (type === "history") && (
                <HistoryCard 
                    title={title}
                    thumbnail={thumbnail}
                    description={description}
                />
            )
        }
        {
            (type === "home") && (
                <HomeCard 
                    thumbnail={thumbnail}
                    authorName={authorName}
                    authorThumbnail={authorThumbnail}
                    releaseDate={releaseDate}
                />
            )
        }
    </>
)

export default Card;
