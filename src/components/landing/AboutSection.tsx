import { BookOpen, Target, Shield, Users } from "lucide-react";

const values = [
  {
    icon: BookOpen,
    title: "Education First",
    description: "We focus on teaching market concepts, not selling dreams. Understanding comes before trading.",
  },
  {
    icon: Target,
    title: "Disciplined Approach",
    description: "Every trade idea is backed by clear reasoning, defined risk, and proper market structure analysis.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Capital preservation is priority. We emphasize position sizing and stop-loss discipline.",
  },
  {
    icon: Users,
    title: "Community Learning",
    description: "Learn alongside fellow traders. Share insights, discuss markets, and grow together.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Who We Are
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            One Trade Academy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A trading education community dedicated to helping traders understand Indian markets through structured learning, daily analysis, and disciplined trading principles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;