import { useState } from "react";
import Homeimg from "./Homeimg";
import Axios from "axios";
import RecipeTile from "./RecipeTile";

export default function Homepage(){
    const YOUR_APP_ID="ce15dce8";
    const YOUR_APP_KEY="79eeb44084a660b345e65a18a954ad13";
    const [query,setquery]=useState("");
    const [recipes,setrecipes]=useState([]);
    var url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&calories=591-722&health=alcohol-free`
    const images = [
        "/gallery/img_1.jpg",
        "/gallery/img_2.jpg",
        "/gallery/img_3.jpg",
        "/gallery/img_4.jpg",
        "/gallery/img_5.jpg",
        "/gallery/img_6.jpg",
        "/gallery/img_7.jpg",
        "/gallery/img_8.jpg",
        "/gallery/img_9.jpg"
    ]
    
    async function getRecipes(){
        var result=await Axios.get(url);
        setrecipes(result.data.hits);
        console.log(result.data);
    }

    const onSubmit=(e) => {
        e.preventDefault();
        getRecipes();
    }
        
    return(
        <div className="section welcome">
            <div className="col typo">
                <h1 className="title"><span id="up">M</span>y <span id="up">R</span>ecipe <span id="up">F</span>inder</h1>
                <p className="info">Your everyday tool to find the best recipes out there . Search your ingredients and please your soul and tummy ! </p>
                <form className="search-bar" onSubmit={onSubmit}>
                    <input type="text" placeholder="Search..." value={query} onChange={(e)=>setquery(e.target.value)} />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="col gallery">
                {images.map((src , index ) => (<Homeimg key={index} imgSrc={src} pt={"90%"} />) )}
                
            </div>
            <div className="recipes-found">
                {recipes.map((recipe)=>{ return <RecipeTile recipe={recipe }/>;})}
            </div>
            
            
        </div>
    )
}