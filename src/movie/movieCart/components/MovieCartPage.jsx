import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useState } from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const MovieCartPage = () => {
  const [fullHeart, setFullHeart] = useState(false);

  return (
    <div className='allMovies_container'>
      <div className='allMovies_wrapper'>
        <div className='allMovies_card'>
          <img
            src='https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg'
            alt=''
            className='allMovies_img'
          />
          <div className='allMovies_logoes'>
            <div className='allMovies_logo'>
              <SearchIcon />
            </div>
            <div
              className='allMovies_logo'
              onClick={() => setFullHeart((pre) => !pre)}
            >
              {fullHeart ? (
                <FavoriteOutlinedIcon />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
            </div>
          </div>
        </div>

        <div className='allMovies_card'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWPZmnFNHdYjnCabzgVXmb7JJY3RZujGQHQ&usqp=CAU'
            alt=''
            className='allMovies_img'
          />
          <div className='allMovies_logoes'>
            <div className='allMovies_logo'>
              <SearchIcon />
            </div>
            <div
              className='allMovies_logo'
              onClick={() => setFullHeart((pre) => !pre)}
            >
              {fullHeart ? (
                <FavoriteOutlinedIcon />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCartPage;
