import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Download, Users } from "lucide-react";

export default function Book() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              <span className="text-primary">50+</span> TechBridge
            </span>
          </a>
          <div className="flex items-center gap-6">
            <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="/services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="/book" className="text-sm font-medium text-primary">The Book</a>
            <Button>Book a Call</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Book Cover */}
            <div className="flex justify-center">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/BQH80GEKGJen7Wkw6cwiSA/sandbox/Uu8z5ejBjW5xaUU1oDYykN-img-1_1771562490000_na1fn_NTBwbHVzLXRlY2hicmlkZ2UtYm9vay1jb3Zlci1wcm9mZXNzb3I.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQlFIODBHRUtHSmVuN1drdzZjd2lTQS9zYW5kYm94L1V1OHo1ZWpCalc1eGFVVTFvRFl5a04taW1nLTFfMTc3MTU2MjQ5MDAwMF9uYTFmbl9OVEJ3YkhWekxYUmxZMmhpY21sa1oyVXRZbTl2YXkxamIzWmxjaTF3Y205bVpYTnpiM0kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GSa3s-bXc6c5e7ADJPSHEeY0mGRb178lDxsnRcIQ2-i9EciwQDLKod3kGXnbu9KiJTNIsl3499ibvWERTRHiqDvbFY0SA02DjpVI9FJpr~z4nU8VQfOZRB1Nm~QDeKvPhSomuvkJ3iFx5slpVdcg2r0zFlEV18HdIi-qAafC3zBrEfiiFxEA9-X-VtUosxZZAQxIt36pGmOgLI3J7v-t9r1uTot4nJTxEStq7JVY62dv3mcm63Nl6HjbQhm-jefh5l90JviFoog0R~FG5Tk1OJYCetLFmpfmojJ9FGHJxDiXf54qxoh-7f3Hu8yF8ut-11q8w9mqxoFuX-WyKb1aVw__"
                alt="50+ TechBridge Book Cover"
                className="w-full max-w-md rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Hero Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Coming 2026
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900">
                50+ TechBridge
              </h1>
              <h2 className="text-2xl md:text-3xl text-navy-700">
                A Guide to Using Tech to Start Over After 50
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Technology isn't the barrier—ageism is. This book shows you how to use AI, digital tools, and online platforms to build a business, write a book, or step onto a stage when the world says it's too late.
              </p>
              <p className="text-sm text-muted-foreground">
                By Professor Brian McKinney
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  Pre-Order Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Join the Waitlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Book Is About */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">
            What This Book Is About
          </h2>
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p>
              You've been told you're too old. That your time has passed. That starting over after 50 is foolish, risky, or impossible.
            </p>
            <p className="text-2xl font-semibold text-navy-900">
              They're wrong.
            </p>
            <p>
              This book is for adults 50+ who refuse to be invisible. Who are tired of being written off. Who know they have more to give—and are ready to use technology to prove it.
            </p>
            <p>
              <strong>50+ TechBridge</strong> is your roadmap for using AI, digital tools, and online platforms to:
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Build a business from your laptop</li>
              <li>Write and publish a book</li>
              <li>Step onto a stage (virtual or in-person)</li>
              <li>Create a legacy that lasts</li>
            </ul>
            <p>
              This isn't a "tech for dummies" book. It's a manifesto against ageism—and a practical guide for using technology to reclaim your relevance, purpose, and power.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">I</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">The Problem</h3>
              <p className="text-gray-600">
                Understand why technology feels like a barrier—and how to make it your bridge.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">II</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">The Four Pillars</h3>
              <p className="text-gray-600">
                Master the identity, purpose, resilience, and legacy work required to use tech to start over.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">III</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">The Tech Stack</h3>
              <p className="text-gray-600">
                Get practical tools and step-by-step tutorials for building your second act with AI, websites, and more.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">IV</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">The Movement</h3>
              <p className="text-gray-600">
                Join thousands of adults 50+ who are using technology to start over—and prove ageism wrong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Full Table of Contents
          </h2>

          {/* Part I */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">PART I: THE PROBLEM</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="font-semibold text-lg">Chapter 1: "Technology Won't Save You. But It Can Bridge You."</h4>
                <p className="text-gray-600 mt-2">The myth that adults 50+ "can't learn tech" • Why technology is a bridge, not a barrier • The 50+ TechBridge mission</p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="font-semibold text-lg">Chapter 2: "The World Writes You Off. Technology Writes You Back In."</h4>
                <p className="text-gray-600 mt-2">The data on ageism in tech and entrepreneurship • How technology levels the playing field • Stories of adults 50+ who used tech to fight back</p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="font-semibold text-lg">Chapter 3: "Why Starting Over After 50 Requires a Tech Stack"</h4>
                <p className="text-gray-600 mt-2">The role of technology in modern entrepreneurship • What a "tech stack" is—and why you need one • The 50+ TechBridge Model</p>
              </div>
            </div>
          </div>

          {/* Part II */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">PART II: THE FOUR PILLARS</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="font-semibold text-lg">Chapter 4: Pillar 1 - Identity Reclamation</h4>
                <p className="text-gray-600 mt-2">Who Are You in the Digital Age? • Build a digital presence • Tech tools: LinkedIn, websites, AI</p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="font-semibold text-lg">Chapter 5: Pillar 2 - Purpose Discovery</h4>
                <p className="text-gray-600 mt-2">What Are You Building—and Why? • Clarify your calling • Tech tools: AI for ideation, course platforms</p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="font-semibold text-lg">Chapter 6: Pillar 3 - Resilience Building</h4>
                <p className="text-gray-600 mt-2">How to Keep Going When Tech Feels Hard • Manage tech overwhelm • Tech tools: YouTube, communities, AI assistants</p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="font-semibold text-lg">Chapter 7: Pillar 4 - Legacy Creation</h4>
                <p className="text-gray-600 mt-2">What Will You Build That Lasts? • Build a digital legacy • Tech tools: Courses, self-publishing, podcasting</p>
              </div>
            </div>
          </div>

          {/* Part III */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">PART III: THE TECH STACK</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="font-semibold text-lg">Chapter 8: "Your AI Toolkit"</h4>
                <p className="text-gray-600 mt-2">How to Use AI to Build Your Second Act • ChatGPT, Canva, automation tools • Step-by-step tutorials</p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="font-semibold text-lg">Chapter 9: "Your Online Platform"</h4>
                <p className="text-gray-600 mt-2">Build a Website, Newsletter, and Social Presence • WordPress, Substack, LinkedIn • Build in one weekend</p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="font-semibold text-lg">Chapter 10: "Your Speaking Platform"</h4>
                <p className="text-gray-600 mt-2">Get to the Front of the Room • Craft your signature talk • Record demo videos, create speaker one-sheets</p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="font-semibold text-lg">Chapter 11: "Your Business Operations"</h4>
                <p className="text-gray-600 mt-2">Run a Business from Your Laptop • Automate scheduling, invoicing, delivery • Calendly, QuickBooks, Zoom</p>
              </div>
            </div>
          </div>

          {/* Part IV */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">PART IV: THE MOVEMENT</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="font-semibold text-lg">Chapter 12: "Join the 50+ TechBridge Movement"</h4>
                <p className="text-gray-600 mt-2">The rise of 50+ entrepreneurship • Find your community online • Build peer support networks</p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="font-semibold text-lg">Chapter 13: "It's Never Too Late If You Start Now"</h4>
                <p className="text-gray-600 mt-2">The power of starting imperfectly • Your invitation to begin • Final call to action</p>
              </div>
            </div>
          </div>

          {/* Appendices */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Appendices</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Appendix A:</strong> The 50+ TechBridge Tech Stack (Quick Reference)</li>
              <li><strong>Appendix B:</strong> The 50+ TechBridge Resource Library</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chapter Previews */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Chapter Previews
          </h2>

          {/* Chapter 1 Preview */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-serif font-bold">Chapter 1: "Technology Won't Save You. But It Can Bridge You."</h3>
            </div>
            <blockquote className="border-l-4 border-primary pl-6 py-4 italic text-gray-700 mb-4">
              "I know what it feels like to be invisible. To walk into a room and feel like nobody sees you. To apply for a job and know they've already decided you're too old. To watch younger people get opportunities you're more qualified for—simply because they were born later.
              <br /><br />
              I also know what it feels like to fight back.
              <br /><br />
              This book exists because I refused to accept invisibility. And because I discovered that technology—the very thing that felt like it was leaving me behind—could be the bridge to my second act."
            </blockquote>
            <p className="font-semibold text-navy-900 mb-2">What you'll learn:</p>
            <ul className="space-y-2 text-gray-700 list-disc pl-6">
              <li>Why the "digital divide" isn't about ability—it's about access and training</li>
              <li>How technology amplifies your decades of experience (instead of replacing it)</li>
              <li>The 50+ TechBridge mission: fighting ageism through technology education</li>
            </ul>
          </div>

          {/* Chapter 8 Preview */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-serif font-bold">Chapter 8: "Your AI Toolkit"</h3>
            </div>
            <blockquote className="border-l-4 border-primary pl-6 py-4 italic text-gray-700 mb-4">
              "AI isn't here to replace you. It's here to amplify you.
              <br /><br />
              For adults 50+, AI is the great equalizer. It automates the tasks that drain you. It generates ideas when you're stuck. It writes drafts when you're overwhelmed. It levels the playing field so you can compete with people half your age—and win.
              <br /><br />
              This chapter will show you exactly how to use AI to build your business, write your book, and step onto your stage."
            </blockquote>
            <p className="font-semibold text-navy-900 mb-2">What you'll learn:</p>
            <ul className="space-y-2 text-gray-700 list-disc pl-6">
              <li>How to use ChatGPT as your AI business partner (ideation, planning, writing)</li>
              <li>How to use AI image generators for branding and marketing</li>
              <li>Step-by-step tutorial: Use AI to draft your business plan in 30 minutes</li>
            </ul>
          </div>

          {/* Chapter 10 Preview */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-serif font-bold">Chapter 10: "Your Speaking Platform"</h3>
            </div>
            <blockquote className="border-l-4 border-primary pl-6 py-4 italic text-gray-700 mb-4">
              "You have a message worth sharing. Technology will help you deliver it.
              <br /><br />
              Speaking is the fastest way to build credibility, attract clients, and establish yourself as a thought leader. And in 2026, you don't need a stage—you need a webcam, a microphone, and a story.
              <br /><br />
              This chapter will show you how to use technology to craft your signature talk, record a demo video, and book speaking engagements (virtual and in-person)."
            </blockquote>
            <p className="font-semibold text-navy-900 mb-2">What you'll learn:</p>
            <ul className="space-y-2 text-gray-700 list-disc pl-6">
              <li>How to use AI to outline and draft your signature talk</li>
              <li>How to record a professional demo video using Zoom or your smartphone</li>
              <li>How to create a speaker one-sheet in Canva (with template)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            About the Author
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="prose prose-lg max-w-none space-y-4 text-gray-700">
              <p>
                <strong>Professor Brian McKinney</strong> is the founder of 50+ TechBridge, a movement dedicated to fighting ageism through technology education.
              </p>
              <p>
                After experiencing age discrimination firsthand, Brian refused to accept invisibility. He built 50+ TechBridge to help adults 50+ use technology to start businesses, build platforms, and reclaim their relevance in a world that writes them off.
              </p>
              <p>
                Brian has trained over 1,200 adults 50+ in digital literacy, AI skills, and online entrepreneurship—with an 85% course completion rate (compared to the industry average of 15%). His peer-to-peer learning model rejects condescending "tech for seniors" approaches and treats adults 50+ as capable, strategic learners.
              </p>
              <p>
                As a speaker, advisor, and guide, Brian helps 50+ founders navigate the spiritual, emotional, and practical journey of starting over—using technology as their bridge.
              </p>
              <p className="text-lg font-semibold text-navy-900">
                Brian's mission: Prove that age is not a barrier to learning, earning, or thriving in the digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            What Readers Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 italic mb-4">
                "This book gave me permission to start over. I'm 58, and I just launched my first online business. Thank you, Brian."
              </p>
              <p className="font-semibold text-navy-900">— Sarah M.</p>
              <p className="text-sm text-gray-600">Online Coach</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 italic mb-4">
                "I thought AI was for young people. This book showed me how to use it to write my book, build my website, and finally step into my second calling."
              </p>
              <p className="font-semibold text-navy-900">— David L.</p>
              <p className="text-sm text-gray-600">Author & Speaker</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 italic mb-4">
                "Brian doesn't talk down to you. He treats you like the capable, experienced person you are—and gives you the tools to prove it."
              </p>
              <p className="font-semibold text-navy-900">— Maria G.</p>
              <p className="text-sm text-gray-600">Consultant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Order Bonuses */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-orange-100">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">
            Pre-Order Bonuses
          </h2>
          <p className="text-center text-lg text-gray-700 mb-12">
            Order now and get these exclusive bonuses:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
              <Download className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Tech Stack Cheat Sheet</h3>
                <p className="text-gray-600">Downloadable PDF with all tools mentioned in the book</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
              <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Private Community Access</h3>
                <p className="text-gray-600">Join the 50+ TechBridge community (Facebook group or Discord)</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
              <BookOpen className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Live Q&A with Brian</h3>
                <p className="text-gray-600">Invitation to exclusive virtual event for pre-order customers</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
              <ArrowRight className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Early Chapter Access</h3>
                <p className="text-gray-600">Get Chapter 8: "Your AI Toolkit" delivered via email before publication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Order CTA */}
      <section className="py-20">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Pre-Order Now
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Available in Hardcover, Paperback, Kindle, and Audiobook (narrated by Professor Brian McKinney)
          </p>
          <p className="text-sm text-gray-600 mb-8">
            Publication Date: Coming 2026
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Pre-Order on Amazon
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Pre-Order on Barnes & Noble
            </Button>
          </div>
          <div className="mt-8">
            <Button size="lg" variant="secondary" className="text-lg">
              Join the Waitlist
            </Button>
            <p className="text-sm text-gray-600 mt-2">
              Get email updates and launch notifications
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Join the Movement
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Don't wait for the book. Start now.
          </p>
          <p className="text-lg mb-8">
            Sign up for the 50+ TechBridge newsletter and get weekly tech tips, AI tutorials, and success stories from adults 50+ who are using technology to start over.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 rounded-lg text-gray-900 flex-1"
            />
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t">
        <div className="container text-center">
          <p className="text-sm text-gray-600 mb-4">
            © 2026 50+ TechBridge. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Questions? Contact: brian@50plustechbridge.com
          </p>
        </div>
      </footer>
    </div>
  );
}
