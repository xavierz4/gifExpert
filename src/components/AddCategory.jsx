import {useState} from 'react'

export const AddCategory = ({onNewCategory}) => {
    
const [ inputValue, setInputValue ] = useState ('')

const onInputChange =({target}) => {
    setInputValue(target.value)
   
   
}

const onSubmit = (Event) => {
    Event.preventDefault();
    if(inputValue.trim().length <=1) return;
    onNewCategory(inputValue.trim());
    //setCategories(categories => [inputValue, ...categories ])
    setInputValue('');
}

  return ( 

    <form onSubmit={(Event) => onSubmit (Event)}>

        <input
            type="text"
            placeholder="Buscar Gift"
            value={ inputValue }
            onChange = { (Event) => onInputChange (Event) }
            
        />

    </form>
  

  )
}
