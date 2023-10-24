import { Link } from "react-router-dom";
import "./styles/index.scss";

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/dragtasks"}>
            <span>Done & Undone Tasks</span>
          </Link>
        </li>
        <li>
          <Link to={"/employeeRecords"}>
            <span>Employee Records</span>
          </Link>
        </li>
        <li>
          <Link to={"/imgcarousel"}>
            <span>Image Carousel</span>
          </Link>
        </li>
        <li>
          <Link to={"/dataFetchingPage"}>
            <span>Data Fetching App + Pagingation</span>
          </Link>
        </li>
        <li>
          <Link to={"/timeline"}>
            <span>TimeLine</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
