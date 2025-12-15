import { Button } from "@/components/ui/button";
import { MessageCircle, Send, AlertTriangle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        {/* Risk Disclaimer Banner */}
        <div className="mb-8 p-4 bg-warning/10 border border-warning/20 rounded-lg flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Risk Disclosure:</span> Trading in securities involves substantial risk of loss. Past performance is not indicative of future results. We do not provide investment advice or guarantee any returns.
          </p>
        </div>

        <div className="max-w-3xl">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Trading Education Community
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Disciplined Trading Insights for{" "}
            <span className="text-primary">Indian Markets</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Join a community focused on research-based market analysis for NIFTY, BANKNIFTY & Equity. Learn market structure, risk management, and develop your own trading edge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="gap-2 text-base px-8"
              asChild
            >
              <a href="https://t.me/one_tradeacademy" target="_blank" rel="noopener noreferrer">
                <Send className="w-5 h-5" />
                Join Telegram Community
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Research-Based Approach</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>No Profit Promises</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>SEBI Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;