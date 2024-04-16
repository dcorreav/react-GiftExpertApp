

import { render, screen } from '@testing-library/react';

import { GifItem } from '../../src/components/GifItem';




describe('pruebas sobre el componente GifItem', () => {

    const title = 'Sayonara';
    const url = 'https://sayprana.com/sayonara.jpg';



    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} ></GifItem>)

        expect(container).toMatchSnapshot();

    });


    test('debe mostrar la imagen con el url y el alt indicado', () => {

        render(<GifItem title={title} url={url} ></GifItem>)

        //screen.debug();

        expect(screen.getByRole('img').src).toBe(url);
        expect(screen.getByRole('img').alt).toBe(title);

        //console.log(screen.getByRole('img').src);

    })



    test('debe de mostrar el titulo en el componente', () => {


        render(<GifItem title={title} url={url} ></GifItem>)

        expect( screen.getByText(title)).toBeTruthy();



    })


})