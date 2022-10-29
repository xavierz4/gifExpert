import  { useState } from 'react'
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {

    //Crear useState para el estado inicial de categorias
    const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball Z']);

    // Añde una nueva categoria
    const onAddCategory = (newCategory) => {
      
       setCategories([newCategory, ...categories]);
       //setCategories(cat => [...cat,'valorant']);
    }

    
  return (
    <>
   
        <h1>Gif Expert App</h1>

        <AddCategory 
          onNewCategory = {onAddCategory}
        />

       
   <ol>
        {categories.map( category => {
                return <li key={category}> {category} </li>
        } )}        

    </ol>
    { /*List Item*/ }
    </>
  )
}

export default GifExpertApp