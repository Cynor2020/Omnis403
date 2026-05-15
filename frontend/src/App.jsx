function App() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-100">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]" />

        <header className="relative border-b border-white/8 bg-white/[0.03] backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300/80">
                Omnis 403
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Event-driven API security engine
              </p>
            </div>

            <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-200">
              Zero-latency monitoring online
            </div>
          </div>
        </header>

        <section className="relative mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-6xl items-center px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid w-full gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                Omnis World
              </span>

              <div className="space-y-4">
                <h1 className="max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                  Welcome to Omnis World
                </h1>
                <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  Omnis 403 is a high-performance, event-driven API security engine designed
                  to handle massive enterprise data throughput with precision and control.
                </p>
                <p className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                  Built for zero-latency monitoring, it uses an asynchronous pipeline to
                  inspect traffic, detect threats, and keep critical systems protected without
                  slowing down the flow of data.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-slate-950/60 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-[#07101f]/90 p-6 shadow-2xl shadow-black/50 ring-1 ring-white/5">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Engine status</p>
                    <p className="mt-1 text-xl font-semibold text-white">Monitoring active</p>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                    Zero latency
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                    <p className="text-sm text-slate-400">Core capability</p>
                    <p className="mt-1 text-lg font-medium text-white">Event-driven API security</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                    <p className="text-sm text-slate-400">Throughput focus</p>
                    <p className="mt-1 text-lg font-medium text-white">Massive enterprise data handling</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                    <p className="text-sm text-slate-400">Architecture</p>
                    <p className="mt-1 text-lg font-medium text-white">Asynchronous pipeline monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App