import wildcraft from "@/assets/wildcraft.png";
import hpe from "@/assets/hpe_jpg.jpg";
import uandi from "@/assets/u&i.png";

const Experience = () => {
  const experiences = [
    {
      company: "Wildcraft India",
      role: "Data Analyst Intern",
      period: "Jul 2025 - Aug 2025",
      description:
        "Contributed to supply chain optimization by analyzing procurement costs and identifying alternative suppliers. Implemented data-driven strategies that enhanced operational efficiency.",
      logo: wildcraft,
      gradient: "bg-gradient-primary",
    },
    {
      company: "Hewlett Packard Enterprise",
      role: "Project Intern",
      period: "Mar 2025 - May 2025",
      description:
        "Built a comprehensive platform for women's safety, featuring community support systems and intelligent location safety ratings using machine learning algorithms.",
      logo: hpe,
      gradient: "bg-gradient-secondary",
    },
    {
      company: "U&I (NGO)",
      role: "Center Leader",
      period: "Apr 2024 - Apr 2025",
      description:
        "Led a team of 60+ volunteers, managed multi-center operations, and spearheaded successful crowdfunding campaigns. Developed leadership and project management skills in a social impact environment.",
      logo: uandi,
      gradient: "bg-accent",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-orbitron font-bold mb-12 flex items-center">
          <span className="text-primary font-mono mr-4 text-2xl">02.</span>
          <span className="text-foreground">Professional</span>
          <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent ml-2">
            Journey
          </span>
        </h2>

        <div className="max-w-4xl space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-8 hover-lift group border border-primary/20"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Company Logo */}
                <div
                  className={`w-20 h-20 rounded-2xl ${exp.gradient} p-2 flex items-center justify-center group-hover:animate-pulse-glow`}
                >
                  <img
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    className="max-w-full max-h-full object-contain rounded-2xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-white font-orbitron font-bold text-lg">${exp.company
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}</span>`;
                      }
                    }}
                  />
                </div>

                {/* Experience Details */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-orbitron font-semibold text-lg glow-orange">
                        @ {exp.company}
                      </p>
                    </div>
                    <span className="text-muted-foreground font-mono text-sm bg-card-secondary px-4 py-2 rounded-full mt-2 lg:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Line */}
        <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>
      </div>
    </section>
  );
};

export default Experience;
