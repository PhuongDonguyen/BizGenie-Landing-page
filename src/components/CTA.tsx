import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-20 animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-300 fill-current" />
            ))}
          </div>
          <span className="inline-block px-4 py-2 bg-white bg-opacity-20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
            🚀 Ready to Get Started?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Join Thousands of
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
            Successful Businesses
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Don't wait to transform your business. Start your journey with BizGenie today 
          and experience the difference that innovative solutions can make.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-10 py-5 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-2xl">
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-10 py-5 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm">
            Schedule Demo
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-blue-100"
        >
          <p className="text-sm">
            ✨ No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
