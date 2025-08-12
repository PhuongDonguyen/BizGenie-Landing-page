import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const News = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả tin tức' },
    { id: 'topic1', name: 'Chủ đề 1' },
    { id: 'topic2', name: 'Chủ đề 2' },
    { id: 'topic3', name: 'Chủ đề 3' },
    { id: 'topic4', name: 'Chủ đề 4' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Tăng trưởng doanh thu nhờ quản lý hiệu quả",
      excerpt: "BizGenie giúp doanh nghiệp nhỏ kiểm soát dòng tiền, nhân sự và hàng tồn kho, dẫn đến tăng trưởng doanh thu bền vững.",
      category: "topic1",
      author: "BizGenie Team",
      date: "15/12/2024",
      image: "🖼️"
    },
    {
      id: 2,
      title: "Giảm áp lực cho chủ doanh nghiệp bằng dashboard tự động",
      excerpt: "BizGenie tổng hợp dữ liệu thời gian thực qua dashboard thông minh, giúp ra quyết định nhanh, chính xác và hiệu quả.",
      category: "topic2",
      author: "BizGenie Team",
      date: "12/12/2024",
      image: "🖼️"
    },
    {
      id: 3,
      title: "Cùng doanh nghiệp tinh giản quy trình – Tối ưu nguồn lực",
      excerpt: "Doanh nghiệp có thể tích hợp tất cả quy trình (bán hàng, kho, nhân sự) lên một nền tảng duy nhất, tiết kiệm thời gian.",
      category: "topic3",
      author: "BizGenie Team",
      date: "10/12/2024",
      image: "🖼️"
    },
    {
      id: 4,
      title: "Giảm 40% thời gian xử lý đơn hàng với BizGenie",
      excerpt: "Tự động hóa quy trình xử lý đơn hàng giúp doanh nghiệp tiết kiệm thời gian và tăng hiệu quả kinh doanh.",
      category: "topic1",
      author: "BizGenie Team",
      date: "08/12/2024",
      image: "🖼️"
    },
    {
      id: 5,
      title: "Tăng hiệu quả làm việc trong mô hình hybrid",
      excerpt: "Giải pháp quản lý từ xa giúp doanh nghiệp duy trì hiệu suất cao trong môi trường làm việc linh hoạt.",
      category: "topic2",
      author: "BizGenie Team",
      date: "05/12/2024",
      image: "🖼️"
    },
    {
      id: 6,
      title: "Chuyển đổi số bắt đầu từ đâu? 3 bước đơn giản cho SME",
      excerpt: "Hướng dẫn chi tiết giúp doanh nghiệp vừa và nhỏ bắt đầu hành trình chuyển đổi số một cách hiệu quả.",
      category: "topic3",
      author: "BizGenie Team",
      date: "03/12/2024",
      image: "🖼️"
    }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Tin tức & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Cập nhật</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cập nhật những tin tức mới nhất về công nghệ, kinh doanh và giải pháp 
              tối ưu vận hành cho doanh nghiệp
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="w-full h-48 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">{article.image}</div>
                    <p className="text-sm font-medium">Picture</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                    Đọc thêm
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Xem thêm tin tức
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default News;
