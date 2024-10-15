import styles from './user-settings.module.css'
import userIcon from './img/user-icon.jpg'

export default function UserSettings() {
    return (
        <div className={styles.container}>
            <div className={styles.profileSection}>
                <img src={userIcon} alt='User Icon' className={styles.icon} />
                <div className={styles.userInfo}>
                    <h1 className={styles.title}>Datos del usuario</h1>
                    <p className={styles.subtitle}>Sistema</p>
                </div>
            </div>
            <div className={styles.settings}>
                <button className={styles.button}>Actualizar Usuario</button>
                <button className={styles.button}>Cambiar Contraseña</button>
            </div>
        </div>
    )
}
