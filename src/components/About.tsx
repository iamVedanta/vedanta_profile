const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-orbitron font-bold mb-12 flex items-center">
            <span className="text-primary font-mono mr-4 text-2xl"></span>
            <span className="text-foreground">A Bit about</span>
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent ml-2">
              ME
            </span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Hello! I'm Vedanta, a computer science graduate specializing in
                AI & ML. My journey in tech has been driven by a fascination
                with how software can solve real-world problems through
                intelligent automation and data-driven insights.
              </p>

              <p>
                I thrive in collaborative environments, enjoy learning from
                others, and have hands-on experience in web technologies and
                training deep learning models. My approach combines technical
                expertise with creative problem-solving to build systems that
                make a meaningful impact.
              </p>

              <p>
                I'm particularly excited about the potential of Large Language
                Models and autonomous systems. I've been actively expanding my
                expertise in these areas, aiming to contribute to projects that
                push the boundaries of what's possible with AI.
              </p>

              <p>
                Outside of coding, I've led teams and volunteered as a teacher,
                experiences that have honed my leadership and communication
                skills. I believe in continuous growth and am always looking for
                the next challenge that will expand my horizons.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="lg:col-span-1">
              <div className="glass-orange rounded-xl p-6 hover-lift">
                <h3 className="text-xl font-orbitron font-bold text-primary mb-6 glow-orange">
                  Tech Arsenal
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      AI & Machine Learning
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Python",
                        "TensorFlow",
                        "PyTorch",
                        "YOLOv8",
                        "Transformers",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-primary text-primary-foreground text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Web Development
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "TypeScript", "Node.js", "Tailwind CSS"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-secondary text-secondary-foreground text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Data & Analytics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Pandas",
                        "NumPy",
                        "Scikit-learn",
                        "Computer Vision",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
