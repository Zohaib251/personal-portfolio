import SectionTitle from "../components/SectionTitle";
import TimelineItem from "../components/TimelineItem";

const Experience = () => {
  const experiences = [
    {
      title: "Intern Frontend Developer",
      organization: "Ezitech Institute",
      period: "Jun 2024 - Sep 2024",
      location: "Rawalpindi, Punjab",
      description: [
        "Developed 5 responsive and interactive web projects using React.js and Tailwind CSS",
        "Implemented reusable components and state management using React Hooks",
        "Optimized UI performance and improved load times through efficient code structure",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="section-container">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey and roles that have shaped my career"
        />

        <div className="relative mt-12 md:mt-24 py-8">
          {/* Timeline container */}
          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                title={exp.title}
                organization={exp.organization}
                period={exp.period}
                location={exp.location}
                description={exp.description}
                isLeft={index % 2 === 0}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
