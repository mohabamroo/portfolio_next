export default function SkillSection() {
  // TODO: extract to a separate file
  const skills = [
    {
      name: "React",
      level: 7
    },
    {
      name: "Next.js",
      level: 6
    },
    {
      name: "Node.js",
      level: 8
    },
    {
      name: "Django REST",
      level: 8
    },
    {
      name: "HTML & CSS",
      level: 9
    },
    {
      name: "Angular",
      level: 8
    },
    {
      name: "Docker",
      level: 7
    },
    {
      name: "Kubernetes",
      level: 6
    },
    {
      name: "React Native",
      level: 7
    },
    {
      name: "PostgreSQL",
      level: 8
    },
    {
      name: "Scrapy",
      level: 7
    },
    {
      name: "Git & Github",
      level: 8
    }
  ];
  return (
    <div className="hero my-10">
      <div className="max-w-5xl">
        <div className="text-center my-8">
          <h1 className="text-3xl font-bold text-center text-bold text-secondary">
            Skill & Technologies
          </h1>
        </div>
        {/* Skills list */}
        <div className="min-w-full">
          <div className=" flex flex-row justify-around flex-wrap min-h-64">
            {skills.map((skill) => (
              <div className="skill my-1 mr-1">
                <div className="skill-name">{skill.name}</div>
                <progress
                  className="progress progress-primary w-56"
                  value={(skill.level / 10) * 100}
                  max="100"
                ></progress>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
