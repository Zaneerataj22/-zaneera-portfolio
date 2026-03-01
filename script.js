// Smooth scrolling for navigation links (excluding external links and downloads)
document.querySelectorAll('a[href^="#"]:not(.project-link):not(.modal-btn)').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// Form submission handler with EmailJS
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.classList.add('btn-loading');
    submitBtn.textContent = '';
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    try {
        // Simulate email sending (replace with actual EmailJS or backend API)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        formMessage.textContent = 'Message sent successfully! I will get back to you soon.';
        formMessage.className = 'form-message success show';
        contactForm.reset();
        
        // Log to console (for demo purposes)
        console.log('Form submitted:', data);
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.remove('show');
        }, 5000);
        
    } catch (error) {
        // Show error message
        formMessage.textContent = 'Failed to send message. Please try again or email directly.';
        formMessage.className = 'form-message error show';
        
        setTimeout(() => {
            formMessage.classList.remove('show');
        }, 5000);
    } finally {
        // Reset button
        submitBtn.classList.remove('btn-loading');
        submitBtn.textContent = originalText;
    }
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(42, 42, 62, 0.95)';
    } else {
        navbar.style.backgroundColor = 'var(--light-bg)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Simple fade-in for hero title (removed typing effect to prevent HTML rendering issues)
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateY(20px)';
    heroTitle.style.transition = 'opacity 1s ease, transform 1s ease';
    
    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 300);
}

// Skill cards animation on hover
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add active state to navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});


// Particle animation for hero background
function createParticles() {
    const particlesContainer = document.querySelector('.particles-bg');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(99, 102, 241, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${posX}%;
            top: ${posY}%;
            animation: float ${duration}s ease-in-out ${delay}s infinite;
            pointer-events: none;
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Add floating animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
        }
        25% {
            transform: translate(20px, -20px) scale(1.1);
            opacity: 0.5;
        }
        50% {
            transform: translate(-20px, -40px) scale(0.9);
            opacity: 0.7;
        }
        75% {
            transform: translate(-40px, -20px) scale(1.05);
            opacity: 0.4;
        }
    }
`;
document.head.appendChild(style);

// Initialize particles
createParticles();

// Add glowing effect to buttons on hover
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.6)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

// Typing effect completion handler
setTimeout(() => {
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        typingText.style.borderRight = 'none';
    }
}, 4500);


// Animate section titles and content
const animateElements = document.querySelectorAll('.animate-title, .animate-content');

const animateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

animateElements.forEach(el => {
    animateObserver.observe(el);
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple-effect 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple-effect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Skill cards hover effect
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.03)';
        this.style.boxShadow = '0 15px 40px rgba(99, 102, 241, 0.4)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '';
    });
});

// Timeline items animation
document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});


// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

if (themeToggle) {
    // Check for saved theme preference or default to dark mode
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        root.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
        root.classList.toggle('light-mode');
        
        // Save theme preference
        const theme = root.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        
        // Add rotation animation
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
}


// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth page transitions
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add smooth transitions when navigating
document.querySelectorAll('a[href^="#"]:not(.project-link)').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Add fade effect
            target.style.opacity = '0.5';
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Fade back in
            setTimeout(() => {
                target.style.transition = 'opacity 0.5s ease';
                target.style.opacity = '1';
            }, 500);
        }
    });
});


// Typing Animation for Multiple Roles
const roles = [
    "Full Stack Developer",
    "Software Developer",
    "React Developer",
    "Python Developer",
    "API Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-roles');
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let timeout = isDeleting ? deletingSpeed : typingSpeed;
    
    if (!isDeleting && charIndex === currentRole.length) {
        timeout = pauseTime;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }
    
    setTimeout(typeRole, timeout);
}

// Start typing animation after page loads
setTimeout(typeRole, 1000);

// Statistics Counter Animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                if (counter.textContent === '0') {
                    animateCounter(counter);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsContainer = document.querySelector('.stats-container');
if (statsContainer) {
    statsObserver.observe(statsContainer);
}

// Skills Progress Bar Animation
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress-bar');
            progressBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                setTimeout(() => {
                    bar.style.width = progress + '%';
                }, 200);
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.querySelector('.skills-progress');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}


// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});

// 3D Card Tilt Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// Also apply 3D tilt to stat items
document.querySelectorAll('.stat-item').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});


// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Download Portfolio Button
const downloadPortfolioBtn = document.getElementById('downloadPortfolio');

if (downloadPortfolioBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            downloadPortfolioBtn.classList.add('visible');
        } else {
            downloadPortfolioBtn.classList.remove('visible');
        }
    });

    downloadPortfolioBtn.addEventListener('click', () => {
        // Create a simple print-friendly version
        window.print();
        
        // Alternative: If you want to download as PDF, you can use html2pdf library
        // Or redirect to a pre-made PDF
        // window.location.href = 'ZANEERA-TAJ-Portfolio.pdf';
    });
}

// Add print styles dynamically
const printStyle = document.createElement('style');
printStyle.textContent = `
    @media print {
        .navbar,
        .back-to-top,
        .download-portfolio,
        .scroll-progress,
        .theme-toggle,
        .menu-toggle,
        .particles-bg,
        .scroll-indicator,
        .cta-buttons,
        .contact-form,
        footer .social-links {
            display: none !important;
        }
        
        body {
            background: white !important;
            color: black !important;
        }
        
        section {
            page-break-inside: avoid;
            padding: 20px 0 !important;
        }
        
        .hero {
            min-height: auto !important;
            padding-top: 20px !important;
        }
        
        .project-card,
        .skill-item,
        .timeline-item,
        .stat-item {
            page-break-inside: avoid;
        }
    }
`;
document.head.appendChild(printStyle);


// Project Details Modal
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.getElementById('modalOverlay');

const projectsData = {
    task: {
        title: 'Task & Project Management System',
        image: 'Task & Project.png',
        description: 'Full-stack web application to manage tasks and team productivity. Built dynamic dashboards using React.js, developed REST APIs using Python, designed relational database schema in MySQL, implemented role-based access control, and optimized backend queries for better performance.',
        features: [
            'Project timeline visualization and Gantt charts',
            'RESTful API integration for seamless data flow',
            'Advanced filtering and search functionality',
            'Performance-optimized MySQL queries',
            'Responsive design for mobile and desktop'
        ],
        techStack: ['React.js', 'Python', 'MySQL', 'REST API', 'HTML5', 'CSS3', 'JavaScript'],
        role: 'Full Stack Developer - Designed and developed the entire application from scratch, including frontend UI components, backend APIs, database schema design, and deployment.',
        liveLink: 'task-management-demo.html',
        githubLink: '#'
    },
    erp: {
        title: 'ERP-Based Student Management System',
        image: 'ERP.png',
        description: 'Developed full-stack ERP application for academic workflows. Built secure authentication and RBAC, designed normalized MySQL database schema, and improved reporting speed by optimizing SQL queries.',
        features: [
            'Secure role-based authentication (RBAC)',
            'Student enrollment and course management',
            'Attendance tracking and reporting',
            'Performance analytics and dashboards',
            'Optimized SQL queries for fast data retrieval'
        ],
        techStack: ['React.js', 'Python', 'MySQL', 'REST API', 'HTML5', 'CSS3', 'JavaScript'],
        role: 'Full Stack Developer - Developed ERP modules, implemented authentication system, designed database architecture, and optimized query performance for better reporting speed.',
        liveLink: 'erp-system-demo.html',
        githubLink: '#'
    }
};

// Open modal when clicking project link
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const projectType = link.getAttribute('data-project');
        const project = projectsData[projectType];
        
        if (project) {
            // Populate modal
            document.getElementById('modalProjectImage').src = project.image;
            document.getElementById('modalProjectTitle').textContent = project.title;
            document.getElementById('modalProjectDescription').textContent = project.description;
            
            // Features
            const featuresList = document.getElementById('modalFeatures');
            featuresList.innerHTML = '';
            project.features.forEach(feature => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-check-circle"></i> ${feature}`;
                featuresList.appendChild(li);
            });
            
            // Tech Stack
            const techStack = document.getElementById('modalTechStack');
            techStack.innerHTML = '';
            project.techStack.forEach(tech => {
                const span = document.createElement('span');
                span.className = 'tech-badge';
                span.textContent = tech;
                techStack.appendChild(span);
            });
            
            // Role
            document.getElementById('modalRole').textContent = project.role;
            
            // Links
            const liveLink = document.getElementById('modalLiveLink');
            const githubLink = document.getElementById('modalGithubLink');
            
            if (liveLink) {
                liveLink.href = project.liveLink;
                console.log('Live link set to:', project.liveLink);
                
                // Force open in new tab
                liveLink.onclick = function(e) {
                    window.open(project.liveLink, '_blank');
                    return false;
                };
            }
            
            if (githubLink) {
                githubLink.href = project.githubLink;
            }
            
            // Show modal
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeProjectModal);
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeProjectModal();
    }
});
