export default function Home() {
  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#basic-info">Basic Info</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#experience">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Basic Info Section */}
      <section id="basic-info">
        <h1 className="spaced-text font-bold text-yellow-600"><b>Hi, I am Insha Shoukat</b></h1>
        <h2 className="spaced-text font-bold">Aspiring Web Developer</h2>
        <p className="spaced-text">
          I am an aspiring web developer passionate about creating dynamic, user-friendly websites and continuously learning new technologies to enhance my skills.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="spaced-text font-bold ">Skills</h2>
        <ul>
          <li className="spaced-text">HTML</li>
          <li className="spaced-text">CSS</li>
          <li className="spaced-text">JavaScript</li>
          <li className="spaced-text">Video Editing</li>
          <li className="spaced-text">Graphic Designing</li>
          <li className="spaced-text">Typescript</li>
        </ul>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2 className="spaced-text font-bold">Education</h2>
        <p className="spaced-text"><strong>Intermediate:</strong> FSC from Govt Degree Girls College Gulshan E Iqbal(S.Z.C) (2022-2023)</p>
        <p className="spaced-text "><strong>Matriculation:</strong> From Bright Future Public School (2021-2022)</p>
        <p className="spaced-text"><strong>Artificial Intelligence,Web 3.0 & Metaverse:</strong> From Governor House karachi(Ongoing)</p>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2 className="spaced-text font-bold">Experience</h2>
        <p className="spaced-text ">No formal experience yet, but have worked on several personal projects involving HTML, CSS,JavaScript and Typescript.</p>
        <p className="spaced-text">Intented to work as Web Developer in the future.</p>
      </section>

      {/* portfolio Section */}
      <section id="portfolio">
        <h2 className="spaced-text font-bold">Portfolio</h2>
        <p className="spaced-text">You can visit my GitHub repository to check my projects.Link is given below:</p>
        <p className="spaced-text"><strong>GitHub:</strong>https://github.com/inshaabbas</p>

      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="spaced-text font-bold ">Contact Information</h2>
        <p className="spaced-text "><strong>Email:</strong> inshashoukat1@gmail.com.</p>
        <p className="spaced-text "><strong>Phone:</strong> 03152058606</p>
        <p className="spaced-text">GitHub: <a href="https://github.com/inshaabbas" target="_blank" rel="noopener noreferrer">github.com/inshashoukat</a></p>
      </section>
    </div>
  );
}
