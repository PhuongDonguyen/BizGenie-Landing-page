import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const News = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const newsItems = [
    {
      id: 1,
      title: "Loren ipsun dolor sit anet, consectetur adipisci elit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isLarge: true
    },
    {
      id: 2,
      title: "Loren ipsun dolor sit anet, consectetur adipisci elit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isLarge: false
    },
    {
      id: 3,
      title: "Loren ipsun dolor sit anet, consectetur adipisci elit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isLarge: false
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            TIN TỨC
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Large News Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="w-full h-64 bg-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">🖼️</div>
                  <p className="text-sm font-medium">Picture</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {newsItems[0].title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {newsItems[0].description}
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-colors duration-300">
                  Xem thêm
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Two Smaller News Cards */}
          <div className="lg:col-span-2 space-y-6">
            {newsItems.slice(1).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="flex">
                  <div className="w-32 h-32 bg-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center flex-shrink-0">
                    <div className="text-center text-gray-500">
                      <div className="text-2xl mb-1">🖼️</div>
                      <p className="text-xs font-medium">Picture</p>
                    </div>
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-colors duration-300">
                      Xem thêm
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
