import styles from './forgot-password.module.css'
import ButtonBusiness from '../../../components/ButtonBusiness/Button'
import Field from '../../../components/Field/Field'

export default function ForgotPassword() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src='https://placehold.co/150x100' alt='test' />
      <div className={styles.card}>
        <h1 className={styles.title}>Cambio de contraseña</h1>
        <p className={styles.paragraph}>
          Introduce el email que tienes asociado a tu cuenta. Te enviaremos un email desde el cual
          podrás cambiar tu contraseña.
        </p>
        <Field label='Correo electronico' />
        <ButtonBusiness title='Enviar' />
      </div>
    </div>
  )
}
