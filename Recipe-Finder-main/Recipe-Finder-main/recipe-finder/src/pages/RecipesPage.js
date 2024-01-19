import React from "react";
import { useState ,useEffect} from "react";
import RecipeTile from "../components/RecipeTile";
import glass from "../assets/champagne-glass.png"



export default function Recipespage({categoryRecipes}){
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
        setShowModal(false);
    };
    useEffect(() => {setShowModal(true);}, [categoryRecipes]);

    if (!showModal) {
        return null; 
    }
    return(
        <div>
            
                <div className="modal-overlay">
                    <div className="recipe-window">
                        <h1 className="page-title">To more and more recipes <img src={glass} alt="cheers"></img></h1>
                        <button className="close-button" onClick={closeModal}>X</button>
                        <div className="recipes-container">
                            {categoryRecipes.map((recipe) => <RecipeTile recipe={recipe}  />)}      
                        </div>  
                    </div>
                </div>        

        </div>
    )
}