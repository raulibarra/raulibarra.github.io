import React from 'react';

const Footer = () => {
    return (
        <div className="container">

            <div className="text-center" style={{ marginBottom: '2rem' }}>
                <h2 className="page-section-heading text-white d-inline-block mb-0">You can get in touch with me on</h2>
            </div>
            <div className="row">
                {/* Footer Social Icons */}
                <div className="col">
                    <a className="btn btn-outline-light btn-social mx-2" href="https://wa.link/zawmli" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a className="btn btn-outline-light btn-social mx-2" href="mailto:raulibarra.a@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                    <a className="btn btn-outline-light btn-social mx-2" href="https://www.linkedin.com/in/raulxibarra" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a className="btn btn-outline-light btn-social mx-2" href="https://gamingsoft.itch.io/" target="_blank" rel="noopener noreferrer" aria-label="Personal Projects">
                        <i className="fa-brands fa-itch-io"></i>
                    </a>
                    <a className="btn btn-outline-light btn-social mx-2" href="https://soundcloud.com/raul-ibarra-aranda" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud">
                        <i className="fa-brands fa-soundcloud"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
