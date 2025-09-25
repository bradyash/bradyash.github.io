import React, { useMemo, useState } from "react";

export default function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const nav = useMemo(
    () => [
      { id: "services", label: "Services" },
      { id: "process", label: "Process" },
      { id: "work", label: "Work" },
      { id: "about", label: "About" },
      { id: "faq", label: "FAQ" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const faqs = [
    {
      q: "What types of businesses do you work with?",
      a: "We partner with small to mid-sized service and retail businesses—legal, accounting, hospitality, health & wellness, boutique e-commerce, and local brick-and-mortar shops.",
    },
    {
      q: "What tech do you use?",
      a: "Modern Python/Node, REST/GraphQL APIs, Zapier/Make, Google Apps Script, Airtable, Firestore, PostgreSQL, Salesforce & QuickBooks integrations, and secure cloud hosting.",
    },
    {
      q: "How do projects start?",
      a: "We begin with a free 30-minute consult to identify high-ROI automations. Then we deliver a fixed-scope proposal with timeline, milestones, and clear success metrics.",
    },
    {
      q: "Do you offer retainers?",
      a: "Yes—monthly retainers for continuous improvements, reporting, and support. Great for teams that want an ongoing automation partner.",
    },
  ];

  return (
    <div className="min-h-screen bg-indigo-50 text-slate-800">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-indigo-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-3 group" aria-label="BWA Consulting home">
              <div className="h-9 w-9 rounded-2xl bg-indigo-600 text-white grid place-items-center group-hover:rotate-6 transition">
                <span className="font-black text-lg">BWA</span>
              </div>
              <div className="leading-tight">
                <span className="block font-semibold tracking-tight">BWA Consulting</span>
                <span className="block text-xs text-slate-500">Coding • Automation • Ops</span>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {nav.map((n) => (
                <a key={n.id} href={`#${n.id}`} className="text-slate-600 hover:text-indigo-700 transition">
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-white font-medium shadow-sm hover:shadow-md transition"
              >
                Free consult
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-80" aria-hidden>
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-600 via-indigo-400 to-indigo-200 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-100 via-white to-white blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs text-slate-600">
                <span className="h-2 w-2 rounded-full bg-lime-500 animate-pulse" /> Available for new projects
              </p>
              <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-indigo-700">
                Automate the busywork. <span className="text-slate-600">Focus on growth.</span>
              </h1>
              <p className="mt-5 text-slate-600 leading-relaxed max-w-prose">
                BWA Consulting builds pragmatic software and automations that save teams hours every week—connecting your CRM, finance, and ops tools so work flows without friction.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-xl bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:shadow-md">
                  Book a free consult
                </a>
                <a href="#work" className="rounded-xl border border-indigo-200 bg-white px-5 py-3 font-semibold text-indigo-700 hover:bg-indigo-50">
                  See example projects
                </a>
              </div>
              <p className="mt-4 text-xs text-slate-500">Typical wins: 10–25 hrs saved per week • Fewer manual errors • Happier teams</p>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-indigo-200 bg-white p-6 shadow-sm">
                <DashboardMockup />
              </div>
              <p className="mt-3 text-center text-xs text-slate-500">Example: centralized ops dashboard integrating CRM ↔ accounting ↔ tasking</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Tooling and platforms" className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-70">
            {["Salesforce","QuickBooks","Zapier","Python","Airtable","Firebase"].map((t) => (
              <div key={t} className="text-center text-sm font-medium text-slate-600 border border-dashed border-indigo-200 rounded-xl py-3">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-indigo-700">Services tailored for small business</h2>
            <p className="mt-3 text-slate-600">Start lean, scale smoothly—without hiring a full dev team.</p>
          </header>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <ServiceCard title="Custom Automations" points={["Zapier/Make scenarios", "Google Workspace apps", "Slack/Teams bots", "File + email workflows"]} />
            <ServiceCard title="Systems Integration" points={["Salesforce ↔ QuickBooks", "Airtable/Firestore", "API & webhook plumbing", "Data sync + validation"]} />
            <ServiceCard title="Lightweight Apps" points={["Client portals & forms", "Operations dashboards", "Internal tools", "Mobile/web MVPs"]} />
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <ServiceCard title="Data & Reporting" points={["KPIs & finance rollups", "Parent/child account views", "Error/NIGO prevention", "Audit trails"]} />
            <ServiceCard title="Back Office Ops" points={["Billing & reconciliations", "Quote-to-cash flows", "CRM hygiene & deduping", "Playbooks & SOPs"]} />
            <ServiceCard title="Advisory & Retainers" points={["Roadmaps & prioritization", "Technical due diligence", "On-call support", "Team enablement"]} />
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-white border-y border-indigo-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-indigo-700">Proven, no-nonsense process</h2>
            <p className="mt-3 text-slate-600">Fast starts. Clear milestones. Tangible outcomes.</p>
          </header>
          <ol className="mt-10 grid md:grid-cols-4 gap-6">
            <Step num={1} title="Discover" desc="30-min consult to find quick, high-ROI wins and define success metrics." />
            <Step num={2} title="Design" desc="Document data flows, pick tools, and outline a simple, reliable architecture." />
            <Step num={3} title="Build" desc="Ship in weekly slices: integrations, automations, and clean data models." />
            <Step num={4} title="Deliver" desc="Measure time saved, train your team, and plan the next iteration or retainer." />
          </ol>
        </div>
      </section>

      <section id="work" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-indigo-700">Recent wins</h2>
            <p className="mt-3 text-slate-600">Real improvements for real businesses.</p>
          </header>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <CaseCard
              title="Legal firm: CRM ↔ revenue automation"
              impact="15–25 hrs/week saved; unified client ledger; fewer handoffs"
              bullets={["Salesforce ↔ QuickBooks sync", "Parent/child account rollups", "Automated invoicing + alerts"]}
            />
            <CaseCard
              title="Restaurant group: ops dashboard"
              impact="Same-day reporting; fewer manual spreadsheets; clearer ownership"
              bullets={["Daily sales ingestion", "Labor & COGS KPIs", "Actionable alerts in Slack"]}
            />
            <CaseCard
              title="Boutique e-com: fulfillment workflows"
              impact="Faster shipping; 20% fewer order errors; happier customers"
              bullets={["3PL webhooks", "Return/RMA flows", "Customer notifications"]}
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white border-y border-indigo-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-2">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-300 p-[2px]">
                <div className="h-full w-full rounded-[calc(theme(borderRadius.3xl)-2px)] bg-white grid place-items-center">
                  <span className="text-5xl font-black text-indigo-700">BA</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-indigo-700">About Brady Ash</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Hi—I'm Brady, founder of BWA Consulting. I build pragmatic, reliable software for small businesses. My work blends
                hands-on coding with process design so teams get durable systems—not fragile hacks. I’ve helped professional services,
                hospitality, and local retailers connect their tools, clean their data, and reclaim hours each week.
              </p>
              <ul className="mt-6 space-y-2 text-slate-700">
                <li>• Expertise: Python, JavaScript/TypeScript, REST/GraphQL, Firebase/Firestore, Airtable, Salesforce, QuickBooks, Zapier/Make</li>
                <li>• Strengths: Data modeling, integrations, back-office automation, dashboards, and MVP apps</li>
                <li>• Style: Plain-spoken, operations-minded, and focused on measurable outcomes</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-xl bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:shadow-md">Work with me</a>
                <a href="mailto:hello@bwa.consulting" className="rounded-xl border border-indigo-200 bg-white px-5 py-3 font-semibold text-indigo-700 hover:bg-indigo-50">Email Brady</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-indigo-700">Flexible ways to work together</h2>
            <p className="mt-3 text-slate-600">Start small or go steady—either way, you get senior attention and clear outcomes.</p>
          </header>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <PriceCard
              name="Starter Sprint"
              price="$2,500"
              blurb="1–2 week sprint to automate a high-ROI workflow. Perfect for a focused win."
              items={["Discovery + design", "Build + test", "Go-live + training"]}
            />
            <PriceCard
              name="Ops Bundle"
              price="$5,000"
              popular
              blurb="A bundle of core automations to stabilize your back office and reporting."
              items={["3–5 integrated flows", "KPI dashboard", "Documentation + SOPs"]}
            />
            <PriceCard
              name="Monthly Retainer"
              price="From $2,000/mo"
              blurb="Ongoing improvements, support, and roadmap execution with predictable cadence."
              items={["On-call support", "Quarterly roadmap", "Proactive monitoring"]}
            />
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white border-y border-indigo-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <header className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-indigo-700">Questions, answered</h2>
            <p className="mt-3 text-slate-600">If you don’t see your question here, just reach out—happy to help.</p>
          </header>
          <div className="mt-10 divide-y divide-indigo-200 rounded-2xl border border-indigo-200 bg-white">
            {faqs.map((f, i) => (
              <button
                key={i}
                className="w-full text-left px-6 py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                onClick={() => setOpenFAQ((p) => (p === i ? null : i))}
                aria-expanded={openFAQ === i}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-semibold text-indigo-700">{f.q}</p>
                    {openFAQ === i && <p className="mt-2 text-slate-600">{f.a}</p>}
                  </div>
                  <span className={`mt-1 inline-grid h-6 w-6 place-items-center rounded-full border ${openFAQ === i ? "rotate-45" : ""} transition`} aria-hidden>
                    +
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-indigo-700">Let’s save hours every week</h2>
            <p className="mt-3 text-slate-600">Tell me about your workflow, and I’ll reply with a few high-ROI ideas.</p>
          </header>
          <div className="mt-10 rounded-2xl border border-indigo-200 bg-white p-6 shadow-sm">
            <ContactForm />
            <p className="mt-4 text-xs text-slate-500">Or email <a className="underline" href="mailto:hello@bwa.consulting">hello@bwa.consulting</a>. Prefer to talk? <a className="underline" href="#" onClick={(e)=>e.preventDefault()}>Grab a 30-min slot</a>.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-indigo-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-2xl bg-indigo-600 text-white grid place-items-center">
                <span className="font-black text-lg">BWA</span>
              </div>
              <p className="text-sm text-slate-600">© {new Date().getFullYear()} BWA Consulting. All rights reserved.</p>
            </div>
            <div className="text-sm text-slate-500 flex flex-wrap gap-4">
              <a href="#services" className="hover:text-indigo-700">Services</a>
              <a href="#work" className="hover:text-indigo-700">Work</a>
              <a href="#about" className="hover:text-indigo-700">About</a>
              <a href="#contact" className="hover:text-indigo-700">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ---------- Subcomponents ----------

function ServiceCard({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="rounded-2xl border border-indigo-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-indigo-700">{title}</h3>
      <ul className="mt-4 space-y-2 text-slate-700">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" aria-hidden />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Step({ num, title, desc }: { num: number; title: string; desc: string }) {
  return (
    <li className="rounded-2xl border border-indigo-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="grid h-8 w-8 place-items-center rounded-xl bg-indigo-600 text-white font-bold">{num}</span>
        <h3 className="font-semibold text-indigo-700">{title}</h3>
      </div>
      <p className="mt-3 text-slate-600">{desc}</p>
    </li>
  );
}

function CaseCard({ title, impact, bullets }: { title: string; impact: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-indigo-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-indigo-700">{title}</h3>
      <p className="mt-2 text-sm text-lime-700 font-medium">{impact}</p>
      <ul className="mt-4 space-y-2 text-slate-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" aria-hidden />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PriceCard({ name, price, blurb, items, popular }: { name: string; price: string; blurb: string; items: string[]; popular?: boolean }) {
  return (
    <div className={`relative rounded-2xl border p-6 shadow-sm ${popular ? "border-indigo-600" : "border-indigo-200"} bg-white`}>
      {popular && (
        <span className="absolute -top-3 right-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">Most popular</span>
      )}
      <h3 className="text-lg font-semibold text-indigo-700">{name}</h3>
      <p className="mt-2 text-3xl font-extrabold tracking-tight text-indigo-700">{price}</p>
      <p className="mt-2 text-slate-600">{blurb}</p>
      <ul className="mt-5 space-y-2 text-slate-700">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" aria-hidden />
            <span>{it}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="mt-6 inline-flex rounded-xl bg-indigo-600 px-4 py-2 text-white font-semibold shadow hover:shadow-md">Get started</a>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="h-3 w-16 rounded-full bg-indigo-100" />
        <div className="h-3 w-24 rounded-full bg-indigo-100" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="rounded-xl border border-indigo-200 p-4">
            <div className="h-3 w-20 rounded-full bg-indigo-100" />
            <div className="mt-3 h-10 rounded-lg bg-indigo-50" />
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-indigo-200 p-4">
        <div className="h-3 w-24 rounded-full bg-indigo-100" />
        <div className="mt-3 grid grid-cols-4 gap-3">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-8 rounded-lg bg-indigo-50" />
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {!submitted ? (
        <>
          <div className="grid md:grid-cols-2 gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-medium">Name</span>
              <input required placeholder="Your name" className="rounded-xl border border-indigo-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium">Email</span>
              <input type="email" required placeholder="you@company.com" className="rounded-xl border border-indigo-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400" />
            </label>
          </div>
          <label className="grid gap-2">
            <span className="text-sm font-medium">What do you want to automate?</span>
            <textarea rows={4} placeholder="Describe the workflow, tools, and any pain points" className="rounded-xl border border-indigo-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400" />
          </label>
          <div className="flex items-center justify-between gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="h-4 w-4 rounded border-indigo-300" />
              <span>Send me a one-pager PDF</span>
            </label>
            <button type="submit" className="rounded-xl bg-indigo-600 px-5 py-2.5 text-white font-semibold shadow hover:shadow-md">Send</button>
          </div>
        </>
      ) : (
        <div className="grid place-items-center py-10 text-center">
          <div className="h-12 w-12 rounded-2xl bg-lime-500 text-white grid place-items-center mb-3">✓</div>
          <p className="font-semibold text-indigo-700">Thanks! I’ll reply shortly with ideas and next steps.</p>
          <p className="text-sm text-slate-600 mt-1">Want to chat live? <a className="underline" href="#" onClick={(e)=>e.preventDefault()}>Book a 30-min call</a>.</p>
        </div>
      )}
    </form>
  );
}
