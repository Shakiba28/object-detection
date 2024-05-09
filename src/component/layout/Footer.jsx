import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
    return (
        <>



            <footer className="mt-auto bg-white shadow dark:bg-gray-900">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="flex sm:flex sm:items-center sm:justify-between">
                        <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={"../../../public/logo.png"} className="h-20" alt="Flowbite Logo" />
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-xl font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li className="mx-2">
                                <a href="#" className="me-4 md:me-6"><FaGithub /></a>
                            </li>
                            <li className="mx-2">
                                <a href="#" className="me-4 md:me-6"><FaLinkedin /></a>
                            </li>
                            <li className="mx-2">
                                <a href="#" className="me-4 md:me-6"><FaTelegram /></a>
                            </li>
                            <li className="mx-2">
                                <a href="#" className="me-4 md:me-6"><FaInstagram /></a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://www.tensorflow.org/" className="hover:underline">TensorFlow Image Recognition™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    );
}
