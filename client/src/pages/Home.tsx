import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Mic, Building2 } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Organic Futurism with Speaker/Thought Leader Positioning
 * - Warm, inviting colors (terracotta, plum, sage)
 * - Generous spacing and organic shapes
 * - Positions Brian as "Spiritual Counselor for 50+ Start-Ups"
 * - Movement-building, speaker-focused messaging
 * - Empowering without victimhood
 */

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-xl font-semibold">TechBridge</div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
              <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">Services</a>
              <a href="#movement" className="text-foreground/80 hover:text-foreground transition-colors">The Movement</a>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663274445852/IaOOlzctpyNjNjjg.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              It's Never Too Late{" "}
              <span className="text-primary italic">If You Start Now.</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-primary mb-8 italic">
              A Spiritual Counselor for 50+ Start-Ups
            </p>

            <div className="prose prose-lg max-w-none mb-10 text-foreground/90">
              <p className="text-xl leading-relaxed">
                You've been told you're too old. That your time has passed. That starting over after 50 is foolish, risky, or impossible.
              </p>
              <p className="text-xl font-semibold leading-relaxed">
                They're wrong.
              </p>
              <p className="text-xl leading-relaxed">
                I help adults 50+ navigate the spiritual, emotional, and practical journey of starting something new—a business, a movement, a second calling—when the world says it's too late.
              </p>
              <p className="text-xl leading-relaxed">
                If you're tired of being invisible, scared of being irrelevant, and ready to reclaim your purpose, you're in the right place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Watch My Talk
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-center">
              The World Writes You Off.{" "}
              <span className="text-primary italic">You Don't Have To.</span>
            </h2>

            <div className="prose prose-lg max-w-none text-center mb-12">
              <p className="text-xl">
                After 50, society treats you like you're done. Finished. Irrelevant.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6 bg-background">
                <p className="text-lg">
                  <strong>64% of workers 50+</strong> experience age discrimination in hiring and promotions.
                </p>
              </Card>
              <Card className="p-6 bg-background">
                <p className="text-lg">
                  <strong>Investors ignore you.</strong> They're looking for 25-year-old unicorns, not experienced founders with decades of wisdom.
                </p>
              </Card>
              <Card className="p-6 bg-background">
                <p className="text-lg">
                  <strong>Government contracts</strong> go to the lowest bidder. You're just free market research.
                </p>
              </Card>
              <Card className="p-6 bg-background">
                <p className="text-lg">
                  <strong>Pitch committees waste your time.</strong> They want your IP at a discount, not your vision.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-2xl font-semibold mb-4">
                Meanwhile, you're sitting on decades of experience, hard-won wisdom, and a calling you can't ignore.
              </p>
              <p className="text-3xl font-bold text-primary italic mb-4">
                The problem isn't you. It's ageism.
              </p>
              <p className="text-xl">
                And I'm here to help you fight back—not with anger, but with purpose, clarity, and a plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-center">
              Build Your Movement.{" "}
              <span className="text-primary italic">Get to the Front of the Room.</span>
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-center">
                Starting over after 50 isn't just about economics. It's about <strong>identity, purpose, and legacy.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 bg-muted/30 border-2">
                <div className="text-4xl font-bold text-primary mb-4">1</div>
                <h3 className="text-2xl font-bold mb-3">Reclaim Your Identity</h3>
                <p className="text-lg">Who are you now that you're not who you were?</p>
              </Card>

              <Card className="p-8 bg-muted/30 border-2">
                <div className="text-4xl font-bold text-primary mb-4">2</div>
                <h3 className="text-2xl font-bold mb-3">Discover Your Purpose</h3>
                <p className="text-lg">What are you being called to do?</p>
              </Card>

              <Card className="p-8 bg-muted/30 border-2">
                <div className="text-4xl font-bold text-primary mb-4">3</div>
                <h3 className="text-2xl font-bold mb-3">Build Resilience</h3>
                <p className="text-lg">How do you keep going when the world says you're too old?</p>
              </Card>

              <Card className="p-8 bg-muted/30 border-2">
                <div className="text-4xl font-bold text-primary mb-4">4</div>
                <h3 className="text-2xl font-bold mb-3">Create Your Legacy</h3>
                <p className="text-lg">What will you leave behind?</p>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-xl mb-8">
                Whether you're launching a business, writing a book, or stepping onto a stage for the first time, I'll help you navigate the journey with dignity, clarity, and confidence.
              </p>
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                Work With Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Serve Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">
              This Is For You If...
            </h2>

            <Card className="p-10 bg-background text-lg leading-relaxed">
              <p className="mb-4">
                You're an adult 50+ who feels called to start something new but doesn't know where to begin.
              </p>
              <p className="mb-4">
                You've been laid off, pushed out, or written off—and you're done accepting it.
              </p>
              <p className="mb-4">
                You know you have more to give, but the path forward feels unclear.
              </p>
              <p className="mb-4">
                You want to build a business, write a book, or become a speaker, but you need guidance on how to share your story without feeling overly vulnerable.
              </p>
              <p>
                You're not looking for a business coach who teaches tactics—you're looking for a <strong>spiritual counselor</strong> who helps you find meaning, purpose, and peace in the second half of life.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container">
          <h2 className="text-5xl font-bold mb-16 text-center">
            How We Work Together
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-muted/30 hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">1:1 Spiritual Counseling</h3>
              <p className="text-lg mb-6">
                For 50+ founders who need clarity, support, and accountability. Work with me one-on-one to navigate the spiritual and emotional journey of starting over.
              </p>
              <Button variant="outline">Learn More</Button>
            </Card>

            <Card className="p-8 bg-muted/30 hover:shadow-lg transition-shadow">
              <Mic className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Speaker Development</h3>
              <p className="text-lg mb-6">
                For aspiring speakers who want to get to the front of the room. I'll help you craft your signature talk, build your platform, and book speaking engagements.
              </p>
              <Button variant="outline">Learn More</Button>
            </Card>

            <Card className="p-8 bg-muted/30 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Group Cohorts</h3>
              <p className="text-lg mb-6">
                For 50+ entrepreneurs who want peer support and community. Join a cohort of like-minded founders navigating the same journey.
              </p>
              <Button variant="outline">Join the Next Cohort</Button>
            </Card>

            <Card className="p-8 bg-muted/30 hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Corporate Consulting</h3>
              <p className="text-lg mb-6">
                For companies who want to support 50+ employees transitioning to entrepreneurship with dignity, support, and success.
              </p>
              <Button variant="outline">Book a Consultation</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Book Showcase Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Book Cover */}
              <div className="flex justify-center">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/BQH80GEKGJen7Wkw6cwiSA/sandbox/Uu8z5ejBjW5xaUU1oDYykN-img-1_1771562490000_na1fn_NTBwbHVzLXRlY2hicmlkZ2UtYm9vay1jb3Zlci1wcm9mZXNzb3I.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQlFIODBHRUtHSmVuN1drdzZjd2lTQS9zYW5kYm94L1V1OHo1ZWpCalc1eGFVVTFvRFl5a04taW1nLTFfMTc3MTU2MjQ5MDAwMF9uYTFmbl9OVEJ3YkhWekxYUmxZMmhpY21sa1oyVXRZbTl2YXkxamIzWmxjaTF3Y205bVpYTnpiM0kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GSa3s-bXc6c5e7ADJPSHEeY0mGRb178lDxsnRcIQ2-i9EciwQDLKod3kGXnbu9KiJTNIsl3499ibvWERTRHiqDvbFY0SA02DjpVI9FJpr~z4nU8VQfOZRB1Nm~QDeKvPhSomuvkJ3iFx5slpVdcg2r0zFlEV18HdIi-qAafC3zBrEfiiFxEA9-X-VtUosxZZAQxIt36pGmOgLI3J7v-t9r1uTot4nJTxEStq7JVY62dv3mcm63Nl6HjbQhm-jefh5l90JviFoog0R~FG5Tk1OJYCetLFmpfmojJ9FGHJxDiXf54qxoh-7f3Hu8yF8ut-11q8w9mqxoFuX-WyKb1aVw__"
                  alt="50+ TechBridge Book Cover"
                  className="w-full max-w-md rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Book Description */}
              <div>
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-6">
                  📚 Coming Soon
                </div>
                <h2 className="text-5xl font-bold mb-6">
                  50+ TechBridge
                </h2>
                <p className="text-2xl text-primary font-semibold mb-6 italic">
                  A Guide to Using Tech to Start Over After 50
                </p>
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-lg leading-relaxed">
                    This isn't just a book about technology. It's a roadmap for transformation.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Inside, you'll discover how to use AI, digital platforms, and modern tools to reclaim your identity, discover your purpose, build resilience, and create a lasting legacy—all while fighting back against ageism.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Whether you're starting a business, building an online platform, or stepping onto the speaking stage, this book will show you how technology bridges the gap between where you are and where you want to be.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                    Pre-Order Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    By Professor Brian McKinney
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">
              I've Been Where You Are.
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663274445852/fYYxcVUIrKXUfokZ.jpg"
                  alt="Brian teaching a workshop"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>

              <div className="prose prose-lg">
                <p className="text-lg leading-relaxed">
                  I know what it's like to feel invisible. To be scared of irrelevance. To watch a 40-year-old—or worse, a bot—decide if you get a job, eat, or survive the next wave of technology.
                </p>
                <p className="text-lg leading-relaxed">
                  I spent years chasing validation from investors, government contracts, and pitch committees. I waited for permission that never came.
                </p>
                <p className="text-lg font-semibold leading-relaxed">
                  Then I realized: I don't need their permission. And neither do you.
                </p>
                <p className="text-lg leading-relaxed">
                  I built 50+ TechBridge to fight ageism through technology education. I've trained 1,200+ adults 50+ to master AI and digital skills. I've proven that age is not a barrier to learning, earning, or thriving.
                </p>
                <p className="text-lg leading-relaxed">
                  Now, I'm stepping into my next calling: helping 50+ entrepreneurs and aspiring speakers build movements, write books, and get to the front of the room.
                </p>
                <p className="text-xl font-bold text-primary italic">
                  This is my second act. Let me help you find yours.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Read My Full Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-5xl font-bold mb-16 text-center">
            What People Are Saying
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-muted/30">
              <p className="text-lg italic mb-6">
                "Brian helped me see that starting over at 58 wasn't foolish—it was my calling."
              </p>
              <div className="font-semibold">— Maria, 58</div>
              <div className="text-sm text-muted-foreground">Nonprofit Founder</div>
            </Card>

            <Card className="p-8 bg-muted/30">
              <p className="text-lg italic mb-6">
                "I spent two years chasing investors. Brian helped me realize I didn't need their permission to build my business."
              </p>
              <div className="font-semibold">— James, 62</div>
              <div className="text-sm text-muted-foreground">Tech Consultant</div>
            </Card>

            <Card className="p-8 bg-muted/30">
              <p className="text-lg italic mb-6">
                "Brian's guidance gave me the confidence to step onto a stage for the first time at 55. Now I speak at conferences nationwide."
              </p>
              <div className="font-semibold">— Linda, 55</div>
              <div className="text-sm text-muted-foreground">Motivational Speaker</div>
            </Card>
          </div>
        </div>
      </section>

      {/* The Movement Section */}
      <section id="movement" className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8">
              Join the Movement: It's Never Too Late
            </h2>

            <div className="prose prose-lg prose-invert max-w-none mb-12">
              <p className="text-xl">
                This isn't just about you. It's about all of us.
              </p>
              <p className="text-xl">
                Adults 50+ are the fastest-growing demographic of entrepreneurs. We're starting businesses, writing books, and stepping onto stages. We're refusing to be invisible.
              </p>
              <p className="text-2xl font-bold italic">
                Ageism is the problem. Purpose is the answer.
              </p>
              <p className="text-xl">
                When you work with me, you're not just building a business—you're joining a movement of 50+ founders who are proving that age is not a barrier to success, impact, or legacy.
              </p>
            </div>

            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Join the Movement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8">
              Your Second Calling Is Waiting.{" "}
              <span className="text-primary italic">Let's Answer It Together.</span>
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl">
                You've spent decades building a career, raising a family, and serving others. Now it's your turn.
              </p>
              <p className="text-xl">
                Whether you're launching a business, writing a book, or stepping onto a stage, I'll help you navigate the journey with clarity, confidence, and purpose.
              </p>
              <p className="text-2xl font-bold text-primary italic">
                It's never too late if you start now.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Download Free Guide
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              Free Guide: "The 5 Stages of Starting Over After 50"
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-3xl font-bold mb-4">50+ TechBridge</div>
            <p className="text-lg mb-6 italic text-primary">
              "Ageism is the problem. AgeTech is the answer."
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Fighting Ageism Through Technology Education
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">YouTube</a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
