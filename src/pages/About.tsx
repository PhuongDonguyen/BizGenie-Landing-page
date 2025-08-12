import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Target, Eye, Heart, Users, Award, ArrowRight } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', name: 'Về chúng tôi', icon: Users },
    { id: 'mission', name: 'Sứ mệnh', icon: Target },
    { id: 'vision', name: 'Tầm nhìn', icon: Eye },
    { id: 'values', name: 'Giá trị cốt lõi', icon: Heart }
  ];

  const tabContent = {
    about: {
      title: "BizGenie – Nền tảng trợ lý AI toàn diện cho SME Việt",
      content: "BizGenie được thành lập với mục tiêu trở thành người bạn đồng hành số đáng tin cậy cho các doanh nghiệp vừa và nhỏ tại Việt Nam. Chúng tôi hiểu rõ những thách thức mà SMEs phải đối mặt trong quá trình vận hành và phát triển.",
      details: [
        "Được phát triển bởi đội ngũ chuyên gia có kinh nghiệm trong lĩnh vực công nghệ và kinh doanh",
        "Tập trung vào việc tạo ra giải pháp đơn giản, dễ sử dụng nhưng mạnh mẽ",
        "Cam kết hỗ trợ doanh nghiệp Việt Nam trong hành trình chuyển đổi số"
      ]
    },
    mission: {
      title: "Sứ mệnh của chúng tôi",
      content: "BizGenie cam kết mang đến giải pháp công nghệ tiên tiến, giúp doanh nghiệp vừa và nhỏ tối ưu hóa quy trình vận hành, nâng cao hiệu quả kinh doanh và phát triển bền vững.",
      details: [
        "Đơn giản hóa quy trình vận hành phức tạp",
        "Cung cấp công cụ quản lý tài chính minh bạch",
        "Hỗ trợ ra quyết định dựa trên dữ liệu thực tế",
        "Tạo ra môi trường làm việc hiệu quả cho doanh nghiệp"
      ]
    },
    vision: {
      title: "Tầm nhìn tương lai",
      content: "BizGenie mong muốn trở thành nền tảng công nghệ hàng đầu tại Việt Nam, đồng hành cùng hàng nghìn doanh nghiệp vừa và nhỏ trong quá trình chuyển đổi số và phát triển bền vững.",
      details: [
        "Trở thành đối tác công nghệ tin cậy của SMEs Việt Nam",
        "Mở rộng dịch vụ ra các thị trường Đông Nam Á",
        "Tiên phong trong việc ứng dụng AI vào quản lý doanh nghiệp",
        "Xây dựng cộng đồng doanh nghiệp số mạnh mẽ"
      ]
    },
    values: {
      title: "Giá trị cốt lõi",
      content: "BizGenie xây dựng nền tảng vững chắc dựa trên những giá trị cốt lõi, đảm bảo mọi sản phẩm và dịch vụ đều mang lại giá trị thực sự cho khách hàng.",
      details: [
        "Đổi mới sáng tạo: Không ngừng cải tiến và phát triển",
        "Chất lượng: Cam kết chất lượng cao trong mọi sản phẩm",
        "Tin cậy: Xây dựng lòng tin với khách hàng",
        "Đồng hành: Hỗ trợ khách hàng trong mọi bước đi"
      ]
    }
  };

  const currentContent = tabContent[activeTab as keyof typeof tabContent];

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
              Về <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">BizGenie</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chúng tôi là nền tảng trợ lý AI toàn diện, đồng hành cùng doanh nghiệp vừa và nhỏ 
              Việt Nam trên hành trình chuyển đổi số và tối ưu vận hành
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {currentContent.title}
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {currentContent.content}
              </p>

              <ul className="space-y-4">
                {currentContent.details.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{detail}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8"
              >
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Liên hệ với chúng tôi
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-dashed border-blue-300 flex items-center justify-center">
                <div className="text-center text-blue-500">
                  <div className="text-6xl mb-4">🖼️</div>
                  <p className="text-lg font-medium">Picture</p>
                  <p className="text-sm">Placeholder for about image</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Thành tựu của <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">BizGenie</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, number: "500+", label: "Doanh nghiệp tin tưởng" },
              { icon: Award, number: "95%", label: "Khách hàng hài lòng" },
              { icon: Target, number: "3+", label: "Năm kinh nghiệm" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
