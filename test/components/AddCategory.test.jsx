import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('pruebas de AddCategory', () => {

    test('debe cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }}  ></AddCategory>)

        //para disparar un evento 

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Saitama' } });

        expect(input.value).toBe('Saitama');

       // screen.debug();

    })



    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Goku'; 

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }  ></AddCategory>)

        const input = screen.getByRole('textbox');
        const formu = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit( formu );
        //screen.debug();

        expect( input.value).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    })


    test('no debe de llamar el onNewCategory si el input esta vacio', () => {        

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }  ></AddCategory>)
                
        const formu = screen.getByRole('form');

        //fireEvent.input(input, { target: { value: 'Golkius' } });
        fireEvent.submit( formu );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
         

    })


})