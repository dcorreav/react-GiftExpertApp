import { renderHook , waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


describe('pruebas sobre el UseFetchGifs-hooks', ()=> {


    test('debe de regresar el estado inicial', ()=> {

       const { result } =  renderHook( () =>  useFetchGifs('Valorant') ) ;

       const { images , isLoading } = result.current;

       expect ( images.length).toBe(0);
       expect( isLoading).toBeTruthy(); // que sea true

      // console.log(result);
    })


    test('debe de retornar un arreglo de imagenes y el isloading false', async()=> {

        const { result } =  renderHook( () =>  useFetchGifs('Valorant') ) ;

        // esto se usa para decir que espere hasta que el current images sea mayor a cero
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)           
        ); 
 
        const { images , isLoading } = result.current;
 
        expect ( images.length).toBeGreaterThan(0);
        expect( isLoading).toBeFalsy(); // que sea falso
 
       // console.log(result);       
 
 
     })

})