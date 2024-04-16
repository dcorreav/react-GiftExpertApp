import { useState } from "react"

import { PropTypes } from 'prop-types';


export const AddCategory = ({ onNewCategory }) => {

    // antes estaba setCategories

    const [InputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {        

        event.preventDefault();

        if (InputValue.trim().length <= 1) return;

        //setCategories(categories => [InputValue, ...categories])

        setInputValue('');
        onNewCategory(InputValue.trim());
        
    }

    return (
        <form onSubmit={(event) => onSubmit(event)} aria-label="form" >
            <input
                type="text"
                placeholder="Buscar Gifts"
                value={InputValue}
                onChange={onInputChange}
            ></input>
        </form>


    )


}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}