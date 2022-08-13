import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

import './styles.css';

function Footer() {
  const [tabSelect, setTabSelect] = useState(false);

  return (
    <footer className="footer-main">
      <header className="footer-header">
        <div>
          <span
            onClick={() => setTabSelect(true)}
            role="presentation"
            className={`footer-header-item ${
              tabSelect ? 'footer-header-item-selected' : ''
            }`}
          >
            Sobre
          </span>
          <span
            onClick={() => setTabSelect(false)}
            role="presentation"
            className={`footer-header-item ${
              !tabSelect ? 'footer-header-item-selected' : ''
            }`}
          >
            Redes sociais
          </span>
        </div>
      </header>
      <main className="footer-header-main">
        {tabSelect && (
          <p className="footer-header-about">
            Somos uma empresa fundada no bairro da Serrinha, Fortaleza - CE, o
            aplicativo tem como objetivo servir de prática para o
            desenvolvimento de habilidades com ReactJS.
          </p>
        )}
        {!tabSelect && (
          <div>
            <div className="footer-header-social-media">
              <p>Acesse nossas redes</p>
              <a href="https://www.instagram.com/">
                <FaInstagram size={24} />
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/">
                <FaFacebookF size={24} />
                <span>Facebook</span>
              </a>
              <a href="https://twitter.com/home">
                <FaTwitter size={24} />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        )}
      </main>
      <footer className="footer-footer">
        <div>
          <p>Teste Ltda. – CNPJ 00.000.332/0001-10</p>
          <p>Rua Anita Garibaldi, n° 316, sala 503 - Torre do Rio Sul</p>
          <p>Serrinha - Fortaleza, CE - 60743-410</p>
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
