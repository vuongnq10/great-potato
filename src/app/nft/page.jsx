import NFT from 'content/NFT';

import data from 'data';

const Index = () => {
  return (
    <>
      <header id="header" className="header-top">
        <div className="container">

          <h1>{data.name}</h1>
          <h2 dangerouslySetInnerHTML={{ __html: data.greet }} />

          <nav id="navbar" className="navbar">
            <ul>
              <li><div className="nav-link active" data-ref="#header">Home</div></li>
              <li><a className="nav-link" href="/nft">NFT</a></li>
              <li><div className="nav-link" data-ref="#about">About</div></li>
              <li><div className="nav-link" data-ref="#resume">Resume</div></li>
              <li><div className="nav-link" data-ref="#contact">Contact</div></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div className="social-links">
            <a href="/assets/Vuong Quoc Nguyen - Senior Frontend Dev - Merrylands Sydney.pdf" className="resume"><i className="bi bi-file-text-fill"></i></a>
            <a href={data.github} className="github"><i className="bi bi-github"></i></a>
            <a href={data.linkedin} target="_blank" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>

        </div>
      </header>

      <NFT />
    </>
  );
};

export default Index;
