import { Send, MessageCircle, AlertTriangle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* Risk Disclosure */}
      <div className="section-padding bg-destructive/5 border-b border-border">
        <div className="container-max">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-semibold text-foreground mb-3">
                Important Risk Disclosure
              </h3>
              <div className="text-sm text-muted-foreground space-y-3">
                <p>
                  <strong>Trading Risk:</strong> Trading in securities, derivatives, and options involves substantial risk of loss and is not suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite.
                </p>
                <p>
                  <strong>No Guarantee:</strong> One Trade Academy does not guarantee any profits or returns. All trade ideas, analysis, and educational content shared are for informational and educational purposes only and should not be considered as investment advice, stock recommendations, or trading signals.
                </p>
                <p>
                  <strong>Past Performance:</strong> Past performance of any trading strategy or analysis is not indicative of future results. Markets can and do change, and what worked in the past may not work in the future.
                </p>
                <p>
                  <strong>Independent Decision:</strong> You are solely responsible for your trading decisions. We strongly recommend consulting with a qualified financial advisor before making any investment decisions. Always conduct your own research and analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEBI Disclaimer */}
      <div className="py-6 px-4 md:px-8 bg-secondary/30 border-b border-border">
        <div className="container-max">
          <p className="text-xs text-muted-foreground text-center">
            <strong>SEBI Disclaimer:</strong> One Trade Academy is not a SEBI registered investment advisor, research analyst, or portfolio manager. We do not provide personalized investment advice. All content is purely educational and for informational purposes. Users must exercise their own judgment and consult professionals for financial advice.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 px-4 md:px-8">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                One Trade Academy
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                A trading education community focused on disciplined learning and market understanding for Indian stock markets.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://t.me/one_tradeacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Send className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#education" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Connect With Us</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://t.me/one_tradeacademy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Telegram Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 px-4 md:px-8 border-t border-border">
        <div className="container-max">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} One Trade Academy. All rights reserved. | For educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;