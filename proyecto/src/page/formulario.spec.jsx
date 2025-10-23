import { render, screen, fireEvent } from "@testing-library/react"
import Formulario from "./formulario"
import React from "react"

describe('Formulario Component', () => {
    const mockUser = {
        nombre: "Henry Cavil",
        email: "HenryCavilWH40K@gmail.com",
        clave1: "123456",
        clave2: "123456"
    }

    it('renderiza correctamente los campos principales del formulario', () => {
        render(<Formulario />)

        expect(screen.getByText("Crear una cuenta")).toBeInTheDocument()
        expect(screen.getByLabelText("Nombre")).toBeInTheDocument()
        expect(screen.getByLabelText("Apellidos")).toBeInTheDocument()
        expect(screen.getByLabelText("Dirección")).toBeInTheDocument()
        expect(screen.getByLabelText("E-mail")).toBeInTheDocument()
        expect(screen.getByLabelText("Contraseña")).toBeInTheDocument()
        expect(screen.getByLabelText("Repetir contraseña")).toBeInTheDocument()
    })
})
    