import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [login, setLogin] = useState<string | null | undefined>();
  const [username, setUsername] = useState<string | null | undefined>();
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/ ";
  };
  useEffect(() => {
    setLogin(() => sessionStorage.getItem("ID"));
    setUsername(() => sessionStorage.getItem("Username"));
  }, []);
  return (
    <nav className="w-full bg-white border-gray-200 da:bg-gray-900 h-[10vh] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap da:text-white text-black">
            ChatEN
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          {login === undefined || login === "false" || login === null ? (
            <div>
              <Link
                href="/auth/login"
                className="text-gray-800 da:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 da:hover:bg-gray-700 focus:outline-none da:focus:ring-gray-800 hover:border-[2px] border-[2px] hover:border-blue-500"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 da:bg-blue-600 da:hover:bg-blue-700 focus:outline-none da:focus:ring-blue-800"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div>
              <b className="text-gray-800 da:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 da:hover:bg-gray-700 focus:outline-none da:focus:ring-gray-800">
                Hi,{username}
              </b>
              <button
                onClick={handleLogout}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 da:bg-blue-600 da:hover:bg-blue-700 focus:outline-none da:focus:ring-blue-800"
              >
                Logout
              </button>
            </div>
          )}
        </div>
        <div
          id="mega-menu"
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 gap-[20px]">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 da:text-blue-500 md:da:hover:text-blue-500 da:hover:bg-gray-700 da:hover:text-blue-500 md:da:hover:bg-transparent da:border-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/chat-bot"
                className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 da:text-white md:da:hover:text-blue-500 da:hover:bg-gray-700 da:hover:text-blue-500 md:da:hover:bg-transparent da:border-gray-700"
              >
                Chat Bot
              </Link>
            </li>
            <li>
              <Link
                href="/course/your-course"
                className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 da:text-white md:da:hover:text-blue-500 da:hover:bg-gray-700 da:hover:text-blue-500 md:da:hover:bg-transparent da:border-gray-700"
              >
             Your Books
              </Link>
            </li>
            <li>
              <Link
                href="/flip/flip-vocabulary"
                className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 da:text-white md:da:hover:text-blue-500 da:hover:bg-gray-700 da:hover:text-blue-500 md:da:hover:bg-transparent da:border-gray-700"
              >
                Flip Vocabulary
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
