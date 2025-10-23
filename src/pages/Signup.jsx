import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    if (!formData.terms) {
      newErrors.terms = 'You must accept the terms and conditions'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert('Account created successfully!')
      navigate('/login')
    }, 1500)
  }

  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      paddingBottom: '80px'
    }}>
      {/* Decorative Background */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(240, 147, 251, 0.15), transparent)',
        top: '5%',
        left: '5%',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15), transparent)',
        bottom: '5%',
        right: '5%',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }}></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="modern-card" style={{ padding: '3rem' }}>
              <div className="text-center mb-4">
                <h2 className="fw-bold mb-2 text-white">Create Account</h2>
                <p style={{ color: '#b0b0b0' }}>Join TechFlow and start building today</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label text-white">Full Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    style={{
                      backgroundColor: '#0f0f0f',
                      border: errors.fullName ? '1px solid #f5576c' : '1px solid #2a2a2a',
                      color: '#ffffff',
                      padding: '12px'
                    }}
                  />
                  {errors.fullName && (
                    <div className="invalid-feedback" style={{ display: 'block' }}>
                      {errors.fullName}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-white">Email Address</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={{
                      backgroundColor: '#0f0f0f',
                      border: errors.email ? '1px solid #f5576c' : '1px solid #2a2a2a',
                      color: '#ffffff',
                      padding: '12px'
                    }}
                  />
                  {errors.email && (
                    <div className="invalid-feedback" style={{ display: 'block' }}>
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="password" className="form-label text-white">Password</label>
                    <input
                      type="password"
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Min. 8 characters"
                      style={{
                        backgroundColor: '#0f0f0f',
                        border: errors.password ? '1px solid #f5576c' : '1px solid #2a2a2a',
                        color: '#ffffff',
                        padding: '12px'
                      }}
                    />
                    {errors.password && (
                      <div className="invalid-feedback" style={{ display: 'block' }}>
                        {errors.password}
                      </div>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="confirmPassword" className="form-label text-white">Confirm Password</label>
                    <input
                      type="password"
                      className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Repeat password"
                      style={{
                        backgroundColor: '#0f0f0f',
                        border: errors.confirmPassword ? '1px solid #f5576c' : '1px solid #2a2a2a',
                        color: '#ffffff',
                        padding: '12px'
                      }}
                    />
                    {errors.confirmPassword && (
                      <div className="invalid-feedback" style={{ display: 'block' }}>
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="terms" style={{ color: '#b0b0b0' }}>
                      I agree to the{' '}
                      <a href="#" style={{ color: '#667eea', textDecoration: 'none' }}>
                        Terms of Service
                      </a>
                      {' '}and{' '}
                      <a href="#" style={{ color: '#667eea', textDecoration: 'none' }}>
                        Privacy Policy
                      </a>
                    </label>
                    {errors.terms && (
                      <div className="invalid-feedback" style={{ display: 'block' }}>
                        {errors.terms}
                      </div>
                    )}
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-modern w-100 mb-3"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </button>

                <div className="text-center">
                  <p style={{ color: '#b0b0b0', marginBottom: '1rem' }}>OR</p>
                  <button 
                    type="button" 
                    className="btn btn-outline-modern w-100 mb-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '8px' }}>
                      <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                    </svg>
                    Sign up with Google
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-outline-modern w-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '8px' }}>
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                    Sign up with GitHub
                  </button>
                </div>
              </form>

              <div className="text-center mt-4">
                <p style={{ color: '#b0b0b0' }}>
                  Already have an account?{' '}
                  <Link to="/login" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '600' }}>
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup