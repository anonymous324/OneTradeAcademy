import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul K.",
    role: "Trader, Mumbai",
    content: "The educational approach here is refreshing. Instead of just signals, they teach you the 'why' behind market movements. My understanding of option chain analysis has improved significantly.",
  },
  {
    name: "Priya S.",
    role: "Working Professional, Bangalore",
    content: "As someone who trades part-time, the structured pre-market analysis saves me hours of preparation. The risk management guidance has helped me become more disciplined.",
  },
  {
    name: "Amit V.",
    role: "Aspiring Trader, Delhi",
    content: "I appreciate the honest approach - no fake promises or unrealistic expectations. The community discussions are insightful and the learning resources are valuable for beginners.",
  },
  {
    name: "Deepak M.",
    role: "Equity Trader, Pune",
    content: "The technical analysis concepts taught here have given me a better framework for my own research. It's a genuine learning community focused on education.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from traders who have benefited from our educational content and community discussions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * These testimonials reflect individual experiences with our educational content. Results vary and past learning outcomes do not guarantee trading success.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;