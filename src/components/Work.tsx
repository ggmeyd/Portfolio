import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projectData = [
  {
    name: "Neuro-Nudge",
    desc: "A mobile app designed to help users establish and maintain daily discipline routines.",
    tools: "Mobile Development",
    link: "https://apps.apple.com/us/app/neuro-nudge/id6479909452",
    image: "/images/neuro_nudge.png"
  },
  {
    name: "Design Match",
    desc: "SaaS platform connecting clients with designers, featuring an integrated AI for simple and precise matching.",
    tools: "SaaS, AI Integration",
    link: "https://designmatch.io",
    image: "/images/design_match.png"
  },
  {
    name: "Crosbit",
    desc: "Mobile app for seamless cryptocurrency cash-outs and conversions across Russia, Turkey, and the UAE.",
    tools: "Mobile Development, Web3",
    link: "https://apps.apple.com/us/app/crosbit/id6642701739",
    image: "/images/crosbit.png"
  },
  {
    name: "GonzoProxy",
    desc: "A robust platform for purchasing and managing high-quality residential proxies.",
    tools: "Web Platform",
    link: "https://gonzoproxy.com/",
    image: "/images/gonzo_proxy.png"
  },
  {
    name: "Radar by Mellow",
    desc: "Freelance opportunity platform. Developed a vacancy aggregator parsing job listings from LinkedIn, Facebook, X, and Reddit.",
    tools: "Web Platform, Web Scraping",
    link: "https://radar.mellow.io",
    image: "/images/radar_mellow.png"
  }
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projectData.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.desc}</p>
                  </div>
                </div>
                <div className="work-link">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" data-cursor="disable">
                    Visit Project
                  </a>
                </div>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
