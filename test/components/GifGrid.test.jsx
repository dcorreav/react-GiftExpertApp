import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');



describe('pruebas de GifGrid', () => {

    const category = 'valorant';

    test(' debe de mostrar el loading ', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} ></GifGrid>)

        expect(screen.getByText('Cargando.....'));
        expect(screen.getByText(category));

        //screen.debug();     
    })


    test('debe mostrar items cuando se cargan las imagenes ', () => {

        const gifs = [{
            id: 'abc',
            title: 'goku',
            url: 'locald/hoku'
        },
        {
            id: 'abc2',
            title: 'goku2',
            url: 'locald/hoku2'
        }]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} ></GifGrid>)

        expect(screen.getAllByRole('img').length).toBe(2);

        //screen.debug();

    })

})