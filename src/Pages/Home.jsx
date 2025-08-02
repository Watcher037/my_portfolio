import React from "react";

const Home = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontFamily: "Segoe UI, sans-serif",
            }}
        >
            <div
                style={{
                    background: "rgba(0,0,0,0.5)",
                    padding: "2rem 3rem",
                    borderRadius: "20px",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    textAlign: "center",
                }}
            >
                <img
                    src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
                    alt="Profile"
                    style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        marginBottom: "1.5rem",
                        border: "4px solid #fff",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                    }}
                />
                <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
                    Hi, I'm Bibhu Prasad Dash
                </h1>
                <h2 style={{ fontWeight: "400", fontSize: "1.5rem", marginBottom: "1.5rem" }}>
                    Frontend Developer & Designer
                </h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "400px", margin: "0 auto 2rem" }}>
                    Passionate about crafting beautiful and functional web experiences. Let's build something amazing together!
                </p>
                <a
                    href="https://github.com/Watcher037"
                    style={{
                        padding: "0.75rem 2rem",
                        background: "linear-gradient(90deg, #ff8c00 0%, #ff0080 100%)",
                        color: "#fff",
                        borderRadius: "30px",
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        boxShadow: "0 2px 8px rgba(255,0,128,0.2)",
                        transition: "background 0.3s",
                    }}
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default Home;