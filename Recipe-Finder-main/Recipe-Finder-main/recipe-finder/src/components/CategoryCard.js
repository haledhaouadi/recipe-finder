import Homeimg from "./Homeimg";
import Axios from "axios";
import { useState } from "react";
import RecipesPage from "../pages/RecipesPage";


export default function CategoryCard({category}){
    const YOUR_APP_ID="ce15dce8";
    const YOUR_APP_KEY="79eeb44084a660b345e65a18a954ad13";
    const [categoryRecipes,setCategoryRecipes]=useState([]);
    const [showRecipes, setShowRecipes] = useState(false);



    async function getRecipes(cat){
        const url=`https://api.edamam.com/search?q=${cat}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
        try{
            const response=await Axios.get(url);
            setCategoryRecipes(response.data.hits);
            console.log(response.data);
        } catch(error){
            console.error("error fetching recipes",error);
        }
        
    }

    const handleCategoryClick = (nice) => {
        getRecipes(nice);
        setShowRecipes(true);
    };
    return(
        <div>
        
            <div className="category-card">
                <Homeimg imgSrc={category.image} pt="65%"/>
                <div className="category-card-info">
                    <p className="category-title">{category.title}</p>
                    <p className="category-desc"> {category.description}</p>
                    <a className="check-btn" href="#!" onClick={()=> handleCategoryClick(category.type.mealtype)}>CHECK RECIPES</a>
                </div>
            </div>
            {showRecipes && (
                <div className="recipes-found">
                    <RecipesPage categoryRecipes={categoryRecipes} />
                </div>
            )}
        </div>
    )
}