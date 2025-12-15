import { TrendingUp, MapPin, ClipboardList, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: TrendingUp,
    title: "Pre-Market Analysis",
    description: "Daily review of global cues, FII/DII data, and overnight developments affecting Indian markets.",
  },
  {
    icon: MapPin,
    title: "Key Levels Identification",
    description: "Support, resistance, and pivotal zones for NIFTY, BANKNIFTY, and select stocks based on technical analysis.",
  },
  {
    icon: ClipboardList,
    title: "Trade Plan Format",
    description: "Clear entry zones, stop-loss levels, and potential targets. Every idea comes with defined risk parameters.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Our Approach
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Trading Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured, research-based methodology that emphasizes preparation, analysis, and disciplined execution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="p-8 bg-card rounded-xl border border-border h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-5xl font-bold text-muted/50 font-display">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 text-muted-foreground/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;