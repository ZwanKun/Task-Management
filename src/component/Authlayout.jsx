import BackgroundAnimation from './BackgroundAnimation/BackgroundAnimation';

function AuthLayout({ children }) {
  return (
    <div className="connection-container">
      {children}
      <BackgroundAnimation />
    </div>
  );
}

export default AuthLayout;
