import About from 'content/about';
import Resume from 'content/resume';
import Contact from 'content/contact';

import data from 'data';

const Index = () => {
  return (
    <>
      <header id="header">
        <div className="container">

          <h1>{data.name}</h1>
          <h2 dangerouslySetInnerHTML={{ __html: data.greet }} />

          <nav id="navbar" className="navbar">
            <ul>
              <li><div className="nav-link active" data-ref="#header">Home</div></li>
              <li><div className="nav-link" data-ref="#about">About</div></li>
              <li><div className="nav-link" data-ref="#resume">Resume</div></li>
              <li><div className="nav-link" data-ref="#contact">Contact</div></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div className="social-links">
            {/* <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a> */}
            <a href="/assets/Vuong Quoc Nguyen - Senior Frontend Dev - Merrylands Sydney.pdf" className="resume"><i className="bi bi-file-text-fill"></i></a>
            <a href={data.github} className="github"><i className="bi bi-github"></i></a>
            <a href={data.linkedin} target="_blank" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>

        </div>
      </header>

      <About />
      <Resume />
      <Contact />
    </>
  );
};

export default Index;
