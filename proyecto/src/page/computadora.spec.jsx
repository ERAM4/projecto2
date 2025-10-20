import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import Computadora from "./computadora"
import { MemoryRouter } from "react-router-dom"
import { TextEncoder, TextDecoder } from "util"

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

beforeEach(() => {
  Storage.prototype.getItem = jest.fn(() => "[]")
  Storage.prototype.setItem = jest.fn()
})

describe("Product component", () => {
  it("renderiza correctamente la computadora", () => {
    render(
      <MemoryRouter>
        <Computadora />
      </MemoryRouter>
    )

    expect(screen.getByText("Computadoras Gamers")).toBeInTheDocument()
  })
})
