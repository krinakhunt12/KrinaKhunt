import React, { useEffect, useState } from 'react';
import ContactComponent from '../components/Contact';
import { FiMail, FiChevronDown } from "react-icons/fi";
import { FAQ_ITEMS } from '../constants';
import { motion, AnimatePresence } from "framer-motion";
import SEO from '../components/SEO';

const AccordionItem: React.FC<{
  q: string;
  a: string;
  isOpen: boolean;
  toggle: () => void;
}> = ({ q, a, isOpen, toggle }) => {
  return (
    <div className="border-b border-border last:border-0">

      {/* Button */}
      <button
        onClick={toggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-base md:text-lg font-bold transition-all duration-300 ${
          isOpen
            ? "text-accent-1 translate-x-2"
            : "text-primary group-hover:text-accent-1 group-hover:translate-x-1"
        }`}>
          {q}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="p-2 rounded-full border border-border"
        >
          <FiChevronDown size={18} />
        </motion.div>
      </button>

      {/* 🔥 MAGIC PART */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1], // premium easing
            }}
            className="overflow-hidden"
          >
            <div className="pb-6">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 0.7 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-sm md:text-base leading-relaxed max-w-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                {a}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

const Contact: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="relative pt-20">
      <SEO 
        title="Get in Touch" 
        description="Ready to build something impactful? Contact Krina Khunt for full-stack engineering contracts, AI/ML integrations, or freelance technical consultations." 
        keywords="Contact Krina Khunt, hire React developer, hire Python AI engineer, freelance full stack developer, crop disease detection ML consultant, agricultural developer India"
        schemaType="contact"
      />

      {/* Header */}
      <div className="py-12 md:py-20 px-6">
        <div className="container max-w-6xl mx-auto px-2 md:px-6">
          <div className="flex items-center gap-3 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <FiMail className="text-accent-1 opacity-50" />
            <span className="mono text-xs uppercase tracking-[0.35em] opacity-50" style={{ color: 'var(--text-secondary)' }}>
              Contact
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Get in <span style={{ color: 'var(--accent-1)', opacity: 0.65 }}>Touch</span>
          </h1>
        </div>
      </div>

      {/* Contact Form */}
      <div className="animate-in fade-in duration-1000 delay-300">
        <ContactComponent />
      </div>

      {/* Collaboration Section */}
      <section className="py-12 md:py-24 px-6 bg-secondary/30">
        <div className="container max-w-6xl mx-auto px-2 md:px-6">

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">

            {/* Left */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 delay-500">
              <div className="space-y-4">
                <h3 className="mono text-xs md:text-sm uppercase tracking-[0.4em] opacity-50" style={{ color: 'var(--text-secondary)' }}>
                  Collaboration
                </h3>

                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                  Open for <span className="italic opacity-60" style={{ color: 'var(--accent-1)' }}>Impact.</span>
                </h2>
              </div>

              <p className="text-text-secondary leading-relaxed opacity-70 text-lg">
                I am currently open to new opportunities, whether it's a freelance project, a long-term collaboration, or a full-time role in a forward-thinking team.
              </p>

              <div className="flex items-center gap-4 p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 max-w-sm">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest text-emerald-500">
                  Currently Available
                </span>
              </div>
            </div>

            {/* Right FAQ */}
            <div className="animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">

              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 rounded-full" style={{ backgroundColor: 'var(--accent-1)' }} />
                <h3 className="text-xl font-bold uppercase tracking-tighter">Quick FAQ</h3>
              </div>

              <div className="border-t border-border">
                {FAQ_ITEMS.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    q={faq.q}
                    a={faq.a}
                    isOpen={openIndex === i}
                    toggle={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;