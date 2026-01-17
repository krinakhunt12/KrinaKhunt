
import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      
      if (cursorRef.current) {
        // Precise movement for the inner dot
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      
      if (followerRef.current) {
        // Fluid lag for the outer ring
        followerRef.current.animate({
          transform: `translate3d(${x}px, ${y}px, 0)`
        }, { duration: 600, fill: 'forwards', easing: 'cubic-bezier(0.23, 1, 0.32, 1)' });
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.interactive') || target.tagName === 'A' || target.tagName === 'BUTTON') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[10000]">
      {/* Outer Fluid Follower Ring */}
      <div 
        ref={followerRef}
        className={`fixed top-0 left-0 -ml-6 -mt-6 rounded-full border transition-all duration-700 ease-out pointer-events-none ${
          isHovering ? 'w-20 h-20 -ml-10 -mt-10 bg-white/5 opacity-100' : 'w-12 h-12 opacity-20'
        }`}
        style={{ 
          borderColor: 'var(--accent-1)',
          borderWidth: isHovering ? '1.5px' : '0.5px'
        }}
      />

      {/* Primary Inner Dot Pointer */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 transition-transform duration-300 ease-out origin-center flex items-center justify-center"
      >
        <div 
          className={`rounded-full transition-all duration-300 ease-in-out ${
            isHovering ? 'w-2 h-2 scale-[2.5] opacity-50' : 'w-2 h-2 opacity-100'
          }`}
          style={{ backgroundColor: 'var(--accent-1)' }}
        >
          {/* Subtle glow for the inner dot */}
          <div 
            className="absolute inset-0 rounded-full blur-[2px] opacity-50"
            style={{ backgroundColor: 'var(--accent-1)' }}
          />
        </div>
      </div>

      <style>{`
        body { cursor: none !important; }
        a, button, .interactive, input, textarea { cursor: none !important; }
      `}</style>
    </div>
  );
};

export default CustomCursor;
