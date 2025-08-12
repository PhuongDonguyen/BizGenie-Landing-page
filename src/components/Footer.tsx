import { Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Theo dõi & Quản trị tài chính',
    'Quản lý vận hành & công việc',
    'Cảnh báo rủi ro',
    'Theo dõi hiệu suất nhân sự',
    'Đề xuất giải pháp'
  ];

  const company = [
    'Giới thiệu',
    'Tin Tức'
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Social */}
          <div>
            <div className="mb-6">
              <a href="#home" className="flex items-center">
                <img src="/logo.png" alt="BizGenie Logo" className="h-12 w-auto mr-3" />
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.slice(0, 2).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">
              Dịch Vụ
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">
              Công ty
            </h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item === 'Giới thiệu' ? '/about' : '/news'}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">
              Liên hệ
            </h4>
            <div className="space-y-3">
              <div className="text-gray-400 text-sm">
                <p className="mb-2">Địa chỉ: Quo dolor nihil sit harum eius.</p>
                <p className="mb-2">Hotline: xxxx.xxx.xxx</p>
                <p>Email: abcxyz@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} BizGenie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
