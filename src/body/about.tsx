"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import data from 'data';

const Index: React.FC<{}> = () => {
  const [url, setUrl] = useState<string>('');
  useEffect(() => {
    setUrl(window.location.origin);
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-me container">

        <div className="section-title">
          <h2>About</h2>
          <p>Learn more about me</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="assets/img/me.jpeg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{data.role}</h3>
            <p className="fst-italic">
              {data.description}
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>{url}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{data.phone}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>{data.place}</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{data.email}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="skills container">

        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row skills-content">

          <div className="col-lg-3 col-sm-6">
            <div className="progress">
              <span className="skill">HTML/CSS</span>
            </div>
            <div className="progress">
              <span className="skill">Javascript</span>
            </div>
            <div className="progress">
              <span className="skill">React</span>
            </div>
            <div className="progress">
              <span className="skill">React-redux</span>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="progress">
              <span className="skill">Webpack/Babel</span>
            </div>
            <div className="progress">
              <span className="skill">ES6</span>
            </div>
            <div className="progress">
              <span className="skill">Nodejs</span>
            </div>
            <div className="progress">
              <span className="skill">Nextjs</span>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="progress">
              <span className="skill">SEO</span>
            </div>
            <div className="progress">
              <span className="skill">Google Tag Manager</span>
            </div>
            <div className="progress">
              <span className="skill">Facebook Pixel</span>
            </div>
            <div className="progress">
              <span className="skill">Google Analytics</span>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="progress">
              <span className="skill">Github</span>
            </div>
            <div className="progress">
              <span className="skill">Github CI/CD</span>
            </div>
            <div className="progress">
              <span className="skill">Jira/Confluence</span>
            </div>
            <div className="progress">
              <span className="skill">Scrum/Agile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
