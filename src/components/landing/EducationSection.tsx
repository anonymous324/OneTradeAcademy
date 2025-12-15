import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const topics = [
  {
    title: "Understanding NIFTY & BANKNIFTY",
    content: "Learn how index movements work, the composition of NIFTY 50 and BANKNIFTY, sector weightages, and what drives these indices. Understand the relationship between spot and futures markets.",
  },
  {
    title: "Option Chain Basics",
    content: "Decode the option chain - understand open interest, change in OI, put-call ratio, and how to read option data for market direction insights. Learn about Greeks and their practical application.",
  },
  {
    title: "Technical Analysis Fundamentals",
    content: "Master support and resistance identification, trend analysis, candlestick patterns, and volume analysis. Learn to read price action and identify high-probability trading zones.",
  },
  {
    title: "Market Psychology & Sentiment",
    content: "Understand how fear and greed drive market movements. Learn to identify market phases, sentiment extremes, and how institutional traders position themselves.",
  },
  {
    title: "Risk-to-Reward Framework",
    content: "Develop a systematic approach to evaluating trade opportunities. Learn position sizing, risk management, and how to maintain a favorable risk-reward ratio in your trading.",
  },
  {
    title: "Trade Journal & Review",
    content: "Learn the importance of maintaining a trading journal. Understand how to review trades, identify patterns in your trading behavior, and continuously improve your approach.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Education
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Topics We Cover
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Build a strong foundation in market analysis and trading concepts. Our educational content is designed to help you understand markets, not just follow signals blindly.
            </p>
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Learning Approach:</span> We believe in teaching you to fish, not just giving you fish. Our goal is to help you develop independent analysis skills.
              </p>
            </div>
          </div>

          <div>
            <Accordion type="single" collapsible className="space-y-3">
              {topics.map((topic, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-4 bg-card"
                >
                  <AccordionTrigger className="text-left font-display font-medium hover:no-underline">
                    {topic.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {topic.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;