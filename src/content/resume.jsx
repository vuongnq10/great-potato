import data from 'data';

const Index = () => (
  <section id="resume" className="resume">
    <div className="container">

      <div className="section-title">
        <h2>Resume</h2>
        <p>Check My Resume</p>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <h3 className="resume-title">{data.education.title}</h3>
          {data.education.degrees.map(item => (
            <div className="resume-item" key={item.title}>
              <h4>{item.title}</h4>
              <h5>{item.years}</h5>
              <p><em>{item.school}</em></p>
              {/* <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p> */}
            </div>
          ))}
        </div>
        <div className="col-lg-6">
          <h3 className="resume-title">{data.experiences.title}</h3>
          {data.experiences.items.map(item => (
            <div className="resume-item" key={item.year}>
              <h4>{`Role: ${item.title}`}</h4>
              <h5>{item.year}</h5>
              <p><em>{item.desc}</em></p>
              <ul>
                {item.tasks.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Index;
