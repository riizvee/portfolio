import React from "react";

import { Github, Instagram, Youtube } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      <div
        className=" flex justify-evenly items-center "
        style={{ height: "70px", width: "100%", background: "#100f0f" }}
      >
        {" "}
        <span className="text-white"> gmail: workwithrizvi@gmail.com</span>
        {/* Right side: Social icons */}
        <div className="flex gap-6 text-xl text-white">
          <a
            href="https://www.instagram.com/recodezz?igsh=bGpnMDRzemczZzZ0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <Youtube size={24} />
          </a>
          <a
            href="https://x.com/riizvee?t=IZtZHjmTEr7-FZ2iqnRQUg&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaXTwitter size={22} />
          </a>
          <a
            href="https://github.com/riizvee?fbclid=PAdGRjcAMXBbRleHRuA2FlbQIxMQABp6Mc_ib_JSk07p3UcJZKoIcOu3rBwKnqaDVzmiw_aIeg2y7Zg9K04Zc8eChl_aem_8b_fIf70R4iBM2ZwVWmhpw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </>
  );
}
