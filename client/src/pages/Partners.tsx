import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, X, Building2, Library, Users, Briefcase, Heart, Hospital, Home, UserCheck } from "lucide-react";
import { Link } from "wouter";

export default function Partners() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                50+
              </div>
              <span className="text-xl font-bold text-slate-900">TechBridge</span>
            </a>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/"><a className="text-slate-600 hover:text-slate-900 font-medium">Home</a></Link>
            <Link href="/about"><a className="text-slate-600 hover:text-slate-900 font-medium">About</a></Link>
            <Link href="/partners"><a className="text-slate-900 font-bold">Partners</a></Link>
          </div>
          <Button size="sm">Schedule Demo</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Members Are Falling Behind—
              <br />
              <span className="text-orange-400">And It's Not Their Fault. We're Fighting Back.</span>
            </h1>
            <p className="text-2xl mb-8 text-slate-200 font-serif italic">
              Ageism is the problem. AgeTech is the answer.
            </p>
            <div className="prose prose-lg prose-invert mx-auto mb-10 text-slate-200">
              <p>
                Adults 50+ in your community are being systematically excluded from the digital economy. They're losing jobs to younger candidates. Missing healthcare access because they can't navigate patient portals. Facing social isolation because they don't know how to video call family.
              </p>
              <p className="font-bold text-white">
                But here's the truth: Your members have adapted to every technology shift in their lifetimes—from typewriters to smartphones. They just need the right support to master AI and digital tools.
              </p>
              <p>
                We've trained 1,200+ adults across 45 partner sites with an 85% completion rate—far above the industry average of 30%. Your organization could be next.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                See Partner Packages
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-6">
                Schedule a Demo
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>45+ Active Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>1,200+ Lives Changed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>85% Completion Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-slate-900">
            You're Not Just Buying a Training Program.
            <br />
            You're Joining a Movement.
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="prose prose-lg mx-auto text-slate-700">
              <p>
                50+ TechBridge exists because adults 50+ face systematic exclusion from the digital economy. Age discrimination in hiring is rampant. AI systems are trained on bias that favors youth. And millions of capable, experienced people are being written off.
              </p>
              <p className="font-bold text-slate-900">
                We're fighting back. And when you partner with us, you're part of that fight.
              </p>
              <p>
                We're not just a vendor—we're a movement of 45+ organizations proving that age is not a barrier to learning, earning, or thriving in the digital world. When you join, you're standing with libraries, community centers, workforce agencies, and organizations nationwide who refuse to let ageism win.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-5xl font-bold text-orange-500 mb-2">64%</div>
              <p className="text-slate-700">of workers 50+ report age discrimination in hiring</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-5xl font-bold text-orange-500 mb-2">40%</div>
              <p className="text-slate-700">of adults 50+ lack basic digital skills needed for modern jobs</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-5xl font-bold text-orange-500 mb-2">80%</div>
              <p className="text-slate-700">want to live independently—but need tech skills to do it</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800">Join the Movement</Button>
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
            Built for Every Organization That Serves Adults 50+
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <Library className="w-10 h-10 text-orange-500 mb-3" />
                <CardTitle className="text-lg">Libraries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Extend your digital literacy mission with age-specific programming and measurable outcomes. Join the movement to fight digital exclusion.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <Building2 className="w-10 h-10 text-orange-500 mb-3" />
                <CardTitle className="text-lg">Community Centers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Serve your members with structured tech education that complements existing programs. Together, we prove ageism wrong.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <Briefcase className="w-10 h-10 text-orange-500 mb-3" />
                <CardTitle className="text-lg">Workforce Agencies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Support displaced workers 50+ with WIOA-eligible training. Fight age discrimination with skills that matter.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <Users className="w-10 h-10 text-orange-500 mb-3" />
                <CardTitle className="text-lg">Senior Centers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Help members live independently with technology skills that matter. Empower them to age on their own terms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <Hospital className="w-10 h-10 text-orange-500 mb-3" />
                <CardTitle className="text-lg">Healthcare & Hospitals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Help patients use telehealth and patient portals confidently. Make healthcare accessible for everyone, regardless of age.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <Heart className="w-10 h-10 text-orange-500 mb-3" />
                <CardTitle className="text-lg">Faith Communities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Connect congregation members with technology while honoring your values. Live your mission of inclusion for all ages.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <Home className="w-10 h-10 text-orange-500 mb-3" />
                <CardTitle className="text-lg">Housing Communities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Add real value for residents while supporting independent living. Show residents they're valued members of a thriving community.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <UserCheck className="w-10 h-10 text-orange-500 mb-3" />
                <CardTitle className="text-lg">Employers & HR</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Support employees 50+ with digital skills training. Build a workplace that values experience and demonstrates age diversity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Packages Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-center mb-16 text-slate-600">
            Choose the level of support that fits your organization and budget.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Digital Package */}
            <Card className="border-2 border-slate-200 hover:border-blue-900 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Digital</CardTitle>
                <CardDescription className="text-3xl font-bold text-slate-900 mt-2">$249</CardDescription>
                <p className="text-sm text-slate-600">one-time or 3 × $83/month</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-6">Online course access for your entire organization. Perfect for getting started.</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Unlimited online learners</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Group management dashboard</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Progress tracking and reports</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Co-branded materials</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Priority email support</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <p className="text-xs font-semibold text-slate-700 mb-2">Does NOT include:</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-600">In-person presentations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-600">Trained presenter on-site</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            {/* Hybrid Package */}
            <Card className="border-4 border-orange-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Hybrid</CardTitle>
                <CardDescription className="text-3xl font-bold text-slate-900 mt-2">Custom</CardDescription>
                <p className="text-sm text-slate-600">site license + per-event fee</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-6">The full experience—online course plus our team comes to you for workshops.</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Everything in Digital</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">In-person presentations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Virtual Zoom/Teams sessions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Curriculum and slide decks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">All printed materials</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Monthly progress report</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <p className="text-xs font-semibold text-slate-700 mb-2">Does NOT include:</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-600">Trained presenter on-site</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600">Schedule Demo</Button>
              </CardContent>
            </Card>

            {/* Full Agency Package */}
            <Card className="border-2 border-slate-200 hover:border-blue-900 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Full Agency</CardTitle>
                <CardDescription className="text-3xl font-bold text-slate-900 mt-2">Custom</CardDescription>
                <p className="text-sm text-slate-600">monthly retainer</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-6">We become your dedicated AgeTech education partner—fully embedded in your community.</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Everything in Hybrid</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Trained graduate presenter placed at your site</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Ongoing presenter coaching</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Quarterly curriculum updates</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Impact report for funders</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Co-branded video content</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Dedicated account manager</span>
                  </div>
                </div>

                <Button className="w-full">Let's Talk</Button>
              </CardContent>
            </Card>
          </div>

          {/* Volume Pricing */}
          <div className="max-w-3xl mx-auto text-center bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Serving Multiple Locations?</h3>
            <p className="text-lg text-slate-700 mb-6">
              Get <span className="font-bold text-orange-500">15% off</span> when you partner with 5 or more sites. Networks, counties, and state agencies welcome.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-6 text-slate-700">
              <div>
                <span className="font-bold text-2xl text-blue-900">$1,061</span>
                <span className="text-sm block">5 sites (save $185)</span>
              </div>
              <div>
                <span className="font-bold text-2xl text-blue-900">$2,122</span>
                <span className="text-sm block">10 sites (save $373)</span>
              </div>
              <div>
                <span className="font-bold text-2xl text-blue-900">Custom</span>
                <span className="text-sm block">20+ sites</span>
              </div>
            </div>
            <Button>Inquire About Volume Pricing</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Your Tech Education Program—And Fight Ageism Together
            </h2>
            <p className="text-xl mb-10 text-slate-200">
              Schedule a free 30-minute discovery call. We'll learn about your community and show you exactly how 50+ TechBridge would work for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                Schedule Discovery Call
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-6">
                Download Partner Guide
              </Button>
            </div>
            <p className="text-sm text-slate-300">
              Prefer email? Reach us at: hello@learnmoretechnologies.com
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                50+
              </div>
              <span className="text-2xl font-bold text-white">TechBridge</span>
            </div>
            <p className="text-lg font-semibold text-white mb-2">Fighting ageism through technology education.</p>
            <p className="text-sm italic mb-4 text-slate-400">Ageism is the problem. AgeTech is the answer.</p>
            <p className="text-sm mb-6">
              We believe age should never be a barrier to digital independence, economic opportunity, or social connection. In the new economy, digital skills aren't optional—they're survival.
            </p>
            <p className="text-sm text-slate-400">
              Contact: hello@learnmoretechnologies.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
