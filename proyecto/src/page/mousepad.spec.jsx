import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import Mousepad from "./mousepad"
import { MemoryRouter } from "react-router-dom"
import { TextEncoder, TextDecoder } from "util"

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

beforeEach(() => {
  Storage.prototype.getItem = jest.fn(() => "[]")
  Storage.prototype.setItem = jest.fn()
})

describe("Product component", () => {
  it("renderiza correctamente el mouse pad", () => {
    render(
      <MemoryRouter>
        <Mousepad />
      </MemoryRouter>
    )

    expect(screen.getByText("Mouse Pad")).toBeInTheDocument()
  })
})
