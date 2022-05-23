import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/Main">Main</Link> | <Link to="/MyApp">MyApp</Link>
      </nav>
    </div>
  );
}

export default Header;
