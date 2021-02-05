import { Link } from "react-router-dom";

export function Navigation(props) {
  return (
    <ul className="nav">
      <li className="link">
        <Link to="/welcome">Home</Link>
      </li>
      <li className="link">
        <Link to="/clock">Clock</Link>
      </li>
      <li className="link">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="link">
        <Link to="/jeopardy">Jeopardy</Link>
      </li>
    </ul>
  );
}
