import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="mb-12">
        <p
          className="text-xs font-medium uppercase tracking-widest text-[#7A7870] mb-3"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          04 / Contact
        </p>
        <h2
          className="text-3xl sm:text-4xl font-black text-[#1C1C1A] mb-4"
          style={{ fontFamily: '"Syne", sans-serif' }}
        >
          Get in <span className="text-[#2E3A8C]">Touch</span>
        </h2>
        <div className="editorial-divider" />
      </div>

      <div className="max-w-2xl mx-auto">
        <Card variant="green">
          <CardHeader>
            <CardTitle>Let&apos;s Connect</CardTitle>
          </CardHeader>
          <CardContent>
            <p
              className="text-sm text-[#1C1C1A] leading-relaxed mb-8"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              Whether you&apos;re a recruiter, a fellow tech enthusiast, or someone curious
              about food safety and technology. I&apos;d love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="mailto:dale@cgrv.co.uk" className="flex-1">
                <Button variant="primary" size="md" className="w-full">
                  <Mail size={14} className="mr-2" />
                  Send Email
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/dale-cosgrove-738a18a4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="secondary" size="md" className="w-full">
                  <Linkedin size={14} className="mr-2" />
                  LinkedIn
                </Button>
              </Link>
            </div>

            <div
              className="mt-8 border-t border-[#D5D1C9] pt-6 text-sm text-[#7A7870]"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              <p className="font-semibold text-[#22c55e] mb-1">Response time:</p>
              <p>Usually within 24–48 hours</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
