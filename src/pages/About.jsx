function About() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      {/* Header Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center text-white">
              <h1 className="display-3 fw-bold mb-4">About TechFlow</h1>
              <p className="lead" style={{ fontSize: '1.3rem' }}>
                We're on a mission to revolutionize the digital landscape with innovative solutions and cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="section-padding" style={{ backgroundColor: '#0f0f0f' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-white">
              Our <span className="gradient-text">Foundation</span>
            </h2>
            <p className="lead" style={{ color: '#b0b0b0' }}>
              The principles that guide everything we do
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="modern-card h-100 text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                  </svg>
                </div>
                <h4 className="mb-3 text-white">Our Mission</h4>
                <p style={{ color: '#c0c0c0' }}>
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation in an ever-evolving landscape.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="modern-card h-100 text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                  </svg>
                </div>
                <h4 className="mb-3 text-white">Our Vision</h4>
                <p style={{ color: '#c0c0c0' }}>
                  To become the global leader in digital innovation, creating a future where technology seamlessly enhances every aspect of business and life.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="modern-card h-100 text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                  </svg>
                </div>
                <h4 className="mb-3 text-white">Our Values</h4>
                <p style={{ color: '#c0c0c0' }}>
                  Innovation, integrity, and excellence drive everything we do. We believe in transparency, collaboration, and delivering exceptional value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="section-padding" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-white">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="lead" style={{ color: '#b0b0b0' }}>
              Milestones that shaped our story
            </p>
          </div>

          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="mb-5" style={{
                borderLeft: '3px solid #667eea',
                paddingLeft: '40px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  left: '-11px',
                  top: '0',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 0 20px rgba(102, 126, 234, 0.6)'
                }}></div>
                <h5 className="text-white fw-bold mb-2">2018 - Foundation</h5>
                <p style={{ color: '#c0c0c0' }}>
                  TechFlow was founded with a vision to transform the digital landscape. Started with a small team of passionate developers.
                </p>
              </div>

              <div className="mb-5" style={{
                borderLeft: '3px solid #667eea',
                paddingLeft: '40px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  left: '-11px',
                  top: '0',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 0 20px rgba(102, 126, 234, 0.6)'
                }}></div>
                <h5 className="text-white fw-bold mb-2">2019 - First Major Client</h5>
                <p style={{ color: '#c0c0c0' }}>
                  Secured our first enterprise client and delivered a groundbreaking solution that increased their efficiency by 300%.
                </p>
              </div>

              <div className="mb-5" style={{
                borderLeft: '3px solid #667eea',
                paddingLeft: '40px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  left: '-11px',
                  top: '0',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 0 20px rgba(102, 126, 234, 0.6)'
                }}></div>
                <h5 className="text-white fw-bold mb-2">2021 - Global Expansion</h5>
                <p style={{ color: '#c0c0c0' }}>
                  Expanded operations to 5 countries and grew our team to over 100 talented professionals.
                </p>
              </div>

              <div className="mb-5" style={{
                borderLeft: '3px solid #667eea',
                paddingLeft: '40px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  left: '-11px',
                  top: '0',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 0 20px rgba(102, 126, 234, 0.6)'
                }}></div>
                <h5 className="text-white fw-bold mb-2">2023 - Industry Recognition</h5>
                <p style={{ color: '#c0c0c0' }}>
                  Received multiple awards for innovation and excellence in digital transformation services.
                </p>
              </div>

              <div style={{ paddingLeft: '40px', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '-11px',
                  top: '0',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 0 20px rgba(102, 126, 234, 0.6)'
                }}></div>
                <h5 className="text-white fw-bold mb-2">2025 - Future Forward</h5>
                <p style={{ color: '#c0c0c0' }}>
                  Continuing to push boundaries with AI-driven solutions and sustainable technology initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="section-padding" style={{ backgroundColor: '#0f0f0f' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-white">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="lead" style={{ color: '#b0b0b0' }}>
              The brilliant minds behind TechFlow
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="modern-card text-center">
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  margin: '0 auto 1rem'
                }}></div>
                <h5 className="text-white mb-1">Sarah Johnson</h5>
                <p style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>CEO & Founder</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="modern-card text-center">
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  margin: '0 auto 1rem'
                }}></div>
                <h5 className="text-white mb-1">Michael Chen</h5>
                <p style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>CTO</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="modern-card text-center">
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  margin: '0 auto 1rem'
                }}></div>
                <h5 className="text-white mb-1">Emily Rodriguez</h5>
                <p style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>Head of Design</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="modern-card text-center">
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  margin: '0 auto 1rem'
                }}></div>
                <h5 className="text-white mb-1">David Park</h5>
                <p style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="section-padding" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-white">
              By The <span className="gradient-text">Numbers</span>
            </h2>
            <p className="lead" style={{ color: '#b0b0b0' }}>
              Our impact in the digital world
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="modern-card text-center">
                <div className="display-4 fw-bold gradient-text mb-2">500+</div>
                <p style={{ color: '#b0b0b0' }}>Projects Completed</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="modern-card text-center">
                <div className="display-4 fw-bold gradient-text mb-2">150+</div>
                <p style={{ color: '#b0b0b0' }}>Happy Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="modern-card text-center">
                <div className="display-4 fw-bold gradient-text mb-2">50+</div>
                <p style={{ color: '#b0b0b0' }}>Team Members</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="modern-card text-center">
                <div className="display-4 fw-bold gradient-text mb-2">15+</div>
                <p style={{ color: '#b0b0b0' }}>Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About