import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 max-w-5xl mx-auto">
      {/* Section header */}
      <div className="mb-12">
        <div
          className="text-[#22c55e] text-[8px] mb-3"
          style={{ fontFamily: '"Press Start 2P", monospace' }}
        >
          // SECTION_04
        </div>
        <h2
          className="text-[#f0f0f0] text-lg sm:text-xl mb-4"
          style={{ fontFamily: '"Press Start 2P", monospace' }}
        >
          CONTACT
        </h2>
        <div className="pixel-divider" />
      </div>

      <div className="max-w-2xl mx-auto">
        <Card variant="green">
          <CardHeader>
            <CardTitle>[ INSERT COIN TO CONNECT ]</CardTitle>
          </CardHeader>
          <CardContent>
            <p
              className="text-[#f0f0f0] text-[9px] leading-loose mb-8"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              Whether you&apos;re a recruiter, a fellow tech
              enthusiast, or someone curious about food safety
              and technology — I&apos;d love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="mailto:dale@cgrv.co.uk"
                className="flex-1"
              >
                <Button variant="primary" size="md" className="w-full">
                  <Mail size={14} className="mr-2" />
                  SEND EMAIL
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
                  LINKEDIN
                </Button>
              </Link>
            </div>

            <div
              className="mt-8 border-t-2 border-[#333333] pt-6 text-[#888888] text-[8px] leading-loose"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              <p className="text-[#22c55e] mb-2">RESPONSE TIME:</p>
              <p>USUALLY WITHIN 24-48 HOURS</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
