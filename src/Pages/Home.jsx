import React from "react";

const Home = () => {
    return (
        <div
            style={{
                position: "relative",
                minHeight: "100vh",
                background: "linear-gradient(to right, #141e30, #243b55)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                fontFamily: "Segoe UI, sans-serif",
                color: "#fff",
            }}
        >
            {/* Bubbles */}
            {Array.from({ length: 10 }).map((_, index) => (
                <span
                    key={index}
                    style={{
                        position: "absolute",
                        bottom: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 30 + 10}px`,
                        height: `${Math.random() * 30 + 10}px`,
                        background: "rgba(255, 255, 255, 0.15)",
                        borderRadius: "50%",
                        animation: `floatBubble ${Math.random() * 10 + 5}s ease-in infinite`,
                        zIndex: 0,
                    }}
                />
            ))}

            {/* Main Content */}
            <div
                style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    padding: "2rem 3rem",
                    borderRadius: "20px",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    textAlign: "center",
                    zIndex: 1,
                    animation: "fadeIn 1.2s ease-out",
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
                <p
                    style={{
                        fontSize: "1.1rem",
                        marginBottom: "2rem",
                        maxWidth: "400px",
                        margin: "0 auto 2rem",
                    }}
                >
                    Passionate about crafting beautiful and functional web experiences.
                    Let's build something amazing together!
                </p>
                <a
                    href="https://github.com/Watcher037"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        padding: "0.75rem 2rem",
                        background: "linear-gradient(90deg, #ff8c00, #ff0080)",
                        color: "#fff",
                        borderRadius: "30px",
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        boxShadow: "0 4px 12px rgba(255,0,128,0.3)",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow = "0 6px 16px rgba(255,0,128,0.5)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(255,0,128,0.3)";
                    }}
                >
                    Contact Me
                </a>
            </div>

            {/* Keyframes */}
            <style>
                {`
                    @keyframes floatBubble {
                        0% {
                            transform: translateY(0) scale(1);
                            opacity: 0.8;
                        }
                        100% {
                            transform: translateY(-100vh) scale(1.5);
                            opacity: 0;
                        }
                    }

                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Home;
