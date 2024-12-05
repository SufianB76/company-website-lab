import { useState } from "react";
import Navigation from "./Navigation";
import "./App.css"; 

const App = () => {
  const [currentSection, setCurrentSection] = useState("home");

  const content = {
    home: "Welcome to our company! We are excited to share our story and work with you.",
    history: "Founded in 1907 by visionary innovators, our company has a legacy of excellence.",
    pastWork: [
      "Project Alpha - Revolutionized e-commerce",
      "Project Beta - Enhanced AI capabilities",
      "Project Gamma - Streamlined logistics"
    ],
    staff: [
      { name: "Alice Johnson", role: "CEO" },
      { name: "Bob Smith", role: "CTO" },
      { name: "Catherine Lee", role: "COO" }
    ],
    contact: "Email us at contact@ourcompany.com or call us at (123) 456-7890.",
    externalLinks: [
      { text: "Our Blog", url: "https://example.com/blog" },
      { text: "Careers", url: "https://example.com/careers" },
      { text: "Support", url: "https://example.com/support" }
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
