import { getByTitle } from "@testing-library/react";
import { getGifs } from "../../src/helpers/getGifs"

describe('pruebas del getGifs-helpers', () => {



    test('debe de retornar un arreglo de gifs', async () => {

        const gifs = await getGifs('dragon ball');
        // console.log(gifs);

        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })


    })

})