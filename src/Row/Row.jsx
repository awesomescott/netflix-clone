import React, { useEffect, useState } from "react";

// Styles
import "./Row.styles.css";

// Utils
import axios from "../axios";

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ fetchUrl, isLargeRow, title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      {/* Category title */}
      <h2>{title}</h2>

      {/* List of movies */}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
