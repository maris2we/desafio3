import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

function Sobre() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/data/serviços.json')
      .then(response => response.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div>
      <header className="sobre-header">
        <img
          src="/images/slider1.jpg"
          alt="Imagem sobre nós"
          className="img-fluid w-100"
        />
      </header>

      <section className="sobre-intro py-5 bg-light">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Sobre Nós</h1>
          <p className="lead text-muted">
            Conheça mais sobre os serviços que oferecemos e como podemos ajudar seu negócio a crescer.
          </p>
        </div>
      </section>

      <section className="servicos py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Nossos Serviços</h2>
                    <div className="row">
                        {services.map((service, index) => (
                            <div className="col-md-4 col-sm-6 mb-4" key={index}>
                                <Card 
                                    title={service.title} 
                                    text={service.description} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sobre;
