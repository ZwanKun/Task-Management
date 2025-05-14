import './Navbar.css';
import Logo from '../../assets/logo1.png';
import { Link, useLocation } from 'react-router-dom';
import { FaCheck, FaRegClipboard } from 'react-icons/fa';
import { MdDashboard, MdOutlineStar } from 'react-icons/md';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { to: '/dashboard', label: 'Dashboard', icon: <MdDashboard /> },
    { to: '/task', label: 'Task', icon: <FaRegClipboard /> },
    { to: '/completed', label: 'Completed', icon: <FaCheck /> },
    { to: '/important', label: 'Important', icon: <MdOutlineStar /> },
  ];

  return (
    <div className="nav-container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>Taskflow</h1>
      </div>
      <div className="nav-links">
        <ul>
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={currentPath === item.to ? 'active' : ''}
              >
                {item.icon} {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
