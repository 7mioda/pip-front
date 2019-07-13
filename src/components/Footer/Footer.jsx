import React from 'react';
import * as PropTypes from 'prop-types';
import withStyle from './withStyle';

const Footer = ({ className }) => (
  <footer className={`${className}`}>
    <div className="footer-column">
      <h4>Plantify.it</h4>
      <div className="link">Carrières</div>
      <div className="link">Presse</div>
      <div className="link">Règles</div>
      <div className="link">Aide</div>
      <div className="link">Diversité et intégration</div>
      <div className="link">Coordonnées de l'entreprise</div>
    </div>
    <div className="footer-column">
      <h4>Découvrir</h4>
      <div className="link">Confiance et sécurité</div>
      <div className="link">Crédit</div>
      <div className="link">Plantify.it Citizen</div>
      <div className="link">Plantify.it & affaires</div>
      <div className="link">Guides</div>
      <div className="link">Plantify.it mag</div>
      <div className="link">Événements</div>
    </div>
    <div className="footer-column">
      <h4>Services</h4>
      <div className="link">Pourquoi nous rejoindre</div>
      <div className="link">Client responsable</div>
      <div className="link">Community Center</div>
      <div className="link">Open Plantify.it</div>
    </div>
    <div className="footer-column">
      <div className="social-icons">
        <span className="icon fb-icon" />
        <span className="icon twitter-icon" />
        <span className="icon insta-icon" />
      </div>
      <div className="link">Conditions</div>
      <div className="link">Politique de confidentialité</div>
      <div className="link">Plan du site</div>
    </div>
    <div className="clear-fix" />
    <div className="footer-copyright">
      <div className="copyright-text">© Plantify.it, Inc.</div>
    </div>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string.isRequired,
};

export default withStyle(Footer);
