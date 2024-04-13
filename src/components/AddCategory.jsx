import { useState } from "react"


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
        onNewCategory(InputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)} >
            <input
                type="text"
                placeholder="Buscar Gifts"
                value={InputValue}
                onChange={onInputChange}
            ></input>
        </form>


    )


}