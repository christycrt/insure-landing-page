const Navbar = ({ toggle }) => {
  return (
    <nav className="nav-bar container">
      <img className="logo" src="images/logo.svg" alt="logo" />
      {/* <button onClick={toggle}> */}
      <img
        onClick={toggle}
        className="hamburger-menu"
        src="images/icon-hamburger.svg"
        alt="hamburger-menu"
      />
      {/* </button> */}
    </nav>
  );
};

export default Navbar;
