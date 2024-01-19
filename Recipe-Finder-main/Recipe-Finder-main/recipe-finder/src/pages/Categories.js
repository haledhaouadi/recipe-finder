import React from "react";
import CategoryCard from "../components/CategoryCard";


export default function Categories (){
    
    const categories=[
        {
            title:"Tasty Feasts",
            image:"/gallery/img_4.jpg",
            description:"Explore flavorful main dishes that will elevate your meals with culinary excellence",
            type:{
                mealtype : "main dish",

            },
        },
        {
            title:"Quick Bites",
            image:"/gallery/img_5.jpg",
            description:"Grab quick and satisfying sandwiches packed with bold flavors",
            type:{
                mealtype : "sandwich burger",


            },
        },
        {
            title:"Rise & Chine Eats",
            image:"/gallery/img_11.jpg",
            description:"Start your day with delightful breakfast recipes to fuel your mornings",
            type:{
                mealtype : "breakfast",


            },
        },
        {
            title:"Craveable Munchies",
            image:"/gallery/img_14.jpg",
            description:"Satisfy your cravings with irresistible snack options for any occasion",
            type:{
                mealtype : "snack",


            },
        },
        {
            title:"Sweet Treats",
            image:"/gallery/img_13.jpg",
            description:"Indulge in irresistible desserts that will transport your taste buds to a realm of pure bliss ",
            type:{
                mealtype : "dessert",


            },
        },
        {
            title:"Cool Quenchers",
            image:"/gallery/img_12.jpg",
            description:"Stay refreshed with revitalizing beverages that will tantalize your senses",
            type:{
                mealtype : "drinks",


            },
        }
        
    ].sort(()=> Math.random() - 0.5);



    return(
        <div>
            <h1 className="big-title">Pick Your Favourite Category !</h1>
            <div className="categories-container">
                {categories.map((category,index) => (
                    <CategoryCard key={index} category={category} />
                ))}
                </div>

            
        </div>
    )
}