import NavItem from '../nav-item/NavItem'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.nav__container}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavItem styles={styles.nav__title} to='/dashboard'>
              Home
            </NavItem>
          </li>
          <li>
            <NavItem
              to='/dashboard/registrar-negocio'
              styles={styles.nav__link}
              activeStyle={styles.nav__link_active}
            >
              Negocio
            </NavItem>
          </li>
          <li>
            <NavItem
              to='/dashboard/registrar-establecimiento'
              styles={styles.nav__link}
              activeStyle={styles.nav__link_active}
            >
              Establecimiento
            </NavItem>
          </li>
          <li>
            <NavItem
              to='/dashboard/ajustes-del-perfil'
              styles={styles.nav__link}
              activeStyle={styles.nav__link_active}
            >
              Ajustes
            </NavItem>
          </li>
        </ul>
      </nav>
      <NavItem to='/login' styles={styles.nav__link}>
        Cerrar Sesión
      </NavItem>
    </div>
  )
}
