import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  ExternalLink, 
  Download,
  Menu,
  X,
  ChevronDown,
  Star,
  Calendar,
  Building2
} from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { name: 'C++', level: 90, category: 'Programming' },
    { name: 'HTML', level: 85, category: 'Frontend' },
    { name: 'CSS', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 50, category: 'Programming' },
    { name: 'NodeJS', level: 50, category: 'Backend' },
    { name: 'SQL', level: 90, category: 'Database' },
    { name: 'MS Dynamics 365 CRM', level: 90, category: 'Business Systems' },
    { name: 'Power BI', level: 90, category: 'Analytics' },
    { name: 'Excel/VBA', level: 90, category: 'Analytics' }
  ];

  const experiences = [
    {
      title: 'AVP- Technology Business Systems Consultant',
      company: 'Wells Fargo',
      location: 'LOB: Commercial Banking',
      period: 'Jan 2025-Present',
      type: 'Current Role',
      description: [
        'Engineered robust automation workflows for notifications between Dynamics 365 instances, reducing manual updates by 40%',
        'Utilized AI Builder to implement generative AI use cases, enhancing data processing and insights within CRM workflows',
        'Streamlined and maintained ETL processes using SSIS for data extraction and transformation from Dynamics 365 to SQL Server',
        'Developed solutions for multifaceted CRM qualification and AI-driven sales potential notification and advanced workflow enhancement'
      ]
    },
    {
      title: 'Business Analyst - Microsoft Dynamics 365/Power Platform Admin',
      company: 'NielsenIQ',
      location: 'Mumbai',
      period: 'Nov 2022 - Dec 2024',
      type: 'Previous Role',
      description: [
        'Leveraged Dynamics 365 and Power BI to visualize sales data, creating interactive dashboards that provided real-time performance indicators (KPIs) resulting in data-driven sales strategies and facilitated monthly performance reviews with quarterly business reviews',
        'Identified and resolved system bottlenecks through data analysis, reducing lead qualification times by 15% and boosting seller interactions by 20%',
        'Managed CRM system optimization using SQL/OIDS plugin-embedded toolbox; Power Automate flows and plugins to automate reporting engagement and ensure minimal user disruptions'
      ]
    },
    {
      title: 'Associate Developer',
      company: 'A5E Consulting',
      location: 'Hyderabad, India',
      period: 'Aug 2021 - Nov 2022',
      type: 'Previous Role',
      description: [
        'Built multiple APIs using Power Automate to extract master data from SAP, incorporating secondary computations and business logic via logApps',
        'Managed cross-functional collaboration with senior analysts to create and optimize interfaces, reports, metrics, and dashboards, driving a 15% improvement in business performance monitoring and strategic decision-making efficiency'
      ]
    }
  ];

  const education = [
    {
      degree: 'MBA (Marketing)',
      institution: 'Jawaharlal Nehru Technological University',
      location: 'Hyderabad, India',
      period: '2020 - 2021',
      gpa: 'GPA 9.75/10'
    },
    {
      degree: 'Bachelor of Technology (Electrical and Electronics Engineering)',
      institution: 'Jawaharlal Nehru Technological University',
      location: 'Hyderabad, India',
      period: '2016 - 2020',
      gpa: 'GPA 8.84/10'
    }
  ];

  const certifications = [
    { name: 'SAFe® Certified Product Owner/Manager', type: 'Agile' },
    { name: 'SAFe® Certified Agile Product Manager', type: 'Agile' },
    { name: 'Microsoft Certified: Power BI Data Analyst', type: 'Analytics' },
    { name: 'Microsoft Power Platform Fundamentals', type: 'Platform' },
    { name: 'Microsoft Azure Fundamentals', type: 'Cloud' },
    { name: 'Microsoft Dynamics 365 Fundamentals', type: 'CRM' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'education', 'certifications', 'huggingface', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-modern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-primary">Akshay Krishnan</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'About', 'Experience', 'Skills', 'Education', 'Certifications', 'AI Persona', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase() === 'ai persona' ? 'huggingface' : item.toLowerCase())}
                    className={`nav-link px-3 py-2 rounded-md text-sm ${
                      activeSection === (item.toLowerCase() === 'ai persona' ? 'huggingface' : item.toLowerCase())
                        ? 'text-primary bg-primary/10' 
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {['Home', 'About', 'Experience', 'Skills', 'Education', 'Certifications', 'AI Persona', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'ai persona' ? 'huggingface' : item.toLowerCase())}
                  className="nav-link block px-3 py-2 text-base w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-container min-h-screen flex items-center justify-center pt-16">
        <div className="hero-content max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <img
              src={profileImage}
              alt="Akshay Krishnan - Professional Profile"
              className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-white shadow-large"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Akshay Krishnan
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Sotware Developer and Technology Consultant
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Worked on data analytics, CRM integrations, process automation, Agentic AI based systems, Machine learning models, software development using Python, Node.js. 
              Solved 450+ problems on leetcode. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
        

            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white h-6 w-6" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-modern">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Professional Summary</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
               Software Engineer with expertise in C++, Python, SQL, PowerBI, 
                CRM systems,Power Automate and canvas apps and process automation and experience in building agentic AI systems and machine learning models.
              </p>
              
              
              <div className="grid grid-cols-2 gap-6">
                <div className="card-elegant p-4">
                  <div className="flex items-center mb-2">
                    <Star className="text-primary h-5 w-5 mr-2" />
                    <span className="font-semibold text-foreground">Experience</span>
                  </div>
                  <p className="text-muted-foreground">3+ Years</p>
                </div>
                <div className="card-elegant p-4">
                  <div className="flex items-center mb-2">
                    <Building2 className="text-primary h-5 w-5 mr-2" />
                    <span className="font-semibold text-foreground">Current Company</span>
                  </div>
                  <p className="text-muted-foreground">Wells Fargo</p>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <div className="card-elegant p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Key Expertise</h3>
                <div className="space-y-4">
                  {[
                    'Programming(C++, Java, Python, HTML, CSS, Node.js)',
                    'CRM Systems(Microsoft Dynamics 365)',
                    'Robotic Process Automation(Power Automate and Copilot Studio)',
                    'Business Intelligence(Power BI)',
                    'Databases(SQL and MongoDB)',

                    'Domain Knowledge(BFSI-Commercial Lending, CPG analytics)',
                    'Product Management(JIRA,Scaled Agile Framework)',
                    'AI ML(LLMs, Agentic Frameworks, Machine Learning, OpenAI SDK, Gemini APIs)'
                  ].map((skill, index) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-modern section-alternate">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            {experiences.map((exp, index) => (
              <div key={exp.title} className={`timeline-item ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                <div className="timeline-dot"></div>
                <div className={`timeline-content ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-1/2`}>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={exp.type === 'Current Role' ? 'default' : 'secondary'} className="mb-2">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
                  <div className="flex items-center mb-4">
                    <Building2 className="h-4 w-4 text-primary mr-2" />
                    <span className="font-medium text-primary">{exp.company}</span>
                    <span className="text-muted-foreground ml-2">• {exp.location}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-muted-foreground flex">
                        <span className="text-primary mr-2">•</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-modern">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="card-elegant p-6 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                  <Badge variant="outline">{skill.category}</Badge>
                </div>
                <div className="skill-bar mb-2">
                  <div 
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-modern section-alternate">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={edu.degree} className="card-elegant p-8 animate-slide-up">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">{edu.gpa}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {edu.period}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h3>
                <div className="flex items-center mb-4">
                  <Building2 className="h-4 w-4 text-primary mr-2" />
                  <span className="font-medium text-primary">{edu.institution}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {edu.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-modern">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={cert.name} className="card-elegant p-6 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary">{cert.type}</Badge>
                </div>
                <h3 className="font-semibold text-foreground leading-tight">{cert.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hugging Face App Section */}
      <section id="huggingface" className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Chat with my AI Persona
            </h2>
            <p className="text-muted-foreground text-lg">
              Experience an interactive conversation with my AI-powered digital assistant
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-2xl border border-border/50">
              <iframe
                src="https://akshay-krishnan-myprojects.hf.space/"
                className="w-full h-[800px]"
                title="Hugging Face Application"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-modern section-alternate">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground text-lg mt-6">
              Ready to discuss your next project or opportunity? Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-foreground mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:+919502159137" className="text-primary hover:text-primary-light">+91 9502159137</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:akshaykrish2015@gmail.com" className="text-primary hover:text-primary-light">akshaykrish2015@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/akshay-krishnan-84715a162/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-light flex items-center"
                    >
                      Connect with me <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="card-elegant">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
                  <form className="space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="form-input resize-none"
                        required
                      ></textarea>
                    </div>
                    <Button className="btn-primary w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-secondary-foreground/80">
              © 2025 Akshay Krishnan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;