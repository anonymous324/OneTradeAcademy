import { UserPlus, BookOpen, Lightbulb, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Join the Community",
    description: "Connect with us on Telegram or WhatsApp to become part of our trading education community.",
  },
  {
    icon: BookOpen,
    title: "Learn & Understand",
    description: "Access educational content, daily analysis, and learn market concepts at your own pace.",
  },
  {
    icon: Lightbulb,
    title: "Develop Your Edge",
    description: "Apply what you learn to develop your own analysis framework and trading methodology.",
  },
  {
    icon: TrendingUp,
    title: "Trade Independently",
    description: "Use your knowledge to make informed trading decisions. You're in control of your journey.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Getting Started
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple path from joining our community to becoming an independent, informed trader.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 relative">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold font-display">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;