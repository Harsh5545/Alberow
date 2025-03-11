"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      // Reset form
      const form = e.target;
      form.reset();
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Input
            type="text"
            placeholder="Your Name"
            required
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Your Email"
            required
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
          />
        </div>
      </div>
      <div>
        <Input
          type="text"
          placeholder="Subject"
          required
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
        />
      </div>
      <div>
        <Textarea
          placeholder="Your Message"
          rows={4}
          required
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}