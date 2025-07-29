import React, {useState} from "react";
import Logo from '../../assets/Logo.png';

const navbarLinks = [
  {
    id: 1,
    title: 'Inicio',
    link: '/'
  },
  {
    id: 2,
    title: 'Nosotros',
    link: '#'
  },
  {
    id: 3,
    title: 'Contacto',
    link: '#'
  },
  {
    id: 4,
    title: 'Soporte',
    link: '#'
  }
];

const navbarRedes = [
  {
    id: 1,
    title: 'Instagram',
    link: '#',
    icon: 'bi bi-instagram'
  },
  {
    id: 2,
    title: 'Tik Tok',
    link: '#',
    icon: 'bi bi-tiktok'
  },
  {
    id: 3,
    title: 'Facebook',
    link: '#',
    icon: 'bi bi-facebook'
  },
  {
    id: 4,
    title: 'Whatsapp',
    link: '#',
    icon: 'bi bi-whatsapp'
  }
];



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  <nav className="fixed top-0 left-0 w-full bg-purple-00 bg-opacity-30 backdrop-blur-md z-50">
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
        {/* Logo */}
        <div>
          <img src={Logo} alt="logo" className="w-[100px]" />
        </div>

        {/* Botón hamburguesa - SOLO en móvil */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white focus:outline-none" 
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path 
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path 
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menú de navegación (solo desktop) */}
        <div className="hidden md:block">
          <ul className="flex sm:space-x-8 space-x-4">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a 
                  className="text-white sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110 transform inline-block duration-300"
                  href={link.link}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes sociales (solo desktop) */}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 transform hover:scale-125"
                  href={link.link}
                >
                  <i className={`${link.icon} sm:text-2xl text-lg text-white hover:text-sky-200 transition-all`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

            {/*Menu movil*/}
            <div className={`md:hidden absolute w-full bg-purple-950 transition-all duration-300 ${isOpen ? "pacity-100 visible": "opacity-0 invisible"}`}>
              <ul className="flex flex-col px-4 py-2">
            {navbarLinks.map((link) => (
              <li key={link.id} className="py-2 text-center">
                <a 
                  className="text-white hover:text-sky-200"
                  onClick={()=>setIsOpen(false)}
                  href={link.link}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

            <ul className="flex space-x-4 px-4 py-2 border-t border-purple-700 justify-center">
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  href={link.link}
                  onClick={()=>setIsOpen(false)}
                >
                  <i className={`${link.icon} text-lg text-white hover:text-sky-200`}></i>
                </a>
              </li>
            ))}
          </ul>

            </div>

    </nav>
  );
};

export default Navbar;