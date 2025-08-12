import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, TrendingUp, Globe, Award } from 'lucide-react';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [counts, setCounts] = useState({
    users: 0,
    growth: 0,
    countries: 0,
    awards: 0
  });

  const stats = [
    {
      icon: Users,
      value: 10000,
      suffix: "+",
      label: "Happy Customers",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      value: 150,
      suffix: "%",
      label: "Growth Rate",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Globe,
      value: 50,
      suffix: "+",
      label: "Countries Served",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      value: 25,
      suffix: "+",
      label: "Industry Awards",
      color: "from-orange-500 to-orange-600"
    }
  ];

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          users: Math.floor(10000 * progress),
          growth: Math.floor(150 * progress),
          countries: Math.floor(50 * progress),
          awards: Math.floor(25 * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've transformed businesses and created lasting value for our clients worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              
              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-bold">
                  {index === 0 && counts.users}
                  {index === 1 && counts.growth}
                  {index === 2 && counts.countries}
                  {index === 3 && counts.awards}
                </span>
                <span className="text-2xl text-blue-400 font-semibold">{stat.suffix}</span>
              </div>
              
              <p className="text-gray-300 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
