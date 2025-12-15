import { Button } from "@/components/ui/button";
import { Send, Users, MessageSquare, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, label: "Community Members", value: "5,000+" },
  { icon: MessageSquare, label: "Daily Discussions", value: "Active" },
  { icon: TrendingUp, label: "Market Coverage", value: "NIFTY/BANKNIFTY" },
];

const CommunitySection = () => {
  return (
    <section id="community" className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Community
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Trading Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with traders who share your passion for understanding markets. Our Telegram community is a space for learning, discussion, and growth - not hype or unrealistic promises.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-card rounded-lg border border-border">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-display font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button size="lg" className="gap-2" asChild>
              <a href="https://t.me/one_tradeacademy" target="_blank" rel="noopener noreferrer">
                <Send className="w-5 h-5" />
                Join Telegram Community
              </a>
            </Button>
          </div>

          <div className="bg-card rounded-xl border border-border p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Send className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">One Trade Academy</h3>
                <p className="text-sm text-muted-foreground">Telegram Community</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Today's Pre-Market Note</p>
                <p className="text-foreground">
                  NIFTY expected to open flat to positive. Key levels: Support 21,850 | Resistance 22,050. BANKNIFTY watching 46,500 zone...
                </p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Educational Post</p>
                <p className="text-foreground">
                  Understanding Option Chain: Why max pain levels matter and how institutions use them for positioning...
                </p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Community Discussion</p>
                <p className="text-foreground">
                  What's your view on the weekly expiry setup? Let's discuss potential scenarios...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;