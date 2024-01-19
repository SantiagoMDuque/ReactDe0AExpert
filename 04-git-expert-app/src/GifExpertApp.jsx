import { useState } from "react"
import { AddCategory, GifGrid } from './components';

export const GifExperApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    const onAddCategory = (newCategory) => {
        if( categories.includes(newCategory) )return;
        if(newCategory)
        setCategories((categorie) => [
            newCategory,
            ...categorie,
        ])
    }

    return(
         <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory={ onAddCategory }
            />
            <ol>
                {
                    categories.map((item)=>{
                        return (
                            <GifGrid key={item} category={item}/>
                        )
                    })
                }
            </ol>
         </>
    )
}