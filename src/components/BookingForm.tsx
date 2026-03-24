import React, { useState } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    selectedService: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Database configuration is missing. Please check environment variables.');
      }

      const response = await fetch(`${supabaseUrl}/rest/v1/qualification_forms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseAnonKey,
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company_name: formData.companyName,
          selected_service: formData.selectedService,
          problems_to_solve: formData.message,
          qualified: true
        })
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('API Error:', errorData);
        throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`);
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setError(error instanceof Error ? error.message : 'There was an error submitting your form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setError(null);
    setFormData({
      name: '',
      email: '',
      companyName: '',
      selectedService: '',
      message: ''
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white">
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex-shrink-0">
                <img src="/chatgpt_image_jan_27__2026__04_05_36_am-removebg-preview.png" alt="Booth Marketing" className="h-20 sm:h-24 lg:h-32 w-auto" loading="eager" decoding="async" />
              </Link>
              <Link
                to="/"
                className="text-[0.65rem] sm:text-xs lg:text-sm font-light tracking-[0.15em] sm:tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
              >
                [ HOME ]
              </Link>
            </div>
          </div>
        </header>

        <main className="pt-24 sm:pt-28 lg:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-cyan-400 mx-auto mb-6 sm:mb-8" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4 px-2">
              SUBMISSION
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                RECEIVED
              </span>
            </h1>
            <p className="text-xs sm:text-sm tracking-wider text-gray-400 mb-8 sm:mb-12 px-4">
              WE WILL CONTACT YOU WITHIN 48 HOURS
            </p>
            <button
              onClick={resetForm}
              className="px-6 sm:px-8 py-3 text-[0.65rem] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] border border-gray-800 hover:border-cyan-500/50 transition-colors rounded-sm"
            >
              [ SUBMIT ANOTHER ]
            </button>
          </div>
        </main>

        <footer className="border-t border-gray-900 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-[0.6rem] sm:text-[0.65rem] font-mono text-gray-600 tracking-wider text-center">
              BOOTH MARKETING [AI] 2025
            </p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex-shrink-0">
              <img src="/chatgpt_image_jan_27__2026__04_05_36_am-removebg-preview.png" alt="Booth Marketing" className="h-20 sm:h-24 lg:h-32 w-auto" loading="eager" decoding="async" />
            </Link>
            <Link
              to="/"
              className="text-[0.65rem] sm:text-xs lg:text-sm font-light tracking-[0.15em] sm:tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
            >
              [ HOME ]
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-24 sm:pt-28 lg:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <p className="text-[0.65rem] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-gray-500 mb-4 sm:mb-6 uppercase">
              Free Automation Audit
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 px-2">
              CONTACT
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                INTELLIGENCE
              </span>
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-[0.65rem] sm:text-xs tracking-wider text-gray-500 mb-2 uppercase">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full p-3 sm:p-4 bg-transparent border border-gray-800 text-white text-sm sm:text-base placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors rounded-sm"
                placeholder="Full name"
                required
              />
            </div>

            <div>
              <label className="block text-[0.65rem] sm:text-xs tracking-wider text-gray-500 mb-2 uppercase">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full p-3 sm:p-4 bg-transparent border border-gray-800 text-white text-sm sm:text-base placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors rounded-sm"
                placeholder="email@company.com"
                required
              />
            </div>

            <div>
              <label className="block text-[0.65rem] sm:text-xs tracking-wider text-gray-500 mb-2 uppercase">
                Company
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className="w-full p-3 sm:p-4 bg-transparent border border-gray-800 text-white text-sm sm:text-base placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors rounded-sm"
                placeholder="Company name"
                required
              />
            </div>

            <div>
              <label className="block text-[0.65rem] sm:text-xs tracking-wider text-gray-500 mb-2 uppercase">
                Service
              </label>
              <select
                value={formData.selectedService}
                onChange={(e) => handleInputChange('selectedService', e.target.value)}
                className="w-full p-3 sm:p-4 bg-transparent border border-gray-800 text-white text-sm sm:text-base focus:outline-none focus:border-cyan-500/50 transition-colors rounded-sm appearance-none cursor-pointer"
                required
              >
                <option value="" className="bg-black text-gray-400">Select service</option>
                <option value="Website Development" className="bg-black">Website Development</option>
                <option value="AI Chat Agents" className="bg-black">AI Chat Agents</option>
                <option value="Lead Generation Systems" className="bg-black">Lead Generation Systems</option>
                <option value="CRM Integrations" className="bg-black">CRM Integrations</option>
                <option value="App Development" className="bg-black">App Development</option>
                <option value="AI Phone Callers" className="bg-black">AI Phone Callers</option>
              </select>
            </div>

            <div>
              <label className="block text-[0.65rem] sm:text-xs tracking-wider text-gray-500 mb-2 uppercase">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={5}
                className="w-full p-3 sm:p-4 bg-transparent border border-gray-800 text-white text-sm sm:text-base placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none rounded-sm"
                placeholder="Describe your requirements"
                required
              />
            </div>

            {error && (
              <div className="p-3 sm:p-4 bg-red-900/20 border border-red-500/50 rounded-sm" role="alert">
                <p className="text-red-400 text-xs sm:text-sm text-center">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || !formData.name || !formData.email || !formData.companyName || !formData.selectedService || !formData.message}
              className="w-full px-8 sm:px-12 py-4 sm:py-5 text-xs sm:text-sm font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase border-2 border-cyan-500 hover:bg-cyan-500/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed rounded-sm"
              aria-busy={isLoading}
            >
              {isLoading ? (
                <div className="animate-spin w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full mx-auto" aria-label="Loading"></div>
              ) : (
                '[ REQUEST FREE AUTOMATION AUDIT ]'
              )}
            </button>
          </form>
        </div>
      </main>

      <footer className="border-t border-gray-900 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[0.6rem] sm:text-[0.65rem] font-mono text-gray-600 tracking-wider text-center">
            BOOTH MARKETING [AI] 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BookingForm;
