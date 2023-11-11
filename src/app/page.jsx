

import About from 'body/about';
import Resume from 'body/resume';
import Contact from 'body/contact';
import NFT from 'body/NFT';

import data from 'data';

const Index = () => {
  return (
    <>
      <header id="header">
        <div className="container">

          <h1>{data.name}</h1>
          <h2 dangerouslySetInnerHTML={{ __html: data.greet }} />

          <div className="social-links">
            <a href="/assets/Vuong Quoc Nguyen - Senior Frontend Dev - Merrylands Sydney.pdf" className="resume"><i className="bi bi-file-text-fill"></i></a>
            <a href={data.github} className="github"><i className="bi bi-github"></i></a>
            <a href={data.linkedin} target="_blank" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>

        </div>
      </header>
      {/* <NFT />
      <About />
      <Resume />
      <Contact /> */}
    </>
  );
};

export default Index;
