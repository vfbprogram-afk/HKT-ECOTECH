import React from 'react';
import { Euro, Recycle, Landmark, ArrowRight } from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen pt-[72px]">
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
              Góc Tài nguyên & Kết nối Đối tác
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed">
              Nguồn vốn và mạng lưới hỗ trợ chuyển đổi xanh. Cung cấp các công cụ tài chính và liên kết đối tác chiến lược để thúc đẩy nông nghiệp bền vững.
            </p>
            
            {/* SDG Integration */}
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-xs font-bold text-outline tracking-wider uppercase">Mục tiêu SDG</span>
              <div className="flex items-center gap-3 bg-surface-container pr-4 py-1.5 rounded-full border border-outline-variant/30">
                <img src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-08.jpg" alt="SDG 8" className="w-8 h-8 rounded-full ml-1" />
                <span className="text-sm font-semibold text-on-surface">Mục tiêu 8: Tăng trưởng Kinh tế</span>
              </div>
              <div className="flex items-center gap-3 bg-surface-container pr-4 py-1.5 rounded-full border border-outline-variant/30">
                <img src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-17.jpg" alt="SDG 17" className="w-8 h-8 rounded-full ml-1" />
                <span className="text-sm font-semibold text-on-surface">Mục tiêu 17: Quan hệ Đối tác</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-md border border-outline-variant/30">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY6lxq77z5qCo55qfRe-c1Sgq1QvroVW_xj7GPvFaAnOHx4A3lKGlC8OtgYohPKQVLa4KrPVkIHMGo6TUD65MKk9JCfePrUKokTFpWI8gtpqOCqwrJgVjooUIPnLV492sCAhK24BEk1yETGOvCEJrKGf6r2sIv5F9R2ModguZW5BW-kDj8-BLCPQ1Vt7HaajYkKGoxuiW4nm7ND_pzLlHC2lWsLfxXrkq4oBriRoqVOe6JIuW62gFVqSvTkdGm3lCYIim-ZFjUWcw" 
              alt="Geometric abstract" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-surface-container-low py-24 border-t border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">Chương trình Hỗ trợ & Tài trợ</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Khám phá các cơ hội tài chính và hỗ trợ kỹ thuật từ các tổ chức quốc tế và chính phủ dành cho doanh nghiệp chuyển đổi số và xanh.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-surface border border-outline-variant/40 rounded-3xl p-8 flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-8 flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-secondary-fixed flex items-center justify-center">
                  <Euro className="w-7 h-7 text-on-secondary-fixed" />
                </div>
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Tài trợ không hoàn lại</span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-2">Sáng kiến GIGI</h3>
              <p className="text-sm font-semibold text-outline uppercase tracking-wider mb-6">Đối tác: SHIFT / SNV / Germany</p>
              <p className="text-on-surface-variant flex-grow leading-relaxed mb-8">
                Cung cấp khoản tài trợ không hoàn lại lên đến 25,000 Euro cho các Doanh nghiệp Vừa và Nhỏ (SMEs) áp dụng công nghệ xanh và cải tiến chuỗi cung ứng.
              </p>
              <div className="pt-6 border-t border-outline-variant/30">
                <button className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-on-secondary-fixed transition-colors group">
                  Chi tiết chương trình 
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface border border-outline-variant/40 rounded-3xl p-8 flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-8 flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center">
                  <Recycle className="w-7 h-7 text-on-primary-fixed" />
                </div>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Hỗ trợ kỹ thuật</span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-2">Dự án ACE-Biz</h3>
              <p className="text-sm font-semibold text-outline uppercase tracking-wider mb-6">Đối tác: UNDP / Bộ Công Thương</p>
              <p className="text-on-surface-variant flex-grow leading-relaxed mb-8">
                Chương trình hỗ trợ toàn diện nhằm xây dựng và chuyển đổi sang mô hình kinh tế tuần hoàn, tối ưu hóa tài nguyên và giảm thiểu rác thải trong sản xuất.
              </p>
              <div className="pt-6 border-t border-outline-variant/30">
                <button className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-on-secondary-fixed transition-colors group">
                  Tham gia mạng lưới 
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface border border-outline-variant/40 rounded-3xl p-8 flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-8 flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed flex items-center justify-center">
                  <Landmark className="w-7 h-7 text-on-tertiary-fixed" />
                </div>
                <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Vay ưu đãi</span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-2">Quỹ SMEDF</h3>
              <p className="text-sm font-semibold text-outline uppercase tracking-wider mb-6">Quỹ Phát triển DNNVV</p>
              <p className="text-on-surface-variant flex-grow leading-relaxed mb-8">
                Cung cấp các khoản vay với lãi suất cực kỳ ưu đãi (chỉ từ 1.2%/năm) dành riêng cho các SMEs tham gia sâu vào chuỗi giá trị nông nghiệp bền vững.
              </p>
              <div className="pt-6 border-t border-outline-variant/30">
                <button className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-on-secondary-fixed transition-colors group">
                  Đăng ký tư vấn 
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
