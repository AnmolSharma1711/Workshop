import React, { useState } from 'react';
import { Download, FileArchive, Brain, Calendar } from 'lucide-react';
import './App.css';

function App() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Fruits Classification.zip';
    link.download = 'Fruits Classification.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset download state after 2 seconds
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logos">
            <img src="/logo.png" alt="Main Logo" className="logo main-logo" />
            <img src="/club-logo.png" alt="Club Logo" className="logo club-logo" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="main">
        <div className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <Brain className="brain-icon" />
                AI/ML Workshop
                <span className="gradient-text">2025</span>
              </h1>
              <p className="hero-subtitle">
                Discover the power of Artificial Intelligence and Machine Learning
              </p>
              <div className="workshop-details">
                <div className="calendar-date">
                  <div className="calendar-header">
                    <Calendar className="calendar-icon" />
                    <span className="month-year">2025</span>
                  </div>
                  <div className="date-highlight">
                    <span className="day-number">November 10</span>
                    <span className="day-name">(Sunday)</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Download Card */}
            <div className="download-card">
              <div className="card-header">
                <FileArchive className="card-icon" />
                <h2>Workshop Materials</h2>
              </div>
              <p className="card-description">
                Download the complete dataset and materials for our Fruits Classification workshop. 
                Get hands-on experience with real-world AI/ML projects!
              </p>
              <div className="file-info">
                <span className="file-name">Fruits Classification.zip</span>
                <span className="file-size">Dataset & Resources</span>
              </div>
              <button 
                className={`download-btn ${isDownloading ? 'downloading' : ''}`}
                onClick={handleDownload}
                disabled={isDownloading}
              >
                <Download className="btn-icon" />
                {isDownloading ? 'Downloading...' : 'Download Materials'}
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="features">
          <div className="features-content">
            <h2 className="features-title">What You'll Learn</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🤖</div>
                <h3>Machine Learning Basics</h3>
                <p>Understanding fundamental ML concepts and algorithms</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🍎</div>
                <h3>Image Classification</h3>
                <p>Hands-on fruit classification using deep learning</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🐍</div>
                <h3>Python & TensorFlow</h3>
                <p>Practical coding with industry-standard tools</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Data Visualization</h3>
                <p>Creating insightful charts and model interpretations</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 AI/ML Workshop. Empowering the next generation of AI enthusiasts.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;