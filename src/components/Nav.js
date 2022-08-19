import "./nav.css";

const Nav = () => {
  const person = {
    name: "Johan",
  };

  return (
    <div>
      <nav>
      <h3>Hello {person.name}</h3>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Show Map</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
