export default function Home() {
  const teamMembers = [
    { name: "Jayendra Bharti", rollNo: "51" },
    { name: "Aditya Sharma", rollNo: "38" },
  ];

  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900 py-12 px-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
            MERN Stack Evaluation
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Team Info Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 border border-zinc-200 dark:border-zinc-800">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Team 38-51
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              A collaborative project by two dedicated developers
            </p>
          </div>

          {/* Team Members */}
          <div className="space-y-4">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-700 border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {member.name}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Roll No: {member.rollNo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "⚛️", title: "Frontend", desc: "React & Next.js" },
            { icon: "🔌", title: "Backend", desc: "Node.js & Express" },
            { icon: "💾", title: "Database", desc: "MongoDB" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-lg p-6 text-center border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
