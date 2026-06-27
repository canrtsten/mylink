export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <main className="flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-700 ease-out">
        {/* Avatar */}
        <div className="relative w-28 h-28 mb-8 rounded-full overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-800 shadow-sm transition-transform hover:scale-105 duration-300">
          <img
            src="https://api.dicebear.com/7.x/notionists/svg?seed=Hong&backgroundColor=e4e4e7"
            alt="Profile Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-2">
          홍길동
        </h1>

        {/* Role */}
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-8 uppercase tracking-widest">
          University Student
        </p>

        {/* Bio */}
        <p className="max-w-sm text-base leading-relaxed text-zinc-600 dark:text-zinc-300 mb-10">
          안녕하세요.<br/>
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">바이브 코딩</span>을 배우고 있는 대학생입니다.
        </p>

        {/* Links */}
        <div className="flex items-center justify-center gap-4 w-full">
          <button className="px-6 py-2.5 text-sm font-medium rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all active:scale-95 shadow-sm">
            연락하기
          </button>
          <button className="px-6 py-2.5 text-sm font-medium rounded-full bg-white text-zinc-900 border border-zinc-200 dark:bg-zinc-950 dark:text-white dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all active:scale-95 shadow-sm">
            포트폴리오
          </button>
        </div>
      </main>
    </div>
  );
}
