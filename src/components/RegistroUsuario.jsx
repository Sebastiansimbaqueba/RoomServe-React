import React, { useState } from "react";

function RegistroUsuario() {

    const [usuario, setUsuario] = useState({
        documento: "",
        nombres: "",
        apellidos: "",
        correo: "",
        telefono: ""
    });

    const manejarCambio = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    };

    const registrar = (e) => {
        e.preventDefault();

        console.log("Usuario registrado:", usuario);

        alert("Usuario registrado correctamente");
    };

    return (
        <div className="registro-container">

            <h2>Registro de Usuario - RoomServe</h2>

            <form onSubmit={registrar}>

                <input
                    className="campo"
                    type="text"
                    name="documento"
                    placeholder="Documento"
                    value={usuario.documento}
                    onChange={manejarCambio}
                />

                <input
                    className="campo"
                    type="text"
                    name="nombres"
                    placeholder="Nombres"
                    value={usuario.nombres}
                    onChange={manejarCambio}
                />

                <input
                    className="campo"
                    type="text"
                    name="apellidos"
                    placeholder="Apellidos"
                    value={usuario.apellidos}
                    onChange={manejarCambio}
                />

                <input
                    className="campo"
                    type="email"
                    name="correo"
                    placeholder="Correo electrónico"
                    value={usuario.correo}
                    onChange={manejarCambio}
                />

                <input
                    className="campo"
                    type="text"
                    name="telefono"
                    placeholder="Teléfono"
                    value={usuario.telefono}
                    onChange={manejarCambio}
                />

                <button className="boton" type="submit">
                    Registrar Usuario
                </button>

            </form>

        </div>
    );
}

export default RegistroUsuario;