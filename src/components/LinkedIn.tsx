const LinkedIn = () => {
  return (
    <section id="linkedin" className="py-24 bg-background-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-orbitron font-bold mb-8 flex items-center">
          <span className="text-primary font-mono mr-4 text-2xl">04.</span>
          <span className="text-foreground">Professional</span>
          <span className="bg-gradient-warm bg-clip-text text-transparent ml-2">Network</span>
        </h2>

        <div className="max-w-4xl mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm active on LinkedIn where I share insights on AI, robotics, web development, 
            and my professional journey. Connect with me for discussions, collaborations, 
            or just a friendly tech chat about the future of intelligent systems!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* LinkedIn Post Embeds */}
          <div className="glass-orange rounded-2xl overflow-hidden hover-lift border border-primary/20">
            <div className="p-6 bg-gradient-primary text-primary-foreground">
              <h3 className="font-orbitron font-bold text-lg mb-2">Latest Insights</h3>
              <p className="text-sm opacity-90">Recent thoughts on AI and technology</p>
            </div>
            
            <div className="bg-white">
              <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7123456789012345678" 
                height="400" 
                width="100%" 
                frameBorder="0" 
                allowFullScreen 
                title="Embedded LinkedIn post about AI developments"
                className="w-full"
              ></iframe>
            </div>
          </div>

          <div className="glass-orange rounded-2xl overflow-hidden hover-lift border border-primary/20">
            <div className="p-6 bg-gradient-secondary text-secondary-foreground">
              <h3 className="font-orbitron font-bold text-lg mb-2">Project Updates</h3>
              <p className="text-sm opacity-90">Progress on autonomous systems</p>
            </div>
            
            <div className="bg-white">
              <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7123456789012345679" 
                height="400" 
                width="100%" 
                frameBorder="0" 
                allowFullScreen 
                title="Embedded LinkedIn post about project progress"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Professional Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass-effect rounded-xl p-6 text-center hover-lift border border-primary/20">
            <div className="text-3xl font-orbitron font-bold text-primary glow-orange mb-2">500+</div>
            <p className="text-muted-foreground font-medium">Professional Connections</p>
          </div>
          
          <div className="glass-effect rounded-xl p-6 text-center hover-lift border border-primary/20">
            <div className="text-3xl font-orbitron font-bold text-secondary glow-yellow mb-2">50+</div>
            <p className="text-muted-foreground font-medium">Technical Articles</p>
          </div>
          
          <div className="glass-effect rounded-xl p-6 text-center hover-lift border border-primary/20">
            <div className="text-3xl font-orbitron font-bold text-accent mb-2">1K+</div>
            <p className="text-muted-foreground font-medium">Engagement Rate</p>
          </div>
        </div>

        {/* Connect Button */}
        <div className="text-center">
          <a
            href="https://www.linkedin.com/in/vedanta-m-s-14035b245"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-warm text-primary-foreground px-8 py-4 rounded-xl font-orbitron font-bold text-lg hover-lift glow-box-orange group"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            CONNECT ON LINKEDIN
          </a>
        </div>
      </div>
    </section>
  );
};

export default LinkedIn;