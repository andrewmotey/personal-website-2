import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaMusic } from 'react-icons/fa'
import Navbar from './components/Navbar'
import AnimatedContent from './components/AnimatedContent'
import Gallery from './components/Gallery'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 text-center">
            <AnimatedContent />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  I grew up in the Bay Area surrounded by two passions: music and finance. My dad was both a musician and a finance executive in the semiconductor industry, and thanks to him, I picked up the drums at age 10 and joined my high school's investment club a few years later. Though I considered music school, I ultimately chose to attend the University of Michigan with a goal of breaking into the music industry through the business side.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  That path began to take shape after my freshman year, when I joined Primary Wave, a music investment and publishing company that perfectly combined my interests in music and finance. Back on campus, I started producing music with friends who were talented artists, and later formed a jam band with other musicians that played classic rock covers at campus hangouts.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The following summer, I explored corporate development through a role at SMART Global Holdings, a semiconductor company — a nod to my roots — and discovered my love for strategic finance and modeling. The following winter, as COVID upended everything, I took on a consulting internship at Microsoft focused on sales strategy for their Education sector, helping grow adoption of Teams in higher ed.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  After graduation from Michigan, I joined the Corporate Strategy team at Sony Music in New York. There, I worked across M&A, venture investments, and strategic planning — eventually joining the newly formed Strategy & Investments group. I collaborated across Sony's global affiliates, evaluated over 100 startups, and led diligence for major acquisitions and immersive initiatives, including artist activations in the metaverse and on-stage at Roblox and Fortnite.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  New York also reignited my love for live music. I formed a rock band called Sweet Police, and we now play at bars and venues around the city, including a recurring residency at Arlene's Grocery in the Lower East Side.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I'm currently pursuing my MBA at Columbia Business School to build on this foundation — exploring new areas like tech-enabled consumer businesses, venture investing, and strategic operations. Long-term, I'm focused on helping creative businesses grow — whether through strategy, investing, or innovation — and making an impact at the intersection of media, technology, and culture.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/images/headshot.jpg" 
                  alt="Andrew Motey" 
                  className="w-[400px] h-[600px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col">
                <div className="w-full h-56 flex items-center justify-center">
                  <img 
                    src="/images/logos/michigan.png" 
                    alt="University of Michigan" 
                    className="w-56 h-56 object-contain"
                  />
                </div>
                <div className="flex-1 mt-8">
                  <h3 className="text-xl font-bold mb-2">University of Michigan</h3>
                  <ul className="text-gray-600 list-disc list-inside text-left">
                    <li>Graduated magna cum laude, 2021</li>
                    <li>Bachelor of Business Administration (BBA)</li>
                    <li>Concentration in Finance</li>
                    <li>Minor in Performing Arts Management and Entrepreneurship</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col">
                <div className="w-full h-56 flex items-center justify-center">
                  <img 
                    src="/images/logos/columbia business school.png" 
                    alt="Columbia Business School" 
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <div className="flex-1 mt-8">
                  <h3 className="text-xl font-bold mb-2">Columbia Business School</h3>
                  <ul className="text-gray-600 list-disc list-inside text-left">
                    <li>MBA candidate</li>
                    <li>Expected graduation: May 2026</li>
                    <li>Media & Technology Program</li>
                    <li>Focused on Venture Capital, Private Equity, and Entrepreneurship</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              <div className="flex bg-white p-6 rounded-lg shadow-sm items-center">
                <div className="w-48 flex items-center justify-center">
                  <img 
                    src="/images/logos/msg.png" 
                    alt="Madison Square Garden Entertainment" 
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-bold mb-2">Madison Square Garden Entertainment</h3>
                  <ul className="text-gray-600 list-disc list-inside">
                    <li>Corporate Development Summer Associate</li>
                    <li>2025</li>
                  </ul>
                </div>
              </div>
              <div className="flex bg-white p-6 rounded-lg shadow-sm items-center">
                <div className="w-48 flex items-center justify-center">
                  <img 
                    src="/images/logos/sme.png" 
                    alt="Sony Music Entertainment" 
                    className="w-36 h-36 object-contain"
                  />
                </div>
                <div className="flex-1 pl-8">
                <h3 className="text-xl font-bold mb-2">Sony Music Entertainment</h3>
                  <ul className="text-gray-600 list-disc list-inside">
                    <li>Strategy & Investments</li>
                    <li>2021-2024</li>
                  </ul>
                </div>
              </div>
              <div className="flex bg-white p-6 rounded-lg shadow-sm items-center">
                <div className="w-48 flex items-center justify-center">
                  <img 
                    src="/images/logos/microsoft.png" 
                    alt="Microsoft" 
                    className="w-44 h-44 object-contain"
                  />
                </div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-bold mb-2">Microsoft</h3>
                  <ul className="text-gray-600 list-disc list-inside">
                    <li>Sales Strategy Consulting Intern</li>
                    <li>2020</li>
                  </ul>
                </div>
              </div>
              <div className="flex bg-white p-6 rounded-lg shadow-sm items-center">
                <div className="w-48 flex items-center justify-center">
                  <img 
                    src="/images/logos/primary wave.png" 
                    alt="Primary Wave Entertainment" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-bold mb-2">Primary Wave Entertainment</h3>
                  <ul className="text-gray-600 list-disc list-inside">
                    <li>Investment Management Intern, 2018</li>
                    <li>Financial Due Diligence Intern, 2020</li>
                  </ul>
                </div>
              </div>
              <div className="flex bg-white p-6 rounded-lg shadow-sm items-center">
                <div className="w-48 flex items-center justify-center">
                  <img 
                    src="/images/logos/sgh.png" 
                    alt="Smart Global Holdings" 
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-bold mb-2">Smart Global Holdings</h3>
                  <ul className="text-gray-600 list-disc list-inside">
                    <li>Corporate Development Intern</li>
                    <li>2019</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project items will go here */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Paramount Case Competition</h3>
                <p className="text-gray-600 mb-4">Strategic analysis and recommendations for Paramount's digital transformation.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Theme Park Strategy & Investment Model</h3>
                <p className="text-gray-600 mb-4">Developed an investment framework and financial model to evaluate a new theme park project, analyzing market demand, site viability, pricing strategy, and revenue potential. Assessed return profiles and partnership terms under owned-and-operated versus licensing scenarios to determine the optimal approach for long-term value creation.</p>
                <div className="flex gap-4 mt-4">
                  <a href="/theme_park_model.pdf" download className="text-primary hover:underline flex items-center">
                    📊 Presentation
                  </a>
                  <a href="/theme_park_model.xlsx" download className="text-primary hover:underline flex items-center">
                    📈 Financial Model
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Gallery />

        {/* Writing Section */}
        <section id="writing" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Writing</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">The Great Media Merge</h3>
                <p className="text-gray-600 mb-4">An analysis of the ongoing consolidation in the media and entertainment industry, examining the strategic implications of major mergers and acquisitions reshaping the landscape.</p>
                <div className="flex gap-4 mt-4">
                  <a href="/The_Great_Media_Merge_7.10.2025_v2.pdf" download className="text-primary hover:underline flex items-center">
                    📄 Download PDF
                  </a>
                  <span className="text-sm text-gray-500">July 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Music Section */}
        <section id="music" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Music</h2>
            <div className="text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Sweet Police Live Performance</h3>
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <iframe 
                    src="https://www.youtube.com/embed/ZSi7H6iXPKg" 
                    title="Sweet Police Performance" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-96 rounded-lg"
                  ></iframe>
                </div>
                <p className="text-gray-600 mb-8">
                  Check out Sweet Police's performance at Arlene's Grocery in the Lower East Side.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 focus:outline-none" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 focus:outline-none" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4} 
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 focus:outline-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 