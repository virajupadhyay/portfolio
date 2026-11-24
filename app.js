/**
 * Swiss Minimalist Portfolio Logic
 * Upadhyay Viraj S. — Software Engineer
 */

// Embedded fallback configuration to ensure instant rendering even over file:// protocol
const DEFAULT_CONFIG = {
  profile: {
    name: "Upadhyay Viraj S.",
    shortName: "Viraj",
    monogram: "UV",
    title: "Software Engineer",
    status: "Available for New Opportunities",
    location: "Gujarat, India",
    timezone: "Asia/Kolkata",
    email: "sanjay.bhai2446@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    heroBio: "A versatile Software Engineer focused on crafting high-performance web applications, intelligent Python automation systems, and applied AI/ML models that solve real-world problems.",
    aboutBio: "I am a Software Engineer based in Gujarat, currently pursuing my B.Tech in Information Technology at JG University following a diploma from Government Polytechnic, Rajkot. My engineering journey bridges modern full-stack web development with intelligent data systems and machine learning algorithms. I thrive on translating complex logic into intuitive, efficient, and resilient software.",
    metrics: [
      { label: "Projects Built", value: "12+" },
      { label: "Core Domains", value: "3 (Web, Python, AI)" },
      { label: "Code Quality", value: "Production-Ready" },
      { label: "Location", value: "Gujarat (IST)" }
    ]
  },
  disciplines: [
    "Full-Stack Development",
    "Applied Machine Learning",
    "Python Automation",
    "API Architecture",
    "Computer Vision",
    "Database Engineering",
    "Modern JavaScript",
    "Data Pipelines"
  ],
  skills: {
    languages: ["JavaScript (ES6+)", "Python 3", "C / C++", "SQL", "HTML5", "CSS3 / Sass"],
    frameworks: ["Node.js", "Express.js", "React.js", "Flask", "FastAPI", "Tailwind CSS"],
    ai_ml: ["Scikit-Learn", "TensorFlow", "OpenCV", "Pandas", "NumPy", "Matplotlib", "YOLO"],
    tools: ["Git & GitHub", "Docker Basics", "Postman", "MongoDB", "MySQL", "VS Code", "Linux / Bash"]
  },
  services: [
    {
      id: "01",
      title: "Full-Stack Web Development",
      description: "Architecting responsive, high-speed web platforms with modern JavaScript, Node.js, and clean component-driven architecture."
    },
    {
      id: "02",
      title: "Python Scripting & Automation",
      description: "Engineering robust background scrapers, automated file pipelines, and data processing utilities that save hours of manual labor."
    },
    {
      id: "03",
      title: "Applied AI & Computer Vision",
      description: "Deploying intelligent predictive models, NLP sentiment classifiers, and real-time object detection systems using OpenCV and modern ML frameworks."
    },
    {
      id: "04",
      title: "Database & API Design",
      description: "Designing RESTful APIs with structured database schemas, secure data validation, and optimized query throughput."
    }
  ],
  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "JG University",
      location: "Gujarat, India",
      period: "Currently Pursuing",
      badge: "In Progress",
      description: "Specializing in advanced software engineering, distributed systems, machine learning architectures, and cloud computing principles."
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Government Polytechnic (G.P.), Rajkot",
      location: "Rajkot, Gujarat",
      period: "Completed",
      badge: "Graduated",
      description: "Established deep foundational mastery in object-oriented programming, data structures, relational database management, and computer networking."
    }
  ],
  projects: [
    {
      id: "devtask",
      title: "DevTask",
      subtitle: "Task Management System",
      category: "javascript",
      categoryLabel: "JavaScript / Web",
      featured: true,
      tagline: "A collaborative workflow platform with interactive Kanban boards and real-time tracking.",
      description: "DevTask is a modern productivity application built to organize engineering workflows. Features dynamic drag-and-drop task boards, priority tagging, sprint estimation, and status analytics with persistent local state.",
      problem: "Teams and individuals frequently struggle with cluttered workflows and convoluted project tracking interfaces that distract from actual execution.",
      solution: "Constructed an ultra-responsive, zero-latency task board utilizing custom event handling, intuitive state management, and real-time progress indicators.",
      techStack: ["JavaScript (ES6+)", "HTML5 Drag & Drop", "CSS Grid & Flexbox", "Local Storage API"],
      highlights: ["Zero-lag Drag & Drop UI", "Category-based task sorting", "Progress visualization metrics"]
    },
    {
      id: "spendwise",
      title: "SpendWise",
      subtitle: "Personal Expense Tracker",
      category: "javascript",
      categoryLabel: "JavaScript / Web",
      featured: true,
      tagline: "Financial tracker with automated budget insights and interactive expenditure graphs.",
      description: "SpendWise enables individuals to record, categorize, and inspect their spending habits through visual charts, monthly balance alerts, and CSV export capabilities.",
      problem: "Lack of visual financial clarity leads to uncontrolled expenditure and fragmented budget tracking.",
      solution: "Built an interactive financial dashboard providing instant income-versus-expense calculations and real-time dynamic breakdown charts.",
      techStack: ["JavaScript", "Chart.js / Canvas", "Modular CSS", "IndexedDB / Storage"],
      highlights: ["Dynamic expense visualizer", "Custom category filters", "Exportable financial statements"]
    },
    {
      id: "chatsphere",
      title: "ChatSphere",
      subtitle: "Real-Time Chat Application",
      category: "javascript",
      categoryLabel: "JavaScript / Web",
      featured: true,
      tagline: "Instant bi-directional communication room with live presence and typing notifications.",
      description: "ChatSphere is a real-time messaging platform supporting topic channels, user presence indicators, instant message delivery via WebSockets, and clean message rendering.",
      problem: "Traditional HTTP-based chat applications suffer from latency and poor polling overhead.",
      solution: "Implemented persistent bi-directional communication channels with low overhead, enabling instantaneous typing indicators and reliable delivery.",
      techStack: ["JavaScript", "Node.js", "Socket.io / WebSockets", "Express", "CSS3"],
      highlights: ["Sub-millisecond message delivery", "Room-based isolation", "Active status presence"]
    },
    {
      id: "shopease",
      title: "ShopEase",
      subtitle: "E-Commerce Platform",
      category: "javascript",
      categoryLabel: "JavaScript / Web",
      featured: false,
      tagline: "Modular online storefront with real-time cart computation and catalog filtering.",
      description: "A comprehensive e-commerce front-end application with dynamic product search, price filters, responsive shopping cart drawer, and order summary computation.",
      problem: "Complex e-commerce checkouts often suffer from slow client-side rendering and clunky cart updates.",
      solution: "Designed a lightweight, reactive cart state model that instantly updates balances, applies coupon logic, and persists cart items across sessions.",
      techStack: ["JavaScript", "HTML5", "CSS3 Animations", "RESTful Mock API"],
      highlights: ["Instant cart calculation", "Multi-criteria product search", "Responsive mobile-first layout"]
    },
    {
      id: "fileflow",
      title: "FileFlow",
      subtitle: "Automated File Organizer",
      category: "python",
      categoryLabel: "Python & Automation",
      featured: true,
      tagline: "Intelligent file system daemon that classifies, renames, and archives directory clutter.",
      description: "FileFlow runs as an automated background utility to sort messy folders (Downloads, Desktop, Documents) by MIME type, creation date, and file extension into structured directory trees.",
      problem: "Manual desktop and download folder cleanup is tedious, repetitive, and time-consuming.",
      solution: "Engineered a Python automation script using OS and Watchdog events that instantly intercepts new files and routes them into categorized destination archives.",
      techStack: ["Python 3", "OS / Sys Libraries", "Shutil", "Watchdog", "Logging"],
      highlights: ["Automated background daemon", "Custom regex rules", "Duplicate file hashing"]
    },
    {
      id: "pdfmaster",
      title: "PDFMaster",
      subtitle: "PDF Management System",
      category: "python",
      categoryLabel: "Python & Automation",
      featured: false,
      tagline: "Comprehensive document utility for batch merging, splitting, watermarking, and encryption.",
      description: "PDFMaster is an all-in-one document pipeline providing automated PDF operations including password protection, page extraction, watermark stamping, and file compression.",
      problem: "Online third-party PDF converters often compromise sensitive data privacy and enforce strict file size limits.",
      solution: "Crafted an offline, privacy-first local Python utility that securely handles high-volume document transformations without sending bytes over the wire.",
      techStack: ["Python 3", "PyPDF2 / PyMuPDF", "ReportLab", "Argparse CLI"],
      highlights: ["100% offline privacy", "Batch document operations", "AES-256 PDF encryption"]
    },
    {
      id: "webscraper-pro",
      title: "WebScraper Pro",
      subtitle: "Web Data Extraction Tool",
      category: "python",
      categoryLabel: "Python & Automation",
      featured: true,
      tagline: "Concurrent scraping engine with rate limiting, proxy handling, and multi-format export.",
      description: "An enterprise-grade web scraping pipeline engineered to parse nested HTML pages, bypass client rendering, and export structured data directly to CSV, JSON, and SQLite.",
      problem: "Manual data extraction from dynamic sites is prone to anti-scraping blocks, inconsistent schemas, and performance bottlenecks.",
      solution: "Implemented an asynchronous scraping engine featuring intelligent user-agent rotation, retry backoff logic, and robust schema validation.",
      techStack: ["Python 3", "BeautifulSoup4", "Requests", "Selenium", "Pandas"],
      highlights: ["Dynamic JS rendering support", "Structured JSON/CSV output", "Smart rate-limiting backoff"]
    },
    {
      id: "stocktrack",
      title: "StockTrack",
      subtitle: "Stock Market Data Analyzer",
      category: "python",
      categoryLabel: "Python & Automation",
      featured: false,
      tagline: "Financial analytics tool calculating technical indicators and visual price trends.",
      description: "StockTrack queries market feeds to generate historical price charts, calculate Moving Averages (SMA/EMA), Relative Strength Index (RSI), and detect breakout patterns.",
      problem: "Retail investors often face information overload and pay heavy subscription fees for simple technical indicator computations.",
      solution: "Developed a streamlined Python analytical script that pulls ticker data and generates clean visual trendlines and indicator signals.",
      techStack: ["Python 3", "yFinance API", "Pandas", "Matplotlib / Seaborn", "NumPy"],
      highlights: ["RSI & Moving Average indicators", "Automated chart rendering", "Historical volatility modeling"]
    },
    {
      id: "sentimentai",
      title: "SentimentAI",
      subtitle: "Sentiment Analysis System",
      category: "aiml",
      categoryLabel: "AI & Machine Learning",
      featured: true,
      tagline: "Natural language processing model classifying customer reviews and sentiment polarities.",
      description: "SentimentAI uses advanced text preprocessing, tokenization, and vectorization to analyze user feedback, classifying sentiments into Positive, Neutral, or Negative with high confidence scores.",
      problem: "Organizations receive thousands of customer reviews and support tickets daily without a practical way to prioritize negative alerts.",
      solution: "Built an end-to-end NLP classification pipeline that ingests raw feedback, strips noise, and scores emotional polarity in milliseconds.",
      techStack: ["Python", "Scikit-Learn", "NLTK", "TF-IDF Vectorizer", "Flask API"],
      highlights: ["88%+ classification accuracy", "Automated text cleaning pipeline", "Lightweight REST inference endpoint"]
    },
    {
      id: "moviemind",
      title: "MovieMind",
      subtitle: "Movie Recommendation System",
      category: "aiml",
      categoryLabel: "AI & Machine Learning",
      featured: true,
      tagline: "Hybrid recommendation engine combining content-based filtering with cosine similarity.",
      description: "MovieMind recommends tailored cinema selections by processing plot descriptions, cast attributes, and genre tags through high-dimensional vector spaces.",
      problem: "Users spend excessive time browsing streaming libraries without discovering relevant media tailored to their taste.",
      solution: "Designed a content-based recommendation model utilizing feature extraction and Cosine Similarity matrices to deliver instant recommendations.",
      techStack: ["Python", "Pandas", "Scikit-Learn", "Cosine Similarity", "Streamlit UI"],
      highlights: ["Instant top-10 similarity querying", "Multi-tag feature weighting", "Clean visual discovery UI"]
    },
    {
      id: "fraudguard",
      title: "FraudGuard",
      subtitle: "Fraud Detection System",
      category: "aiml",
      categoryLabel: "AI & Machine Learning",
      featured: false,
      tagline: "Anomaly detection engine identifying high-risk transactional anomalies with ML models.",
      description: "FraudGuard inspects transaction parameters (velocity, amount, location deviation) and applies trained ensemble classifiers to flag fraudulent actions in real-time.",
      problem: "Imbalanced transaction datasets make typical models prone to excessive false negatives on financial fraud.",
      solution: "Trained Random Forest and XGBoost classifiers with SMOTE resampled data to reliably detect rare anomaly clusters while maintaining high precision.",
      techStack: ["Python", "Random Forest", "XGBoost", "SMOTE", "Scikit-Learn", "Pandas"],
      highlights: ["Robust handling of imbalanced data", "High precision on anomaly alerts", "Feature importance breakdown"]
    },
    {
      id: "visionx",
      title: "VisionX",
      subtitle: "Real-Time Object Detection System",
      category: "aiml",
      categoryLabel: "AI & Machine Learning",
      featured: true,
      tagline: "Computer vision pipeline rendering real-time bounding boxes and confidence scores.",
      description: "VisionX leverages OpenCV and deep neural networks (YOLO) to identify, track, and annotate multi-class objects across live camera feeds and video streams at high frame rates.",
      problem: "Object detection models often suffer from high frame drops and latency when deployed on commodity consumer hardware.",
      solution: "Optimized lightweight convolutional inference graphs with OpenCV DNN module, achieving smooth 30+ FPS real-time video processing.",
      techStack: ["Python", "OpenCV", "YOLO / Darknet", "NumPy", "Deep Learning"],
      highlights: ["30+ FPS real-time tracking", "Multi-class bounding box annotation", "Hardware-accelerated inference"]
    }
  ]
};

let portfolioData = DEFAULT_CONFIG;
let activeCategory = 'all';

// Initialize Application
document.addEventListener('DOMContentLoaded', async () => {
  await loadPortfolioData();
  renderAllSections();
  initTimeTicker();
  initFilterTabs();
  initModal();
  initContactForm();
  initCopyEmail();
});

// Load config JSON if hosted on HTTP/S, otherwise use fallback
async function loadPortfolioData() {
  try {
    const res = await fetch('portfolio-config.json');
    if (res.ok) {
      portfolioData = await res.json();
    }
  } catch (err) {
    console.log('Loaded using built-in portfolio data config.');
  }
}

// Render all sections
function renderAllSections() {
  renderMarquee();
  renderProjects();
  renderServices();
  renderSkills();
  renderEducation();
}

// Render Infinite Marquee
function renderMarquee() {
  const track = document.getElementById('marquee-track');
  if (!track || !portfolioData.disciplines) return;

  const items = [...portfolioData.disciplines, ...portfolioData.disciplines];
  track.innerHTML = items.map(d => `
    <span class="marquee-item">
      <span>${escapeHtml(d)}</span>
      <span class="marquee-glyph">✦</span>
    </span>
  `).join('');
}

// Render Projects Grid
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid || !portfolioData.projects) return;

  const filtered = activeCategory === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeCategory);

  grid.innerHTML = filtered.map(p => `
    <article class="project-card" data-id="${p.id}" tabindex="0" role="button" aria-label="View case study for ${escapeHtml(p.title)}">
      <div>
        <div class="project-header">
          <span class="project-cat-badge">${escapeHtml(p.categoryLabel)}</span>
          ${p.featured ? '<span class="project-featured-badge">Featured</span>' : ''}
        </div>
        <h3 class="project-title">${escapeHtml(p.title)}</h3>
        <p class="project-subtitle">${escapeHtml(p.subtitle)}</p>
        <p class="project-tagline">${escapeHtml(p.tagline)}</p>
      </div>

      <div>
        <div class="project-tech-pills">
          ${p.techStack.map(t => `<span class="tech-pill">${escapeHtml(t)}</span>`).join('')}
        </div>
        <div class="project-footer">
          <span>Case Study</span>
          <span class="project-action-link">Explore Details <span>→</span></span>
        </div>
      </div>
    </article>
  `).join('');

  // Attach card click handlers for modal
  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const project = portfolioData.projects.find(p => p.id === id);
      if (project) openProjectModal(project);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}

// Render Services (Swiss 01 - 04)
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container || !portfolioData.services) return;

  container.innerHTML = portfolioData.services.map(s => `
    <div class="service-card">
      <div class="service-number">${s.id} //</div>
      <h3 class="service-title">${escapeHtml(s.title)}</h3>
      <p class="service-desc">${escapeHtml(s.description)}</p>
    </div>
  `).join('');
}

// Render Skills
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container || !portfolioData.skills) return;

  const categories = [
    { key: 'languages', title: 'Languages' },
    { key: 'frameworks', title: 'Frameworks & Web' },
    { key: 'ai_ml', title: 'AI & Machine Learning' },
    { key: 'tools', title: 'Developer Tools & DB' }
  ];

  container.innerHTML = categories.map(cat => {
    const skillsList = portfolioData.skills[cat.key] || [];
    return `
      <div class="skills-group">
        <h3 class="skills-group-title">
          <span>✦</span> ${cat.title}
        </h3>
        <div class="skills-tags">
          ${skillsList.map(s => `<span class="skill-tag">${escapeHtml(s)}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// Render Education Timeline
function renderEducation() {
  const container = document.getElementById('education-timeline');
  if (!container || !portfolioData.education) return;

  container.innerHTML = portfolioData.education.map(edu => `
    <div class="timeline-item">
      <div class="timeline-meta">
        <span class="timeline-period">${escapeHtml(edu.period)}</span>
        <span class="timeline-badge">${escapeHtml(edu.badge)}</span>
      </div>
      <div class="timeline-content">
        <h3 class="timeline-degree">${escapeHtml(edu.degree)}</h3>
        <p class="timeline-institution">${escapeHtml(edu.institution)} • ${escapeHtml(edu.location)}</p>
        <p class="timeline-desc">${escapeHtml(edu.description)}</p>
      </div>
    </div>
  `).join('');
}

// Setup Category Filters
function initFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      renderProjects();
    });
  });
}

// Project Modal Controller
function initModal() {
  const overlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });
}

function openProjectModal(project) {
  const overlay = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content-area');
  if (!overlay || !modalContent) return;

  modalContent.innerHTML = `
    <span class="modal-category-badge">${escapeHtml(project.categoryLabel)}</span>
    <h2 class="modal-title">${escapeHtml(project.title)}</h2>
    <p class="modal-subtitle">${escapeHtml(project.subtitle)}</p>

    <div class="modal-section">
      <h4 class="modal-section-title">Overview</h4>
      <p class="modal-section-body">${escapeHtml(project.description)}</p>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">Problem Statement</h4>
      <p class="modal-section-body">${escapeHtml(project.problem)}</p>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">Engineered Solution</h4>
      <p class="modal-section-body">${escapeHtml(project.solution)}</p>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">Key Architectural Highlights</h4>
      <ul class="modal-highlights-list">
        ${project.highlights.map(h => `<li class="modal-highlight-item">${escapeHtml(h)}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">Technologies Deployed</h4>
      <div class="project-tech-pills">
        ${project.techStack.map(t => `<span class="tech-pill">${escapeHtml(t)}</span>`).join('')}
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('project-modal');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Real-Time Local Clock (Gujarat / Asia/Kolkata timezone)
function initTimeTicker() {
  const clockElement = document.getElementById('local-time');
  if (!clockElement) return;

  function updateClock() {
    try {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat([], options);
      clockElement.textContent = `${formatter.format(new Date())} IST (Gujarat)`;
    } catch (e) {
      clockElement.textContent = new Date().toLocaleTimeString();
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
}

// Copy Email with Toast Notification
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('.copy-email-trigger');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = portfolioData.profile.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard!`);
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  });
}

// Toast Notification
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✦</span><span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}

// Contact Form Handler
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name')?.value || '';
    const email = document.getElementById('form-email')?.value || '';
    const message = document.getElementById('form-message')?.value || '';

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    showToast('Opening your default mail client...');
    window.location.href = `mailto:${portfolioData.profile.email}?subject=${subject}&body=${body}`;
    form.reset();
  });
}

// Helper: Escape HTML string to prevent injection
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
