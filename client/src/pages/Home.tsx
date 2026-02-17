/**
 * 50+ TechBridge Homepage - Using Actual Site Branding
 * 
 * Design: Navy Blue (#1e2749) + Bright Orange (#ff9500)
 * Typography: Playfair Display (headings) + Inter (body)
 * Layout: Matches current learnmoretechnologies.com structure
 * 
 * Key Messaging Changes (Anti-Ageism):
 * - "Your Second Act" → "Technology Amplifies Life"
 * - NO "seniors" or "older adults" language
 * - "Aging in place" → "Living independently"
 * - Focus on empowerment, not compensation for decline
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Target, DollarSign, Award, Heart, CheckCircle, HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation - Dark Navy Background */}
      <nav className="fixed top-0 w-full bg-foreground z-50 border-b border-foreground">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="text-2xl font-semibold text-primary">
            Learnmoretechnologies
          </div>
          <div className="hidden md:flex gap-8 items-center text-white">
            <a href="#" className="hover:text-primary transition-colors">Start Here</a>
            <a href="#" className="hover:text-primary transition-colors">Courses</a>
            <a href="#" className="hover:text-primary transition-colors">For Partners</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Resources</a>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6">
              Join Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Dark Navy Background */}
      <section className="relative pt-32 pb-20 bg-foreground text-white overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
                Technology Education for Adults 50+
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Technology <span className="italic text-primary">Amplifies</span> Life
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Begin your journey to digital confidence — designed for adults 50+. No experience needed.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-lg px-8 text-lg">
                  Get Started Free →
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-foreground rounded-lg px-8 text-lg">
                  Learn More
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Free to join</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>No experience needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>1,200+ adults trained</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/BQH80GEKGJen7Wkw6cwiSA/sandbox/VD2NlvDKWO5t5dHwyyPU9D-img-1_1771298049000_na1fn_aGVyby1jb21tdW5pdHktbGVhcm5pbmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQlFIODBHRUtHSmVuN1drdzZjd2lTQS9zYW5kYm94L1ZEMk5sdkRLV081dDVkSHd5eVBVOUQtaW1nLTFfMTc3MTI5ODA0OTAwMF9uYTFmbl9hR1Z5YnkxamIyMXRkVzVwZEhrdGJHVmhjbTVwYm1jLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=EqroAqFtxRaC8OrE4pjegR48xLHkSy51AmGcvSLEaFnFEMy1oCbmQE1lKpws75agqd1E5M42RwqZqlnlc451wAT1Et0N2WvzPjQwVJH7RTOHpbkaC03aMIoWzFQWAmA9G6Q-UdCsy~DuIXvx3h2dZa2VbdXAsnNZNHFQ09yzEcEjuxnq35pu~AohGwfaNUDbqeDlgGZ~ZddNVnfAkK0NE2fLYbedBX1pulK5F~-hIEqBJQy44igEZDtc3IhwKbZKXPvo1BlHHwrSZHiaNd-czKu8rCtwp~RDQcQCpc5NUJnQcjWGH6lPoih~O-DwyY2Ef1MowuWDIbrKMKJgins4dw__"
                  alt="Diverse group of adults 50+ collaborating with technology"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Dark Navy Background */}
      <section className="py-16 bg-foreground border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                1188+
              </div>
              <div className="text-sm text-white/70 uppercase tracking-wider">Lives Changed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                84%
              </div>
              <div className="text-sm text-white/70 uppercase tracking-wider">Completion Rate</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                44
              </div>
              <div className="text-sm text-white/70 uppercase tracking-wider">Partner Sites</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                91%
              </div>
              <div className="text-sm text-white/70 uppercase tracking-wider">Feel More Confident</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
              Why Learn More Technologies
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Learning Built <span className="italic text-primary">For You</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Traditional tech training fails adults 50+. We built something different — patient, practical, and designed for real life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  Peer-to-Peer Learning
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Adults 50+ teach each other. No condescending instructors. Just patient, relatable guidance from people who get it.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  Real-World Focus
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Every lesson solves a real problem — healthcare, online safety, connecting with family.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <DollarSign className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  Free & Accessible
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Our Foundation Digital Skills course is completely free. No barriers, no credit cards, no excuses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  Train-the-Trainer
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  We train students to become teachers — creating a ripple effect across communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  Community, Not Just Classes
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Graduates stay connected through online forums, monthly meetups, and ongoing peer support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <HomeIcon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  Living Independently
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Technology makes independent living possible — telehealth, smart homes, safety tools, and staying connected.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Light Gray Background */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto text-center">
          <div className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Ready to Begin?
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Join 1,200+ Adults <span className="italic text-primary">Already Thriving</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Start your free digital skills course today. No experience needed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-lg px-8 text-lg">
              Start My Free Lesson <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white rounded-lg px-8 text-lg">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Dark Navy Background */}
      <footer className="py-12 bg-foreground text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-semibold mb-4 text-primary">
                Learnmoretechnologies
              </div>
              <p className="text-sm text-white/70">
                Technology confidence for adults 50+ who want to stay connected, healthy, and safe in the digital world.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">Start Here</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Our Courses</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">For Partners</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Our Courses</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">Digital Health & Wellness</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Staying Connected</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Online Safety</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Everyday Tech</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Free Foundation Course</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Get in Touch</h4>
              <p className="text-sm text-white/70 mb-4">
                hello@learnmoretechnologies.com
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg">
                Partner With Us
              </Button>
              <Button className="mt-2 bg-primary hover:bg-primary/90 text-white rounded-lg w-full">
                Join Free Today
              </Button>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2026 Learnmoretechnologies. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
