import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import Poleras from "./poleras"
import { MemoryRouter } from "react-router-dom"
import { TextEncoder, TextDecoder } from "util"

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

beforeEach(() => {
  Storage.prototype.getItem = jest.fn(() => "[]")
  Storage.prototype.setItem = jest.fn()
})

describe("Product component", () => {
  it("renderiza correctamente la polera", () => {
    render(
      <MemoryRouter>
        <Poleras />
      </MemoryRouter>
    )

    expect(screen.getByText("Poleras Personalizadas")).toBeInTheDocument()
  })
})
