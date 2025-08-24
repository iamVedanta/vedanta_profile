import droneProject from "@/assets/drone_image.jpg";
import aiProject from "@/assets/ai-project.jpg";
import analyticsProject from "@/assets/analytics-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Autonomous Drone Navigation",
      description:
        "Developing a GPS-independent navigation system for an autonomous drone, specifically designed for Martian terrain exploration using computer vision and advanced robotics.",
      image: droneProject,
      technologies: [
        "Python",
        "Computer Vision",
        "Robotics",
        "Machine Learning",
      ],
      gradient: "bg-gradient-primary",
    },
    {
      title: "Neonatal Sleep-Wake Classification",
      description:
        "Utilized advanced models like YOLOv8 and Vision Transformers, fine-tuned for accurate sleep-wake state classification in neonates for medical monitoring applications.",
      image: aiProject,
      technologies: ["Deep Learning", "YOLOv8", "Transformers", "Medical AI"],
      gradient: "bg-gradient-secondary",
    },
    {
      title: "Election Analysis & Prediction",
      description:
        "A comprehensive machine learning project to analyze Indian election data, providing deep insights into electoral trends, voter behavior patterns, and predictive analytics.",
      image: analyticsProject,
      technologies: ["Machine Learning", "Pandas", "Python", "Data Analytics"],
      gradient: "bg-accent",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-orbitron font-bold mb-12 flex items-center">
          <span className="text-primary font-mono mr-4 text-2xl">03.</span>
          <span className="text-foreground">Featured</span>
          <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent ml-2">
            Projects
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-effect rounded-2xl overflow-hidden hover-lift border border-primary/20"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60"></div>

                {/* Floating Tech Indicator */}
                <div
                  className={`absolute top-4 right-4 w-12 h-12 ${project.gradient} rounded-full flex items-center justify-center group-hover:animate-pulse-glow`}
                >
                  <span className="text-white font-orbitron font-bold text-sm">
                    AI
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-orbitron font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-card-secondary text-foreground text-xs rounded-full font-medium border border-primary/10 hover:border-primary/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-primary text-primary-foreground py-2 px-4 rounded-lg font-orbitron font-semibold text-sm hover:opacity-90 transition-opacity duration-300">
                    View Details
                  </button>
                  <button className="flex-1 border border-primary text-primary py-2 px-4 rounded-lg font-orbitron font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    Source Code
                  </button>
                </div>
              </div>

              {/* Hover Effects */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-warm text-primary-foreground px-8 py-4 rounded-xl font-orbitron font-bold text-lg hover-lift glow-box-orange">
            <a target="_blank" href="https://github.com/iamVedanta">
              EXPLORE ALL PROJECTS
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
