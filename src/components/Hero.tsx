import { Button } from '@/components/ui/button';
import heroPortrait from '@/assets/hero-portrait.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-primary font-orbitron text-lg tracking-wide">
              // Initializing System
            </p>
            
            <h1 className="text-5xl lg:text-7xl font-orbitron font-bold leading-tight">
              <span className="text-foreground">Vedanta</span>{' '}
              <span className="text-primary glow-orange">
                MS
              </span>
            </h1>
            
            <h2 className="text-3xl lg:text-5xl font-orbitron font-bold text-muted-foreground">
              I aspire to architect{' '}
              <span className="text-primary glow-orange">
                intelligent systems
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Tech graduate specializing in Machine Learning, Deep Learning, and IoT. 
              Passionate about building intelligent applications, from autonomous drones 
              to advanced AI models that push the boundaries of what's possible. I love meeting new People 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:bg-gradient-warm text-primary-foreground font-orbitron font-bold glow-box-orange hover-lift"
                asChild
              >
                <a href="#projects">VIEW PROJECTS</a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary font-orbitron font-bold glow-box-orange"
                asChild
              >
                <a href="#contact">CONNECT</a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-glow rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img
                src={heroPortrait}
                alt="Vedanta MS - Tech Professional"
                className="relative rounded-2xl border-2 border-primary/30 hover-lift animate-float"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full animate-pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-secondary rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;