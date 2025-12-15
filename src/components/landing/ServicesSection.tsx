import { LineChart, Lightbulb, Shield, Users, Clock, BookMarked } from "lucide-react";

const services = [
  {
    icon: LineChart,
    title: "Daily Market Outlook",
    description: "Pre-market analysis covering global cues, expected opening, and key levels to watch for the day.",
  },
  {
    icon: Lightbulb,
    title: "Trade Ideas",
    description: "Research-based trade setups with clear entry, stop-loss, and target levels. Educational purpose only.",
  },
  {
    icon: Shield,
    title: "Risk Management Guidance",
    description: "Learn position sizing, capital allocation, and how to protect your trading capital effectively.",
  },
  {
    icon: Users,
    title: "Community Discussions",
    description: "Engage with fellow learners, share market observations, and discuss trading concepts together.",
  },
  {
    icon: Clock,
    title: "Real-Time Market Updates",
    description: "Important intraday updates on market movements, news events, and level breaches.",
  },
  {
    icon: BookMarked,
    title: "Educational Resources",
    description: "Curated learning materials on technical analysis, market psychology, and trading strategies.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            What We Provide
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Resources for Your Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools and insights designed to help you understand markets better. All content is for educational purposes and not investment advice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:border-primary/30 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * All trade ideas and analysis are for educational purposes only. We do not guarantee profits or provide personalized investment advice.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;