import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Home() {
    const navigate = useNavigate();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    function handleValidateLogin(e: any) {
        e.preventDefault();

        if (user === "admin" && password === "Admin123!") {
            navigate("/movies", {
                state: {
                    authenticated: "token",
                },
            });
        } else {
            alert("Username or password is invalid! Type again.");
        }
    }

    return (
        <div className="h">
            <h1 className="h-title">Access the movies</h1>
            <form>
                <div className="h-background">
                    <label htmlFor="user" className="h-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="h-textfield"
                        name="user"
                        placeholder="Type here"
                        value={user}
                        onInput={(e) =>
                            setUser((e.target as HTMLInputElement).value)
                        }
                    />
                    <label htmlFor="password" className="h-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="h-textfield"
                        name="password"
                        placeholder="************"
                        value={password}
                        onInput={(e) =>
                            setPassword((e.target as HTMLInputElement).value)
                        }
                    />
                    <div className="h-button--center">
                        <button
                            type="submit"
                            className="h-button center"
                            onClick={handleValidateLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Home;
