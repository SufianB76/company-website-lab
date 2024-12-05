

const Navigation = ({ currentSection, setCurrentSection }) => {
  const sections = [
    { id: "home", label: "Home" },
    { id: "history", label: "History" },
    { id: "pastWork", label: "Past Work" },
    { id: "staff", label: "Staff" },
    { id: "contact", label: "Contact Us" },
    { id: "externalLinks", label: "External Links" }
  ];

  return (
    <nav className="navbar">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => setCurrentSection(section.id)}
          className={`nav-button ${currentSection === section.id ? "active" : ""}`}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
