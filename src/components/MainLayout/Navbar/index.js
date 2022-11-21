import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../utils/Transition';
import Dropdown from '../../utils/Dropdown';
import Logo from './logo.jpeg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  const links = [
    // {id: 1, name: "Главная страница", link: "/"},
    {id: 2, name: "Работа в Европе", link: "/work"},
    {id: 3, name: "Виза", links: [
        {id: 1, name: "Рабочая виза", link: "/visawork"},
        {id: 2, name: "Туристическая виза", link: "/visatour"}
    ]},
    {id: 4, name: "Туры", links: [
        {id: 1, name: "Горящие туры", link: "/travel"},
        {id: 2, name: "Туры по Кыргыстану и Центральной Азии", link: "/tourasia"},
        {id: 3, name: "Умра туры (малый хадж)", link: "/umra"}
    ]},
    {id: 5, name: "Авиабилеты", link: "/avia"},
    {id: 6, name: "Учеба за границей", link: "/education"},
    {id: 7, name: "Страхование", link: "/insurance"},
    {id: 8, name: "Другие услуги", link: "/services"},
    {id: 9, name: "О нас", link: "/aboutus"},
]



    const Nav = ({item}) => {
      return(
          <>
            {item.link ? <li><Link to={item.link} className="text-sm text-gray-600 hover:bg-gray-200 font-medium px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">{item.name}</Link></li> : 
            <Dropdown title={item.name}>
              {item.links.map((item) => <li><Link to={item.link} className="text-sm text-gray-600 font-medium hover:bg-gray-200 flex px-3 lg:px-5 py-2 leading-tight">{item.name}</Link></li>)}
            </Dropdown>
            }
          </>
      )
    }

  return (
    <header className={`fixed w-full z-30  transition duration-300 ease-in-out bg-white drop-shadow-lg`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-10 ">
          <div className="flex-shrink-0 mr-4 mt-3">
            <Link to="/" className="block" aria-label="Cruip">
              <img src={Logo} className="w-14 h-14"  alt=''/>
            </Link>
          </div>
          <div className='hidden lg:flex items-center justify-between w-full'>
            <p className="text-base font-medium text-gray-700"> <LocationOnIcon height="100px"/> г. Бишкек, Московская 193/ Турусбекова</p>
            <p className="text-sm  font-semibold text-gray-500"><InstagramIcon/>  @goplanet.travel</p>
            <p className="text-sm font-semibold text-gray-500"><InstagramIcon/>  @goplanet.com</p>
            <p className="font-semibold font-medium text-[#E57D08]"><LocalPhoneIcon/>  +996 (707) 99-82-02 </p>
            <a href='https://wa.me/996707998202?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D1%83%D0%B9%D1%82%D0%B5'>
              <p className=' rounded-lg text-center text-white tracking-wider font-medium uppercase flex justify-evenly items-center bg-[#01AE08] text-[12px] w-[120px] py-[5px]'><WhatsAppIcon/> WhatsApp</p>
            </a>
          </div>
          <div className="flex lg:hidden">

            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && 'active'}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="24" height="2" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <div ref={mobileNav}>
              <Transition
                show={mobileNavOpen}
                tag="nav"
                id="mobile-nav"
                className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"              
              >
                <ul className="px-5 py-2">
                  <li>
                    <Link to="/pricing" className="flex text-gray-600 hover:text-gray-900 py-2">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/about" className="flex text-gray-600 hover:text-gray-900 py-2">About us</Link>
                  </li>
                  <li>
                    <Link to="/tutorials" className="flex text-gray-600 hover:text-gray-900 py-2">Tutorials</Link>
                  </li>  
                  <li>
                    <Link to="/blog" className="flex text-gray-600 hover:text-gray-900 py-2">Blog</Link>
                  </li>                                  
                  <li className="py-2 my-2 border-t border-b border-gray-200">
                    <span className="flex text-gray-600 hover:text-gray-900 py-2">Resources</span>
                    <ul className="pl-4">
                      <li>
                        <Link to="/documentation" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">Documentation</Link>
                      </li>
                      <li>
                        <Link to="/support" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">Support center</Link>
                      </li>
                      <li>
                        <Link to="/404" className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2">404</Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li>
                    <Link to="/signin" className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center">Sign in</Link>
                  </li>
                  <li>
                    <Link to="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2">
                      <span>Sign up</span>
                      <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill="#999" fillRule="nonzero" />
                      </svg>
                    </Link>
                  </li> */}
                </ul>
              </Transition>
            </div>

          </div>
        </div>
        <div className="hidden lg:flex items-center justify-between h-16 md:h-10 w-[100%]">
          <ul className="flex justify-between w-[100%] items-end">
              {links.map((item) => <Nav item={item} />)}
          </ul>
          {/* Site branding */}
          

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center justify-between h-16 md:h-10">

            {/* Desktop menu links */}
            

            {/* Desktop sign in links */}
            {/* <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link to="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
              </li>
              <li>
                <Link to="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Sign up</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                  
                </Link>
              </li>
            </ul> */}

          </nav>

          {/* Mobile menu */}
          

        </div>
      </div>
    </header>
  );
}

export default Header;
