import "./App.css";
import Contact from "./Contact";
import game from "./gamevideo.mp4";
import netflix from "./netflix.mp4";
import psd2html from "./psd2html.mp4";
import w from "./w.mp4";
import sb from "./sb.mp4";
import snake from "./snake.png";
import tlogo from "./tailwind.png";

import { useEffect, useRef, useState } from "react";
import { Github, Instagram, Youtube } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  let [style, setstyle] = useState(false);

  const canvasRef = useRef(null);
  const mainRef = useRef(null);
  const [radius, setRadius] = useState(50);
  const [pos, setPos] = useState({ x: 200, y: 150 });

  // Draw the overlay with a hole
  const drawOverlay = (x = pos.x, y = pos.y, r = radius) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
  };

  // Animate radius smoothly
  useEffect(() => {
    let start = null;
    const initial = radius;
    const target = radius;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / 4000, 1);
      const current = initial + (target - initial) * progress;
      drawOverlay(pos.x, pos.y, current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [radius, pos]);

  // Initialize canvas size
  useEffect(() => {
    const canvas = canvasRef.current;
    const main = mainRef.current;

    const resizeCanvas = () => {
      canvas.width = main.clientWidth;
      canvas.height = main.clientHeight;
      drawOverlay(canvas.width / 2, canvas.height / 2, radius);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <>
      {" "}
      <div
        className="main"
        ref={mainRef}
        onMouseMove={(e) => {
          const rect = mainRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          setPos({ x, y });
          setRadius(350); // expand slowly
        }}
        onMouseLeave={() => {
          setRadius(0); // shrink back slowly
        }}
      >
        {/*navbar*/}
        <nav className="w-full bg-black text-white py-4 px-8 flex justify-between items-center shadow-lg fixed top-0 z-50">
          {/* About Section */}
          <div className={`pop-up ${style ? "block" : "hidden"}`}>
            {" "}
            <nav className="an">
              <span
                className="bg-[#1e90ff] rounded flex justify-center cursor-pointer"
                style={{ width: "20px" }}
                onClick={() => setstyle(!style)}
              >
                X
              </span>
            </nav>
            <div className="about-section w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 py-16 px-6 flex flex-col items-center text-center">
              <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
              <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
                I help{" "}
                <span className="text-indigo-400 font-semibold">
                  business owners{" "}
                </span>
                and{" "}
                <span className="text-purple-400 font-semibold">
                  busy web developers{" "}
                </span>
                vision and bring ideas to life. My focus is on clean code,
                engaging UIs, and smooth user experiences.
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {[
                  "#HTML",
                  "#CSS",
                  "#JavaScript",
                  "#React",
                  "#Bootstrap",
                  "#Tailwind",
                  "#Git",
                  "#GitHub",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-800 text-indigo-300 rounded-full shadow-md hover:bg-indigo-600 hover:text-white cursor-default transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Developer Title */}
              <h3 className="mt-12 text-3xl font-bold text-green-400 drop-shadow-md">
                Front End Developer
              </h3>

              {/* Logos Section */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML"
                  className="h-16 mx-auto"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS"
                  className="h-16 mx-auto"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="h-16 mx-auto"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                  className="h-16 mx-auto"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  alt="Bootstrap"
                  className="h-16 mx-auto"
                />
                <img src={tlogo} alt="Tailwind" className="h-16 mx-auto" />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git"
                  className="h-16 mx-auto"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  className="h-16 mx-auto bg-white rounded-full p-2"
                />
              </div>
            </div>
          </div>
          {/* Left side: Logo or name */}
          <div className="text-xl font-bold"></div>

          {/* Right side: Social icons */}
          <div className="flex gap-6 text-xl">
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
        </nav>
        {/*navbar*/}
        <div className="about">
          <div className="about-img"></div>
          <div className="about-me">
            {" "}
            <section className="hero">
              <h1 className="title">Front End Developer</h1>
              <p className="subtitle">
                Hi, my name is <span className="highlight">Rizvi</span>.
              </p>
              <p className="subtitle">
                I create modern, responsive websites to help businesses grow
                online.
              </p>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setstyle(!style)}
              >
                about more
              </button>
            </section>
          </div>
        </div>
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        />
      </div>
      {/*projects section*/}
      <div className="prjcts flex flex-col items-center py-12 bg-gray-900">
        <h2 className="text-4xl text-white font-bold mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl px-6">
          {/* Example Project Card */}
          {[
            {
             image: snake,
              title: "Snake Game (HTML, CSS, JavaScript)",
              desc: "Built and deployed a browser-based Snake Game with movement controls, scoring system, and collision logic using vanilla JavaScript.",
            },
            {
              video: game,
              title: "Tic Tac Toe Game",
              desc: "A browser-based Tic Tac Toe game with responsive layout, turn tracking, and winning animations.",
            },
            {
              video: w,
              title: "Project W",
              desc: "Another responsive project demo.",
            },
            {
              video: sb,
              title: "Project SB",
              desc: "Another project with interactive features.",
            },
            {
              video: psd2html,
              title: "PSD to HTML",
              desc: "Converted PSD to clean HTML/CSS website with responsive layout.",
            },
            {
              video: netflix,
              title: "Netflix Clone",
              desc: "Netflix-inspired landing page with interactive FAQ and responsive design.",
            },
          ].map((p, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow-2xl border-4 border-purple-500 hover:shadow-purple-400 hover:border-purple-400 transition-all duration-500"
            >
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">
                {p.title}
              </h3>
              <p className="text-gray-300 text-center mb-6">{p.desc}</p>
              {p.video ? (
                <video
                  src={p.video}
                  controls
                  autoPlay
                  muted
                  loop
                  className="rounded-lg w-full max-h-72 shadow-lg hover:scale-105 transition-transform duration-300"
                />
              ) : p.image ? (
                <a href="https://riizvee.github.io/snake-game/">
                <img
                  src={p.image}
                  alt={p.title}

                  className="rounded-lg w-full max-h-72 shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
                /> </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      {/*projects section*/}
      <Contact />
    </>
  );
}

export default App;
