import { useState } from "react";
import Navigation from "./Navigation";
import "./App.css"; 

const App = () => {
  const [currentSection, setCurrentSection] = useState("home");

  const content = {
    home: "Welcome to Stellar Solutions! Your trusted partner in innovative problem-solving. Explore our journey, our team, and our exceptional portfolio of work.",
    history: `
      Stellar Solutions was founded in 1998 by a group of visionary engineers with the goal of solving complex problems with innovative technology.
      Starting with just three employees in a small garage, the company has grown into an industry leader with global operations.
      From its humble beginnings to its status as a tech powerhouse, Stellar Solutions has remained committed to excellence and innovation.
    `,
    pastWork: [
      "Project Alpha - Revolutionized e-commerce platforms with AI-driven personalization.",
      "Project Beta - Developed cutting-edge renewable energy solutions for smart cities.",
      "Project Gamma - Created a logistics system that reduced delivery times by 30%.",
      "Project Delta - Designed a healthcare app that improved patient-doctor communication.",
      "Project Epsilon - Built a space exploration AI used by leading aerospace companies."
    ],
    staff: [
      { name: "Alice Johnson", role: "CEO", bio: "Alice is a visionary leader with over 20 years in tech innovation." },
      { name: "Bob Smith", role: "CTO", bio: "Bob specializes in AI and machine learning, driving technical excellence." },
      { name: "Catherine Lee", role: "COO", bio: "Catherine ensures operations run smoothly, with a focus on sustainability." },
      { name: "David Kim", role: "Lead Engineer", bio: "David leads the development team with a passion for problem-solving." },
      { name: "Elena Rodriguez", role: "Head of Marketing", bio: "Elena brings creativity and strategy to our brand messaging." }
    ],
    contact: `
      We’d love to hear from you!
      - Email us: contact@stellarsolutions.com
      - Call us: (123) 456-7890
      - Visit our HQ: 123 Innovation Blvd, Tech City, USA
      Follow us on social media to stay updated!
    `,
    externalLinks: [
      { text: "Our Blog", url: "https://example.com/blog" },
      { text: "Careers", url: "https://example.com/careers" },
      { text: "Support", url: "https://example.com/support" },
      { text: "LinkedIn", url: "https://linkedin.com/company/stellarsolutions" },
      { text: "Instagram", url: "https://instagram.com/stellarsolutions" }
    ]
  };

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <p>{content.home}</p>;
      case "history":
        return <p>{content.history}</p>;
      case "pastWork":
        return (
          <ul>
            {content.pastWork.map((work, index) => (
              <li key={index}>{work}</li>
            ))}
          </ul>
        );
      case "staff":
        return (
          <ul>
            {content.staff.map((member, index) => (
              <li key={index}>
                {member.name} - {member.role}
              </li>
            ))}
          </ul>
        );
      case "contact":
        return <p>{content.contact}</p>;
      case "externalLinks":
        return (
          <ul>
            {content.externalLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        );
      default:
        return <p>Section not found.</p>;
    }
  };

  return (
    <div className="app-container">
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main className="content">{renderSection()}</main>
    </div>
  );
};

export default App;
