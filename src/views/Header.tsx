/* import { MouseEvent }from "react";
import { useLocation, useNavigate } from "react-router-dom" */
import NavMenu from "../components/NavMenu"

export default function Header() {
/*   const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const showMenu = queryParams.get("navbar");


  const handlecustomerLinkClick = (e: MouseEvent<HTMLAnchorElement> ) =>{
      e.preventDefault();

      if(document.startViewTransition){
          document.startViewTransition(()=>{
              navigate("customer");
          })
      }else{
        navigate("/customer");
      }
  }

  const handleMembershipLinkClick = (e: MouseEvent<HTMLAnchorElement> ) =>{
    e.preventDefault();

    if(document.startViewTransition){
        document.startViewTransition(()=>{
            navigate("membership")
        })
    }else{
      navigate("/membership")
    }
  } */
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-purple-300">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <h1 className="text-4xl font-outfit font-extrabold text-black ml-2">
              Miri
              <span className="text-blue-500">
                Eth
              </span>
            </h1>
          </a>
          <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <NavMenu/>
          </div>
          <div id="mega-menu" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
{/*             <li>
                <Link
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  to={"/customer"}
                  onClick={(e)=>handlecustomerLinkClick(e)}
                >
                  Productos
                </Link>
              </li> */}
{/*               <li>
                <button 
                  id="mega-menu-dropdown-button" 
                  data-dropdown-toggle="mega-menu-dropdown" 
                  className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={()=>navigate(location.pathname + "?navbar=true")}
                >
                  Inventario <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div id="mega-menu-dropdown" className={`absolute z-10 grid ${!show ? "hidden" : ""} w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700`}>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          Membresia
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          customere
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          Resources
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          Pro Version
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          Playground
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  to={"/customer"}
                  onClick={(e)=>handlecustomerLinkClick(e)}
                >
                  customeres
                </Link>
              </li>
              <li>
                <Link 
                    to={"/membership"} 
                    className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    
                    onClick={(e)=>handleMembershipLinkClick(e)}
                >Membresias</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}



