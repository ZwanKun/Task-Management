import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import './Authlayout.css'
function AuthLayout({ children }) {
  return (
    <div className="connection-container">
      {children}
      <BackgroundAnimation />
    </div>
  );
}

export default AuthLayout;
