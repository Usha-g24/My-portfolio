import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X, Code2, Music4, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';




function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-indigo-600"
            >
              Usha G
            </motion.h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink>
              <MobileNavLink href="#skills" onClick={toggleMenu}>Skills</MobileNavLink>
              <MobileNavLink href="#projects" onClick={toggleMenu}>Projects</MobileNavLink>
              <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Python Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Specializing in Django and Full-Stack Development
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/Usha-g24" icon={<Github />} />
              <SocialLink href="https://www.linkedin.com/in/giddaluri-usha-88b196275" icon={<Linkedin />} />
              <SocialLink href="mailto:giddaluriusha24@gmail.com" icon={<Mail />} />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard 
              title="Programming Languages"
              skills={["Python (Advanced)", "HTML", "CSS", "JavaScript"]}
            />
            <SkillCard 
              title="Frameworks & Libraries"
              skills={["Django", "React.js", "Express.js", "Node.js","MongoDB" ]}
            />
            <SkillCard 
              title="Tools & Technologies"
              skills={["Git", "VS Code", "PyCharm", "Jupyter Notebook", "MySQL"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              title="Traffic Lights System"
              description="Real-time traffic management application using Django and HTML"
              icon={<Code2 />}
            />
            <ProjectCard 
              title="Music Website"
              description="Full-stack music platform with Python, Django, and React"
              icon={<Music4 />}
            />
            <ProjectCard 
              title="MyStore E-commerce"
              description="Dynamic e-commerce platform built with Python and Django"
              icon={<ShoppingBag />}
            />
             <ProjectCard 
              title="DevTinder"
              description="A MERN stack-based social platform for developers with
               authentication, post creation, and interactions."
              icon={<ShoppingBag />}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="space-y-8">
            <EducationCard 
              title="PSCMR College of Engineering and Technology"
              degree="B.Tech in Electronics and Communication Engineering"
              year="2021-2025"
              grade="CGPA: 7.66"
            />
            <EducationCard 
              title="Sri Chaitanya Junior College"
              degree="Intermediate"
              year="2019-2021"
              grade="Percentage: 85%"
            />
            <EducationCard 
              title="Sri Chaitanya Techno School"
              degree="School"
              year="2018-2019"
              grade="CGPA: 9.7"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="flex justify-center space-x-8">
            <ContactInfo icon={<Mail />} text="giddaluriusha24@gmail.com" />
            <ContactInfo icon={<Github />} text="github.com/Usha-g24" />
            <ContactInfo icon={<Linkedin />} text="LinkedIn" />
          </div>
        </div>
      </section>
    </div>
  );
}

// Component for navigation links
const NavLink = ({ href, children }) => (
  <a 
    href={href}
    className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
  >
    {children}
  </a>
);

// Component for mobile navigation links
const MobileNavLink = ({ href, children, onClick }) => (
  <a 
    href={href}
    className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
    onClick={onClick}
  >
    {children}
  </a>
);

// Component for social links
const SocialLink = ({ href, icon }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
  >
    {icon}
  </a>
);

// Component for skill cards
const SkillCard = ({ title, skills }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200"
  >
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-600">{skill}</li>
      ))}
    </ul>
  </motion.div>
);

// Component for project cards
const ProjectCard = ({ title, description, icon }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200"
  >
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

// Component for education cards
const EducationCard = ({ title, degree, year, grade }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="p-6 bg-gray-50 rounded-lg"
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{degree}</p>
    <p className="text-gray-500">{year}</p>
    <p className="text-indigo-600 font-medium">{grade}</p>
  </motion.div>
);

// Component for contact information
const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center space-x-2 text-gray-600">
    <span>{icon}</span>
    <span>{text}</span>
  </div>
);

export default App;