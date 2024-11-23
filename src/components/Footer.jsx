import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container text-center">
                <p className="mb-0">© 2024 ByteHelp. Todos os direitos reservados.</p>
                <p>
                    <a href="/privacy-policy" className="text-light">Política de Privacidade</a> |
                    <a href="/terms-of-service" className="text-light"> Termos de Serviço</a>
                </p>
                <div>
                    <a href="https://facebook.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://twitter.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://instagram.com" className="text-light" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
