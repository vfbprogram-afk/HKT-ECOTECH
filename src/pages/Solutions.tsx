import React from 'react';
import { CheckCircle2, Cloud, Sprout, Leaf, Activity, Microscope, ArrowRight, ShieldCheck } from 'lucide-react';

export const SolutionsPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section 1: 1 Triệu Hecta */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[85vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM-3OHMFs_S2vaf8cHzmz50pPIY7M9wb6ldMLQnEr9_GaSmbV-iKNE94X93-zK61PsCTNFCj8pW2o5LoWoIb1BgFEj3QqNf52-56Y-MNAb7ps8OHiLKJrIFkv_L3pewg2m9g_7pCUWY3KphrtzPpQ35Q5TjBqrtRepRqtd5hHJXbChSeV6wZegsQ8e47PsvW0e4Q10F4vOFx5uABdcCUiVGoZELVhlFuMsQ_ey6_qoZLbfOWeKix6u79Jbx7UWaifNXhh8xcZxGkk" 
            alt="Mekong Delta Rice Fields" 
            className="w-full h-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary-container/70 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface-container-high/20 backdrop-blur-md text-secondary-fixed border border-secondary-fixed/30 text-sm font-medium mb-8">
              <Leaf className="w-4 h-4 mr-2" fill="currentColor" />
              Dự án 1 Triệu Hecta Lúa Chất Lượng Cao
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-primary mb-6 leading-[1.1] tracking-tight">
              Nông nghiệp Sinh thái <br /> Công nghệ Minh bạch <br /> Khí hậu Bền vững
            </h1>
            <p className="text-lg md:text-xl text-primary-fixed-dim/90 mb-10 max-w-2xl leading-relaxed">
              Nền tảng công nghệ số hóa tiên phong, kết nối nông dân, doanh nghiệp và thị trường carbon, thúc đẩy canh tác lúa phát thải thấp tại Đồng bằng sông Cửu Long.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary text-on-secondary font-semibold px-8 py-3.5 rounded-full hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-lg">
                Khám phá Giải pháp
              </button>
              <button className="bg-surface/10 backdrop-blur-md text-on-primary border border-on-primary/30 font-semibold px-8 py-3.5 rounded-full hover:bg-surface/20 transition-colors">
                Tìm hiểu Dự án
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold text-on-surface mb-6 tracking-tight">Chuyển đổi Xanh Đồng bằng sông Cửu Long</h2>
              <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
                Đề án "Phát triển bền vững 1 triệu héc-ta chuyên canh lúa chất lượng cao và phát thải thấp gắn với tăng trưởng xanh vùng Đồng bằng sông Cửu Long đến năm 2030" là bước đột phá trong chiến lược nông nghiệp quốc gia.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-on-surface text-lg mb-1">Giảm Phát Thải</h4>
                    <p className="text-sm text-on-surface-variant">Ứng dụng quy trình AWD và quản lý rơm rạ khoa học.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mr-4 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-on-surface text-lg mb-1">Tăng Giá Trị</h4>
                    <p className="text-sm text-on-surface-variant">Nâng cao chuỗi giá trị lúa gạo, tăng thu nhập cho nông dân.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-surface-container rounded-2xl p-8 border border-outline-variant/50">
                  <Sprout className="w-10 h-10 text-primary mb-6" />
                  <div className="text-4xl font-bold text-on-surface tracking-tight mb-2">1 Triệu Ha</div>
                  <div className="text-sm text-on-surface-variant">Diện tích chuyên canh mục tiêu</div>
                </div>
                <div className="bg-surface-container rounded-2xl p-8 border border-outline-variant/50 lg:mt-12">
                  <Cloud className="w-10 h-10 text-secondary mb-6" />
                  <div className="text-4xl font-bold text-on-surface tracking-tight mb-2">-20%</div>
                  <div className="text-sm text-on-surface-variant">Mục tiêu giảm phát thải khí nhà kính</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero 2: Đổi mới Sinh học (HTML 4 content) */}
      <section className="py-24 bg-surface-container-low border-t border-surface-container-high">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-full w-fit border border-outline-variant/50">
                <Microscope className="w-4 h-4 text-secondary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Đổi mới Sinh học</span>
              </div>
              <h2 className="text-4xl font-bold text-on-surface tracking-tight leading-tight">
                Giải pháp Nông nghiệp Sinh thái - Vì Sức khỏe Cộng đồng
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Ứng dụng vi sinh vật thay thế hóa chất độc hại, kiến tạo nền tảng đất đai trù phú và đảm bảo chuỗi thực phẩm an toàn, minh bạch.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-6 py-3 bg-primary text-on-primary text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-sm">
                  Khám phá Giải pháp chi tiết
                </button>
              </div>
            </div>
            <div className="lg:col-span-7 relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB52fRHMOvxl0Q22H2dRQI-T5XAOm9TikA03WKCK9DNF0OrolR-64iYphONsdxTDDPmNbntH8lIySWjHxFEF0Vev9p7ei2bI1zKW1b8FEKJvA_i_S7yUr-AK_LjK8YFIgpEeyNnl1SOZKjBDHVdBKe_dhi5IlFiu6_fnHdMr7d7RP_asLvL4PF9HOJcTXMJxtMqTTiK8saS0Xh_egPxP8JB-ff5w0c5rEuazgXRTIoaYwf_1zA2u55CmHFFLUUqZFjKo-di6h3kOFE" 
                  alt="Scientist" 
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-xl max-w-xs">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-primary-container text-on-primary-container rounded-lg shrink-0">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface mb-0.5">Cải thiện độ màu mỡ</p>
                      <p className="text-xs text-on-surface-variant">+40% vi sinh vật có lợi trong 6 tháng</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Bento */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold text-on-surface mb-4 tracking-tight">Cách tiếp cận của chúng tôi</h2>
            <p className="text-on-surface-variant">Kết hợp sức mạnh của tự nhiên và công nghệ để tái tạo hệ sinh thái nông nghiệp.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Big Card */}
            <div className="md:col-span-8 bg-surface-container rounded-2xl p-10 border border-outline-variant/30 flex flex-col justify-between overflow-hidden relative group">
              <div className="relative z-10 w-full md:w-3/4">
                <div className="w-14 h-14 bg-primary-fixed rounded-xl flex items-center justify-center mb-6">
                  <Microscope className="w-7 h-7 text-on-primary-fixed" />
                </div>
                <h3 className="text-2xl font-bold text-on-surface mb-4">Chế phẩm Vi sinh vật</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Sử dụng các chủng vi sinh được tuyển chọn đặc biệt để đối kháng tự nhiên với mầm bệnh, thay thế hoàn toàn thuốc bảo vệ thực vật hóa học, bảo vệ nguồn nước và sức khỏe người nông dân.
                </p>
              </div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-fixed-dim rounded-full blur-[80px] opacity-40"></div>
            </div>
            
            {/* Small Cards */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="flex-1 bg-surface-container-low rounded-2xl p-8 border border-outline-variant/30 flex flex-col justify-center">
                <div className="w-12 h-12 bg-secondary-fixed rounded-xl flex items-center justify-center mb-5">
                  <Sprout className="w-6 h-6 text-on-secondary-fixed" />
                </div>
                <h4 className="text-lg font-bold text-on-surface mb-2">Cải tạo Đất bền vững</h4>
                <p className="text-sm text-on-surface-variant">Phục hồi cấu trúc đất, tăng cường khả năng giữ ẩm và dưỡng chất thông qua hệ vi sinh phân giải hữu cơ.</p>
              </div>
              
              <div className="flex-1 bg-surface-container-highest rounded-2xl p-8 border border-outline-variant/30 flex flex-col justify-center">
                <div className="w-12 h-12 bg-error-container rounded-xl flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6 text-on-error-container" />
                </div>
                <h4 className="text-lg font-bold text-on-surface mb-2">An toàn Sức khỏe</h4>
                <p className="text-sm text-on-surface-variant">Loại bỏ dư lượng hóa chất độc hại, mang lại nông sản sạch, đảm bảo sức khỏe cho người sản xuất và người tiêu dùng.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
