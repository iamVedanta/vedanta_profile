import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary font-orbitron font-bold text-lg mb-4 glow-orange">
            05. System Ready for Connection
          </p>

          <h2 className="text-4xl lg:text-6xl font-orbitron font-bold text-foreground mb-6">
            Let's Build the
            {/* <span className="bg-gradient-warm bg-clip-text  block glow-orange"> */}
            <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent ml-2">
              Future Together
            </span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            I'm always open to discussing innovative projects, creative ideas,
            or opportunities to be part of ambitious visions. Whether you have a
            groundbreaking concept or just want to explore the possibilities of
            AI, my inbox is always open.
          </p>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-effect rounded-xl p-6 hover-lift border border-primary/20 group">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-orbitron font-bold text-foreground mb-2">
                Email
              </h3>
              <p className="text-muted-foreground text-sm">
                vedantams18@gmail.com
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 hover-lift border border-primary/20 group">
              <a
                href="https://www.linkedin.com/in/vedanta-m-s-14035b245"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <h3 className="font-orbitron font-bold text-foreground mb-2">
                  LinkedIn
                </h3>
                <p className="text-muted-foreground text-sm">
                  Professional Network
                </p>
              </a>
            </div>

            <div className="glass-effect rounded-xl p-6 hover-lift border border-primary/20 group">
              <a
                href="https://github.com/iamVedanta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <h3 className="font-orbitron font-bold text-foreground mb-2">
                  GitHub
                </h3>
                <p className="text-muted-foreground text-sm">Code Repository</p>
              </a>
            </div>
          </div>

          {/* Main CTA */}
          <Button
            size="lg"
            className="bg-gradient-warm text-primary-foreground px-12 py-6 text-xl font-orbitron font-bold hover-lift glow-box-orange"
            asChild
          >
            <a href="mailto:vedantams18@gmail.com">INITIATE CONTACT</a>
          </Button>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-orbitron font-bold"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/vedanta-m-s-14035b245"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Connect
              </a>
            </Button>

            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-orbitron font-bold"
              asChild
            >
              <a
                href="https://github.com/iamVedanta"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-secondary rounded-full opacity-10 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </section>
  );
};

export default Contact;
