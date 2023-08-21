import './css/homepage.css'
import Searchbar from './searchbar'
import logo from './images/logo.png'

const Navbar = () => {

    return(
        <nav className="px-4 py-3">
            <div class="flex justify-between mx-auto max-w-screen-2.5xl">
                <a href="/" class="flex items-center mt-4">
                    <img src={logo} class="h-10 mb-5 mr-2 ml-3 " alt="OpenBias logo" />
                    <span class="subtitle text-3xl font-light  ">OpenBias</span>
                </a>
                <div class="flex items-center">
                    <Searchbar/>
                    <a href="/" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-semibold rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ml-5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">About</a>
                    <a href="/dash" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-semibold rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Home</a>
                    <a href="/ai" class="text-gray-800 dark:text-green-500 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">AI Bias</a>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar