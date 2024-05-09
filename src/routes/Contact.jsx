import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";


export default function Contact() {
    return (
        <>
            <div id="contact" className="">
                <div className="flex flex-col my-40">
                    <h1 className="text-xl font-bold mb-2"> ContactUS:</h1>
                    <div className="my-4">
                        <div className="flex justify-betweenw  my-4">
                            <a href="https://www.github.com"><FaGithub className="text-2xl" /></a>
                            <h3 className="text-xl mx-4">shakiba28</h3>
                        </div>
                        <div className="flex justify-betweenw  my-4">
                            <a href="https://www.github.com"><FaLinkedin className="text-2xl" /></a>
                            <h3 className="text-xl mx-4">shakiba baghishani</h3>
                        </div>
                        <div className="flex justify-betweenw  my-4">
                            <a href="https://www.github.com"><FaTelegram className="text-2xl" /></a>
                            <h3 className="text-xl mx-4">shakiba_baghishani</h3>
                        </div>
                        <div className="flex justify-betweenw  my-4">
                            <a href="https://www.github.com"><FaInstagram className="text-2xl" /></a>
                            <h3 className="text-xl mx-4">shakiba_baghishani</h3>
                        </div>
                        {/* <div className="flex justify-betweenw  my-4">
                            <a href="https://www.github.com"><FaPhone className="text-2xl" /></a>
                            <h3 className="text-xl mx-4">shakiba28</h3>
                        </div> */}


                    </div>
                </div>
            </div>
        </>
    )
}