const About = () => {


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
        <img
          src="https://i.ibb.co/CHWzg3M/person.jpg"
          className="w-3/4 rounded-lg shadow-2xl"
        />
        <img 
          src="https://i.ibb.co/71R9gNS/parts.jpg"
          className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-white border-8"
        />
        </div>
        <div className="lg:w-1/2 space-y-4">
           <p className="text-2xl font-medium text-orange-300">About us</p>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  look even slightly believable. 
          </p>
          <p className="">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which look even slightly believable. 
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
