// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './register.module.css'
import registrationImage from '../../../assets/icon.png'

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    dni: '',
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Lógica de envío al backend...
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className={styles['register-wrapper']}>
      <div className={styles['register-container']}>
        <div className={styles['image-container']}>
          <Link to='/' className={styles['image-link']}>
            <img src={registrationImage} alt='Registro' className={styles['registration-image']} />
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles['form-group']}>
            <label htmlFor='username'>Usuario</label>
            <input
              type='text'
              id='username'
              name='username'
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor='email'>Correo Electrónico</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor='password'>Contraseña</label>
            <div className={styles['password-input-container']}>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button
                type='button'
                className={styles['toggle-password-button']}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className={styles['form-group']}>
            <label htmlFor='confirmPassword'>Confirmar Contraseña</label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor='dni'>DNI</label>
            <input
              type='text'
              id='dni'
              name='dni'
              value={formData.dni}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type='submit'>Registrarse</button>
        </form>
        <p className={styles['login-text']}>
          ¿Ya tienes una cuenta?{' '}
          <Link to='/login' className={styles['login-link']}>
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  )
}
