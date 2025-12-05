import React, {useState} from 'react';
import './Contacto.css';


const Contacto = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'; //29/11/2025


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch(`${API_URL}/contact`, { //29/11/2025
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(form)
        
      });

      const data = await res.json();

      if (!data.ok) throw new Error(data.error || "Error en la petición");

      setStatus({ loading: false, success: "Mensaje enviado con éxito 🎉", error: null });

      // Limpia el formulario
      setForm({ name: "", email: "", message: "" });
      
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  return (
    <section id="contacto" className="contact-section">
      <h2>Contacto</h2>
      <p className="contact-subtitle">¿Tenés un proyecto en mente? Escribinos 👇</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        
        <input 
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input 
          type="email"
          name="email"
          placeholder="Tu email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" disabled={status.loading}>
          {status.loading ? "Enviando..." : "Enviar mensaje"}
        </button>

        {status.success && <p className="success-msg">{status.success}</p>}
        {status.error && <p className="error-msg">{status.error}</p>}
      </form>
    </section>
  );
};

export default Contacto;