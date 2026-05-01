import React from 'react';
import { ShieldCheck, Globe, Network } from 'lucide-react';

export const BlockchainPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen pt-[72px]">
      {/* Hero Section */}
      <section className="py-24 flex flex-col items-center text-center bg-surface-container-lowest max-w-[1280px] mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface-container border border-outline-variant/50 rounded-full mb-8">
          <ShieldCheck className="w-5 h-5 text-secondary" />
          <span className="text-sm font-semibold text-on-surface-variant tracking-wide">Immutable Data Infrastructure</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface mb-6 max-w-4xl tracking-tight leading-tight">
          Nền tảng Minh bạch - <br/> Truy xuất nguồn gốc bằng Blockchain
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
          Chuỗi cung ứng kỹ thuật số từ trang trại đến thương mại B2B toàn cầu. Chúng tôi cung cấp giải pháp xác minh dữ liệu không thể giả mạo, xây dựng niềm tin tuyệt đối giữa nhà sản xuất và thị trường quốc tế.
        </p>
      </section>

      {/* SDG Integration */}
      <section className="py-12 bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-outline-variant/40 rounded-2xl p-10 flex flex-col transition-transform hover:-translate-y-1 duration-300">
              <div className="w-20 h-20 mb-8 rounded-xl overflow-hidden shadow-sm">
                <img src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-09.jpg" alt="SDG 9" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-4 tracking-tight">Mục tiêu 9: Công nghiệp & Đổi mới</h3>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Thúc đẩy công nghiệp hóa bền vững và nuôi dưỡng đổi mới thông qua việc áp dụng công nghệ sổ cái phân tán (DLT) vào cơ sở hạ tầng nông nghiệp.
              </p>
            </div>
            
            <div className="bg-surface border border-outline-variant/40 rounded-2xl p-10 flex flex-col transition-transform hover:-translate-y-1 duration-300">
              <div className="w-20 h-20 mb-8 rounded-xl overflow-hidden shadow-sm">
                <img src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-12.jpg" alt="SDG 12" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-4 tracking-tight">Mục tiêu 12: Tiêu dùng Có trách nhiệm</h3>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Đảm bảo mô hình sản xuất và tiêu dùng bền vững bằng cách cung cấp cho người mua khả năng hiển thị toàn diện về nguồn gốc và tác động môi trường của sản phẩm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Bento Grid */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-on-surface mb-12 border-b border-outline-variant/30 pb-6 tracking-tight">Dự án Nổi bật</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[450px]">
            {/* Project 1: Oxfam F4A */}
            <div className="md:col-span-7 bg-surface border border-outline-variant/40 rounded-2xl overflow-hidden relative group flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="h-[240px] w-full overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7z0i0BRle4Mqoz31aQwRgfGwxnk7-LsG7xY2iXJVW6r3E-DwpZqJFtoCfiCVh9rXNmBujLr4s8l5wyuuoNcWfu55iY_un5sa6Qg8p__0Urkn2UlNw7VlmKSpgQ5gVxToAX2f4kHtCaShxGI6NEJOJXEuaoNVcAG5Fb_z68YlGYCjG1MqLoiCYD7ZLNA6UHIYHTScvZrtAZMD8DZqZeslLtG2FXXhyK0PwFxvt_gUectWyN0nxywGIr--a792fzC8a3ehgfzWbLVc"
                  alt="Vietnamese farmers working"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-center bg-surface">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-surface-container-high/50 rounded-md text-xs font-semibold uppercase tracking-wider text-on-surface">Dự án</span>
                </div>
                <h3 className="text-2xl font-bold text-on-surface mb-3 tracking-tight">Oxfam 'Fair for All' (F4A)</h3>
                <p className="text-on-surface-variant leading-relaxed line-clamp-3">
                  Hành trình 5 năm thúc đẩy thương mại công bằng và bảo tồn kiến thức bản địa. Ứng dụng blockchain để ghi nhận đóng góp của cộng đồng địa phương vào chuỗi giá trị toàn cầu, đảm bảo phân phối lợi ích minh bạch.
                </p>
              </div>
            </div>

            {/* Project 2: ViRFQ */}
            <div className="md:col-span-5 bg-surface border border-outline-variant/40 rounded-2xl overflow-hidden relative p-8 flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="flex-1 pt-4">
                <div className="w-16 h-16 bg-secondary-fixed rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  <Globe className="w-8 h-8 text-on-secondary-fixed" />
                </div>
                <h3 className="text-2xl font-bold text-on-surface mb-4 tracking-tight">Nền tảng ViRFQ B2B</h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  Mạng lưới giao thương quốc tế đáng tin cậy. Cung cấp hồ sơ kỹ thuật số được xác thực qua blockchain cho các nhà xuất khẩu.
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-outline-variant/30">
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Quy mô mạng lưới</span>
                  <span className="text-3xl font-bold text-on-surface tracking-tight">40+ Quốc gia</span>
                </div>
                <p className="text-sm text-on-surface-variant mt-2 text-right">Người mua được xác minh</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
