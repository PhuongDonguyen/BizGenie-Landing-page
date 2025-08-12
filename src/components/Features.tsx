import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Clock, Shield, TrendingUp } from 'lucide-react';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: CheckCircle,
      title: "KHÔNG phức tạp",
      description: "Giao diện đơn giản, dễ sử dụng cho mọi doanh nghiệp"
    },
    {
      icon: Clock,
      title: "KHÔNG bỏ sót",
      description: "Theo dõi mọi hoạt động và thông tin quan trọng"
    },
    {
      icon: TrendingUp,
      title: "KHÔNG chậm trễ",
      description: "Xử lý nhanh chóng, cập nhật thời gian thực"
    },
    {
      icon: Shield,
      title: "KHÔNG rủi ro vận hành",
      description: "Cảnh báo sớm và đề xuất giải pháp phòng ngừa"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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
            Lý do khách hàng chọn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">BizGenie</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
