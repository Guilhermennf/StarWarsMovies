import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMovies from "./Pages/AboutMovies";
import Home from "./Pages/Home";
import ListMovies from "./Pages/ListMovies";
import NotFound from "./Pages/NotFound";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<ListMovies />} />
                    <Route path="/movies/about/:id" element={<AboutMovies />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
