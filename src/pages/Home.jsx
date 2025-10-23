import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.2), transparent)',
          top: '10%',
          left: '10%',
          filter: 'blur(60px)'
        }}></div>
        <div style={{
          position: 'absolute',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(240, 147, 251, 0.2), transparent)',
          bottom: '15%',
          right: '15%',
          filter: 'blur(60px)'
        }}></div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <h1 className="display-1 fw-bold mb-4 text-white">
                Build The <span className="gradient-text">Future</span> Today
              </h1>
              <p className="lead mb-5" style={{ 
                color: '#b0b0b0', 
                fontSize: '1.5rem', 
                maxWidth: '800px', 
                margin: '0 auto 3rem' 
              }}>
                Transform your ideas into reality with cutting-edge technology and innovative solutions.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/about" className="btn btn-modern btn-lg px-5">
                  Get Started
                </Link>
                <Link to="/support" className="btn btn-outline-modern btn-lg px-5">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="section-padding" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3 text-white">
              Powerful <span className="gradient-text">Features</span>
            </h2>
            <p className="lead" style={{ color: '#b0b0b0' }}>
              Everything you need to succeed
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="modern-card h-100">
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '15px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                  </svg>
                </div>
                <h4 className="mb-3 text-white">Lightning Fast</h4>
                <p style={{ color: '#b0b0b0', marginBottom: 0 }}>
                  Optimized performance with sub-second load times and efficient processing.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="modern-card h-100">
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '15px',
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                  </svg>
                </div>
                <h4 className="mb-3 text-white">Secure & Reliable</h4>
                <p style={{ color: '#b0b0b0', marginBottom: 0 }}>
                  Enterprise-grade security with 99.9% uptime guarantee and data protection.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="modern-card h-100">
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '15px',
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 16 16">
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"/>
                  </svg>
                </div>
                <h4 className="mb-3 text-white">Fully Responsive</h4>
                <p style={{ color: '#b0b0b0', marginBottom: 0 }}>
                  Perfect experience across all devices with mobile-first design approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="section-padding" style={{ backgroundColor: '#0f0f0f' }}>
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-lg-3 col-md-6">
              <h2 className="display-4 fw-bold gradient-text mb-2">500+</h2>
              <p style={{ color: '#b0b0b0' }}>Projects Delivered</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h2 className="display-4 fw-bold gradient-text mb-2">10K+</h2>
              <p style={{ color: '#b0b0b0' }}>Happy Clients</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h2 className="display-4 fw-bold gradient-text mb-2">99%</h2>
              <p style={{ color: '#b0b0b0' }}>Uptime</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h2 className="display-4 fw-bold gradient-text mb-2">150+</h2>
              <p style={{ color: '#b0b0b0' }}>Team Members</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="modern-card text-center" style={{ padding: '3rem' }}>
                <h2 className="display-5 fw-bold mb-4 text-white">
                  Ready to <span className="gradient-text">Get Started</span>?
                </h2>
                <p className="lead mb-4" style={{ color: '#b0b0b0' }}>
                  Join thousands of companies already using TechFlow
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link to="/support" className="btn btn-modern btn-lg px-5">
                    Start Free Trial
                  </Link>
                  <Link to="/about" className="btn btn-outline-modern btn-lg px-5">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home