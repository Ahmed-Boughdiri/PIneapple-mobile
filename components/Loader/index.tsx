import React from "react";
import Default from "./Default";

const Index:React.FC<{ 
    type: "default" 
}> = ({ type }) =>(
    <>
        {
            (type === "default") && (
                <Default />
            )
        }
    </>
);

export default Index;
