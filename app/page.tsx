import React from 'react';
import { Sparkles, ArrowRight, Zap, Search, LayoutGrid, ChevronLeft, ChevronRight, Code, Shield, Globe, Cpu } from 'lucide-react';
import Image from 'next/image';

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
        
        {/* Header Row 1 */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#1c1c1c] font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
          <span>[01] Mantha Studio</span>
          <span>/ Expertise</span>
        </div>

        {/* Hero Row */}
        <div className="px-6 py-24 md:py-32 border-b border-[#1c1c1c] flex flex-col justify-center items-center text-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#222] text-xs font-mono text-zinc-400 mb-8 relative z-10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for new projects
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-white max-w-4xl leading-[1.1] relative z-10">
            We build <span className="font-serif italic font-normal text-zinc-300">digital experiences</span> that scale. From design to deployment.
          </h1>
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

      </main>
    </div>
  );
}
