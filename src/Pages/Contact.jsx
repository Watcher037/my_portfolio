import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic (e.g., API call)
    setSubmitted(true);
  };

  return (
    <section className="contact-section" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Contact Me</h2>
        <p style={styles.subheading}>
          Feel free to reach out by filling the form below!
        </p>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            style={styles.textarea}
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
          />
          <button style={styles.button} type="submit">
            Send Message
          </button>
          {submitted && (
            <p style={styles.success}>Thank you for contacting me!</p>
          )}
        </form>
      </div>
    </section>
  );
};

const styles = {
  section: {
    width: "100%",
    minHeight: "100vh",
    background: "#f9f9f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 0",
  },
  container: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    padding: "32px",
    maxWidth: "400px",
    width: "100%",
    margin: "0 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "8px",
    color: "#222",
    textAlign: "center",
  },
  subheading: {
    fontSize: "1rem",
    marginBottom: "24px",
    color: "#555",
    textAlign: "center",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    outline: "none",
  },
  textarea: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    resize: "vertical",
    outline: "none",
  },
  button: {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    background: "#007bff",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.2s",
  },
  success: {
    color: "#28a745",
    marginTop: "12px",
    textAlign: "center",
  },
};

export default Contact;