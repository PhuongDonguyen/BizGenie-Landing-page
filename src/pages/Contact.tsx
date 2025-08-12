import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Địa chỉ",
      content: "Quo dolor nihil sit harum eius.",
      description: "Văn phòng chính của BizGenie"
    },
    {
      icon: Phone,
      title: "Hotline",
      content: "xxxx.xxx.xxx",
      description: "Hỗ trợ 24/7"
    },
    {
      icon: Mail,
      title: "Email",
      content: "abcxyz@gmail.com",
      description: "Liên hệ qua email"
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      content: "Thứ 2 - Thứ 6",
      description: "8:00 AM - 6:00 PM"
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
              Liên hệ với <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">BizGenie</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy để lại thông tin 
              và chúng tôi sẽ liên hệ tư vấn trong thời gian sớm nhất.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-blue-600 font-medium mb-1">
                  {info.content}
                </p>
                <p className="text-sm text-gray-600">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Gửi tin nhắn cho chúng tôi
                </h2>
                <p className="text-gray-600">
                  Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại sớm nhất
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="Nhập họ và tên của bạn"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      SĐT
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="Nhập email của bạn"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Chủ đề
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300">
                    <option value="">Chọn chủ đề</option>
                    <option value="consultation">Tư vấn dịch vụ</option>
                    <option value="support">Hỗ trợ kỹ thuật</option>
                    <option value="partnership">Hợp tác</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nội dung tin nhắn
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                    placeholder="Mô tả chi tiết vấn đề hoặc yêu cầu của bạn"
                  />
                </div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  type="submit"
                  className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  Gửi tin nhắn
                  <Send className="w-5 h-5" />
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Tại sao chọn BizGenie?
                </h3>
                <div className="space-y-4">
                  {[
                    "Đội ngũ chuyên gia giàu kinh nghiệm",
                    "Giải pháp tùy chỉnh theo nhu cầu",
                    "Hỗ trợ 24/7",
                    "Cam kết chất lượng dịch vụ"
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                  <h4 className="text-lg font-semibold text-gray-900">
                    Hỗ trợ nhanh
                  </h4>
                </div>
                <p className="text-gray-700 mb-4">
                  Bạn cần hỗ trợ gấp? Hãy gọi ngay hotline của chúng tôi để được tư vấn miễn phí.
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Gọi ngay
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
