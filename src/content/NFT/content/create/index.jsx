const Index = () => {
  return (
    <>
      <h3 className="resume-title">Create your contract</h3>
      <div className="create-contract">
        <div class="php-email-form mt-4">
          <div class="row">
            <div class="col-md-6 form-group">
              <input type="text" class="form-control" id="name" placeholder="Your Name" required="" name="name" value="" />
            </div>
            <div class="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" class="form-control" id="email" placeholder="Your Email" required="" name="email" value="" />
            </div>
          </div>
          <div class="form-group mt-3">
            <input type="text" class="form-control" id="subject" placeholder="Subject" required="" name="subject" value="" />
          </div>
          <div class="text-center"><button type="submit">Send Message</button></div>
        </div>
      </div>
    </>
  );
};

export default Index;