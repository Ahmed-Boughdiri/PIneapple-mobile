import React from "react";
import Default from "./Default";

const Index:React.FC<{
    type: "default",
    title: String,
    onPress: () => void
}> = ({
    type,
    title,
    onPress
}) =>(
    <>
        {
            (type === "default") && (
                <Default 
                    title={title}
                    onPress={onPress}
                />
            )
        }
    </>
);

export default Index;
