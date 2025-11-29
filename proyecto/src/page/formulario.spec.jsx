import { render, screen } from "@testing-library/react";
import Formulario from "./formulario";
import React from "react";
import { MemoryRouter } from "react-router-dom";

describe('Formulario Component', () => {

    it('renderiza correctamente los campos principales del formulario', () => {
        render(
            <MemoryRouter>
                <Formulario />
            </MemoryRouter>
        );

        expect(screen.getByText("Crear una cuenta")).toBeInTheDocument();
        expect(screen.getByLabelText("Nombre de usuario")).toBeInTheDocument();
        expect(screen.getByLabelText("Correo")).toBeInTheDocument();
        expect(screen.getByLabelText("Contraseña")).toBeInTheDocument();
        expect(screen.getByLabelText("Repetir contraseña")).toBeInTheDocument();
    });

});
