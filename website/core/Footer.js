/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
import { FaHome, FaPhone, FaEnvelope, FaYoutube, FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { RiOpenSourceFill } from 'react-icons/ri';

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <p>
              <a href="https://github.com/netuno-org/doc" className="link-button">
                <RiOpenSourceFill /> Open Source
              </a>
            </p>
            <p>
              <a className="try-btn" href="https://netuno.org/download">Download</a>
            </p>
            <p>
              <a href="https://github.com/netuno-org" className="share-icons">
                <FaGithub />
              </a>
              <a href="https://www.youtube.com/channel/UCYY1Nz6T2NJtP29vba2fqkg" className="share-icons">
                <FaYoutube />
              </a>
              <a href="https://twitter.com/netuno_org" className="share-icons">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/company/netuno-org/" className="share-icons">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/netuno.org/" className="share-icons">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/netuno_org/" className="share-icons">
                <FaInstagram />
              </a>
            </p>
          </div>
          <div>
            <p className="netuno-copyright">
              Copyright ©&nbsp;
              <a href="https://www.sitana.pt" target="_blank">Sitana</a>&nbsp;
              { new Date().getFullYear() }
            </p>
            <p>
              <FaHome className="footer-icons home-icon"/>
              <span>
                Rua José Joaquim Marques n.º 110<br />
				2870-348 Montijo<br />
                Portugal
              </span>
            </p>
            <p>
              <FaPhone className="footer-icons phone-icon"/>
              <span>
                (+351) 912 524 751
              </span>
            </p>
            <p>
              <FaEnvelope className="footer-icons envelope-icon"/>
              <span>
                <a netuno-mail="admin" href="mailto:admin@netuno.org">admin@netuno.org</a>
              </span>
            </p>
            <p>
              <FaEnvelope className="footer-icons envelope-icon"/>
              <span>
                <a netuno-mail="support" href="mailto:support@netuno.org">support@netuno.org</a>
              </span>
            </p>
          </div>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
