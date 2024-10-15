import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function NavItem({ to, children, styles, activeStyle }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `${styles} ${isActive && activeStyle}`}
    >
      {children}
    </NavLink>
  )
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  styles: PropTypes.string,
  activeStyle: PropTypes.string,
}
