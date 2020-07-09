import React from 'react'
// const InfoBar = ({ room }) =>
const Cabecera = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                <div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" >Inicio<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Programas</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <a className="navbar-brand" href="#">Brayan</a>
                </div>
            </nav>
        </header>
    )
}
export default Cabecera;








