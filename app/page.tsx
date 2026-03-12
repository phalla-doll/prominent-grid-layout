import React from 'react';
import { Sparkles, ArrowRight, Zap, Search, LayoutGrid, ChevronLeft, ChevronRight, Code, Shield, Globe, Cpu, Wifi, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import AsciiArt from '@/components/AsciiArt';
import AnimatedProcessSteps from '@/components/AnimatedProcessSteps';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import Logo from '@/components/Logo';
import ParallaxWrapper from '@/components/ParallaxWrapper';

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
        <nav className="sticky top-0 flex items-center justify-between px-6 py-4 border-b border-[#1c1c1c] text-sm z-50 bg-[#0a0a0a]/90 backdrop-blur-md">
          <div className="flex items-center gap-3 cursor-pointer">
            <Logo className="w-8 h-8 text-white" />
            <span className="font-bold text-white text-lg tracking-tight">Mantha</span>
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
            <button className="hidden sm:block px-4 py-1.5 rounded-full border border-[#333] text-white hover:bg-[#111] transition-colors text-xs font-medium">Book a call</button>
            <button className="px-4 py-1.5 rounded-full bg-[#222] text-white hover:bg-[#333] transition-colors text-xs font-medium">Start Project</button>
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
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <button className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-[#333] text-white hover:bg-[#111] transition-colors text-sm font-medium">Book a call</button>
            <button className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#222] text-white hover:bg-[#333] transition-colors text-sm font-medium">View Portfolio</button>
          </div>
        </div>

        {/* Hero Image / ASCII Art */}
        <div className="px-0 border-b border-[#1c1c1c]">
          <div className="relative w-full aspect-[21/9] bg-zinc-900 overflow-hidden">
            {/* Live ASCII Art Animation */}
            <AsciiArt />
          </div>
        </div>

        {/* Header Row - Impact */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#1c1c1c] font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
          <span>[01] Proven Impact</span>
          <span>/ By The Numbers</span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-[#1c1c1c]">
          {/* Metric 1 */}
          <div className="p-8 md:p-10 border-b lg:border-b-0 md:border-r border-[#1c1c1c] flex flex-col relative group">
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            </div>
            <div className="text-zinc-500 font-mono text-xs mb-6">01 // Scale</div>
            <div className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-2">$2.4B+</div>
            <div className="text-sm text-zinc-400 leading-relaxed">Client revenue generated through our scalable architectures.</div>
          </div>
          
          {/* Metric 2 */}
          <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-[#1c1c1c] flex flex-col relative group">
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            </div>
            <div className="text-zinc-500 font-mono text-xs mb-6">02 // Performance</div>
            <div className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-2">&lt; 50ms</div>
            <div className="text-sm text-zinc-400 leading-relaxed">Average global latency for our deployed applications.</div>
          </div>
          
          {/* Metric 3 */}
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#1c1c1c] flex flex-col relative group">
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            </div>
            <div className="text-zinc-500 font-mono text-xs mb-6">03 // Velocity</div>
            <div className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-2">10x</div>
            <div className="text-sm text-zinc-400 leading-relaxed">Faster time-to-market compared to industry averages.</div>
          </div>
          
          {/* Metric 4 */}
          <div className="p-8 md:p-10 border-none flex flex-col relative group">
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            </div>
            <div className="text-zinc-500 font-mono text-xs mb-6">04 // Reliability</div>
            <div className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-2">99.99%</div>
            <div className="text-sm text-zinc-400 leading-relaxed">Guaranteed uptime for mission-critical enterprise systems.</div>
          </div>
        </div>

        {/* Header Row 1 */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#1c1c1c] font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
          <span>[02] Mantha Studio</span>
          <span>/ Expertise</span>
        </div>

        {/* Sub-Hero Row */}
        <div className="px-6 py-20 md:py-28 border-b border-[#1c1c1c] flex flex-col justify-center items-center text-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <ParallaxWrapper offset={20}>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-medium tracking-tight text-white max-w-3xl leading-[1.15] relative z-10">
              We build <span className="font-serif italic font-normal text-zinc-300">digital experiences</span> that scale. From design to deployment.
            </h2>
          </ParallaxWrapper>
        </div>

        {/* Bento Grid Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#1c1c1c]">
          
          {/* Cell 1 */}
          <div className="p-6 md:p-12 border-b md:border-b-0 md:border-r border-[#1c1c1c] flex flex-col relative overflow-hidden group min-h-[500px]">
            <ParallaxWrapper className="flex flex-col h-full z-10" offset={15}>
              <div className="relative mb-12">
                <h2 className="text-2xl font-medium text-white mb-4 tracking-tight">Robust Full-Stack<br/>Development</h2>
                <p className="text-zinc-400 leading-relaxed max-w-sm text-sm">
                  We build scalable, secure, and performant applications using modern frameworks and cloud infrastructure.
                </p>
              </div>
              
              {/* Mockup UI */}
              <div className="mt-auto relative">
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
            </ParallaxWrapper>
            
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          </div>

          {/* Cell 2 */}
          <div className="p-6 md:p-12 flex flex-col relative overflow-hidden group min-h-[500px]">
            <ParallaxWrapper className="flex flex-col h-full z-10" offset={15}>
              <div className="relative mb-12">
                <h2 className="text-2xl font-medium text-white mb-4 tracking-tight">System Architecture<br/>& Design</h2>
                <p className="text-zinc-400 leading-relaxed max-w-sm text-sm">
                  We design scalable systems that handle millions of requests with sub-millisecond latency globally.
                </p>
              </div>

              {/* Mockup UI */}
              <div className="mt-auto relative flex justify-center items-center min-h-[250px]">
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
            </ParallaxWrapper>

            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          </div>

        </div>

        {/* Bento Grid Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#1c1c1c]">
          
          {/* Cell 3 */}
          <div className="p-6 md:p-12 border-b md:border-b-0 md:border-r border-[#1c1c1c] flex flex-col relative overflow-hidden min-h-[400px]">
            <ParallaxWrapper className="flex flex-col h-full z-10" offset={15}>
              <div className="relative mb-12">
                <h2 className="text-2xl font-medium text-white mb-4 tracking-tight">Strategic<br/>Consultation</h2>
                <p className="text-zinc-400 leading-relaxed max-w-sm text-sm">
                  Not just code. We help you define your product roadmap, architecture, and technology stack to ensure long-term success.
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-3 relative">
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
            </ParallaxWrapper>
          </div>

          {/* Cell 4 - Image/Visual */}
          <div className="relative min-h-[400px] overflow-hidden group">
             {/* Pixelated/Dotted Image Effect */}
             <ParallaxWrapper className="absolute inset-0" offset={30}>
               <div className="absolute inset-0 bg-zinc-900 -top-10 -bottom-10">
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
             </ParallaxWrapper>

             {/* Floating UI */}
             <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                <ParallaxWrapper offset={15}>
                  <div className="bg-[#111]/80 backdrop-blur-xl border border-[#222] rounded-xl p-6 shadow-2xl w-full max-w-sm relative z-20 pointer-events-auto">
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
                </ParallaxWrapper>
             </div>
          </div>

        </div>

        {/* Header Row 2 */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#1c1c1c] font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
          <span>[03] The Process</span>
          <span>/ Workflow</span>
        </div>

        {/* Bento Grid Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#1c1c1c]">
          
          {/* Cell 5 */}
          <div className="p-6 md:p-12 border-b md:border-b-0 md:border-r border-[#1c1c1c] flex flex-col relative overflow-hidden min-h-[400px]">
            <ParallaxWrapper className="flex flex-col h-full z-10" offset={15}>
              <div className="relative mb-12">
                <h2 className="text-2xl font-medium text-white mb-4 tracking-tight">Seamless End-to-End<br/>Delivery</h2>
                <p className="text-zinc-400 leading-relaxed max-w-sm text-sm">
                  From the first wireframe to the final production deployment, we handle the entire lifecycle of your digital product.
                </p>
              </div>
              
              <div className="mt-auto relative">
                <AnimatedProcessSteps />
              </div>
            </ParallaxWrapper>
          </div>

          {/* Cell 6 */}
          <div className="p-6 md:p-12 relative overflow-hidden bg-[#0c0c0c] min-h-[400px] flex items-center justify-center">
            {/* Background pattern */}
            <ParallaxWrapper className="absolute inset-0 opacity-10" offset={20}>
              <div className="absolute inset-0 -top-10 -bottom-10" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                  }}></div>
            </ParallaxWrapper>
            
            {/* Mockup UI */}
            <ParallaxWrapper offset={10} className="w-full max-w-md relative z-20">
              <div className="bg-[#111] border border-[#222] rounded-xl shadow-2xl w-full overflow-hidden">
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
            </ParallaxWrapper>
          </div>

        </div>

        {/* Header Row 4 */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#1c1c1c] font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
          <span>[04] Continuous Evolution</span>
          <span>/ Agile</span>
        </div>

        {/* Bento Grid Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#1c1c1c]">
          
          {/* Cell 7 */}
          <div className="p-6 md:p-12 border-b md:border-b-0 md:border-r border-[#1c1c1c] flex flex-col relative overflow-hidden min-h-[400px]">
            <ParallaxWrapper className="relative z-10" offset={15}>
              <h2 className="text-2xl font-medium text-white mb-4 tracking-tight">Iterative<br/>Improvements</h2>
              <p className="text-zinc-400 leading-relaxed max-w-sm text-sm">
                We don&apos;t just launch and leave. We continuously monitor, optimize, and ship new features to keep you ahead of the curve.
              </p>
            </ParallaxWrapper>
          </div>

          {/* Cell 8 */}
          <div className="relative min-h-[400px] overflow-hidden group bg-[#0a0a0a] flex items-center justify-center">
             {/* Zinc dotted pattern */}
             <ParallaxWrapper className="absolute inset-0" offset={20}>
               <div className="absolute inset-0 -top-10 -bottom-10" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
                    backgroundSize: '8px 8px'
                  }}></div>
             </ParallaxWrapper>
             
             {/* Floating UI */}
             <ParallaxWrapper className="relative z-20 flex flex-col items-center gap-4 w-full px-8" offset={10}>
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
             </ParallaxWrapper>
          </div>

        </div>

        {/* Header Row 5 */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#1c1c1c] font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
          <span>[05] Selected Work</span>
          <span>/ Case Studies</span>
        </div>

        {/* Case Studies Container */}
        <div className="flex flex-col border-b border-[#1c1c1c]">
          {/* Case Study 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#1c1c1c] last:border-b-0">
            {/* Visual Side */}
            <div className="p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-[#1c1c1c] bg-[#050505] flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <ParallaxWrapper className="relative w-full aspect-video border border-[#1c1c1c] bg-[#0a0a0a] overflow-hidden flex items-center justify-center shadow-2xl" offset={15}>
                 {/* Abstract visual */}
                 <div className="w-3/4 h-3/4 border border-zinc-800 rounded relative bg-[#050505]">
                   <div className="absolute top-4 left-4 right-4 h-4 border-b border-zinc-800 flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                     <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                   </div>
                   <div className="absolute top-12 left-4 bottom-4 right-1/2 border-r border-zinc-800"></div>
                   <div className="absolute top-1/2 left-1/2 right-4 h-px bg-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                   <div className="absolute top-1/4 right-8 w-8 h-8 rounded-full border border-emerald-500/30 flex items-center justify-center">
                     <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                   </div>
                 </div>
              </ParallaxWrapper>
            </div>
            {/* Content Side */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-2 py-1 border border-[#333] rounded text-[10px] font-mono text-zinc-400 uppercase">Fintech</span>
                <span className="px-2 py-1 border border-[#333] rounded text-[10px] font-mono text-zinc-400 uppercase">Architecture</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-10 tracking-tight">Global Payment Gateway</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-mono text-zinc-500 uppercase mb-3 tracking-[0.1em]">The Problem</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">Legacy monolithic infrastructure was unable to handle transaction spikes during peak trading hours, resulting in timeouts and lost revenue.</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-zinc-500 uppercase mb-3 tracking-[0.1em]">The Solution</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">Migrated to a distributed microservices architecture using Go and Kafka, with a high-performance Next.js dashboard for real-time monitoring.</p>
                </div>
                <div className="p-4 border border-emerald-500/20 bg-emerald-500/5 rounded">
                  <h4 className="text-[10px] font-mono text-emerald-500 uppercase mb-2 tracking-[0.1em]">The Result</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">Achieved 10x transaction throughput with zero downtime during peak loads. Reduced infrastructure costs by 40%.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#1c1c1c] last:border-b-0">
            {/* Content Side (Flipped for alternating layout) */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#0a0a0a] order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-2 py-1 border border-[#333] rounded text-[10px] font-mono text-zinc-400 uppercase">E-Commerce</span>
                <span className="px-2 py-1 border border-[#333] rounded text-[10px] font-mono text-zinc-400 uppercase">Headless</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-10 tracking-tight">Lumina Direct-to-Consumer</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-mono text-zinc-500 uppercase mb-3 tracking-[0.1em]">The Problem</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">Slow page load times and a rigid CMS were causing high cart abandonment rates and limiting the marketing team&apos;s ability to launch campaigns.</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-zinc-500 uppercase mb-3 tracking-[0.1em]">The Solution</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">Implemented a headless commerce approach using Next.js, Shopify Storefront API, and Edge caching for sub-second page transitions.</p>
                </div>
                <div className="p-4 border border-emerald-500/20 bg-emerald-500/5 rounded">
                  <h4 className="text-[10px] font-mono text-emerald-500 uppercase mb-2 tracking-[0.1em]">The Result</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">Increased conversion rate by 42%. Average page load time dropped from 3.8s to 0.8s globally.</p>
                </div>
              </div>
            </div>
            {/* Visual Side */}
            <div className="p-6 md:p-10 border-b lg:border-b-0 lg:border-l border-[#1c1c1c] bg-[#050505] flex items-center justify-center relative overflow-hidden group order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-bl from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <ParallaxWrapper className="relative w-full aspect-video border border-[#1c1c1c] bg-[#0a0a0a] overflow-hidden flex items-center justify-center shadow-2xl" offset={15}>
                 {/* Abstract visual */}
                 <div className="w-3/4 h-3/4 border border-zinc-800 rounded relative overflow-hidden bg-[#050505]">
                   <div className="absolute top-0 left-0 right-0 h-1/2 bg-zinc-900/50 border-b border-zinc-800 flex items-center justify-center">
                     <div className="w-16 h-16 border border-zinc-700 rounded-full flex items-center justify-center">
                       <div className="w-8 h-8 border border-zinc-600 rounded-full"></div>
                     </div>
                   </div>
                   <div className="absolute bottom-6 left-6 right-6 h-1/4 flex gap-4">
                     <div className="flex-1 border border-zinc-800 rounded bg-zinc-900/30"></div>
                     <div className="flex-1 border border-zinc-800 rounded bg-zinc-900/30"></div>
                     <div className="flex-1 border border-emerald-500/30 rounded bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.15)] relative overflow-hidden">
                       <div className="absolute inset-0 bg-emerald-400/20 animate-pulse"></div>
                     </div>
                   </div>
                 </div>
              </ParallaxWrapper>
            </div>
          </div>
        </div>

        {/* Header Row 6 */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#1c1c1c] font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
          <span>[06] Client Success</span>
          <span>/ Testimonials</span>
        </div>

        {/* Testimonials Grid */}
        <TestimonialCarousel />

      </main>

      {/* Security Section */}
      <section className="relative max-w-5xl mx-auto mt-24 border-t border-x border-[#1c1c1c] bg-[#0a0a0a] shadow-2xl">
        {/* Header */}
        <div className="p-6 md:p-12 border-b border-[#1c1c1c]">
          <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight max-w-3xl leading-snug">
            Secure by design. <span className="text-zinc-500">No compromises on performance. Your infrastructure is fortified from day one.</span>
          </h2>
        </div>
        
        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Cell 1 */}
          <div className="p-6 md:p-10 border-b md:border-r border-[#1c1c1c] relative overflow-hidden min-h-[250px] flex flex-col group">
            <h3 className="text-white font-medium mb-2 relative z-10">Zero-downtime deployments</h3>
            <p className="text-zinc-500 text-sm relative z-10">Seamless updates without interrupting your users. Traffic is routed instantly.</p>
            
            <ParallaxWrapper className="mt-auto pt-12 relative z-0" offset={10}>
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
            </ParallaxWrapper>
          </div>

          {/* Cell 2 */}
          <div className="p-6 md:p-10 border-b border-[#1c1c1c] relative overflow-hidden min-h-[250px] flex flex-col group">
            <h3 className="text-white font-medium mb-2 relative z-10">DDoS Protection</h3>
            <p className="text-zinc-500 text-sm relative z-10">Enterprise-grade mitigation at the network edge to keep you online.</p>
            
            <ParallaxWrapper className="mt-auto pt-12 relative z-0" offset={10}>
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
            </ParallaxWrapper>
          </div>

          {/* Cell 3 */}
          <div className="p-6 md:p-10 border-b md:border-b-0 md:border-r border-[#1c1c1c] relative overflow-hidden min-h-[250px] flex flex-col group">
            <h3 className="text-white font-medium mb-2 relative z-10">End-to-end encrypted</h3>
            <p className="text-zinc-500 text-sm relative z-10">AES-256-GCM and RSA-4096 protect your data in transit and at rest.</p>
            
            <ParallaxWrapper className="mt-auto pt-12 relative z-0" offset={10}>
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
            </ParallaxWrapper>
          </div>

          {/* Cell 4 */}
          <div className="p-6 md:p-10 relative overflow-hidden min-h-[250px] flex flex-col group">
            <h3 className="text-white font-medium mb-2 relative z-10">Compliance Ready</h3>
            <p className="text-zinc-500 text-sm relative z-10">Architecture designed to meet GDPR, HIPAA, and SOC2 standards.</p>
            
            <ParallaxWrapper className="mt-auto pt-12 relative z-0" offset={10}>
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
            </ParallaxWrapper>
          </div>

        </div>
      </section>

      {/* Final CTA & Footer */}
      <div className="relative max-w-5xl mx-auto border-x border-b border-[#1c1c1c] bg-[#0a0a0a] overflow-hidden shadow-2xl mb-24">
        
        {/* Watermark text */}
        <ParallaxWrapper className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[25vw] md:text-[280px] font-bold text-white/[0.02] tracking-tighter leading-none pointer-events-none select-none z-0 flex items-end justify-center w-full" offset={50}>
          <span className="translate-y-[20%]">Mantha.</span>
        </ParallaxWrapper>

        {/* CTA Box */}
        <div className="px-6 py-24 md:py-32 flex justify-center relative z-10">
          <ParallaxWrapper offset={15} className="w-full max-w-3xl">
            <div className="bg-[#050505] border border-[#1c1c1c] p-8 md:p-14 w-full shadow-2xl relative">
              {/* Corner accents */}
              <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t border-l border-zinc-500"></div>
              <div className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t border-r border-zinc-500"></div>
              <div className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b border-l border-zinc-500"></div>
              <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b border-r border-zinc-500"></div>
              {/* Subtle inner border */}
              <div className="absolute inset-2 border border-[#1c1c1c]/50 pointer-events-none"></div>
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
          </ParallaxWrapper>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#1c1c1c] flex flex-col relative z-10 bg-transparent">
          <div className="px-6 md:px-8 py-12 border-b border-[#1c1c1c] flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex items-center gap-3">
              <Logo className="w-10 h-10 text-zinc-500" />
              <span className="font-bold text-zinc-400 text-xl tracking-tight">Mantha</span>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed md:text-right">
              Mantha Studio Inc.<br/>
              45 Lansing St, San Francisco<br/>
              CA 94105
            </p>
          </div>
          <div className="px-6 md:px-8 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
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
