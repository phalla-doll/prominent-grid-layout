import React from 'react';
import { Sparkles, ArrowRight, Zap, Search, MessageSquare, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
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
          <span>[01] Live Suggestion</span>
          <span>/ Features</span>
        </div>

        {/* Hero Row */}
        <div className="px-6 py-24 md:py-32 border-b border-[#1c1c1c] flex justify-center items-center text-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none"></div>
          
          <h1 className="text-3xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-white max-w-3xl leading-[1.1] relative z-10">
            Caret gives you <span className="font-serif italic font-normal text-zinc-300">live suggestions</span> during meetings. Never get caught off guard again.
          </h1>
        </div>

        {/* Bento Grid Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#1c1c1c]">
          
          {/* Cell 1 */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#1c1c1c] flex flex-col relative overflow-hidden group min-h-[500px]">
            <div className="relative z-10 mb-12">
              <h2 className="text-2xl font-medium text-white mb-4 tracking-tight">Instant answers<br/>from your docs</h2>
              <p className="text-zinc-400 leading-relaxed max-w-sm text-sm">
                Caret finds the right answer in under a second, so you never fumble on a call.
              </p>
            </div>
            
            {/* Mockup UI */}
            <div className="mt-auto relative z-10">
              <div className="bg-[#111] border border-[#222] rounded-xl p-4 shadow-2xl transform transition-transform group-hover:-translate-y-2 duration-500">
                <div className="flex items-center gap-2 mb-4 text-zinc-500 text-sm">
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  <ArrowRight className="w-4 h-4 opacity-50" />
                  <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-md px-2 py-1 text-xs border border-[#2a2a2a]">
                    <Zap className="w-3 h-3 text-emerald-500" />
                    Supabase Docs
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-zinc-300 font-medium mb-1 text-sm">Migrating from Neon to Supabase</h3>
                  <p className="text-zinc-600 text-xs line-clamp-2 leading-relaxed">Supabase runs on standard Postgres with full SQL, ACID guarantees, PITR, and high availability...</p>
                </div>
                
                <div className="bg-black border border-[#222] rounded-lg p-4 relative overflow-hidden shadow-inner">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0"></div>
                  <p className="text-white text-sm font-medium mb-1">Q. I&apos;m using Neon. Do you support Instant restore?</p>
                  <p className="text-zinc-500 text-[10px] mb-3 uppercase tracking-wider">Answer found from docs and Chanhee&apos;s call</p>
                  <p className="text-white text-sm mb-4 leading-relaxed font-medium">Yes, we support it with PITR (Point-In-Time Recovery) and fast database branching.</p>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2 bg-[#111] border border-[#222] rounded-full px-3 py-1.5 text-[10px] text-zinc-300">
                      <Zap className="w-3 h-3 text-emerald-400" />
                      <span>Switch from Neon to...</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#111] border border-[#222] rounded-full px-3 py-1.5 text-[10px] text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-zinc-800 overflow-hidden">
                        <Image src="https://picsum.photos/seed/avatar3/32/32" alt="Avatar" width={16} height={16} className="w-full h-full object-cover" />
                      </div>
                      <span>Intro call between C...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          </div>

          {/* Cell 2 */}
          <div className="p-8 md:p-12 flex flex-col relative overflow-hidden group min-h-[500px]">
            <div className="relative z-10 mb-12">
              <h2 className="text-2xl font-medium text-white mb-4 tracking-tight">Learn from what<br/>worked before</h2>
              <p className="text-zinc-400 leading-relaxed max-w-sm text-sm">
                Answers from past meetings become suggestions for future ones.
              </p>
            </div>

            {/* Mockup UI */}
            <div className="mt-auto relative z-10 flex justify-center items-center min-h-[250px]">
              {/* Abstract Node Graph */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                <div className="w-[300px] h-[300px] border border-blue-500/30 rounded-full absolute"></div>
                <div className="w-[200px] h-[200px] border border-blue-500/40 rounded-full absolute"></div>
                <div className="w-[100px] h-[100px] border border-blue-500/50 rounded-full absolute"></div>
                {/* Nodes */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>
              </div>
              
              <div className="bg-[#111]/90 backdrop-blur-xl border border-[#222] rounded-xl p-5 shadow-2xl w-full max-w-sm transform transition-transform group-hover:-translate-y-2 duration-500 relative z-20">
                <p className="text-white text-sm font-medium mb-1">Q. Price is too expensive.</p>
                <p className="text-zinc-500 text-[10px] mb-3 uppercase tracking-wider">Past answer from Jun &lt;&gt; Acme (Closed won)</p>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4 font-medium">
                  I hear you, but most teams actually end up paying less with Supabase once infra + auth + backups are included.
                </p>
                <div className="flex items-center gap-2 bg-black border border-[#222] rounded-full px-3 py-1.5 w-fit">
                  <div className="w-5 h-5 rounded-full bg-zinc-800 overflow-hidden">
                    <Image src="https://picsum.photos/seed/avatar1/32/32" alt="Avatar" width={20} height={20} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[10px] text-zinc-400 font-medium">Jun &lt;&gt; Acme</span>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          </div>

        </div>

        {/* Bento Grid Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#1c1c1c]">
          
          {/* Cell 3 */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#1c1c1c] flex flex-col relative overflow-hidden min-h-[400px]">
            <div className="relative z-10 mb-12">
              <h2 className="text-2xl font-medium text-white mb-4 tracking-tight">Know the right<br/>question to ask</h2>
              <p className="text-zinc-400 leading-relaxed max-w-sm text-sm">
                Caret picks up on context and suggests follow-up questions to keep the conversation moving.
              </p>
            </div>

            <div className="mt-auto flex gap-3 relative z-10">
              <div className="flex items-center gap-2 bg-white text-black rounded-full px-4 py-2 text-xs font-medium shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Context</span>
              </div>
              <div className="flex items-center gap-2 bg-[#111] border border-[#222] text-zinc-300 rounded-full px-4 py-2 text-xs hover:bg-[#1a1a1a] transition-colors cursor-pointer">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Go deeper</span>
              </div>
              <div className="flex items-center gap-2 bg-[#111] border border-[#222] text-zinc-300 rounded-full px-4 py-2 text-xs hover:bg-[#1a1a1a] transition-colors cursor-pointer">
                <Zap className="w-3.5 h-3.5" />
                <span>Intent</span>
              </div>
            </div>
          </div>

          {/* Cell 4 - Image/Visual */}
          <div className="relative min-h-[400px] overflow-hidden group">
             {/* Pixelated/Dotted Image Effect */}
             <div className="absolute inset-0 bg-zinc-900">
                <Image 
                  src="https://picsum.photos/seed/landscape2/800/600" 
                  alt="Landscape" 
                  fill
                  className="object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
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
                    <span className="text-emerald-400 font-bold">?</span> Signal
                  </div>
                  <p className="text-white text-sm font-medium mb-4">
                    Q. <span className="text-zinc-400 font-normal">100K a year. But it&apos;s</span> keep growing.
                  </p>
                  <div className="flex items-start gap-3 text-sm">
                    <ArrowRight className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <p className="text-zinc-300 leading-relaxed font-medium">What does that revenue trajectory tell us about their growth challenges?</p>
                  </div>
                </div>
             </div>
          </div>

        </div>

        {/* Header Row 2 */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#1c1c1c] font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
          <span>[02] Before the call</span>
          <span>/ Prepare</span>
        </div>

        {/* Bento Grid Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#1c1c1c]">
          
          {/* Cell 5 */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#1c1c1c] flex flex-col relative overflow-hidden min-h-[400px]">
            <div className="relative z-10">
              <h2 className="text-2xl font-medium text-white mb-4 tracking-tight">Quick briefs before every<br/>call</h2>
              <p className="text-zinc-400 leading-relaxed max-w-sm text-sm">
                Caret pulls relevant info from your calendar, email, and CRM into one view.
              </p>
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
                  <div className="p-1 rounded hover:bg-[#2a2a2a] text-zinc-500"><LayoutGrid className="w-3 h-3" /></div>
                  <div className="p-1 rounded hover:bg-[#2a2a2a] text-zinc-500"><ChevronLeft className="w-3 h-3" /></div>
                  <div className="p-1 rounded hover:bg-[#2a2a2a] text-zinc-500"><ChevronRight className="w-3 h-3" /></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-white font-medium mb-4 text-sm">
                  <Search className="w-4 h-4 text-zinc-400" />
                  <span>Briefing</span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  This is a first meeting with Y Combinator. In the previous mail, looking for a CRM and notetaker for outreaching LPs and Asid...
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1 font-mono">Company</p>
                    <p className="text-zinc-300 text-sm font-medium">Established</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-wider mb-2 font-mono">Participants</p>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-800 overflow-hidden">
                        <Image src="https://picsum.photos/seed/avatar2/32/32" alt="Avatar" width={24} height={24} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-zinc-300 text-xs font-medium">Andrew Mil...</span>
                    </div>
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
