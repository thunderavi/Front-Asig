import { useState, useEffect } from 'react'

function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [messages, setMessages] = useState([])

  // Load messages from localStorage when component mounts
  useEffect(() => {
    const savedMessages = localStorage.getItem('supportMessages')
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages))
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create new message object with timestamp
    const newMessage = {
      ...formData,
      id: Date.now(),
      date: new Date().toLocaleString()
    }
    
    // Add to messages array
    const updatedMessages = [...messages, newMessage]
    setMessages(updatedMessages)
    
    // Save to localStorage
    localStorage.setItem('supportMessages', JSON.stringify(updatedMessages))
    
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  const deleteMessage = (id) => {
    const updatedMessages = messages.filter(msg => msg.id !== id)
    setMessages(updatedMessages)
    localStorage.setItem('supportMessages', JSON.stringify(updatedMessages))
  }

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      {/* Header Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-white">
              <h1 className="display-4 fw-bold mb-3">Support Center</h1>
              <p className="lead">
                Have questions? We're here to help! Get in touch with our support team.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="container py-5">
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="modern-card h-100 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#667eea" className="mb-3" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
              <h5 className="text-white mb-3">Email Us</h5>
              <p style={{ color: '#b0b0b0' }}>support@techflow.com</p>
              <p style={{ color: '#808080', fontSize: '0.9rem' }}>We'll respond within 24 hours</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="modern-card h-100 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#667eea" className="mb-3" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z"/>
              </svg>
              <h5 className="text-white mb-3">Call Us</h5>
              <p style={{ color: '#b0b0b0' }}>+1 (555) 123-4567</p>
              <p style={{ color: '#808080', fontSize: '0.9rem' }}>Mon-Fri, 9am-5pm EST</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="modern-card h-100 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#667eea" className="mb-3" viewBox="0 0 16 16">
                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
              </svg>
              <h5 className="text-white mb-3">Live Chat</h5>
              <p style={{ color: '#b0b0b0' }}>Chat with our team</p>
              <p style={{ color: '#808080', fontSize: '0.9rem' }}>Available 24/7</p>
            </div>
          </div>
        </div>

        {/* Success Alert */}
        {submitted && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong> Your message has been sent and saved. We'll get back to you soon.
            <button type="button" className="btn-close" onClick={() => setSubmitted(false)}></button>
          </div>
        )}

        {/* Contact Form */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div className="modern-card" style={{ padding: '3rem' }}>
              <h3 className="text-white mb-4">Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label text-white">Full Name *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      style={{
                        backgroundColor: '#0f0f0f',
                        border: '1px solid #2a2a2a',
                        color: '#ffffff',
                        padding: '12px'
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label text-white">Email Address *</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      style={{
                        backgroundColor: '#0f0f0f',
                        border: '1px solid #2a2a2a',
                        color: '#ffffff',
                        padding: '12px'
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label text-white">Subject *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      style={{
                        backgroundColor: '#0f0f0f',
                        border: '1px solid #2a2a2a',
                        color: '#ffffff',
                        padding: '12px'
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label text-white">Message *</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      required
                      style={{
                        backgroundColor: '#0f0f0f',
                        border: '1px solid #2a2a2a',
                        color: '#ffffff',
                        padding: '12px'
                      }}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-modern btn-lg w-100">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Saved Messages */}
        {messages.length > 0 && (
          <div className="row mb-5">
            <div className="col-lg-10 mx-auto">
              <div className="modern-card" style={{ padding: '2rem' }}>
                <h4 className="text-white mb-4">Your Saved Messages ({messages.length})</h4>
                <div className="d-flex flex-column gap-3">
                  {messages.map((msg) => (
                    <div 
                      key={msg.id} 
                      style={{
                        backgroundColor: '#0f0f0f',
                        padding: '1.5rem',
                        borderRadius: '10px',
                        border: '1px solid #2a2a2a'
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h6 className="text-white mb-1">{msg.subject}</h6>
                          <small style={{ color: '#808080' }}>{msg.date}</small>
                        </div>
                        <button 
                          onClick={() => deleteMessage(msg.id)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#f5576c',
                            cursor: 'pointer',
                            fontSize: '1.2rem'
                          }}
                        >
                          ×
                        </button>
                      </div>
                      <p style={{ color: '#b0b0b0', marginBottom: '0.5rem' }}>
                        <strong>From:</strong> {msg.name} ({msg.email})
                      </p>
                      <p style={{ color: '#c0c0c0', marginBottom: 0 }}>
                        {msg.message}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h3 className="text-center text-white mb-4">Frequently Asked Questions</h3>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item modern-card mb-3" style={{ border: 'none' }}>
                <h2 className="accordion-header">
                  <button 
                    className="accordion-button text-white" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#faq1"
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                  >
                    How long does it take to get a response?
                  </button>
                </h2>
                <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                  <div className="accordion-body" style={{ color: '#b0b0b0' }}>
                    We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.
                  </div>
                </div>
              </div>

              <div className="accordion-item modern-card mb-3" style={{ border: 'none' }}>
                <h2 className="accordion-header">
                  <button 
                    className="accordion-button collapsed text-white" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#faq2"
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                  >
                    What are your support hours?
                  </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body" style={{ color: '#b0b0b0' }}>
                    Our phone support is available Monday through Friday, 9am to 5pm EST. Email and chat support are available 24/7.
                  </div>
                </div>
              </div>

              <div className="accordion-item modern-card mb-3" style={{ border: 'none' }}>
                <h2 className="accordion-header">
                  <button 
                    className="accordion-button collapsed text-white" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#faq3"
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                  >
                    Do you offer technical support?
                  </button>
                </h2>
                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body" style={{ color: '#b0b0b0' }}>
                    Yes! Our technical support team is available to help with any technical issues you may encounter. Please include as much detail as possible in your message.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support