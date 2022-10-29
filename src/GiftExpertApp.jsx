import { useState }from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState([' ']);
 
  const onAddCategory = (newCategory) => {
    
    if(categories.includes( newCategory )) return;

    setCategories( [ newCategory, ...categories] )
  }

  return (
    <>

     <div>GiftExpertApp</div>

     <AddCategory
      onNewCategory={(Event)  => onAddCategory(Event)}
     
     />
      
          { 
          categories.map(( category ) => (
            <GifGrid 
              key={ category }
              category={category} />
            ))
          }
    
    </>
    
  )
}
