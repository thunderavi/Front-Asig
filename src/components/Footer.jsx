function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      backgroundColor: '#0a0a0a',
      borderTop: '1px solid #2a2a2a',
      padding: '3rem 0 1.5rem',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-lg-3 col-md-6">
            <h5 className="gradient-text mb-3">⚡ TechFlow</h5>
            <p style={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
              Building the future with innovative technology solutions.
            </p>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white mb-3">Product</h6>
            <div className="d-flex flex-column gap-2">
              <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Features</a>
              <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Pricing</a>
              <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Security</a>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white mb-3">Company</h6>
            <div className="d-flex flex-column gap-2">
              <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>About</a>
              <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Careers</a>
              <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Blog</a>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white mb-3">Resources</h6>
            <div className="d-flex flex-column gap-2">
              <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Docs</a>
              <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Support</a>
              <a href="#" style={{ color: '#b0b0b0', textDecoration: 'none' }}>API</a>
            </div>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ margin: 0, color: '#b0b0b0', fontSize: '0.9rem' }}>
            © {currentYear} TechFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer