import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api/api";
import "./index.css";

function ListMovies() {
    const [movies, setMovies] = useState<any[]>([]);

    const titleImage = require("../../assets/img/starwars.png");

    const loadMovies = useCallback(async () => {
        const { data } = await api.get("/films");

        setMovies(data.results);
    }, []);

    useEffect(() => {
        loadMovies();
    }, [loadMovies]);

    return (
        <div className="star">
            <h1 className="star-title">
                <img
                    className="star-image"
                    src={titleImage}
                    alt="titulo com a logo starwars"
                />
            </h1>
            <ul className="star-list">
                {movies?.map((movie) => {
                    return (
                        <li className="star-list-item" key={movie.episode_id}>
                            <Link
                                to={`/movies/about/${movie.episode_id}`}
                                className="star-link"
                            >
                                <img
                                    src="https://t.ctcdn.com.br/nk5I-7PNdu6QZCLisf7ws6M5DiE=/512x288/smart/filters:format(webp)/i571972.jpeg"
                                    alt={movie.title}
                                    className="star-image-movies"
                                />
                            </Link>
                            <span className="star-title-movies">
                                {movie.title}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ListMovies;
