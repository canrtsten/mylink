export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <main className="w-full max-w-[360px] md:max-w-[768px] lg:max-w-[1024px] flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 md:gap-12 p-8 md:p-12 lg:p-16 border-[3px] border-black rounded-[12px] shadow-[6px_6px_0_black] bg-[#FEF08A] text-black animate-in fade-in zoom-in-95 duration-700 ease-out">
        {/* Avatar */}
        <div className="relative shrink-0 w-[120px] h-[120px] rounded-full overflow-hidden border-[3px] border-black bg-white transition-transform hover:-translate-y-1 duration-300">
          <img
            src="https://api.dicebear.com/7.x/notionists/svg?seed=Albert&backgroundColor=e4e4e7"
            alt="Albert Einstein Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center md:items-start w-full">
          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black mb-2 uppercase">
            Albert Einstein
          </h1>

          {/* Role */}
          <p className="text-sm md:text-base font-bold text-black mb-6 border-[2px] border-black bg-white px-3 py-1 rounded-full shadow-[2px_2px_0_black] inline-block uppercase tracking-widest">
            Theoretical Physicist
          </p>

          {/* Bio */}
          <div className="max-w-xl text-base md:text-lg font-medium leading-relaxed text-black mb-8 space-y-4">
            <p>
              현대 물리학의 패러다임을 완전히 뒤바꾼 20세기 최고의 이론물리학자입니다. 우주의 법칙을 이해하고자 하는 끊임없는 호기심으로 인류의 지평을 넓혔습니다.
            </p>
            <p>
              시공간의 본질을 밝혀낸 <span className="font-bold border-b-[3px] border-black pb-0.5">상대성 이론</span>과 
              질량-에너지 등가원리 <span className="font-bold border-b-[3px] border-black pb-0.5">E = mc²</span>를 정립하였으며, 
              광전효과를 규명하여 양자역학의 초기 토대를 마련하는 데 결정적인 역할을 했습니다.
            </p>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 w-full mb-10">
            <span className="px-3 py-1.5 text-sm md:text-base font-bold bg-[#FF90E8] text-black border-[2px] border-black rounded-[6px] shadow-[3px_3px_0_black]">
              🏆 1921 노벨 물리학상 수상
            </span>
            <span className="px-3 py-1.5 text-sm md:text-base font-bold bg-[#22D3EE] text-black border-[2px] border-black rounded-[6px] shadow-[3px_3px_0_black]">
              ⚛️ 광전효과 법칙 발견
            </span>
            <span className="px-3 py-1.5 text-sm md:text-base font-bold bg-[#FFA500] text-black border-[2px] border-black rounded-[6px] shadow-[3px_3px_0_black]">
              🌟 타임지 선정 20세기 인물
            </span>
            <span className="px-3 py-1.5 text-sm md:text-base font-bold bg-white text-black border-[2px] border-black rounded-[6px] shadow-[3px_3px_0_black]">
              🎻 수준급 바이올리니스트
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 w-full">
            <button className="px-6 py-3 text-sm md:text-base font-bold rounded-[8px] bg-[#A3E635] text-black border-[3px] border-black hover:-translate-y-1 hover:shadow-[6px_6px_0_black] transition-all active:translate-y-0 active:shadow-[0px_0px_0_black] shadow-[4px_4px_0_black]">
              연구소 연락
            </button>
            <button className="px-6 py-3 text-sm md:text-base font-bold rounded-[8px] bg-white text-black border-[3px] border-black hover:-translate-y-1 hover:shadow-[6px_6px_0_black] transition-all active:translate-y-0 active:shadow-[0px_0px_0_black] shadow-[4px_4px_0_black]">
              논문 보기
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
