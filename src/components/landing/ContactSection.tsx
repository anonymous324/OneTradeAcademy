import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, MessageCircle, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Display-only functionality - just show success message
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Reach out to us for any queries about our community, educational content, or how to get started on your trading education journey.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="https://t.me/one_tradeacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Telegram</p>
                  <p className="text-sm text-muted-foreground">Join our community channel</p>
                </div>
              </a>


            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-6 lg:p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Message Received!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", message: "" });
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1.5"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our communication terms. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;