'use client';

import { useEffect, useState } from "react";

const LoadingAnimation = ({ onComplete }: { onComplete?: () => void }) => {
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    const phases = [
      () => setCurrentPhase(1), // Logo appears
      () => setCurrentPhase(2), // Tech icons appear
      () => setCurrentPhase(3), // Company name appears
      () => setCurrentPhase(4), // Final fade out
    ];

    const timeouts = [
      setTimeout(phases[0], 500),
      setTimeout(phases[1], 1800),
      setTimeout(phases[2], 2800),
      setTimeout(phases[3], 4200),
    ];

    const finalTimeout = setTimeout(() => {
      if (onComplete) onComplete();
    }, 9000);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(finalTimeout);
    };
  }, [onComplete]);

  // Tech icons with proper SVG paths
  const techIcons = [
    { name: 'React', path: 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.01-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.407 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.407-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.01 1.36-.034-.44.572-.895 1.095-1.36 1.562-.455-.467-.91-.99-1.36-1.562z' },
    { name: 'Node', path: 'M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.48.28 1.08.28 1.56 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36L12.78 2.05c-.23-.13-.51-.2-.78-.2z' },
    { name: 'JS', path: 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z' },
    { name: 'Python', path: 'M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.2-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25c-.2 0-.37.09-.5.27-.13.18-.2.42-.2.72 0 .3.07.54.2.72.13.18.3.27.5.27.2 0 .37-.09.5-.27.13-.18.2-.42.2-.72 0-.3-.07-.54-.2-.72-.13-.18-.3-.27-.5-.27zm7.5-13.5c.2 0 .37-.09.5-.27.13-.18.2-.42.2-.72 0-.3-.07-.54-.2-.72-.13-.18-.3-.27-.5-.27-.2 0-.37.09-.5.27-.13.18-.2.42-.2.72 0 .3.07.54.2.72.13.18.3.27.5.27z' },
    { name: 'Database', path: 'M12 2C9.24 2 7 3.79 7 6v2c0 2.21 2.24 4 5 4s5-1.79 5-4V6c0-2.21-2.24-4-5-4zM7 10v2c0 2.21 2.24 4 5 4s5-1.79 5-4v-2c-.82 1.26-2.78 2-5 2s-4.18-.74-5-2zm0 4v2c0 2.21 2.24 4 5 4s5-1.79 5-4v-2c-.82 1.26-2.78 2-5 2s-4.18-.74-5-2z' }
  ];

  return (
    <div className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 ${currentPhase >= 4 ? 'opacity-0' : 'opacity-100'}`}>
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern"></div>
      </div>

      {/* Main Container */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        
        {/* Central Logo */}
        <div className="mb-12">
          <div className={`logo-circle ${currentPhase >= 1 ? 'visible' : 'invisible'}`}>
            <div className="logo-inner">
              <div className="logo-symbol">T</div>
            </div>
          </div>
        </div>

        {/* Tech Stack Icons */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-8">
            {techIcons.map((icon, index) => (
              <div
                key={icon.name}
                className={`tech-item ${currentPhase >= 2 ? 'visible' : 'invisible'}`}
                style={{ 
                  transitionDelay: `${index * 0.2}s`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gray-400"
                >
                  <path d={icon.path} />
                </svg>
                <span className="tech-name">{icon.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Company Name */}
        <div className={`text-center ${currentPhase >= 3 ? 'visible' : 'invisible'}`}>
          <h1 className="company-title">
            TechMystry
          </h1>
          <p className="company-tagline">
            Unleashing Digital Innovation
          </p>
          <div className="company-services">
            Full-Stack Development • Mobile Apps • Cloud Solutions
          </div>
        </div>

        {/* Loading Progress */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="progress-container">
            <div 
              className="progress-bar"
              style={{ width: `${(currentPhase / 4) * 100}%` }}
            ></div>
          </div>
          <p className="progress-text">
            {currentPhase === 0 && 'Loading...'}
            {currentPhase === 1 && 'Initializing...'}
            {currentPhase === 2 && 'Loading modules...'}
            {currentPhase === 3 && 'Almost ready...'}
            {currentPhase >= 4 && 'Complete!'}
          </p>
        </div>
      </div>
<style jsx>{`
  .grid-pattern {
    background-image: linear-gradient(rgba(52, 211, 153, 0.12) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(52, 211, 153, 0.12) 1px, transparent 1px);
    background-size: 40px 40px;
    width: 100%;
    height: 100%;
  }

  .logo-circle {
    width: 100px;
    height: 100px;
    border: 2px solid #34D399;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: scale(0.5);
    transition: all 1s ease-out;
  }

  .logo-circle.visible {
    opacity: 1;
    transform: scale(1);
  }

  .logo-inner {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #024c34, #047857);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .logo-inner::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, #34D399, #FFFFFF);
    border-radius: 50%;
    z-index: -1;
    opacity: 0.45;
  }

  .logo-symbol {
    font-size: 32px;
    font-weight: bold;
    color: #FFFFFF;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .tech-item svg {
    color: #34D399 !important;
  }

  .tech-name {
    font-size: 12px;
    color: #FFFFFF;
    margin-top: 8px;
    font-weight: 500;
  }

  .company-title {
    font-size: 3rem;
    font-weight: 800;
    color: #FFFFFF;
    margin-bottom: 16px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s ease-out;
    letter-spacing: -0.025em;
  }

  .company-tagline {
    font-size: 1.25rem;
    color: #34D399;
    margin-bottom: 12px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 1s ease-out 0.3s;
    font-weight: 300;
  }

  .company-services {
    font-size: 0.875rem;
    color: #FFFFFF;
    opacity: 0;
    transform: translateY(20px);
    transition: all 1s ease-out 0.6s;
  }

  .visible .company-title,
  .visible .company-tagline,
  .visible .company-services {
    opacity: 1;
    transform: translateY(0);
  }

  .progress-container {
    width: 200px;
    height: 2px;
    background: #022a1f;
    border-radius: 1px;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #34D399, #ffffff);
    border-radius: 1px;
    transition: width 0.8s ease-out;
  }

  .progress-text {
    text-align: center;
    font-size: 0.75rem;
    color: #34D399;
    margin-top: 12px;
    font-family: 'Monaco', 'Courier New', monospace;
  }
`}</style>


    </div>
  );
};

export default LoadingAnimation;