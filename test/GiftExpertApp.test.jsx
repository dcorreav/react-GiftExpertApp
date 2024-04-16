import {  render, screen } from "@testing-library/react"

import { GiftExpertApp } from '../src/GiftExpertApp';

describe('pruebas de GiftExpertApp', () => {

    test('pruebas para validaciones adicionales', () => {

        render(<GiftExpertApp></GiftExpertApp>)

        screen.debug();
        
    })


 


    


})