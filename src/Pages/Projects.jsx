import React from 'react';

const projects = [
  {
    title: 'The Caterz',
    description: 'A  catering base app that connects users with local caterers and help them finding the best one among them.',
    link: 'https://github.com/Watcher037/TheCaterZ',
    image: 'https://tse4.mm.bing.net/th/id/OIP.ofqwSK6JvEwAzumhCDb0ygHaEJ?pid=Api&P=0&h=180',
  },
  
  {
    title: 'Expenses Manager',
    description: 'A modern expenses manager with features for tracking and managing personal finances.',
    link: 'not given',
    image: 'hdjdj',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React showcasing my skills and projects.',
    link: 'not given',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
  },
  
];

const Projects = () => (
  <section style={{
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    padding: '3rem 1rem',
  }}>
    <h2 style={{
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
      color: '#333',
      letterSpacing: '2px',
      textShadow: '0 2px 8px #c3cfe2',
    }}>
      My Projects
    </h2>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem',
    }}>
      {projects.map((project, idx) => (
        <div key={idx} style={{
          background: '#fff',
          borderRadius: '1rem',
          boxShadow: '0 8px 24px rgba(60, 72, 88, 0.15)',
          maxWidth: '320px',
          transition: 'transform 0.2s',
          cursor: 'pointer',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '180px',
              objectFit: 'cover',
              borderTopLeftRadius: '1rem',
              borderTopRightRadius: '1rem',
            }}
          />
          <div style={{ padding: '1.2rem' }}>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '0.7rem',
              color: '#2d3a4b',
            }}>
              {project.title}
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#555',
              marginBottom: '1rem',
            }}>
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '0.6rem 1.2rem',
                background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: '500',
                boxShadow: '0 2px 8px rgba(102,126,234,0.15)',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(90deg, #764ba2 0%, #667eea 100%)'}
              onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'}
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;