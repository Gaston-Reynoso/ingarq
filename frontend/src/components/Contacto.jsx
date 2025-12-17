import React, {useState} from 'react';
import './Contacto.css';


// Definición de constantes para validación
const MIN_LENGTH = 10;
const MAX_LENGTH = 500;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular simple



const Contacto = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    // *ADICIÓN 1: Campo honeypot (oculto)
    phone: "" 
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null
  });
  
  // Estado para errores de validación del formulario (cliente)
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    // Limpia los errores de validación de ese campo al escribir
    if (validationErrors[e.target.name]) {
        setValidationErrors(prevErrors => {
            const { [e.target.name]: _, ...rest } = prevErrors;
            return rest;
        });
    }

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'; 

  // *ADICIÓN 2: Función de validación con Email y Nombre
  const validateForm = () => {
    const errors = {};
    
    // Validación de Nombre
    if (!form.name.trim()) {
        errors.name = "Tu nombre es obligatorio.";
    }
    
    // Validación del Email
    if (!form.email || !EMAIL_REGEX.test(form.email)) {
        errors.email = "Por favor, ingresa un email válido.";
    }
    
    // Validación del Mensaje (longitud)
    if (form.message.length < MIN_LENGTH) {
      errors.message = `El mensaje debe tener al menos ${MIN_LENGTH} caracteres.`;
    } else if (form.message.length > MAX_LENGTH) {
      errors.message = `El mensaje no puede exceder los ${MAX_LENGTH} caracteres.`;
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0; // Devuelve true si no hay errores
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // *ADICIÓN 3: Control Honeypot (Anti-Spam)
    if (form.phone.length > 0) {
      console.log("Posible bot detectado. Envío bloqueado.");
      // Envía un mensaje de éxito falso para no alertar al bot
      setStatus({ loading: false, success: "Gracias por tu mensaje.", error: null }); 
      setForm({ name: "", email: "", message: "", phone: "" });
      return; 
    }
    
    // Ejecuta la validación antes de la petición
    if (!validateForm()) {
        setStatus({ loading: false, success: null, error: "Por favor, corrige los errores del formulario." });
        return; 
    }

    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
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
      setForm({ name: "", email: "", message: "", phone: "" });
      
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
        {/* Muestra el error de nombre */}
        {validationErrors.name && <p className="error-msg validation-error">{validationErrors.name}</p>}


        <input 
          type="email"
          name="email"
          placeholder="Tu email"
          value={form.email}
          onChange={handleChange}
         required
        />
        {/* Muestra el error de email */}
        {validationErrors.email && <p className="error-msg validation-error">{validationErrors.email}</p>}


        <textarea
          name="message"
          placeholder={`Tu mensaje (min ${MIN_LENGTH}, max ${MAX_LENGTH})`}
          value={form.message}
          onChange={handleChange}
          required
          minLength={MIN_LENGTH}
          maxLength={MAX_LENGTH}
        ></textarea>
        {/* Muestra el error de mensaje */}
        {validationErrors.message && <p className="error-msg validation-error">{validationErrors.message}</p>}

        {/* *ADICIÓN 4: Campo Honeypot (Requiere CSS para ser invisible) */}
        <input 
          type="text"
          name="phone"
          id="phone-hp"
          value={form.phone}
          onChange={handleChange}
          className="honeypot-field" 
          tabIndex="-1" 
          autoComplete="off" 
        />


        <button type="submit" disabled={status.loading || Object.keys(validationErrors).length > 0}>
          {status.loading ? "Enviando..." : "Enviar mensaje"}
        </button>

        {status.success && <p className="success-msg">{status.success}</p>}
        {status.error && <p className="error-msg">{status.error}</p>}
      </form>
    </section>
  );
};

export default Contacto;