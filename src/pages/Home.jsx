import React, { useState, useEffect } from 'react';
import Slider from '../components/Slider';


function Home() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('/data/depoimentos.json')
            .then(response => response.json())
            .then(data => setTestimonials(data))
    }, []);

    return (
        <div>
            <Slider />
            <section className="home-intro py-5 bg-light">
                <div className="container text-center">
                    <h1 className="display-4 fw-bold">Bem-vindo ao Site Genérico</h1>
                    <p className="lead text-muted">
                        Este é um site incrível onde você encontrará informações sobre nossa empresa, serviços e muito mais.
                    </p>
                </div>
            </section>

            <section className="company-numbers py-5 bg-dark text-light">
                <div className="container text-center">
                    <h2 className="mb-4">Nossos Números</h2>
                    <div className="row">
                        <div className="col-md-3 col-6 mb-4">
                            <h3 className="display-5 fw-bold">+500</h3>
                            <p>Clientes satisfeitos</p>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                            <h3 className="display-5 fw-bold">300</h3>
                            <p>Projetos concluídos</p>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                            <h3 className="display-5 fw-bold">10</h3>
                            <p>Anos de experiência</p>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                            <h3 className="display-5 fw-bold">50+</h3>
                            <p>Profissionais dedicados</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">O que nossos clientes dizem</h2>
                    <div className="row">
                        {testimonials.map((item, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <div className="card shadow-sm h-100">
                                    <div className="card-body text-center">
                                        <img src={item.image} alt={item.name} className="img-fluid rounded-circle mb-3" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                        <p className="card-text">"{item.testimonial}"</p>
                                        <h5 className="card-title mt-3">{item.name}</h5>
                                        <p className="text-muted">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
