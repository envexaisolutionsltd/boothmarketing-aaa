import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image_url: string;
  category_id: string;
  published: boolean;
  created_at: string;
}

interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

export const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

        const [postsRes, categoriesRes] = await Promise.all([
          fetch(`${supabaseUrl}/rest/v1/blog_posts?published=eq.true&order=created_at.desc`, {
            headers: {
              'apikey': supabaseAnonKey,
              'Authorization': `Bearer ${supabaseAnonKey}`,
            },
          }),
          fetch(`${supabaseUrl}/rest/v1/blog_categories?order=name.asc`, {
            headers: {
              'apikey': supabaseAnonKey,
              'Authorization': `Bearer ${supabaseAnonKey}`,
            },
          }),
        ]);

        if (postsRes.ok) {
          const postsData = await postsRes.json();
          setPosts(postsData);
        }

        if (categoriesRes.ok) {
          const categoriesData = await categoriesRes.json();
          setCategories(categoriesData);
        }
      } catch (err) {
        console.error('Failed to fetch blog data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category_id === selectedCategory);

  const getCategoryName = (categoryId: string): string => {
    const category = categories.find(c => c.id === categoryId);
    return category?.name || 'Unknown';
  };

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  if (isLoading) {
    return (
      <section className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-gray-400 text-sm">Loading blog posts...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" id="blog">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-gray-500 mb-4 uppercase">Knowledge</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            AUTOMATION INSIGHTS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              & BEST PRACTICES
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Research, case studies, and practical guidance for building automated systems
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <motion.button
            key="all"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs font-light tracking-[0.15em] uppercase transition-all duration-300 border ${
              selectedCategory === 'all'
                ? 'border-cyan-500 bg-cyan-500/20 text-white'
                : 'border-gray-800 text-gray-400 hover:border-cyan-500/50'
            }`}
          >
            All
          </motion.button>

          {categories.map((category) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 text-xs font-light tracking-[0.15em] uppercase transition-all duration-300 border ${
                selectedCategory === category.id
                  ? 'border-cyan-500 bg-cyan-500/20 text-white'
                  : 'border-gray-800 text-gray-400 hover:border-cyan-500/50'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative border border-gray-900 bg-black/40 overflow-hidden backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {post.featured_image_url && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.featured_image_url}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                  </div>
                )}

                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4 text-xs text-gray-400">
                    <Calendar className="w-3 h-3" />
                    <span className="tracking-wider">{formatDate(post.created_at)}</span>
                  </div>

                  <span className="inline-block text-xs tracking-[0.2em] text-cyan-400 uppercase mb-3 font-light">
                    {getCategoryName(post.category_id)}
                  </span>

                  <h3 className="text-xl font-black tracking-tight mb-3 leading-tight group-hover:text-cyan-400 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 font-light text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-cyan-400 font-light text-sm tracking-wider hover:gap-3 transition-all duration-300">
                    <span>READ MORE</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No posts found in this category</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
