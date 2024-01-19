import React from "react";
import Homeimg from "./Homeimg";

export default function RecipeTile({recipe}){
    return(
        <div className="recipe-card">
            <div class="loading-circle"></div>
            <Homeimg className="recipe-img" imgSrc={recipe["recipe"]["image"]} pt="60%" />
            <p className="recipe-title"> {recipe["recipe"]["label"]}</p>
            <a className="recipe-btn" onClick={()=>{window.open(recipe["recipe"]["url"]);}} href="#!">SEE MORE</a>
        </div>
        
    )
}