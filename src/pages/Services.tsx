import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Shield, Users, Target, Lightbulb, ArrowRight } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: TrendingUp,
      title: "Theo dõi & Quản trị tài chính",
      description: "Nắm bắt tình hình tài chính hàng ngày: thu - chi, tồn quỹ, công nợ. Theo dõi dòng tiền và đưa ra cảnh báo khi cần thiết.",
      features: ["Báo cáo tài chính tự động", "Theo dõi dòng tiền", "Cảnh báo chi phí vượt ngưỡng", "Quản lý công nợ"]
    },
    {
      icon: Target,
      title: "Quản lý vận hành & công việc",
      description: "Tự động cập nhật trạng thái công việc, phân loại đầu việc. Tối ưu quy trình làm việc và tăng hiệu suất.",
      features: ["Quản lý dự án", "Theo dõi tiến độ", "Phân công công việc", "Báo cáo hiệu suất"]
    },
    {
      icon: Shield,
      title: "Cảnh báo rủi ro",
      description: "Phát hiện và đưa ra cảnh báo khi phát hiện dấu hiệu bất thường hoặc chi phí vượt ngưỡng.",
      features: ["Phát hiện bất thường", "Cảnh báo rủi ro", "Báo cáo định kỳ", "Khuyến nghị hành động"]
    },
    {
      icon: Users,
      title: "Theo dõi hiệu suất nhân sự",
      description: "Tổng hợp hiệu suất làm việc, phát hiện điểm nghẽn trong quy trình. Đánh giá và cải thiện năng suất.",
      features: ["Đánh giá KPI", "Theo dõi thời gian", "Báo cáo hiệu suất", "Đào tạo nhân viên"]
    },
    {
      icon: Lightbulb,
      title: "Đề xuất giải pháp",
      description: "AI gợi ý, đề xuất giải pháp dựa trên dữ liệu vận hành. Tối ưu hóa quy trình và tăng hiệu quả.",
      features: ["Phân tích dữ liệu", "Đề xuất cải tiến", "Tối ưu quy trình", "Dự báo xu hướng"]
    }
  ];

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
              Dịch vụ của <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">BizGenie</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Giải pháp toàn diện giúp doanh nghiệp vừa và nhỏ tối ưu vận hành, 
              kiểm soát tài chính và phát triển bền vững
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Tính năng chính:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-colors duration-300 group-hover:gap-3">
                  Xem thêm
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sẵn sàng tối ưu hóa doanh nghiệp?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Hãy để BizGenie đồng hành cùng bạn trên hành trình chuyển đổi số và tối ưu vận hành
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
              Liên hệ tư vấn ngay
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
