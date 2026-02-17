/**
 * 50+ TechBridge Homepage - Organic Futurism Design
 * 
 * Design Philosophy: Warm, flowing organic forms that suggest growth and evolution.
 * Rejects ageist design tropes. Celebrates capability, experience, and continuous learning.
 * 
 * Key Messaging Changes:
 * - NO "seniors" or "older adults" language
 * - Focus on empowerment, not compensation for decline
 * - Technology amplifies life, doesn't just manage aging
 * - Peer-to-peer learning as strength-based model
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Sparkles, Heart, TrendingUp, Globe, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
            50+ TechBridge
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#mission" className="text-foreground/70 hover:text-foreground transition-colors">Our Mission</a>
            <a href="#approach" className="text-foreground/70 hover:text-foreground transition-colors">Our Approach</a>
            <a href="#facilitators" className="text-foreground/70 hover:text-foreground transition-colors">Become a Facilitator</a>
            <a href="#impact" className="text-foreground/70 hover:text-foreground transition-colors">Impact</a>
            <Button className="rounded-full px-6">Join Free</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Organic gradient background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/BQH80GEKGJen7Wkw6cwiSA/sandbox/VD2NlvDKWO5t5dHwyyPU9D-img-2_1771298054000_na1fn_YWJzdHJhY3Qtb3JnYW5pYy1ncmFkaWVudA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQlFIODBHRUtHSmVuN1drdzZjd2lTQS9zYW5kYm94L1ZEMk5sdkRLV081dDVkSHd5eVBVOUQtaW1nLTJfMTc3MTI5ODA1NDAwMF9uYTFmbl9ZV0p6ZEhKaFkzUXRiM0puWVc1cFl5MW5jbUZrYVdWdWRBLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DsVnPMWC12nYoI9rA068J6uR63SsAtz1kY7ug-M1WTSaXvUjcqL86bK5I8BclCk3KuVn~GxpNMiByR4TvwMU8r48VCeK-b2~GoMMfx2O33dbaBMoiZS2R7BFXAz1bfpW8q2ALYfygMhwAEOO6chry63qPvlA0156WUrCq3ub73OYYGH08YVnKaSMhI~Lcs8PHNddACQG8kdolxLHQVHM3OV5xSbhYm7mR20rouA5IO5QVF-vWUnrthxmNaMuQqcMu7jnoVQhcfdC4lbe0jnwUbTAiq22JAgtbkyp6YdzUhJ8R8ERqkQB6pHfvTUL~Tm82wr3HqOwW62FjluvE9-GyA__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
                Fighting Ageism Through Technology
              </div>
              <h1 className="text-5xl lg:text-7xl font-semibold mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
                Technology <span className="text-primary">Amplifies</span> Life
              </h1>
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                We believe age should never be a barrier to digital independence, economic opportunity, or social connection. 50+ TechBridge is proving it—one learner at a time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 text-lg">
                  Start Learning Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-lg">
                  Become a Facilitator
                </Button>
              </div>
              <div className="flex gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary">1,200+</div>
                  <div className="text-sm text-foreground/60">Lives Changed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">85%</div>
                  <div className="text-sm text-foreground/60">Completion Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">45</div>
                  <div className="text-sm text-foreground/60">Partner Sites</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/BQH80GEKGJen7Wkw6cwiSA/sandbox/VD2NlvDKWO5t5dHwyyPU9D-img-1_1771298049000_na1fn_aGVyby1jb21tdW5pdHktbGVhcm5pbmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQlFIODBHRUtHSmVuN1drdzZjd2lTQS9zYW5kYm94L1ZEMk5sdkRLV081dDVkSHd5eVBVOUQtaW1nLTFfMTc3MTI5ODA0OTAwMF9uYTFmbl9hR1Z5YnkxamIyMXRkVzVwZEhrdGJHVmhjbTVwYm1jLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=EqroAqFtxRaC8OrE4pjegR48xLHkSy51AmGcvSLEaFnFEMy1oCbmQE1lKpws75agqd1E5M42RwqZqlnlc451wAT1Et0N2WvzPjQwVJH7RTOHpbkaC03aMIoWzFQWAmA9G6Q-UdCsy~DuIXvx3h2dZa2VbdXAsnNZNHFQ09yzEcEjuxnq35pu~AohGwfaNUDbqeDlgGZ~ZddNVnfAkK0NE2fLYbedBX1pulK5F~-hIEqBJQy44igEZDtc3IhwKbZKXPvo1BlHHwrSZHiaNd-czKu8rCtwp~RDQcQCpc5NUJnQcjWGH6lPoih~O-DwyY2Ef1MowuWDIbrKMKJgins4dw__"
                  alt="Diverse group of adults 50+ collaborating with technology"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative blob */}
              <div 
                className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 blob -z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Bridging the Digital Divide, <span className="italic text-primary">One Adult at a Time</span>
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We believe that age should never be a barrier to digital independence, economic opportunity, or social connection. 50+ TechBridge exists to bridge the digital divide for adults over 50 through peer-to-peer learning, practical skills training, and a supportive community that celebrates lifelong learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-3xl border-0 shadow-lg bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Sparkles className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Ageism is Real
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Society assumes adults 50+ can't learn technology. We're proving them wrong every day through capability-focused education.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-lg bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Economic Necessity
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Many adults 50+ need to work longer or start new careers. Digital skills unlock opportunity and independence.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-lg bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Living on Your Terms
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Technology makes independent living possible through telehealth, smart homes, and staying connected with loved ones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Built Different, <span className="italic text-primary">By Design</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Five principles that make our approach work where others have failed.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                        Peer-to-Peer Learning
                      </h3>
                      <p className="text-foreground/70">
                        Adults 50+ teach each other. No condescending instructors. No judgment. Just patient, relatable guidance from people who understand.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                        Real-World Focus
                      </h3>
                      <p className="text-foreground/70">
                        Every lesson solves a real problem: accessing healthcare, staying safe online, earning income, or connecting with family.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                        Train-the-Trainer Model
                      </h3>
                      <p className="text-foreground/70">
                        We don't just teach students—we train them to become facilitators. One cohort can impact hundreds of others.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/BQH80GEKGJen7Wkw6cwiSA/sandbox/VD2NlvDKWO5t5dHwyyPU9D-img-4_1771298047000_na1fn_dGVjaC1lbXBvd2VybWVudC1jbG9zZQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQlFIODBHRUtHSmVuN1drdzZjd2lTQS9zYW5kYm94L1ZEMk5sdkRLV081dDVkSHd5eVBVOUQtaW1nLTRfMTc3MTI5ODA0NzAwMF9uYTFmbl9kR1ZqYUMxbGJYQnZkMlZ5YldWdWRDMWpiRzl6WlEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tkBri2NXVKO8dfh4awtrRbz183tGwp5c8HV0DbPprOOjLfFZy5bfnkzv8cljarEM3bYL5BdG3YLv6UUBdWPYlIZgNbOFT0CDz3iD8U3GAP5133o7~BCrSM7~1ffhD7d5aPWxxmnuzovEjwRcsktdREPed73zHT-ep2HbGUHjxCIU-QxF~gnIS12alW7xJIOfhabJGwlX9NdSyF3Wu5QpGyM~xTY~9x72lPyFiozMddzJuAHr9qleyR9nn-DneVhuJQozzMiOCHeAgkfBhZKDXorXbR2~nhjj1ags5bOhlBddQ26WNJI2AjB9Y-jU7lWvzl~RHguF9nWkDfsVeCw4SQ__"
                  alt="Person confidently using technology"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilitator Section */}
      <section id="facilitators" className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 blob -z-0" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/BQH80GEKGJen7Wkw6cwiSA/sandbox/VD2NlvDKWO5t5dHwyyPU9D-img-3_1771298051000_na1fn_ZmFjaWxpdGF0b3ItdGVhY2hpbmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQlFIODBHRUtHSmVuN1drdzZjd2lTQS9zYW5kYm94L1ZEMk5sdkRLV081dDVkSHd5eVBVOUQtaW1nLTNfMTc3MTI5ODA1MTAwMF9uYTFmbl9abUZqYVd4cGRHRjBiM0l0ZEdWaFkyaHBibWMuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aNWJ29mfR3kGce0o-kfYg82Z-~GQuB9dzZJwR9JS~s5rLh6rKAAUAo0xkF~A499V3Ov2BeQMLVg3rxdOPLA-pxl6jA9XdIVveDVxv-GL8UmVdcgKq3Qlu9s9WwnUb~Thhs8h727gXsNdX6kd9hkinezG2Vs7DfxYE9ZVjqmWgalfnC5wTMcSix3WhZWd1IpcypXURMkmrztqJxGrvOOUfq9tViiDSB38ui2vThUrnguTNfrvqJ7kh3FAiicT4-206S5wg927Salg5ByYt3HVmUBEVx~Sem470SnGiWpSTglhLzamJLSYzYyZlJTYEvHQAvmgfodkjEhcFaXNTAqBTg__"
                  alt="Facilitator leading a workshop"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
                Join the Movement
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Become a <span className="italic text-primary">Facilitator</span>
              </h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Our facilitators are community leaders and educators who believe in the power of peer-to-peer learning. They're not charity volunteers—they're trained professionals building a movement.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-foreground/80">Fully certified training program</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-foreground/80">Ongoing coaching and professional development</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-foreground/80">Paid position through partner organizations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-foreground/80">Join a community of movement builders</p>
                </div>
              </div>

              <Button size="lg" className="rounded-full px-8">
                Learn About Facilitator Training <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              The Numbers <span className="italic text-primary">Speak for Themselves</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="rounded-3xl border-0 shadow-lg bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  1,200+
                </div>
                <div className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-2">
                  Lives Changed
                </div>
                <p className="text-sm text-foreground/70">
                  Adults 50+ trained since 2023
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-lg bg-gradient-to-br from-accent/10 to-accent/5">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  85%
                </div>
                <div className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-2">
                  Completion Rate
                </div>
                <p className="text-sm text-foreground/70">
                  Far above industry average of 30%
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-lg bg-gradient-to-br from-secondary/20 to-secondary/10">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  45
                </div>
                <div className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-2">
                  Partner Sites
                </div>
                <p className="text-sm text-foreground/70">
                  Libraries, community centers & agencies
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-lg bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  92%
                </div>
                <div className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-2">
                  Feel More Confident
                </div>
                <p className="text-sm text-foreground/70">
                  Report increased digital confidence
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blob" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blob" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to Begin Your Digital Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 1,200+ adults 50+ who are thriving in the digital world. Free to join, no experience needed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full px-8 text-lg">
              Start Free Course <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-lg bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                50+ TechBridge
              </div>
              <p className="text-sm text-foreground/60">
                Technology confidence for adults 50+ who want to stay connected, healthy, and independent in the digital world.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">Start Here</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Our Courses</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">For Partners</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Courses</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">Digital Health & Wellness</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Staying Connected</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Online Safety</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Everyday Tech</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get in Touch</h4>
              <p className="text-sm text-foreground/70 mb-2">
                hello@50plustechbridge.com
              </p>
              <Button className="rounded-full mt-4">
                Partner With Us
              </Button>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>© 2026 50+ TechBridge. All rights reserved.</p>
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
