import React from 'react'
import styles from './error-boundary.module.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function ErrorBoundary() {
  return (
    <div className={styles.errorContainer}>
      <img src={logo} alt='Logo' className={styles.logo} />
      <h1 className={styles.title}>¡Oops error!</h1>
      <p className={styles.description}>
        Página no encontrada,Por favor,verifica la URL o regresa a la página de
        inicio.
      </p>
      <Link to='/' className={styles.buttonwelcome}>
        Regresar
      </Link>
    </div>
  )
}
