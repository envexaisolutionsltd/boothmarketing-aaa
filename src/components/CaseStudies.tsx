import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

interface CaseStudy {
  id: string;
  company_name: string;
  industry: string;
  challenge: string;
  solution: string;
  results: Array<{ metric: string; value: string }>;
  image_url: string;
  featured: boolean;
}

export const CaseStudies: React.FC = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

        const response = await fetch(
          `${supabaseUrl}/rest/v1/case_studies?featured=eq.true&order=created_at.desc`,
          {
            headers: {
              'apikey': supabaseAnonKey,
              'Authorization': `Bearer ${supabaseAnonKey}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setCaseStudies(data);
        }
      } catch (err) {
        console.error('Failed to fetch case studies:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  if (isLoading) {
    return (
      <section className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-gray-400 text-sm">Loading case studies...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" id="case-studies">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-gray-500 mb-4 uppercase">Real Results</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            WHERE AUTOMATION
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              DELIVERED IMPACT
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Proven results across industries. Measurable outcomes. Real businesses, real time savings.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative border border-gray-900 bg-black/40 overflow-hidden backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {study.image_url && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image_url}
                    alt={study.company_name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                </div>
              )}

              <div className="relative z-10 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-xs tracking-[0.2em] text-gray-500 mb-2 uppercase">{study.industry}</p>
                    <h3 className="text-2xl font-black tracking-tight">{study.company_name}</h3>
                  </div>
                  <TrendingUp className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                </div>

                <div className="mb-6">
                  <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-2">The Challenge</p>
                  <p className="text-gray-300 font-light leading-relaxed">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-2">The Solution</p>
                  <p className="text-gray-300 font-light leading-relaxed">{study.solution}</p>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-4">Results</p>
                  <div className="grid grid-cols-1 gap-3">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">{result.metric}</span>
                        <span className="text-cyan-400 font-black text-lg">{result.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
