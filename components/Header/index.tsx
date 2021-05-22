import React from "react";
import Default from "./Default";

const Index:React.FC<{
    type: "default",
    title: String
}> = ({
    type,
    title
}) =>(
    <>
        {
            (type === "default") && (
                <Default title={title} />
            )
        }
    </>
);

export default Index;
