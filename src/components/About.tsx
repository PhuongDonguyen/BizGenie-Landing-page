import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            GIỚI THIỆU
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            BizGenie là nền tảng trợ lý AI dành cho doanh nghiệp vừa và nhỏ tại Việt Nam, 
            nhằm giúp chủ doanh nghiệp vận hành hiệu quả, kiểm soát tài chính và cảnh báo rủi ro. 
            Chúng tôi là "người bạn đồng hành số" thực tế, đơn giản và phù hợp với SMEs Việt Nam.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <Link
            to="/about"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto inline-flex"
          >
            Tìm hiểu thêm
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Picture Placeholders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="w-full h-48 bg-gray-800 rounded-2xl border-2 border-dashed border-gray-600 flex items-center justify-center"
            >
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">🖼️</div>
                <p className="text-sm font-medium">Picture</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
