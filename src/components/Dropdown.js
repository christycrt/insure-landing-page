const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div className="dropdown-container" isOpen={isOpen} toggle={toggle}>
      <button className="icon" onClick={toggle}>
        <img
          className="close-icon"
          src="images/icon-close.svg"
          alt="icon-close"
        />
      </button>
      <div className="dropdown">
        <ul className="dropdown-link">
          <li>how we work</li>
          <li>blog</li>
          <li>account</li>
        </ul>
        <button>view plan</button>
      </div>
    </div>
  );
};

export default Dropdown;
