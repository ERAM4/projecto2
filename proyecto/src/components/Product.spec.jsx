import { fireEvent, render, screen } from "@testing-library/react"
import Product from "./Product"
import React from "react"



beforeEach(() => {
    Storage.prototype.getItem = jest.fn(() => "[]")
    Storage.prototype.setItem = jest.fn()
})


describe('Product component', ()=>{
    const mockProduct = {
        name:"Warhammer 40K: Set introductorio",
        price:"64990",
        description:"Un set introductorio de Warhammer 40,000 es una caja pensada para que principiantes puedan iniciarse en el juego de miniaturas.",
        imageUrl:"https://dojiw2m9tvv09.cloudfront.net/16153/product/https-trade-games-workshop-com-assets-2023-07-03010199059-spawh40kintroductorystarterset14116.jpg",
        categoria:"juego de mesa",
        masVentas:true,
        rating:10,
        distribuidor:"Games Workshop"
    }
    it('renderiza correctamente el producto', ()=>{
        render(<Product {...mockProduct}/>)
        expect(screen.getByText("Warhammer 40K: Set introductorio")).toBeInTheDocument()
        expect(screen.getByText("Un set introductorio de Warhammer 40,000 es una caja pensada para que principiantes puedan iniciarse en el juego de miniaturas.")).toBeInTheDocument()
        expect(screen.getByText("$64990")).toBeInTheDocument()
    })

    it('llama a setItem al hacer click', ()=>{
        render(<Product {...mockProduct}/>)
        const button = screen.getByText("Añadir al carrito")
        fireEvent.click(button)
        expect(localStorage.setItem).toHaveBeenCalledWith(
            "cart", JSON.stringify([mockProduct])
        )
    })
})
