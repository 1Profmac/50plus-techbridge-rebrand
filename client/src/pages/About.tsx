import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Users, BookOpen, Award, TrendingUp, FileText } from "lucide-react";
import { Link } from "wouter";

export default function About() {
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
            <Link href="/about"><a className="text-slate-900 font-bold">About</a></Link>
            <Link href="/partners"><a className="text-slate-600 hover:text-slate-900 font-medium">Partners</a></Link>
          </div>
          <Button size="sm">Join Free Today</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fighting Ageism Through Technology Education
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              We believe age should never be a barrier to digital independence, economic opportunity, or social connection. 50+ TechBridge is proving it—one learner at a time.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Free to join</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>1,200+ trained</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>45 partner sites</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Bridging the Digital Divide One Adult at a Time
          </h2>
          
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg mx-auto text-slate-700">
              <p>
                We believe that age should never be a barrier to digital independence, economic opportunity, or social connection. Yet every day, adults 50+ face systematic exclusion from the digital economy. They're told they're too old to learn. Too slow to adapt. Too irrelevant to matter.
              </p>
              <p>
                50+ TechBridge exists to bridge the digital divide for adults 50+ through peer-to-peer learning, practical skills training, and a supportive community that celebrates lifelong learning. <strong>We're not just teaching technology—we're fighting the lie that age equals obsolescence.</strong>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl">Ageism is Real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  <strong>Society Assumes Adults 50+ Can't Learn Technology. We're Proving Them Wrong Every Day.</strong>
                </p>
                <p className="text-slate-600">
                  Age discrimination in hiring is rampant. AI systems are trained on bias. And the myth that "you can't teach an old dog new tricks" keeps millions of capable people sidelined. We're done accepting that.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl">Economic Necessity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  <strong>Many Adults 50+ Need to Work Longer or Start New Careers. Digital Skills Unlock Opportunity and Independence.</strong>
                </p>
                <p className="text-slate-600">
                  Retirement isn't what it used to be. Many people need to work into their 60s and 70s—but without digital skills, they're invisible to employers. We're changing that by teaching the AI and tech skills that keep people employable and relevant.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl">Living Independently</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  <strong>80% of People 50+ Want to Live on Their Own Terms. Technology Makes That Possible.</strong>
                </p>
                <p className="text-slate-600">
                  Telehealth, smart homes, online banking, and staying connected with family—these aren't luxuries. They're necessities for living independently. We teach the practical skills that let people age with dignity and autonomy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            How 50+ TechBridge Was Born
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto text-slate-700 mb-8">
              <p>
                50+ TechBridge was born from a simple observation: traditional tech training fails adults 50+. Classes move too fast. Instructors lack patience. And the curriculum ignores real-world needs like accessing healthcare, staying safe online, and earning income.
              </p>
              <p>
                We started in public libraries with a radical idea: what if adults 50+ taught each other? What if we focused on practical skills that solve real problems—not just "how to use email"? What if we treated people like the capable, experienced adults they are?
              </p>
              <p>
                The results were transformative. Participants didn't just learn technology—they gained confidence, built community, and discovered new possibilities for their lives after 50. They stopped feeling invisible. They started feeling powerful.
              </p>
              <p>
                Today, we're scaling this model nationwide through partnerships with libraries, community centers, workforce agencies, and organizations that serve adults 50+. We're building a movement, not just running courses.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-900 p-6 mb-8">
              <blockquote className="text-lg italic text-slate-700">
                "Participants didn't just learn technology—they gained confidence, built community, and discovered new possibilities for their lives after 50."
              </blockquote>
              <p className="text-sm font-semibold text-slate-900 mt-2">— Brian McKinney, Founder</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">2023</div>
                <p className="text-slate-700">Year founded</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">Nationwide</div>
                <p className="text-slate-700">Scaling across the US</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
            Built Different, By Design
          </h2>
          <p className="text-xl text-center mb-16 text-slate-600">
            Five principles that make our approach work where others have failed.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">Peer-to-Peer Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Adults 50+ teach each other. No condescending instructors. No judgment. Just patient, relatable guidance from people who understand the challenges. When your teacher has faced the same ageism you have, there's no shame in asking questions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">Real-World Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We don't teach "technology for technology's sake." Every lesson solves a real problem: accessing healthcare, staying safe, earning income, or connecting with family. No fluff. No theory. Just skills that matter in daily life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <CheckCircle2 className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">Free and Accessible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Our Foundation Digital Skills Course is completely free. We partner with libraries and community centers to eliminate barriers to access. No credit card. No commitment. Just learning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">Train-the-Trainer Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We don't just teach students—we train them to become teachers. One cohort can impact hundreds of others. Your experience becomes someone else's lifeline. And you get paid to teach what you've learned.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">Community, Not Just Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Learning continues beyond the classroom. Our graduates stay connected through online forums, monthly meetups, and ongoing support. We're building a movement of adults 50+ who refuse to be counted out.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <Award className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  85% completion rate—far above the industry average of 30%. Because our model meets people where they are. No shame. No speed. No assumptions that you should already know this.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            The Numbers Speak for Themselves
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-white/10 rounded-lg">
              <div className="text-5xl font-bold text-orange-400 mb-2">1,200+</div>
              <div className="text-lg font-semibold mb-2">Lives Changed</div>
              <p className="text-sm text-slate-300">Adults 50+ trained since 2023—and still using their skills 6 months later.</p>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-lg">
              <div className="text-5xl font-bold text-orange-400 mb-2">85%</div>
              <div className="text-lg font-semibold mb-2">Completion Rate</div>
              <p className="text-sm text-slate-300">Far above industry average of 30%. Because we don't treat you like a child.</p>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-lg">
              <div className="text-5xl font-bold text-orange-400 mb-2">45</div>
              <div className="text-lg font-semibold mb-2">Partner Sites</div>
              <p className="text-sm text-slate-300">Libraries, community centers, and agencies trust us to deliver results.</p>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-lg">
              <div className="text-5xl font-bold text-orange-400 mb-2">92%</div>
              <div className="text-lg font-semibold mb-2">Feel More Confident</div>
              <p className="text-sm text-slate-300">Report increased digital confidence and reduced tech anxiety.</p>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-lg">
              <div className="text-5xl font-bold text-orange-400 mb-2">$1.2M+</div>
              <div className="text-lg font-semibold mb-2">Economic Impact</div>
              <p className="text-sm text-slate-300">Estimated earnings generated by graduates who started freelancing or found employment.</p>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-lg">
              <div className="text-5xl font-bold text-orange-400 mb-2">40%</div>
              <div className="text-lg font-semibold mb-2">Reduction in Social Isolation</div>
              <p className="text-sm text-slate-300">Measured by UCLA Loneliness Scale among program completers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Funders Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Why Funders Choose 50+ TechBridge
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-slate-700 text-center mb-8">
              Foundations, government agencies, and corporate sponsors choose 50+ TechBridge because we deliver measurable outcomes, not just feel-good programming. We track skills acquisition, economic impact, social connection, and technology adoption—and we report it all with transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="border-2 border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl">What We Track</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-slate-900">Skills Acquisition</p>
                  <p className="text-sm text-slate-600">Pre/post assessment of digital competency</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Economic Impact</p>
                  <p className="text-sm text-slate-600">Employment, income generation, and financial stability</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Social Connection</p>
                  <p className="text-sm text-slate-600">Loneliness scale, community engagement, and isolation reduction</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Technology Adoption</p>
                  <p className="text-sm text-slate-600">6-month follow-up survey on continued use of skills</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl">Funding Compatibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">WIOA-Eligible Curriculum</p>
                    <p className="text-sm text-slate-600">Meets federal workforce development standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">IMLS Digital Literacy Standards</p>
                    <p className="text-sm text-slate-600">Qualifies for library and museum grants</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">AoA Title III-D Grants</p>
                    <p className="text-sm text-slate-600">Eligible for aging services funding</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Corporate ESG/Social Impact Reporting Ready</p>
                    <p className="text-sm text-slate-600">Pre-formatted for sustainability reports</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-900 hover:bg-blue-800">Download Sample Impact Report</Button>
            <Button variant="outline">Schedule Funder Briefing</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Begin Your Digital Journey Today
            </h2>
            <p className="text-xl mb-10 text-slate-200">
              Join 1,200+ adults 50+ who refuse to be invisible. Learn the AI and digital skills that keep you relevant, employable, and independent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                Join Free Today
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-6">
                Partner With Us
              </Button>
            </div>
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
            <p className="text-sm italic mb-4 text-slate-400">Decades of wisdom. Tomorrow's tools.</p>
            <p className="text-sm mb-6">
              We believe age should never be a barrier to digital independence, economic opportunity, or social connection. 50+ TechBridge is proving it—one learner at a time.
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
