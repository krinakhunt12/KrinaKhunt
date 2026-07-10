import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiClock, FiTag, FiBookOpen } from "react-icons/fi";
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../constants';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <main className="relative pt-32 pb-20 min-h-screen flex items-center justify-center text-center">
        <div className="container max-w-md mx-auto px-6">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-base opacity-60 mb-8" style={{ color: 'var(--text-secondary)' }}>
            The article you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all"
            style={{ borderColor: 'var(--accent-1)', backgroundColor: 'var(--accent-1)', color: 'var(--bg-primary)' }}
          >
            <FiArrowLeft /> Back to Journal
          </Link>
        </div>
      </main>
    );
  }

  // Find related posts (different category or same tags, up to 2)
  const relatedPosts = BLOG_POSTS
    .filter(p => p.id !== post.id)
    .slice(0, 2);

  return (
    <main className="relative pt-24 pb-20 page-enter min-h-screen">
      <SEO
        title={post.title}
        description={post.description}
        keywords={`${post.tags.join(', ')}, Krina Khunt blog, ${post.category}`}
        schemaType="blogpost"
        image={post.image.startsWith('.') ? `https://krinakhunt.in${post.image.substring(1)}` : post.image}
        post={post}
      />

      <div className="container max-w-6xl mx-auto px-6">
        {/* Back navigation */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/blogs')}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity bg-transparent border-0 p-0"
            style={{ color: 'var(--text-primary)' }}
          >
            <FiArrowLeft /> Back to Journal
          </button>
        </div>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full border"
              style={{
                borderColor: 'var(--accent-1)',
                color: 'var(--accent-1)',
              }}>
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold tracking-wider uppercase opacity-60 pb-6 border-b" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
            <span className="flex items-center gap-1.5"><FiCalendar /> {post.date}</span>
            <span className="flex items-center gap-1.5"><FiClock /> {post.readTime}</span>
            <span className="flex items-center gap-1.5"><FiTag /> By Krina Khunt</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-12 border bg-zinc-900" style={{ borderColor: 'var(--border)' }}>
          <img
            src={post.image.startsWith('.') ? post.image.substring(1) : post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div
          className="prose max-w-none mb-16 text-sm md:text-base leading-relaxed font-light text-justify"
          style={{ color: 'var(--text-primary)' }}
        >
          {/* Inject content styling rules dynamically */}
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="space-y-6 blog-article-content"
          />
        </div>

        {/* Tags footer */}
        <div className="flex flex-wrap gap-2 py-6 border-y mb-16" style={{ borderColor: 'var(--border)' }}>
          {post.tags.map((tag) => (
            <span key={tag} className="mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="pt-8">
            <div className="flex items-center gap-3 mb-8">
              <FiBookOpen className="text-accent-1 opacity-50" />
              <h4 className="text-2xl font-bold tracking-tight uppercase">Continue <span className="italic opacity-60" style={{ color: 'var(--accent-1)' }}>Reading.</span></h4>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <div
                  key={related.id}
                  className="group rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300"
                  style={{
                    borderColor: 'var(--border)',
                    backgroundColor: 'var(--bg-secondary)',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-1)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
                >
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase opacity-50 block mb-3" style={{ color: 'var(--accent-1)' }}>
                      {related.category}
                    </span>
                    <h5 className="text-lg font-bold tracking-tight mb-2 group-hover:text-accent-1 transition-colors">
                      <Link to={`/blogs/${related.id}`} className="no-underline text-inherit hover:text-inherit">
                        {related.title}
                      </Link>
                    </h5>
                    <p className="text-xs opacity-60 line-clamp-2 mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {related.description}
                    </p>
                  </div>
                  <Link
                    to={`/blogs/${related.id}`}
                    className="text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mt-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Read Post <FiArrowLeft className="rotate-180 text-accent-1" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Embedded Style for Blog formatting details */}
      <style>{`
        .blog-article-content h3 {
          font-family: var(--font-family-display, 'Syne', sans-serif);
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }
        @media (min-width: 768px) {
          .blog-article-content h3 {
            font-size: 1.75rem;
          }
        }
        .blog-article-content p {
          opacity: 0.85;
          margin-bottom: 1.25rem;
        }
        .blog-article-content blockquote {
          border-left: 3px solid var(--accent-1);
          padding-left: 1.5rem;
          font-style: italic;
          font-size: 1.1rem;
          opacity: 0.9;
          margin: 2rem 0;
          color: var(--highlight);
        }
        .blog-article-content ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
          space-y: 0.5rem;
        }
        .blog-article-content li {
          opacity: 0.85;
          margin-bottom: 0.5rem;
        }
        .blog-article-content strong {
          color: var(--accent-1);
          font-weight: 600;
        }
      `}</style>
    </main>
  );
};

export default BlogPost;
