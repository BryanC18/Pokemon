import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    submitted: false,
    errors: {}
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validateForm();

    if (Object.keys(errors).length === 0) {
      setTimeout(() => {
        this.setState({
          name: '',
          email: '',
          message: '',
          submitted: true,
          errors: {}
        });
      }, 1000);
    } else {
      this.setState({ errors });
    }
  }

  validateForm = () => {
    const { name, email, message } = this.state;
    const errors = {};

    if (name.trim() === '') {
      errors.name = 'Por favor, ingresa tu nombre';
    }

    if (email.trim() === '') {
      errors.email = 'Por favor, ingresa tu correo electrónico';
    } else if (!this.validateEmail(email)) {
      errors.email = 'Por favor, ingresa un correo electrónico válido';
    }

    if (message.trim() === '') {
      errors.message = 'Por favor, ingresa un mensaje';
    }

    return errors;
  }

  validateEmail = (email) => {
    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  }

  render() {
    const { name, email, message, submitted, errors } = this.state;

    if (submitted) {
      return (
        <div className="contact-form">
          <h2>Mensaje enviado</h2>
          <p>Gracias por contactarnos. Te responderemos pronto.</p>
        </div>
      );
    }

    return (
      <div className="contact-form">
        <h2>Formulario de contacto</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={this.handleChange}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;