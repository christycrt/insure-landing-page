const Home = () => {
  return (
    <div className="home">
      <img
        className="intro-mobile"
        src="images/image-intro-mobile.jpg"
        alt="intro-mobile"
      />
      <div className="wrapper">
        <div className="content">
          <h1 className="title">Humanizing your insurance.</h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.{" "}
          </p>
        </div>
      </div>
      {/* <div className="pattern">
        <img
          className="pattern-left"
          src="images/bg-pattern-intro-left-mobile.svg"
          alt="mobile-nav"
        />
        <img
          className="pattern-right"
          src="images/bg-pattern-intro-right-mobile.svg"
          alt="mobile-nav"
        />
      </div> */}
    </div>
  );
};

export default Home;
