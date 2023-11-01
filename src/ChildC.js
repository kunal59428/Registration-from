import React from "react";
import { data } from "./App";
function ChildC() {
    return(
        <data.Consumer>
            {
                (data)=>{
                    return(
                        <h1>My name is {data}</h1>
                    )
                }
            }
        </data.Consumer>
    )

}
export default ChildC