import React, { useEffect, useState } from 'react'
import FoodItems from './FoodItems';

const Food=()=> {
    const[search, setSearch] = useState("");
    const[Myfood, setFood] = useState();
    const searchFood=(event)=>{
        if (event.key==="Enter"){
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                setFood(data.meals)
            })
        }
    }
    return (
        <div className='main'>
            <div className='heading'>
                <h1>Search Your Food Recipe</h1>
                <h4>A recipe has no soul. You, as the cook, must bring soul to the recipe</h4>
            </div>
            <div className='searchBox'>
                <input type='search' className='search-bar' placeholder='Enter food name' onChange={(e)=>setSearch(e.target.value)} value={search} onKeyDown={searchFood}></input>
            </div>
            <div className='container'>
                {
                    (Myfood==null)? <p className='not-found'>Not Found</p> : Myfood.map((res)=>{
                        return(
                            <FoodItems data={res} />

                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Food;
