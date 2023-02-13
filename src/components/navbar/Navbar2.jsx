import { useState } from "react";


const Navbar2 = () => {

  const navLinks = [
    { id: 1, text: "Home", href: '#home' },
    { id: 2, text: "About", href: '#about' },
    { id: 3, text: "Works", href: '#works' },
  ];

  const [activeId, setActiveId] = useState();

  return (
    <nav className="navbar navbar-expand-md bg-dark p-3 fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">Ardana</a>
        <button className="btn d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span style={{color: "#fff", fontSize: '2rem'}} className="iconify" data-icon="material-symbols:menu-rounded"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse mx-3" id="navbarNav">
        <ul className="navbar-nav gap-3">
          {navLinks.map(({ id, href, text }) => (
            <li key={id} className="nav-item" onClick={() => setActiveId(id)}>
              <a style={{ color: '#b4b4b4' }} href={href} className={activeId === id ? "nav-link text-light" : "nav-link"}>{text}</a>
            </li>
          ))}
          <li className="nav-item">
            <a href="#contact" className="btn btn-warning fw-bold p-2 px-5 rounded-5">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;