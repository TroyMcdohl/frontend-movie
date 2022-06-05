import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);

  const navHandler = () => {
    setDrawer((prev) => !prev);
  };

  return (
    <div className='nav_container'>
      <div className='nav_wrapper'>
        <div className='nav_left'>
          <h4 className='nav_left_title' onClick={navHandler}>
            C-Movie
          </h4>
          <ul className='nav_left_items'>
            <li className='nav_left_item'>
              <Link style={{ color: "white", textDecoration: "none" }} to={`/`}>
                Home
              </Link>
            </li>
            <li className='nav_left_item'>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={`/movies`}
              >
                Movie
              </Link>
            </li>
            <li className='nav_left_item'>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={`/series`}
              >
                Series
              </Link>
            </li>
            <li className='nav_left_item'>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={`/mylist`}
              >
                My List
              </Link>
            </li>
          </ul>

          {drawer && (
            <div className='nav_drawer_container'>
              <ul className='nav_drawer_items'>
                <li className='nav_drawer_item'>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    onClick={() => setDrawer(false)}
                    to={`/`}
                  >
                    Home
                  </Link>
                </li>
                <li className='nav_drawer_item'>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    onClick={() => setDrawer(false)}
                    to={`/movies`}
                  >
                    Movie
                  </Link>
                </li>
                <li className='nav_drawer_item'>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    onClick={() => setDrawer(false)}
                    to={`/series`}
                  >
                    {" "}
                    Series
                  </Link>
                </li>
                <li className='nav_drawer_item'>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    onClick={() => setDrawer(false)}
                    to={`/mylist`}
                  >
                    {" "}
                    My List
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className='nav_center'>
          <input
            placeholder='search movie and series name here'
            type='text'
            className='nav_center_input'
          />
          <div className='nav_center_logo'>
            <SearchIcon style={{ color: "white" }} />
          </div>
        </div>
        <div className='nav_right'>
          <Link to={`/profile`}>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA6g9BWr61gs6KYIq3zjFEy36Z8OuOIJQ75A&usqp=CAU'
              alt=''
              className='nav_right_img'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
