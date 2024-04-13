import { useState } from "react"
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";

import { AddCategory, GifGrid } from './components';


export const GiftExpertApp = () => {


    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {

        // setCategories( [ ...categories, 'Valorant'] )  


        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>

            {/* titulo*/}
            <h1>GiftExpertApp!!</h1>

            { /* INPUT*/}
            <AddCategory
                // setCategories={ setCategories  } 
                onNewCategory={(event) => onAddCategory(event)}
            ></AddCategory>


            { /* LISTADO DE GIFT*/}
            {/* <button onClick={onAddCategory} > Agregar</button> */}


            {/* {categories.map(category => { return <li key={category}> {category} </li> })} */}

            {
                categories.map((category) => (
                    <GifGrid key={category}
                        category={category}></GifGrid>
                ))
            }






        </>
    )



}