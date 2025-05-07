import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  return (
    <div className="background-lines">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <path className="line" d="M0,30 C30,90 70,0 100,60" />
        <path className="line" d="M0,50 C20,20 80,80 100,40" />
        <path className="line" d="M0,70 C40,30 60,90 100,30" />
      </svg>
    </div>
  );
};

export default BackgroundAnimation;

