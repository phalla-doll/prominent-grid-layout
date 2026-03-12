import React from 'react';
import { Sparkles, ArrowRight, Zap, Search, LayoutGrid, ChevronLeft, ChevronRight, Code, Shield, Globe, Cpu, ChevronDown, Wifi, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import AsciiArt from '@/components/AsciiArt';

export default function Page() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050505]">
      {/* Background pattern for the sides */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20" 
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #333,
            #333 1px,
            transparent 1px,
            transparent 8px
          )`
        }}
      />

      {/* Main Grid Container */}
      <main className="relative max-w-5xl mx-auto border-x border-[#1c1c1c] bg-[#0a0a0a] min-h-screen shadow-2xl">
        
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 border-b border-[#1c1c1c] text-sm relative z-20">
          <div className="flex items-center gap-2 font-medium text-white text-lg tracking-tight">
            <div className="w-5 h-5 bg-emerald-500 rounded-md flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-sm"></div>
            </div>
            Mantha
          </div>
          <div className="hidden md:flex items-center gap-8 text-zinc-400 text-xs font-medium">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="hover:text-white transition-colors">Services</a>
            <a href="#" className="hover:text-white transition-colors">Work</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1.5 text-zinc-400 text-xs font-medium">
              <Globe className="w-3.5 h-3.5" /> English
            </div>
            <button className="px-4 py-1.5 rounded-full border border-[#333] text-white hover:bg-[#111] transition-colors text-xs font-medium">Book a call</button>
            <div className="flex">
              <button className="px-4 py-1.5 rounded-l-full bg-[#222] text-white hover:bg-[#333] transition-colors text-xs font-medium">Start Project</button>
              <button className="px-2 py-1.5 rounded-r-full bg-[#222] border-l border-[#333] text-white hover:bg-[#333] transition-colors">
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </nav>

        {/* True Hero Section */}
        <div className="pt-24 pb-20 px-6 flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-medium tracking-tight text-white max-w-3xl leading-[1.1] mb-6">
            Web development agency<br/>that scales your business
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
            Get enterprise-grade web applications delivered in record time. Mantha Studio combines strategic design with robust engineering.
          </p>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 rounded-full border border-[#333] text-white hover:bg-[#111] transition-colors text-sm font-medium">Book a call</button>
            <button className="px-6 py-2.5 rounded-full bg-[#222] text-white hover:bg-[#333] transition-colors text-sm font-medium">View Portfolio</button>
          </div>
        </div>

        {/* Hero Image / ASCII Art */}
        <div className="px-0 border-b border-[#1c1c1c]">
          <div className="relative w-full aspect-[21/9] bg-zinc-900 overflow-hidden">
            {/* Live ASCII Art Animation */}
            <AsciiArt />
          </div>
        </div>

        {/* Header Row 1 */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#1c1c1c] font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
          <span>[01] Mantha Studio</span>
          <span>/ Expertise</span>
        </div>

        {/* Sub-Hero Row */}
        <div className="px-6 py-20 md:py-28 border-b border-[#1c1c1c] flex flex-col justify-center items-center text-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-medium tracking-tight text-white max-w-3xl leading-[1.15] relative z-10">
            We build <span className="font-serif italic font-normal text-zinc-300">digital experiences</span> that scale. From design to deployment.
          </h2>
        </div>

        {/* Bento Grid Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#1c1c1c]">
          
          {/* Cell 1 */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#1c1c1c] flex flex-col relative overflow-hidden group min-h-[500px]">
            <div className="relative z-10 mb-12">
              <h2 className="text-2xl font-medium text-white mb-4 tracking-tight">Robust Full-Stack<br/>Development</h2>
              <p className="text-zinc-400 leading-relaxed max-w-sm text-sm">
                We build scalable, secure, and performant applications using modern frameworks and cloud infrastructure.
              </p>
            </div>
            
            {/* Mockup UI */}
            <div className="mt-auto relative z-10">
              <div className="bg-[#0d0d0d] border border-[#222] rounded-xl p-5 shadow-2xl font-mono text-xs transform transition-transform group-hover:-translate-y-2 duration-500">
                <div className="flex gap-1.5 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-zinc-300 leading-loose">
                  <span className="text-pink-500">import</span> &#123; <span className="text-emerald-400">ManthaStudio</span> &#125; <span className="text-pink-500">from</span> <span className="text-yellow-300">&apos;@agency/core&apos;</span>;<br/><br/>
                  <span className="text-blue-400">const</span> <span className="text-white">project</span> = <span className="text-pink-500">await</span> <span className="text-emerald-400">ManthaStudio</span>.<span className="text-blue-300">init</span>(&#123;<br/>
                  &nbsp;&nbsp;stack: [<span className="text-yellow-300">&apos;Next.js&apos;</span>, <span className="text-yellow-300">&apos;TypeScript&apos;</span>, <span className="text-yellow-300">&apos;Tailwind&apos;</span>],<br/>
                  &nbsp;&nbsp;performance: <span className="text-purple-400">100</span>,<br/>
                  &nbsp;&nbsp;security: <span className="text-yellow-300">&apos;enterprise&apos;</span><br/>
                  &#125;);<br/><br/>
                  <span className="text-zinc-600">{`// Output: Project deployed successfully in 1.2s`}</span>
                </div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          </div>

          {/* Cell 2 */}
          <div className="p-8 md:p-12 flex flex-col relative overflow-hidden group min-h-[500px]">
            <div className="relative z-10 mb-12">
              <h2 className="text-2xl font-medium text-white mb-4 tracking-tight">System Architecture<br/>& Design</h2>
              <p className="text-zinc-400 leading-relaxed max-w-sm text-sm">
                We design scalable systems that handle millions of requests with sub-millisecond latency globally.
              </p>
            </div>

            {/* Mockup UI */}
            <div className="mt-auto relative z-10 flex justify-center items-center min-h-[250px]">
              {/* Abstract Node Graph */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                <div className="w-[300px] h-[300px] border border-emerald-500/30 rounded-full absolute"></div>
                <div className="w-[200px] h-[200px] border border-emerald-500/40 rounded-full absolute"></div>
                <div className="w-[100px] h-[100px] border border-emerald-500/50 rounded-full absolute"></div>
                {/* Nodes */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
              </div>
              
              <div className="bg-[#111]/90 backdrop-blur-xl border border-[#222] rounded-xl p-5 shadow-2xl w-full max-w-sm transform transition-transform group-hover:-translate-y-2 duration-500 relative z-20">
                <p className="text-white text-sm font-medium mb-1">Global Edge Network</p>
                <p className="text-zinc-500 text-[10px] mb-3 uppercase tracking-wider">Microservices & Edge Computing</p>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4 font-medium">
                  Deploy your application closer to your users. We utilize edge computing to ensure lightning-fast responses worldwide.
                </p>
                <div className="flex items-center gap-2 bg-black border border-[#222] rounded-full px-3 py-1.5 w-fit">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] text-zinc-400 font-medium">99.99% Uptime SLA</span>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          </div>

        </div>

        {/* Bento Grid Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#1c1c1c]">
          
          {/* Cell 3 */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#1c1c1c] flex flex-col relative overflow-hidden min-h-[400px]">
            <div className="relative z-10 mb-12">
              <h2 className="text-2xl font-medium text-white mb-4 tracking-tight">Strategic<br/>Consultation</h2>
              <p className="text-zinc-400 leading-relaxed max-w-sm text-sm">
                Not just code. We help you define your product roadmap, architecture, and technology stack to ensure long-term success.
              </p>
            </div>

            <div className="mt-auto flex flex-wrap gap-3 relative z-10">
              <div className="flex items-center gap-2 bg-white text-black rounded-full px-4 py-2 text-xs font-medium shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform cursor-pointer">
                <Search className="w-3.5 h-3.5" />
                <span>Code Audit</span>
              </div>
              <div className="flex items-center gap-2 bg-[#111] border border-[#222] text-zinc-300 rounded-full px-4 py-2 text-xs hover:bg-[#1a1a1a] transition-colors cursor-pointer">
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>UX Strategy</span>
              </div>
              <div className="flex items-center gap-2 bg-[#111] border border-[#222] text-zinc-300 rounded-full px-4 py-2 text-xs hover:bg-[#1a1a1a] transition-colors cursor-pointer">
                <Cpu className="w-3.5 h-3.5" />
                <span>Tech Stack Selection</span>
              </div>
            </div>
          </div>

          {/* Cell 4 - Image/Visual */}
          <div className="relative min-h-[400px] overflow-hidden group">
             {/* Pixelated/Dotted Image Effect */}
             <div className="absolute inset-0 bg-zinc-900">
                <Image 
                  src="https://picsum.photos/seed/tech/800/600" 
                  alt="Technology" 
                  fill
                  className="object-cover opacity-30 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay pattern to make it look dotted/pixelated */}
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.85) 1px, transparent 0)',
                  backgroundSize: '4px 4px'
                }}></div>
                {/* Gradient overlay to blend with the dark theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50"></div>
             </div>

             {/* Floating UI */}
             <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-[#111]/80 backdrop-blur-xl border border-[#222] rounded-xl p-6 shadow-2xl w-full max-w-sm relative z-20">
                  <div className="flex items-center gap-2 text-zinc-500 text-[10px] mb-4 uppercase tracking-widest font-mono">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" /> Performance & Security
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-14 h-14 rounded-full border-[3px] border-emerald-500/20 border-t-emerald-500 flex items-center justify-center text-emerald-400 font-bold text-lg shadow-[0_0_15px_rgba(16,185,129,0.2)]">100</div>
                     <div className="w-14 h-14 rounded-full border-[3px] border-emerald-500/20 border-t-emerald-500 flex items-center justify-center text-emerald-400 font-bold text-lg shadow-[0_0_15px_rgba(16,185,129,0.2)]">100</div>
                     <div className="w-14 h-14 rounded-full border-[3px] border-emerald-500/20 border-t-emerald-500 flex items-center justify-center text-emerald-400 font-bold text-lg shadow-[0_0_15px_rgba(16,185,129,0.2)]">100</div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <ArrowRight className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <p className="text-zinc-300 leading-relaxed font-medium">Perfect scores across Performance, Accessibility, Best Practices, and SEO.</p>
                  </div>
                </div>
             </div>
          </div>

        </div>

        {/* Header Row 2 */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#1c1c1c] font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
          <span>[02] The Process</span>
          <span>/ Workflow</span>
        </div>

        {/* Bento Grid Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#1c1c1c]">
          
          {/* Cell 5 */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#1c1c1c] flex flex-col relative overflow-hidden min-h-[400px]">
            <div className="relative z-10">
              <h2 className="text-2xl font-medium text-white mb-4 tracking-tight">Seamless End-to-End<br/>Delivery</h2>
              <p className="text-zinc-400 leading-relaxed max-w-sm text-sm">
                From the first wireframe to the final production deployment, we handle the entire lifecycle of your digital product.
              </p>
            </div>
            
            <div className="mt-auto relative z-10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-8 h-8 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-zinc-500 font-mono text-xs">01</div>
                  <span className="text-zinc-300 font-medium">Discovery & Strategy</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-8 h-8 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-zinc-500 font-mono text-xs">02</div>
                  <span className="text-zinc-300 font-medium">UI/UX Design</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-8 h-8 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-zinc-500 font-mono text-xs">03</div>
                  <span className="text-zinc-300 font-medium">Development & Testing</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 font-mono text-xs">04</div>
                  <span className="text-white font-medium">Deployment & Scaling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cell 6 */}
          <div className="p-8 md:p-12 relative overflow-hidden bg-[#0c0c0c] min-h-[400px] flex items-center justify-center">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }}></div>
            
            {/* Mockup UI */}
            <div className="bg-[#111] border border-[#222] rounded-xl shadow-2xl w-full max-w-md relative z-20 overflow-hidden">
              {/* Window Controls */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#222] bg-[#161616]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="ml-4 flex items-center gap-1">
                  <div className="p-1 rounded hover:bg-[#2a2a2a] text-zinc-500"><Code className="w-3 h-3" /></div>
                  <div className="p-1 rounded hover:bg-[#2a2a2a] text-zinc-500"><ChevronLeft className="w-3 h-3" /></div>
                  <div className="p-1 rounded hover:bg-[#2a2a2a] text-zinc-500"><ChevronRight className="w-3 h-3" /></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-white font-medium mb-6 text-sm">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>Production Deployment</span>
                </div>
                
                <div className="space-y-4 font-mono">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-zinc-400">Building application...</span>
                    </div>
                    <span className="text-emerald-400">1.2s</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-zinc-400">Running edge functions...</span>
                    </div>
                    <span className="text-emerald-400">0.4s</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-zinc-400">Optimizing assets...</span>
                    </div>
                    <span className="text-emerald-400">2.1s</span>
                  </div>
                  
                  <div className="h-px w-full bg-[#222] my-4"></div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white font-sans font-medium">Status</span>
                    <span className="text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded font-sans font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Live
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Header Row 4 */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#1c1c1c] font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
          <span>[03] Continuous Evolution</span>
          <span>/ Agile</span>
        </div>

        {/* Bento Grid Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#1c1c1c]">
          
          {/* Cell 7 */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#1c1c1c] flex flex-col relative overflow-hidden min-h-[400px]">
            <div className="relative z-10">
              <h2 className="text-2xl font-medium text-white mb-4 tracking-tight">Iterative<br/>Improvements</h2>
              <p className="text-zinc-400 leading-relaxed max-w-sm text-sm">
                We don&apos;t just launch and leave. We continuously monitor, optimize, and ship new features to keep you ahead of the curve.
              </p>
            </div>
          </div>

          {/* Cell 8 */}
          <div className="relative min-h-[400px] overflow-hidden group bg-[#0a0a0a] flex items-center justify-center">
             {/* Zinc dotted pattern */}
             <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
                  backgroundSize: '8px 8px'
                }}></div>
             
             {/* Floating UI */}
             <div className="relative z-20 flex flex-col items-center gap-4 w-full px-8">
                {/* Card 1 */}
                <div className="bg-[#111]/90 backdrop-blur-xl border border-zinc-500/20 rounded-xl p-4 shadow-2xl w-full max-w-xs transform -translate-x-4 transition-transform group-hover:-translate-y-1 duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-zinc-500"></div>
                    <span className="text-zinc-300 text-xs font-medium">Initial Release</span>
                  </div>
                  <p className="text-zinc-500 text-[10px]">Core architecture and basic auth.</p>
                </div>
                
                {/* Connector */}
                <div className="flex flex-col items-center text-zinc-400/60 text-[10px] font-mono">
                  <div className="w-px h-6 bg-zinc-500/30"></div>
                  <div className="flex items-center gap-2 my-1 bg-zinc-500/10 px-2 py-1 rounded-full border border-zinc-500/20">
                    <Zap className="w-3 h-3" /> Feature shipped
                  </div>
                  <div className="w-px h-6 bg-zinc-500/30"></div>
                </div>
                
                {/* Card 2 */}
                <div className="bg-[#111]/90 backdrop-blur-xl border border-zinc-500/40 rounded-xl p-4 shadow-[0_0_30px_rgba(255,255,255,0.05)] w-full max-w-xs transform translate-x-4 transition-transform group-hover:-translate-y-1 duration-500 delay-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-zinc-400 shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-pulse"></div>
                    <span className="text-white text-xs font-medium">v2.0 Update</span>
                  </div>
                  <p className="text-zinc-400 text-[10px]">Added Edge caching, SSO, and real-time sync.</p>
                </div>
             </div>
          </div>

        </div>

        {/* Header Row 5 */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#1c1c1c] font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
          <span>[04] Client Success</span>
          <span>/ Testimonials</span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#1c1c1c]">
          
          {/* Testimonial 1 */}
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#1c1c1c] flex flex-col relative group">
            <div className="mb-6 text-zinc-600 group-hover:text-emerald-500/50 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21L16.41 14.592C16.634 13.92 16.75 13.25 16.75 12.58C16.75 11.237 16.29 10.136 15.37 9.276C14.45 8.416 13.25 7.986 11.77 7.986V3C14.45 3 16.634 3.86 18.32 5.58C20.007 7.3 20.85 9.487 20.85 12.14C20.85 13.213 20.664 14.323 20.29 15.47L17.73 21H14.017ZM5.267 21L7.66 14.592C7.884 13.92 8 13.25 8 12.58C8 11.237 7.54 10.136 6.62 9.276C5.7 8.416 4.5 7.986 3.02 7.986V3C5.7 3 7.884 3.86 9.57 5.58C11.257 7.3 12.1 9.487 12.1 12.14C12.1 13.213 11.914 14.323 11.54 15.47L8.98 21H5.267Z" />
              </svg>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed mb-8 flex-grow">
              &quot;Mantha Studio completely transformed our infrastructure. We went from struggling with scaling issues to handling 10x traffic without a single hiccup. Their engineering depth is unmatched.&quot;
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-8 h-8 rounded bg-[#111] border border-[#222] flex items-center justify-center overflow-hidden">
                <Image src="https://picsum.photos/seed/acme/100/100" alt="Acme Corp" width={32} height={32} className="opacity-80 grayscale" />
              </div>
              <div>
                <div className="text-white text-xs font-medium">Sarah Jenkins</div>
                <div className="text-zinc-500 text-[10px] font-mono mt-0.5">CTO, Acme Corp</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#1c1c1c] flex flex-col relative group">
            <div className="mb-6 text-zinc-600 group-hover:text-emerald-500/50 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21L16.41 14.592C16.634 13.92 16.75 13.25 16.75 12.58C16.75 11.237 16.29 10.136 15.37 9.276C14.45 8.416 13.25 7.986 11.77 7.986V3C14.45 3 16.634 3.86 18.32 5.58C20.007 7.3 20.85 9.487 20.85 12.14C20.85 13.213 20.664 14.323 20.29 15.47L17.73 21H14.017ZM5.267 21L7.66 14.592C7.884 13.92 8 13.25 8 12.58C8 11.237 7.54 10.136 6.62 9.276C5.7 8.416 4.5 7.986 3.02 7.986V3C5.7 3 7.884 3.86 9.57 5.58C11.257 7.3 12.1 9.487 12.1 12.14C12.1 13.213 11.914 14.323 11.54 15.47L8.98 21H5.267Z" />
              </svg>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed mb-8 flex-grow">
              &quot;The speed at which they delivered our MVP was staggering. Not only was it fast, but the code quality and architecture set us up perfectly for our Series A.&quot;
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-8 h-8 rounded bg-[#111] border border-[#222] flex items-center justify-center overflow-hidden">
                <Image src="https://picsum.photos/seed/nexus/100/100" alt="Nexus" width={32} height={32} className="opacity-80 grayscale" />
              </div>
              <div>
                <div className="text-white text-xs font-medium">David Chen</div>
                <div className="text-zinc-500 text-[10px] font-mono mt-0.5">Founder, Nexus</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="p-8 md:p-10 flex flex-col relative group">
            <div className="mb-6 text-zinc-600 group-hover:text-emerald-500/50 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21L16.41 14.592C16.634 13.92 16.75 13.25 16.75 12.58C16.75 11.237 16.29 10.136 15.37 9.276C14.45 8.416 13.25 7.986 11.77 7.986V3C14.45 3 16.634 3.86 18.32 5.58C20.007 7.3 20.85 9.487 20.85 12.14C20.85 13.213 20.664 14.323 20.29 15.47L17.73 21H14.017ZM5.267 21L7.66 14.592C7.884 13.92 8 13.25 8 12.58C8 11.237 7.54 10.136 6.62 9.276C5.7 8.416 4.5 7.986 3.02 7.986V3C5.7 3 7.884 3.86 9.57 5.58C11.257 7.3 12.1 9.487 12.1 12.14C12.1 13.213 11.914 14.323 11.54 15.47L8.98 21H5.267Z" />
              </svg>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed mb-8 flex-grow">
              &quot;Working with Mantha feels like having an elite in-house engineering team. Their attention to detail in both UX and backend performance is rare to find.&quot;
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-8 h-8 rounded bg-[#111] border border-[#222] flex items-center justify-center overflow-hidden">
                <Image src="https://picsum.photos/seed/lumina/100/100" alt="Lumina" width={32} height={32} className="opacity-80 grayscale" />
              </div>
              <div>
                <div className="text-white text-xs font-medium">Elena Rodriguez</div>
                <div className="text-zinc-500 text-[10px] font-mono mt-0.5">VP Product, Lumina</div>
              </div>
            </div>
          </div>

        </div>

      </main>

      {/* Security Section */}
      <section className="relative max-w-5xl mx-auto mt-24 border-t border-x border-[#1c1c1c] bg-[#0a0a0a] shadow-2xl">
        {/* Header */}
        <div className="p-8 md:p-12 border-b border-[#1c1c1c]">
          <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight max-w-3xl leading-snug">
            Secure by design. <span className="text-zinc-500">No compromises on performance. Your infrastructure is fortified from day one.</span>
          </h2>
        </div>
        
        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Cell 1 */}
          <div className="p-8 md:p-10 border-b md:border-r border-[#1c1c1c] relative overflow-hidden min-h-[250px] flex flex-col group">
            <h3 className="text-white font-medium mb-2 relative z-10">Zero-downtime deployments</h3>
            <p className="text-zinc-500 text-sm relative z-10">Seamless updates without interrupting your users. Traffic is routed instantly.</p>
            
            <div className="mt-auto pt-12 relative z-0">
              <svg width="100%" height="60" className="text-zinc-600 group-hover:text-zinc-400 transition-colors duration-500">
                <defs>
                  <pattern id="dots1" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="currentColor" />
                  </pattern>
                  <mask id="blocks-mask">
                    <rect x="0" y="10" width="80" height="40" rx="4" fill="white" />
                    <rect x="100" y="10" width="80" height="40" rx="4" fill="white" opacity="0.2" />
                  </mask>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#dots1)" mask="url(#blocks-mask)" />
              </svg>
            </div>
          </div>

          {/* Cell 2 */}
          <div className="p-8 md:p-10 border-b border-[#1c1c1c] relative overflow-hidden min-h-[250px] flex flex-col group">
            <h3 className="text-white font-medium mb-2 relative z-10">DDoS Protection</h3>
            <p className="text-zinc-500 text-sm relative z-10">Enterprise-grade mitigation at the network edge to keep you online.</p>
            
            <div className="mt-auto pt-12 relative z-0">
              <svg width="100%" height="60" className="text-zinc-600 group-hover:text-zinc-400 transition-colors duration-500">
                <defs>
                  <pattern id="dots2" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="currentColor" />
                  </pattern>
                  <mask id="wave-mask">
                    <rect x="0" y="25" width="6" height="10" rx="3" fill="white" opacity="0.3" />
                    <rect x="12" y="15" width="6" height="30" rx="3" fill="white" opacity="0.5" />
                    <rect x="24" y="5" width="6" height="50" rx="3" fill="white" opacity="0.8" />
                    <rect x="36" y="20" width="6" height="20" rx="3" fill="white" opacity="0.4" />
                    <rect x="48" y="10" width="6" height="40" rx="3" fill="white" opacity="0.7" />
                    <rect x="60" y="25" width="6" height="10" rx="3" fill="white" opacity="0.3" />
                    <rect x="72" y="15" width="6" height="30" rx="3" fill="white" opacity="0.5" />
                  </mask>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#dots2)" mask="url(#wave-mask)" />
              </svg>
            </div>
          </div>

          {/* Cell 3 */}
          <div className="p-8 md:p-10 md:border-r border-[#1c1c1c] relative overflow-hidden min-h-[250px] flex flex-col group">
            <h3 className="text-white font-medium mb-2 relative z-10">End-to-end encrypted</h3>
            <p className="text-zinc-500 text-sm relative z-10">AES-256-GCM and RSA-4096 protect your data in transit and at rest.</p>
            
            <div className="mt-auto pt-12 relative z-0">
              <svg width="100%" height="60" className="text-zinc-600 group-hover:text-zinc-400 transition-colors duration-500">
                <defs>
                  <pattern id="dots3" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="currentColor" />
                  </pattern>
                  <mask id="lock-mask">
                    <rect x="10" y="25" width="40" height="30" rx="4" fill="white" />
                    <path d="M 18 25 V 15 A 12 12 0 0 1 42 15 V 25" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" />
                  </mask>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#dots3)" mask="url(#lock-mask)" />
              </svg>
            </div>
          </div>

          {/* Cell 4 */}
          <div className="p-8 md:p-10 relative overflow-hidden min-h-[250px] flex flex-col group">
            <h3 className="text-white font-medium mb-2 relative z-10">Compliance Ready</h3>
            <p className="text-zinc-500 text-sm relative z-10">Architecture designed to meet GDPR, HIPAA, and SOC2 standards.</p>
            
            <div className="mt-auto pt-12 relative z-0">
              <svg width="100%" height="60" className="text-zinc-600 group-hover:text-zinc-400 transition-colors duration-500">
                <defs>
                  <pattern id="dots4" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="currentColor" />
                  </pattern>
                  <mask id="shield-mask">
                    <path d="M 30 5 L 55 12 V 30 C 55 45 30 55 30 55 C 30 55 5 45 5 30 V 12 Z" fill="white" />
                  </mask>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#dots4)" mask="url(#shield-mask)" />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA & Footer */}
      <div className="relative max-w-5xl mx-auto border-x border-b border-[#1c1c1c] bg-[#0a0a0a] overflow-hidden shadow-2xl mb-24">
        
        {/* Watermark text */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[25vw] md:text-[280px] font-bold text-white/[0.02] tracking-tighter leading-none pointer-events-none select-none z-0 flex items-end justify-center w-full">
          <span className="translate-y-[20%]">Mantha.</span>
        </div>

        {/* CTA Box */}
        <div className="px-6 py-24 md:py-32 flex justify-center relative z-10">
          <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-10 md:p-14 w-full max-w-3xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              Build with Mantha today
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-8 max-w-md">
              Fewer bottlenecks. Better architecture. Focus on scaling your business.
            </p>
            
            <div className="inline-flex items-center shadow-lg">
              <button className="px-6 py-2.5 rounded-full bg-[#2a2a2a] text-white hover:bg-[#333] transition-colors text-sm font-medium h-10">
                Start Project
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#1c1c1c] flex flex-col relative z-10 bg-transparent">
          <div className="px-8 py-12 border-b border-[#1c1c1c]">
            <p className="text-zinc-500 text-xs leading-relaxed">
              Mantha Studio Inc.<br/>
              45 Lansing St, San Francisco<br/>
              CA 94105
            </p>
          </div>
          <div className="px-8 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-zinc-500 text-xs">
              © 2026 Mantha Studio Inc. All rights reserved.
            </p>
            <div className="flex gap-4 text-zinc-500 text-xs font-medium">
              <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
