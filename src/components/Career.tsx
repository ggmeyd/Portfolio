import "./styles/Career.css";

const careerData = [
  {
    role: "Developer / Project Manager",
    company: "Freelance",
    companyLink: "",
    year: "NOW",
    desc: "Dec 2023 - Present. Developing web and mobile applications, executing project management."
  },
  {
    role: "Developer",
    company: "Mellow.io",
    companyLink: "https://mellow.io",
    year: "2025",
    desc: "May 2025 - Mar 2026. Developing and maintaining web applications."
  },
  {
    role: "Software Developer",
    company: "Rapid",
    companyLink: "https://www.rapidevelopers.com/",
    year: "2024",
    desc: "Feb 2024 - May 2025. Participated in creating and expanding apps focused on user scenarios and business logic. Delivered functionality using modern dev tools, collaborated with the team, and accelerated the development cycle through low-code approaches."
  },
  {
    role: "Development Team Lead",
    company: "Design Match",
    companyLink: "https://designmatch.io",
    year: "2022",
    desc: "Oct 2022 - Dec 2023. Developed and augmented a platform connecting designers, clients, and admins. Managed the development team, streamlined processes, participated in system architecture, and collaborated directly with an English-speaking team."
  },
  {
    role: "Developer",
    company: "WeLoveNoCode",
    companyLink: "",
    year: "2021",
    desc: "Mar 2021 - Oct 2022. Built web applications, mobile applications, CRM systems, landing pages, and other product solutions."
  }
];

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {careerData.map((job, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{job.role}</h4>
                  <h5>
                    {job.companyLink ? (
                      <a href={job.companyLink} target="_blank" rel="noopener noreferrer" data-cursor="disable">
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </h5>
                </div>
                <h3>{job.year}</h3>
              </div>
              <p>{job.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
