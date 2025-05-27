const skills = [
  "Data Analysis",
  "Machine Learning",
  "Python & R Programming",
  "Web Development (HTML, CSS, JavaScript)",
  "SQL & Database Management",
  "Problem Solving",
  "Team Collaboration"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="p-4">
      <h2 className="text-xl font-bold mb-2">Skills</h2>
      <ul className="list-disc pl-5">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
