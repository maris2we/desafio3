import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Card from '../components/Card';

function Contatos() {
    const [branches, setBranches] = useState([]);


    useEffect(() => {
        fetch('/data/sedes.json')
            .then(response => response.json())
            .then(data => setBranches(data))
    }, []);

    return (
        <div>
            <header className="contatos-header">
                <img
                    src="/images/slider3.jpg"
                    alt="Imagem de Contatos"
                    className="img-fluid w-100"
                />
            </header>

            <section className="contatos-intro py-5 bg-light">
                <div className="container text-center">
                    <h1 className="display-4 fw-bold">Contatos</h1>
                    <p className="lead text-muted">
                        Entre em contato conosco ou visite uma de nossas sedes.
                    </p>
                </div>
            </section>


            <section className="sedes py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Nossas Sedes</h2>
                    <div className="row">
                        {branches.map((branch, index) => (
                            <div className="col-md-4 col-sm-6 mb-4" key={index}>
                                <Card 
                                    title={branch.name} 
                                    text={`Endereço: ${branch.address}`} 
                                    footer={branch.phone}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="contatos-info py-5 bg-light">
                <div className="container text-center">
                    <h2 className="mb-4">Nossos Números de Contato</h2>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 mb-4">
                            <h5 className="fw-bold">Telefone 1</h5>
                            <p>(11) 1234-5678</p>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <h5 className="fw-bold">Telefone 2</h5>
                            <p>(21) 9876-5432</p>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <h5 className="fw-bold">Email</h5>
                            <p>contato@bytehelp.com</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="redes-sociais py-5 bg-light">
                <div className="container text-center">
                    <h2 className="mb-4">Siga-nos nas Redes Sociais</h2>
                    <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
                        <div className="d-flex align-items-center mb-3 mb-sm-0 me-4">
                            <FaFacebook size={30} className="me-2" />
                            <span style={{ fontSize: '14px' }}>bytehelp.facebook</span>
                        </div>
                        <div className="d-flex align-items-center mb-3 mb-sm-0 me-4">
                            <FaTwitter size={30} className="me-2" />
                            <span style={{ fontSize: '14px' }}>@bytehelp_twitter</span>
                        </div>
                        <div className="d-flex align-items-center mb-3 mb-sm-0 me-4">
                            <FaLinkedin size={30} className="me-2" />
                            <span style={{ fontSize: '14px' }}>bytehelp.linkedin</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <FaInstagram size={30} className="me-2" />
                            <span style={{ fontSize: '14px' }}>@bytehelp_insta</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contatos;
