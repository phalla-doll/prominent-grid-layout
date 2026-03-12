'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Mantha Studio completely transformed our infrastructure. We went from struggling with scaling issues to handling 10x traffic without a single hiccup. Their engineering depth is unmatched.",
    name: "Sarah Jenkins",
    title: "CTO, Acme Corp",
    image: "https://picsum.photos/seed/acme/100/100"
  },
  {
    quote: "The speed at which they delivered our MVP was staggering. Not only was it fast, but the code quality and architecture set us up perfectly for our Series A.",
    name: "David Chen",
    title: "Founder, Nexus",
    image: "https://picsum.photos/seed/nexus/100/100"
  },
  {
    quote: "Working with Mantha feels like having an elite in-house engineering team. Their attention to detail in both UX and backend performance is rare to find.",
    name: "Elena Rodriguez",
    title: "VP Product, Lumina",
    image: "https://picsum.photos/seed/lumina/100/100"
  },
  {
    quote: "Their approach to headless commerce allowed us to increase our conversion rate by 42%. The transition was seamless and the results were immediate.",
    name: "Marcus Thorne",
    title: "E-commerce Director, Veloce",
    image: "https://picsum.photos/seed/veloce/100/100"
  },
  {
    quote: "We needed a complete overhaul of our legacy systems. They delivered a modern, microservices-based architecture that reduced our cloud costs by 30%.",
    name: "Priya Patel",
    title: "VP Engineering, Synth",
    image: "https://picsum.photos/seed/synth/100/100"
  },
  {
    quote: "The best agency experience we've ever had. They don't just write code; they understand the business objectives and build solutions that drive real growth.",
    name: "James Wilson",
    title: "CEO, Horizon",
    image: "https://picsum.photos/seed/horizon/100/100"
  }
];

export default function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.firstElementChild?.clientWidth || 0;
      const scrollLeft = scrollRef.current.scrollLeft;
      
      const scrollTo = direction === 'left' 
        ? scrollLeft - itemWidth 
        : scrollLeft + itemWidth;
        
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col border-b border-[#1c1c1c]">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((t, i) => (
          <div 
            key={i} 
            className="w-full md:w-1/3 flex-shrink-0 snap-start p-6 md:p-10 border-r border-[#1c1c1c] flex flex-col relative group"
          >
            <div className="mb-6 text-zinc-600 group-hover:text-emerald-500/50 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21L16.41 14.592C16.634 13.92 16.75 13.25 16.75 12.58C16.75 11.237 16.29 10.136 15.37 9.276C14.45 8.416 13.25 7.986 11.77 7.986V3C14.45 3 16.634 3.86 18.32 5.58C20.007 7.3 20.85 9.487 20.85 12.14C20.85 13.213 20.664 14.323 20.29 15.47L17.73 21H14.017ZM5.267 21L7.66 14.592C7.884 13.92 8 13.25 8 12.58C8 11.237 7.54 10.136 6.62 9.276C5.7 8.416 4.5 7.986 3.02 7.986V3C5.7 3 7.884 3.86 9.57 5.58C11.257 7.3 12.1 9.487 12.1 12.14C12.1 13.213 11.914 14.323 11.54 15.47L8.98 21H5.267Z" />
              </svg>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed mb-8 flex-grow">
              &quot;{t.quote}&quot;
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-8 h-8 rounded bg-[#111] border border-[#222] flex items-center justify-center overflow-hidden">
                <Image src={t.image} alt={t.name} width={32} height={32} className="opacity-80 grayscale" />
              </div>
              <div>
                <div className="text-white text-xs font-medium">{t.name}</div>
                <div className="text-zinc-500 text-[10px] font-mono mt-0.5">{t.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Row */}
      <div className="flex justify-end border-t border-[#1c1c1c] h-[47px]">
        <button 
          onClick={() => scroll('left')} 
          className="w-[47px] h-full flex items-center justify-center border-l border-[#1c1c1c] hover:bg-[#111] transition-colors text-zinc-400 hover:text-white outline-none focus:bg-[#111]"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} />
        </button>
        <button 
          onClick={() => scroll('right')} 
          className="w-[47px] h-full flex items-center justify-center border-l border-[#1c1c1c] hover:bg-[#111] transition-colors text-zinc-400 hover:text-white outline-none focus:bg-[#111]"
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
