import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiBookOpen, FiSearch, FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../constants';

const Blogs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Agriculture AI', 'AI & ML', 'Web Development'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="relative pt-24 pb-20 page-enter min-h-screen overflow-x-hidden">
      <SEO
        title="Insights & Articles"
        description="Explore articles and insights on Smart Farming, Agriculture AI, deep learning, computer vision, and modern high-performance web engineering by Krina Khunt."
        keywords="Krina Khunt blog, Agriculture AI, LeafGuard, smart farming blog, plant disease detection, FastAPI, React portfolio, computer vision, OpenCV blog"
        schemaType="blog"
      />

      {/* Background radial accent */}
      <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] rounded-full blur-[150px] -z-10" style={{ backgroundColor: 'var(--accent-1)', opacity: 0.03 }} />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full blur-[150px] -z-10" style={{ backgroundColor: 'var(--accent-1)', opacity: 0.02 }} />

      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <FiBookOpen className="text-accent-1 opacity-50" />
            <span className="mono text-xs uppercase tracking-[0.35em]" style={{ color: 'var(--text-secondary)' }}>Insights & Ideas</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
            The <span style={{ color: 'var(--accent-1)', opacity: 0.65 }}>Journal.</span>
          </h1>
          <p className="text-sm md:text-base max-w-xl leading-relaxed opacity-70" style={{ color: 'var(--text-secondary)' }}>
            Thoughts, technical guides, and deep dives into integrating computer vision in agriculture, building secure web systems, and the future of AI.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-stretch md:items-center mb-12 pb-6 border-b" style={{ borderColor: 'var(--border)' }}>
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-3 md:pb-0 scrollbar-none -mx-6 px-6 md:mx-0 md:px-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all whitespace-nowrap"
                style={{
                  backgroundColor: selectedCategory === category ? 'var(--accent-1)' : 'transparent',
                  color: selectedCategory === category ? 'var(--bg-primary)' : 'var(--text-secondary)',
                  borderColor: selectedCategory === category ? 'var(--accent-1)' : 'var(--border)',
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 opacity-45 text-sm" />
            <input
              type="text"
              placeholder="Search articles or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-xs md:text-sm rounded-xl border outline-none bg-transparent transition-all"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-1)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
        </div>

        {/* Blogs Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-2xl border flex flex-col overflow-hidden h-full transition-all duration-300"
                style={{
                  borderColor: 'var(--border)',
                  backgroundColor: 'var(--bg-secondary)',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-1)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
              >
                {/* Post Image */}
                <Link to={`/blogs/${post.id}`} className="relative block overflow-hidden aspect-[16/10] bg-zinc-900">
                  <img
                    src={post.image.startsWith('.') ? post.image.substring(1) : post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full backdrop-blur-md border text-white"
                      style={{
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        borderColor: 'rgba(255,255,255,0.15)'
                      }}>
                      {post.category}
                    </span>
                  </div>
                </Link>

                {/* Post Body */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-[11px] font-semibold tracking-wider uppercase opacity-50 mb-4" style={{ color: 'var(--text-secondary)' }}>
                    <span className="flex items-center gap-1"><FiCalendar /> {post.date}</span>
                    <span className="flex items-center gap-1"><FiClock /> {post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight mb-3 line-clamp-2 leading-snug group-hover:text-accent-1 transition-colors">
                    <Link to={`/blogs/${post.id}`} className="no-underline text-inherit hover:text-inherit">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-sm leading-relaxed opacity-60 font-light mb-6 line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                    {post.description}
                  </p>

                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="mono text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--border)', color: 'var(--text-secondary)' }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blogs/${post.id}`}
                      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider group-hover:gap-2.5 transition-all no-underline"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Read <FiArrowRight className="text-accent-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border rounded-2xl" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
            <p className="text-base opacity-50" style={{ color: 'var(--text-secondary)' }}>No articles match your search or filter.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 px-5 py-2 rounded-full text-xs font-semibold uppercase border tracking-wider transition-all"
              style={{ borderColor: 'var(--accent-1)', color: 'var(--accent-1)' }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Blogs;