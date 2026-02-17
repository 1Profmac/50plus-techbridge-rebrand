import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Users, Target, BookOpen, MessageCircle, Award, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
              50+
            </div>
            <span className="text-xl font-bold text-slate-900">TechBridge</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#why" className="text-slate-600 hover:text-slate-900 font-medium">Why Us</a>
            <a href="#learn" className="text-slate-600 hover:text-slate-900 font-medium">What You'll Learn</a>
            <a href="#partners" className="text-slate-600 hover:text-slate-900 font-medium">Partners</a>
          </div>
          <Button size="sm">Start Free Course</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              You've Adapted to Every Tech Shift.
              <br />
              <span className="text-orange-400">Now Prove Ageism Wrong.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 font-serif italic">
              Decades of wisdom. Tomorrow's tools.
            </p>
            <div className="prose prose-lg prose-invert mx-auto mb-10 text-slate-200">
              <p className="text-lg">
                From typewriters to personal computers. Dial-up to smartphones. You've learned every technology that mattered—because you had to.
              </p>
              <p className="text-lg">
                Now the world says you're too old for AI. That you can't keep up. That you're obsolete.
              </p>
              <p className="text-lg font-bold text-white">
                They're wrong. And this free AI and digital skills course will prove it.
              </p>
              <p className="text-lg">
                Join 1,200+ adults 50+ who refuse to be invisible. Learn the skills that keep you employable, independent, and relevant—not because it's easy, but because you've earned the right to stay in the game.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                Start Free Course
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-6">
                See What You'll Learn
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Free to join</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>1,200+ adults 50+ trained</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>85% completion rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Trusted by 45+ organizations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why 50+ TechBridge Section */}
      <section id="why" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
            Traditional Tech Training Fails Adults 50+.
          </h2>
          <p className="text-xl text-center mb-16 text-slate-600">Here's Why We Don't.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">No Condescension. Just Real Talk.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Adults 50+ teach each other. No 25-year-old instructors who've never faced age discrimination. No judgment. Just patient, relatable guidance from people who understand what it's like to be written off.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <Target className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">This Isn't a Hobby. It's Survival.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Learn the AI and digital skills that keep you employable, independent, and relevant. Master telehealth, online income, job applications, and the tools that determine whether you thrive or get left behind.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">We Don't Teach "Technology for Technology's Sake."</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Every lesson solves a real problem: accessing healthcare, staying safe online, earning income, or connecting with family. No fluff. No theory. Just skills that matter.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">You're Not Alone in This Fight.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Learning continues beyond the classroom. Our graduates stay connected through online forums, monthly meetups, and ongoing support. We're building a movement, not just running courses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">Become the Teacher.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We don't just teach students—we train them to become teachers. One cohort can impact hundreds of others. Your experience becomes someone else's lifeline.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <Award className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">85% Completion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Far above the industry average of 30%. Because our model meets people where they are. No shame. No speed. No assumptions that you should already know this. Just results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section id="learn" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
            AI Skills That Keep You Employable in the New Economy
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 border-l-4 border-orange-500 bg-slate-50">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Digital Foundations</h3>
              <p className="text-slate-600">
                Navigate smartphones, tablets, and computers with confidence. Manage passwords and accounts without getting locked out. Troubleshoot common tech problems yourself—no more waiting for help.
              </p>
            </div>

            <div className="p-6 border-l-4 border-orange-500 bg-slate-50">
              <h3 className="text-xl font-bold mb-3 text-slate-900">AI Fluency</h3>
              <p className="text-slate-600">
                Use ChatGPT, Claude, and other AI tools for real tasks. Automate repetitive work and save hours every week. Understand what AI can (and can't) do for you—and how to use it without fear.
              </p>
            </div>

            <div className="p-6 border-l-4 border-orange-500 bg-slate-50">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Online Safety</h3>
              <p className="text-slate-600">
                Spot scams, phishing, and fraud before they hurt you. Protect your identity and financial information. Navigate social media without falling for misinformation or getting exploited.
              </p>
            </div>

            <div className="p-6 border-l-4 border-orange-500 bg-slate-50">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Healthcare Access</h3>
              <p className="text-slate-600">
                Use telehealth and patient portals confidently. Manage prescriptions and appointments online. Access health information when you need it—without calling the office three times.
              </p>
            </div>

            <div className="p-6 border-l-4 border-orange-500 bg-slate-50">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Staying Connected</h3>
              <p className="text-slate-600">
                Video call with family without tech anxiety. Use social media to build community, not isolation. Text, email, and message like someone who belongs in 2026.
              </p>
            </div>

            <div className="p-6 border-l-4 border-orange-500 bg-slate-50">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Earning Income Online</h3>
              <p className="text-slate-600">
                Find remote work and freelance opportunities. Use platforms like Upwork, Fiverr, and LinkedIn to get hired. Get paid for your expertise and experience—not dismissed because of your age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            The Numbers Speak for Themselves
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">1,200+</div>
              <div className="text-lg font-semibold mb-2">Lives Changed</div>
              <p className="text-sm text-slate-300">Adults 50+ trained since 2023—and still using their skills 6 months later.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">85%</div>
              <div className="text-lg font-semibold mb-2">Completion Rate</div>
              <p className="text-sm text-slate-300">Far above the industry average of 30%. Because we don't treat you like a child.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">45</div>
              <div className="text-lg font-semibold mb-2">Partner Sites</div>
              <p className="text-sm text-slate-300">Libraries, community centers, and workforce agencies trust us to deliver results.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">92%</div>
              <div className="text-lg font-semibold mb-2">Feel More Confident</div>
              <p className="text-sm text-slate-300">Report increased digital confidence and reduced tech anxiety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Ageism Problem Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-slate-900">
            Why This Matters: The Real Cost of Digital Exclusion
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto mb-12 text-slate-700">
              <p>
                Adults 50+ face systematic barriers in the digital economy. Age discrimination in hiring is rampant. AI systems are trained on bias that favors youth. And the myth that "you can't teach an old dog new tricks" keeps millions of capable people sidelined.
              </p>
              <p>
                The result? Economic insecurity. Social isolation. Loss of independence. And a society that wastes the wisdom and experience of its most capable citizens.
              </p>
              <p className="font-bold text-slate-900">
                50+ TechBridge exists to fight back. We're not just teaching technology—we're proving that age is not a barrier to learning, earning, or thriving in the digital world.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-5xl font-bold text-orange-500 mb-2">64%</div>
                <p className="text-slate-700">of workers 50+ report age discrimination in hiring</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-5xl font-bold text-orange-500 mb-2">40%</div>
                <p className="text-slate-700">of adults 50+ lack basic digital skills needed for modern jobs</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-5xl font-bold text-orange-500 mb-2">80%</div>
                <p className="text-slate-700">want to live independently—but need tech skills to do it</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              You've Proven Them Wrong Before. Do It Again.
            </h2>
            <p className="text-xl mb-4 text-slate-300">
              Every technology shift, they said you couldn't adapt. Every time, you proved them wrong.
            </p>
            <p className="text-xl mb-8 text-slate-300">
              AI is just the next one. And you're not too old to master it.
            </p>
            <p className="text-lg mb-10 text-slate-200">
              Join 1,200+ adults 50+ who refuse to be invisible. Start learning today—free, at your pace, with people who understand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                Start Free Course
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-6">
                See Partner Options
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
