import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle } from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwcixpg6RDEJxSXu93qpvd4WbQ9hb08fRD8JzFC45ERSuniAIPMk7KIfnpyHFCX4up17A/exec";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // 🔥 REQUIRED
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          source: "Website Contact Section",
        }),
      });

      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12">

          <div>
            <span className="text-primary font-medium text-sm uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              Reach out to us for any queries about our community or educational content.
            </p>

            <a
              href="https://t.me/one_tradeacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card rounded-lg border hover:border-primary transition"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Send className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">Telegram</p>
                <p className="text-sm text-muted-foreground">
                  Join our community channel
                </p>
              </div>
            </a>
          </div>

          <div className="bg-card rounded-xl border p-6 lg:p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Message Received!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for contacting us. We’ll get back to you soon.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label>Full Name</Label>
                  <Input name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div>
                  <Label>Email</Label>
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div>
                  <Label>Phone</Label>
                  <Input name="phone" value={formData.phone} onChange={handleChange} />
                </div>

                <div>
                  <Label>Message</Label>
                  <Textarea name="message" rows={4} value={formData.message} onChange={handleChange} required />
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
