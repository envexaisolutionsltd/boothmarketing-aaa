import React, { useState, useEffect, useCallback, useMemo, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Building, Users, TrendingUp, Settings, CheckCircle, X, Quote, ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import './styles/text-effects.css';

const BookingForm = lazy(() => import('./components/BookingForm'));

const proofProxyCards = [
  'New enquiries are captured, qualified, and routed in under 60 seconds',
  'Appointment booking runs automatically with zero manual back-and-forth',
  'Follow-up sequences trigger on time so opportunities do not stall',
  'Repetitive admin is removed from daily operations and reassigned to automation'
];

const practicalStatements = [
  'Lead responses are instant and consistent, even outside business hours',
  'Follow-up steps run automatically based on pipeline stage and response behavior',
  'Owners and teams spend less time on admin and more time on sales and delivery'
];

const blogPosts = [
  {
    title: 'Why Most Businesses Lose Leads Before They Even Reply',
    description: 'Where response delays and manual bottlenecks silently kill qualified demand.',
    readTime: 'Insight'
  },
  {
    title: 'The Hidden Cost of Manual Work in Growing Businesses',
    description: 'How repetitive admin slows growth and reduces operational output.',
    readTime: 'Insight'
  },
  {
    title: 'How Automation Replaces Repetitive Tasks Without Hiring',
    description: 'A direct path to higher efficiency using systems that run reliably in the background.',
    readTime: 'Insight'
  }
];

const B2BLandingPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    teamSize: '',
    challenge: ''
  });
  const [formStep, setFormStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [roiInputs, setRoiInputs] = useState({
    hoursPerWeek: '25',
    hourlyCost: '30',
    automationCoverage: '60',
    setupInvestment: '3000'
  });
  const controls = useAnimation();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }, 16);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    controls.start({
      rotate: 360,
      transition: { duration: 20, repeat: Infinity, ease: "linear" }
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, [controls]);

  const glowChars = useMemo(() => Array.from({ length: 100 }, (_, i) => ({
    id: i,
    char: ['0', '1'][Math.floor(Math.random() * 2)],
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
  })), []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const scrollToForm = () => {
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const canGoToStepTwo =
    formData.fullName.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.companyName.trim() !== '';

  const handleRoiInputChange = (field: keyof typeof roiInputs, value: string) => {
    setRoiInputs(prev => ({ ...prev, [field]: value }));
  };

  const roiEstimate = useMemo(() => {
    const hoursPerWeek = Math.max(0, Number(roiInputs.hoursPerWeek) || 0);
    const hourlyCost = Math.max(0, Number(roiInputs.hourlyCost) || 0);
    const automationCoverage = Math.min(100, Math.max(0, Number(roiInputs.automationCoverage) || 0)) / 100;
    const setupInvestment = Math.max(0, Number(roiInputs.setupInvestment) || 0);

    const weeklyTimeSaved = hoursPerWeek * automationCoverage;
    const monthlyTimeSaved = weeklyTimeSaved * 4.33;
    const monthlyValueRecovered = monthlyTimeSaved * hourlyCost;
    const paybackMonths = monthlyValueRecovered > 0 ? setupInvestment / monthlyValueRecovered : 0;

    return {
      weeklyTimeSaved,
      monthlyTimeSaved,
      monthlyValueRecovered,
      annualValueRecovered: monthlyValueRecovered * 12,
      paybackMonths
    };
  }, [roiInputs]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const response = await fetch(`${supabaseUrl}/rest/v1/automation_audit_requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseAnonKey,
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          company_name: formData.companyName,
          current_team_size: formData.teamSize || null,
          biggest_workflow_challenge: formData.challenge
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Form submission error:', err);
      setError('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Mouse-following gradient */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.08), transparent 80%)`
        }}
      />

      {/* Background radial gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/20 via-black to-black pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <img src="/booth-marketing-logo.png" alt="Booth Marketing" className="h-12 sm:h-14 lg:h-16 w-auto max-w-[170px] sm:max-w-[220px] lg:max-w-[260px]" loading="eager" decoding="async" />
              <span className="hidden md:block text-[0.62rem] lg:text-[0.68rem] tracking-[0.22em] uppercase text-gray-400 whitespace-nowrap">
                Booth Marketing
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xs font-light tracking-[0.15em] lg:tracking-[0.2em] text-gray-400 hover:text-cyan-400 transition-colors uppercase"
                aria-label="Navigate to home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('qualification')}
                className="text-xs font-light tracking-[0.15em] lg:tracking-[0.2em] text-gray-400 hover:text-cyan-400 transition-colors uppercase"
                aria-label="Navigate to qualification section"
              >
                Qualification
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="text-xs font-light tracking-[0.15em] lg:tracking-[0.2em] text-gray-400 hover:text-cyan-400 transition-colors uppercase"
                aria-label="Navigate to work section"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-xs font-light tracking-[0.15em] lg:tracking-[0.2em] text-gray-400 hover:text-cyan-400 transition-colors uppercase"
                aria-label="Navigate to testimonials section"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('insights')}
                className="text-xs font-light tracking-[0.15em] lg:tracking-[0.2em] text-gray-400 hover:text-cyan-400 transition-colors uppercase"
                aria-label="Navigate to insights section"
              >
                Insights
              </button>
              <button
                onClick={scrollToForm}
                className="px-4 lg:px-6 py-2.5 lg:py-3 text-xs font-light tracking-[0.15em] lg:tracking-[0.2em] border border-gray-800 hover:border-cyan-500/50 transition-colors uppercase"
                aria-label="Request automation audit form"
              >
                [ GET MY FREE AUTOMATION AUDIT ]
              </button>
            </nav>
            <button
              onClick={scrollToForm}
              className="md:hidden px-4 py-2 text-[0.65rem] font-light tracking-[0.15em] border border-gray-800 hover:border-cyan-500/50 transition-colors uppercase"
              aria-label="Request automation audit form"
            >
              [ GET MY FREE AUTOMATION AUDIT ]
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Rose */}
      <section className="relative z-10 pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-5rem)]">
        <div className="max-w-7xl mx-auto h-full">
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 h-full">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="order-2 lg:order-1 text-center lg:text-left lg:flex-1 w-full max-w-4xl"
            >
              <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[1.1] tracking-tighter mb-6 sm:mb-8">
                REMOVE 20-40 HOURS OF
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                  MANUAL WORK FROM YOUR BUSINESS
                </span>
              </h1>
              <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-400 font-light tracking-wide leading-relaxed max-w-3xl mx-auto lg:mx-0 mb-8 sm:mb-10">
                We build automation systems that capture leads, follow up instantly, and book appointments - without hiring more staff.
              </p>

              <motion.button
                onClick={scrollToForm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 sm:px-12 py-4 sm:py-5 text-xs sm:text-sm font-light tracking-[0.25em] sm:tracking-[0.3em] uppercase overflow-hidden group"
                aria-label="Request automation audit form"
              >
                <span className="relative z-10">GET MY FREE AUTOMATION AUDIT</span>
                <div className="absolute inset-0 border border-cyan-500/50 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.button>
            </motion.div>

            {/* Rose with Animated Circles */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative flex items-center justify-center order-1 lg:order-2 w-full lg:flex-1"
            >
              <div className="relative w-[60vw] h-[60vw] max-w-[350px] max-h-[350px] sm:max-w-[400px] sm:max-h-[400px] lg:w-[450px] lg:h-[450px]">
                <motion.svg
                  animate={controls}
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 500 500"
                >
                  <defs>
                    <radialGradient id="glowGradient">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#0891b2" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#0e7490" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle
                    cx="250"
                    cy="250"
                    r="200"
                    fill="none"
                    stroke="url(#glowGradient)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    opacity="0.3"
                  />
                  <circle
                    cx="250"
                    cy="250"
                    r="150"
                    fill="none"
                    stroke="url(#glowGradient)"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                    opacity="0.5"
                  />
                </motion.svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 grid grid-cols-12 gap-1 text-[0.5rem] font-mono overflow-hidden opacity-20">
                      {glowChars.map((item) => (
                        <motion.span
                          key={item.id}
                          initial={{ opacity: 0.1, color: '#444' }}
                          animate={{
                            opacity: [0.1, 0.8, 0.1],
                            color: ['#444', '#06b6d4', '#444'],
                          }}
                          transition={{
                            duration: item.duration,
                            delay: item.delay,
                            repeat: Infinity,
                            repeatType: "loop"
                          }}
                          className="text-center"
                        >
                          {item.char}
                        </motion.span>
                      ))}
                    </div>

                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative z-10 flex items-center justify-center w-full h-full"
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl drop-shadow-[0_0_80px_rgba(6,182,212,0.7)]" />
                        <img
                          src="/chatgpt_image_jan_27,_2026,_04_32_22_am.png"
                          alt="Rose"
                          className="relative w-[90%] h-[90%] object-contain drop-shadow-[0_0_50px_rgba(6,182,212,0.9)]"
                          loading="eager"
                          decoding="async"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section id="qualification" className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] text-gray-500 mb-4 uppercase">Qualification</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              WHO THIS
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                IS FOR
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border border-cyan-900/50 bg-cyan-900/5 p-8 backdrop-blur-sm"
            >
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold tracking-tight">Who This Is For</h3>
              </div>
              <ul className="space-y-4 text-gray-300 font-light">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  <span>Businesses handling regular enquiries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  <span>Teams doing repetitive admin work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  <span>Owners who want to scale without hiring</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border border-red-900/50 bg-red-900/5 p-8 backdrop-blur-sm"
            >
              <div className="flex items-center mb-6">
                <X className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold tracking-tight">If your business relies on:</h3>
              </div>
              <ul className="space-y-4 text-gray-300 font-light">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span>replying manually to leads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span>chasing follow-ups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span>booking appointments yourself</span>
                </li>
              </ul>
              <p className="mt-6 text-red-300 font-medium">
                You are losing time, money, and potential customers every day.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Understanding the System Section */}
      <section id="approach" className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] text-gray-500 mb-4 uppercase">Core Systems</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                OUR APPROACH
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Our approach is built to produce measurable outcomes, not just technical outputs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: '01',
                title: 'Understand',
                description: 'We map your current workflows, identify bottlenecks, and document where time is lost',
                icon: Building
              },
              {
                number: '02',
                title: 'Identify',
                description: 'We pinpoint specific processes that benefit from automation and quantify potential impact',
                icon: TrendingUp
              },
              {
                number: '03',
                title: 'Design',
                description: 'We architect systems that integrate with your existing operations and scale with growth',
                icon: Settings
              },
              {
                number: '04',
                title: 'Decide',
                description: 'You choose whether to proceed based on clear understanding of costs, timeline, and outcomes',
                icon: Users
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative border border-gray-900 bg-black/40 p-8 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="text-6xl font-black text-gray-900 group-hover:text-cyan-900 transition-colors mb-4">{step.number}</div>
                  <step.icon className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light text-sm">{step.description}</p>

                  <div className="mt-6 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Work Section */}
      <section id="work" className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] text-gray-500 mb-4 uppercase">Work</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              CASE STUDIES /
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                PREVIOUS WORK
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Capability proof for how these systems perform in real operating workflows.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {proofProxyCards.map((cardText, index) => (
              <motion.div
                key={cardText}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="border border-gray-900 bg-black/40 p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-colors"
              >
                <div className="mb-5 h-40 border border-dashed border-gray-800 bg-gradient-to-br from-cyan-500/10 to-transparent flex items-center justify-center">
                  <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gray-500">Case Study Image Slot</span>
                </div>
                <p className="text-lg text-gray-300 font-light leading-relaxed">{cardText}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] text-gray-500 mb-4 uppercase">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              TESTIMONIALS
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                IN PRACTICE
              </span>
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              Proof proxy statements based on live automation behavior, not fabricated client endorsements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {practicalStatements.map((statement, index) => (
              <motion.div
                key={statement}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="border border-gray-900 bg-black/40 p-8 backdrop-blur-sm"
              >
                <Quote className="w-7 h-7 text-cyan-400 mb-5" />
                <p className="text-gray-300 font-light leading-relaxed">{statement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] text-gray-500 mb-4 uppercase">Blog / Insights</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              BLOG /
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                INSIGHTS
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Simple breakdowns on where time and revenue are lost, and how automation recovers both.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group border border-gray-900 bg-black/40 p-8 backdrop-blur-sm hover:border-cyan-500/50 transition-all"
              >
                <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-3">{post.readTime}</p>
                <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">{post.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6">{post.description}</p>
                <button className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-cyan-400 hover:text-cyan-300 transition-colors">
                  Read more <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.3em] text-gray-500 mb-4 uppercase">ROI Estimator</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              ESTIMATE YOUR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                TIME + VALUE RECOVERY
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border border-gray-900 bg-black/40 p-8 backdrop-blur-sm"
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-xs tracking-[0.2em] text-gray-500 mb-2 uppercase">
                    Manual hours per week
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={roiInputs.hoursPerWeek}
                    onChange={(e) => handleRoiInputChange('hoursPerWeek', e.target.value)}
                    className="w-full px-4 py-3 bg-transparent border border-gray-800 text-white focus:border-cyan-500/50 focus:outline-none transition-colors font-light"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] text-gray-500 mb-2 uppercase">
                    Average hourly team cost (GBP)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={roiInputs.hourlyCost}
                    onChange={(e) => handleRoiInputChange('hourlyCost', e.target.value)}
                    className="w-full px-4 py-3 bg-transparent border border-gray-800 text-white focus:border-cyan-500/50 focus:outline-none transition-colors font-light"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] text-gray-500 mb-2 uppercase">
                    Estimated automation coverage (%)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={roiInputs.automationCoverage}
                    onChange={(e) => handleRoiInputChange('automationCoverage', e.target.value)}
                    className="w-full px-4 py-3 bg-transparent border border-gray-800 text-white focus:border-cyan-500/50 focus:outline-none transition-colors font-light"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] text-gray-500 mb-2 uppercase">
                    Estimated setup investment (GBP)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={roiInputs.setupInvestment}
                    onChange={(e) => handleRoiInputChange('setupInvestment', e.target.value)}
                    className="w-full px-4 py-3 bg-transparent border border-gray-800 text-white focus:border-cyan-500/50 focus:outline-none transition-colors font-light"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border border-cyan-900/40 bg-cyan-900/5 p-8 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold tracking-tight mb-6">Estimated impact</h3>
              <div className="space-y-4 text-sm">
                <p className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-400">Weekly time saved</span>
                  <span className="text-cyan-300 font-semibold">{roiEstimate.weeklyTimeSaved.toFixed(1)} hours</span>
                </p>
                <p className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-400">Monthly time saved</span>
                  <span className="text-cyan-300 font-semibold">{roiEstimate.monthlyTimeSaved.toFixed(1)} hours</span>
                </p>
                <p className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-400">Monthly value recovered</span>
                  <span className="text-cyan-300 font-semibold">£{roiEstimate.monthlyValueRecovered.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </p>
                <p className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-400">Annual value recovered</span>
                  <span className="text-cyan-300 font-semibold">£{roiEstimate.annualValueRecovered.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-gray-400">Estimated payback period</span>
                  <span className="text-cyan-300 font-semibold">
                    {roiEstimate.monthlyValueRecovered > 0 ? `${roiEstimate.paybackMonths.toFixed(1)} months` : 'N/A'}
                  </span>
                </p>
              </div>
              <p className="text-gray-400 text-sm mt-6 font-light leading-relaxed">
                Use this as a directional estimate. Your audit will provide a process-specific time-saving breakdown.
              </p>
              <button
                onClick={scrollToForm}
                className="mt-8 w-full relative px-10 py-4 text-xs font-light tracking-[0.25em] uppercase overflow-hidden group"
              >
                <span className="relative z-10">GET MY FREE AUTOMATION AUDIT</span>
                <div className="absolute inset-0 border border-cyan-500/60 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 to-cyan-600/15 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority Block */}
      <section className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-gray-900 bg-black/40 p-8 md:p-10 backdrop-blur-sm text-center"
          >
            <p className="text-xs tracking-[0.3em] text-gray-500 mb-4 uppercase">Authority</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-5">
              BUILT FOR REAL
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                BUSINESS OPERATIONS
              </span>
            </h2>
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              We focus on installing automation systems that work inside real businesses. No fluff, no unnecessary tools - just systems that save time and increase output.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section id="audit-form" className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] text-gray-500 mb-4 uppercase">Free Audit</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              GET MY FREE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                AUTOMATION AUDIT
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Get a direct breakdown of where automation removes manual work and increases output.
            </p>
            <div className="mt-8 max-w-md mx-auto text-left border border-gray-900 bg-black/40 p-5">
              <p className="text-sm text-cyan-300 font-medium mb-3">What you get:</p>
              <ul className="space-y-2 text-gray-300 text-sm font-light">
                <li className="flex items-start"><span className="text-cyan-400 mr-2">•</span><span>Clear automation opportunities</span></li>
                <li className="flex items-start"><span className="text-cyan-400 mr-2">•</span><span>Time-saving breakdown</span></li>
                <li className="flex items-start"><span className="text-cyan-400 mr-2">•</span><span>Simple execution plan</span></li>
              </ul>
            </div>
          </motion.div>

          {!isSubmitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="border border-gray-900 bg-black/40 p-8 md:p-12 backdrop-blur-sm"
            >
              <p className="text-xs tracking-[0.2em] text-gray-500 mb-6 uppercase">
                Step {formStep} of 2
              </p>

              {formStep === 1 ? (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-medium tracking-wider text-gray-500 mb-2 uppercase">
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="w-full px-4 py-3 bg-transparent border border-gray-800 text-white focus:border-cyan-500/50 focus:outline-none transition-colors font-light"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wider text-gray-500 mb-2 uppercase">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 bg-transparent border border-gray-800 text-white focus:border-cyan-500/50 focus:outline-none transition-colors font-light"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-medium tracking-wider text-gray-500 mb-2 uppercase">
                      Business Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="w-full px-4 py-3 bg-transparent border border-gray-800 text-white focus:border-cyan-500/50 focus:outline-none transition-colors font-light"
                      required
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-6">
                    <label className="block text-xs font-medium tracking-wider text-gray-500 mb-2 uppercase">
                      Main Challenge
                    </label>
                    <textarea
                      value={formData.challenge}
                      onChange={(e) => handleInputChange('challenge', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-transparent border border-gray-800 text-white focus:border-cyan-500/50 focus:outline-none transition-colors resize-none font-light"
                      placeholder="Where are you losing the most time right now?"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-medium tracking-wider text-gray-500 mb-2 uppercase">
                      Team Size
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => handleInputChange('teamSize', e.target.value)}
                      className="w-full px-4 py-3 bg-transparent border border-gray-800 text-white focus:border-cyan-500/50 focus:outline-none transition-colors font-light appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-black">Select team size</option>
                      <option value="1-5" className="bg-black">1-5 employees</option>
                      <option value="6-20" className="bg-black">6-20 employees</option>
                      <option value="21-50" className="bg-black">21-50 employees</option>
                      <option value="51-100" className="bg-black">51-100 employees</option>
                      <option value="100+" className="bg-black">100+ employees</option>
                    </select>
                  </div>
                </>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500/50">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                {formStep === 2 && (
                  <button
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="w-full sm:w-auto px-8 py-4 text-xs font-light tracking-[0.2em] uppercase border border-gray-700 hover:border-cyan-500/50 transition-colors"
                  >
                    Back
                  </button>
                )}

                {formStep === 1 ? (
                  <button
                    type="button"
                    onClick={() => setFormStep(2)}
                    disabled={!canGoToStepTwo}
                    className="relative w-full px-12 py-5 text-sm font-light tracking-[0.3em] uppercase overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10">CONTINUE</span>
                    <div className="absolute inset-0 border-2 border-cyan-500 transition-colors" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || formData.challenge.trim() === ''}
                    className="relative w-full px-12 py-5 text-sm font-light tracking-[0.3em] uppercase overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10">{isSubmitting ? 'SUBMITTING...' : 'GET MY FREE AUTOMATION AUDIT'}</span>
                    <div className="absolute inset-0 border-2 border-cyan-500 transition-colors" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </button>
                )}
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="border border-green-900/50 bg-green-900/5 p-12 text-center backdrop-blur-sm"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-black tracking-tight mb-4">
                AUDIT REQUEST
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                  RECEIVED
                </span>
              </h3>
              <p className="text-xl text-gray-400 mb-8 font-light">
                We've received your request and will review your information.
                <br />
                Expect an email within 48 hours to schedule your audit call.
              </p>
              <div className="max-w-2xl mx-auto text-left bg-black/50 border border-gray-900 p-6">
                <h4 className="text-lg font-bold mb-3 tracking-tight">What happens next:</h4>
                <ul className="space-y-2 text-gray-400 font-light">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">1.</span>
                    <span>We review your workflow challenges and business context</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">2.</span>
                    <span>We send you an email to schedule a 30-minute audit call</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">3.</span>
                    <span>We discuss your operations and identify automation opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">4.</span>
                    <span>You receive a written summary with specific recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">5.</span>
                    <span>You decide if our approach aligns with your needs</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* What Happens Next Section */}
      {!isSubmitted && (
        <section className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <p className="text-xs tracking-[0.3em] text-gray-500 mb-4 uppercase">Process</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                WHAT HAPPENS
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                  AFTER YOU REQUEST
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 border border-cyan-500/50 text-white font-black flex items-center justify-center text-xl mr-6">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 tracking-tight">Intro Call</h3>
                  <p className="text-gray-400 font-light">
                    We schedule a 30-minute conversation to understand your workflows, challenges, and business context.
                    No sales pitch, just questions about how your operations currently work.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 border border-cyan-500/50 text-white font-black flex items-center justify-center text-xl mr-6">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 tracking-tight">Recommendations</h3>
                  <p className="text-gray-400 font-light">
                    Within 3-5 business days, you receive a written summary identifying specific automation opportunities,
                    expected impact, and our recommended approach.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 border border-cyan-500/50 text-white font-black flex items-center justify-center text-xl mr-6">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 tracking-tight">You Decide</h3>
                  <p className="text-gray-400 font-light">
                    If our approach makes sense for your business, we discuss next steps.
                    If not, you keep the recommendations. No pressure, no follow-up calls.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      {!isSubmitted && (
        <section className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-500 opacity-10 blur-3xl" />

              <div className="relative border border-cyan-500/30 p-12 backdrop-blur-sm">
                <p className="text-xs tracking-[0.3em] text-gray-500 mb-6 uppercase">
                  Deploy Intelligence
                </p>

                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                  TURN OPERATIONAL
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                    CHAOS INTO GROWTH
                  </span>
                </h2>

                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                  Get clear priorities, realistic ROI expectations, and a roadmap your team can actually execute.
                </p>

                <motion.button
                  onClick={scrollToForm}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-12 py-5 text-sm font-light tracking-[0.3em] uppercase overflow-hidden group"
                >
                  <span className="relative z-10">GET MY FREE AUTOMATION AUDIT</span>
                  <div className="absolute inset-0 border-2 border-cyan-500 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <motion.div
                    className="absolute inset-0 bg-cyan-400"
                    initial={{ scale: 0, opacity: 0.5 }}
                    whileHover={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>

                <p className="text-xs text-gray-600 mt-6 tracking-wider uppercase">
                  You control the process. You make the decision.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative z-50 border-t border-gray-900 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-[0.65rem] font-mono text-gray-600 tracking-wider text-center md:text-left"
          >
            BOOTH MARKETING [AI] 2025. ALL RIGHTS RESERVED. SELBY, NORTH YORKSHIRE & INTERNATIONAL
          </motion.p>
          <div className="flex gap-6 text-[0.65rem] font-mono text-gray-600 tracking-wider">
            <button className="hover:text-cyan-400 transition-colors" aria-label="Privacy Policy">PRIVACY</button>
            <button className="hover:text-cyan-400 transition-colors" aria-label="Terms of Service">TERMS</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

const LoadingFallback = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
      <p className="text-gray-400 text-sm tracking-wide">Loading...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<B2BLandingPage />} />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <BookingForm />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
