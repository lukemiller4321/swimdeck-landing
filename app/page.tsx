const capabilities = [
  {
    label: "YOUR SWIMMERS",
    h2: "Every student, right where you need them",
    paragraph:
      "No more hunting through binders, spreadsheets, or clunky software to find a swimmer's information. Every student profile lives in one place — easy to find, easy to update, easy to share with your team.",
    bullets: [
      "Each swimmer has their own profile with age, notes, and parent contact info",
      "Bring your existing swimmer list with you — we'll help you get set up",
      "Search your whole school instantly — find any swimmer by name in seconds",
      "Brothers and sisters are automatically connected to the same parent",
      "Important notes about a swimmer show up right where instructors need them",
    ],
    cards: [
      {
        title: "Everything in one place",
        body: "No more sticky notes, no more separate spreadsheets. Every swimmer's details are organized and ready whenever you need them.",
      },
      {
        title: "We set it up for you",
        body: "You don't have to start from scratch. We bring your existing swimmer list into SwimDeck so nothing gets lost in the transition.",
      },
    ],
  },
  {
    label: "REPORT CARDS",
    h2: "From poolside to parent, without the hassle",
    paragraph:
      "Your instructors fill out report cards on their phones, right at the pool. You review and send them out. Parents hear about it automatically. The whole process takes care of itself.",
    bullets: [
      "Instructors rate each skill on their phone — no paper, no clipboards",
      "Work in progress is saved automatically so nothing gets lost",
      "A writing helper gives instructors ideas for comments so feedback is always thoughtful",
      "You review everything before it goes out — approve one at a time or all at once",
      "If something needs fixing, send it back to the instructor with a quick note",
      "Parents get a beautiful email the moment you approve — no extra steps needed",
    ],
    cards: [
      {
        title: "No more chasing instructors",
        body: "You can see exactly where every report card stands at any moment — who's working on theirs, who's done, and what's waiting for your review.",
      },
      {
        title: "Parents love it",
        body: "They get a well-designed progress card they can pull up on their phone anytime. No app to download, no account to create — just a simple link.",
      },
    ],
  },
  {
    label: "YOUR TEAM",
    h2: "Everything your staff needs, all in one spot",
    paragraph:
      "SwimDeck gives your team a home base — a place to check in, submit requests, read up on policies, and stay connected. Less back-and-forth for everyone.",
    bullets: [
      "Staff can request time off or report sick time directly in the app — no texts needed",
      "Incident and accident reports are filed right away and stored safely",
      "Schedule change requests go through the app — no more lost messages",
      "Your policies and training materials are always one tap away for the whole team",
      "Send a message to your whole team at once with a broadcast announcement",
      "A shared time-off calendar keeps everyone on the same page",
    ],
    cards: [
      {
        title: "You stay in control",
        body: "Every request your staff submits comes straight to you to review. Nothing falls through the cracks, and you always know what's going on across your school.",
      },
      {
        title: "Your staff will actually use it",
        body: "It's simple enough that instructors pick it up in one session. No training days, no manuals — just a tool that makes their job a little easier.",
      },
    ],
  },
  {
    label: "PARENTS",
    h2: "Keep parents happy without extra work",
    paragraph:
      "Parents want to know how their child is doing. SwimDeck takes care of that for you — automatically, every time a report card goes out.",
    bullets: [
      "Parents get an email the moment their child's report card is ready",
      "They can see a beautifully designed progress card on any phone or computer",
      "No account needed — they just click the link and see everything",
      "They can look back and see how their child has improved over time",
      "Families with more than one swimmer only need one email address",
    ],
    cards: [
      {
        title: "Parents feel informed",
        body: "When parents hear from you regularly and clearly, they trust your school more. SwimDeck makes that easy without adding anything to your plate.",
      },
      {
        title: "Nothing to print, nothing to hand out",
        body: "Every report card lives online and is always accessible. Parents can pull it up months later without having to call you.",
      },
    ],
  },
];

const roles = [
  {
    borderColor: "#2E7BB4",
    h3: "Owner or Manager",
    bullets: [
      "See everything happening across your school in one dashboard",
      "Review and send out report cards whenever you're ready",
      "Manage your team — add staff, set their roles, and reset passwords easily",
      "Review time-off requests, incident reports, and schedule changes in one place",
      "Send announcements to your whole team in seconds",
      "Always know who did what and when — nothing is ever a mystery",
    ],
  },
  {
    borderColor: "#C9A84C",
    h3: "Instructor",
    bullets: [
      "See only your swimmers — no clutter from the rest of the school",
      "Fill out report cards from your phone, right at the pool",
      "Get helpful comment ideas so writing feedback is never a struggle",
      "Request time off or report sick time without tracking anyone down",
      "Report an incident right away so nothing gets forgotten",
      "Find the school's policies and training materials whenever you need them",
    ],
  },
  {
    borderColor: "#1a2e3f",
    h3: "Parent",
    bullets: [
      "Get an email as soon as your child's progress card is ready",
      "See exactly which skills your child is working on and how they're doing",
      "Read the instructor's personal feedback for your child",
      "Watch your child's progress grow over time",
      "No app to download — just open the link in any browser",
    ],
  },
];

const testimonials = [
  {
    quote:
      "SwimDeck completely changed how we handle report cards. What used to take days of back-and-forth now happens automatically. Parents love getting that email the moment a card is approved.",
    name: "Patti O'Brien",
    role: "Owner, Patti's Swim School",
    initials: "PO",
  },
  {
    quote:
      "As the manager, I was skeptical at first — but SwimDeck is genuinely easy to use. My instructors picked it up in one session and now they fill out report cards from their phones poolside.",
    name: "Courtney O'Brien",
    role: "Manager, Patti's Swim School",
    initials: "CO",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#e8e0d4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-serif text-xl font-bold leading-none">
            <span className="text-[#1a2e3f]">Swim</span>
            <span className="text-[#2E7BB4]">Deck</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {[
              ["Features", "#features"],
              ["Who it's for", "#who-its-for"],
              ["Testimonials", "#testimonials"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-[#5a6070] hover:text-[#1a2e3f] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="bg-[#1a2e3f] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#243d54] transition-colors"
          >
            Book a demo
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="bg-white pt-36 pb-0">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-36">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#2E7BB4]">
              Swim school management software
            </span>
            <div className="h-px w-10 bg-[#2E7BB4] flex-shrink-0" />
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#1a2e3f] leading-tight mb-7">
            Built for the deck,
            <br />
            not the{" "}
            <em className="text-[#2E7BB4]">desk.</em>
          </h1>

          <p className="text-[#5a6070] text-xl leading-relaxed mb-10 max-w-xl">
            One platform for your roster, your staff, and your parents.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="inline-block bg-[#1a2e3f] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#243d54] transition-colors"
            >
              Book a demo
            </a>
            <a
              href="#contact"
              className="text-[#2E7BB4] font-medium hover:underline transition-colors"
            >
              Get in touch →
            </a>
          </div>
        </div>

        <div className="border-t border-[#e8e0d4]" />
      </section>

      {/* ── CAPABILITIES ─────────────────────────────────────────────────── */}
      <section id="features" className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {capabilities.map((sub, i) => (
            <div key={i}>
              {i > 0 && (
                <div className="border-t border-[#e8e0d4] my-20" />
              )}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Left */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#2E7BB4] mb-5">
                    {sub.label}
                  </p>
                  <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#1a2e3f] leading-snug mb-5">
                    {sub.h2}
                  </h2>
                  <p className="text-[#5a6070] leading-relaxed mb-8">
                    {sub.paragraph}
                  </p>
                  <ul className="space-y-3">
                    {sub.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-[#5a6070] leading-relaxed"
                      >
                        <span className="text-[#2E7BB4] font-bold flex-shrink-0 mt-0.5">
                          •
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — callout cards */}
                <div className="space-y-5">
                  {sub.cards.map((card, j) => (
                    <div
                      key={j}
                      className="bg-[#F5F0E8] rounded-xl p-7"
                    >
                      <h4 className="font-semibold text-[#1a2e3f] mb-3">
                        {card.title}
                      </h4>
                      <p className="text-[#5a6070] text-sm leading-relaxed">
                        {card.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────────────────── */}
      <section id="who-its-for" className="bg-[#F5F0E8] py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2E7BB4] mb-4">
              Built for everyone on your team
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#1a2e3f] mb-5">
              Something useful for every role
            </h2>
            <p className="text-[#5a6070] leading-relaxed max-w-xl mx-auto">
              Whether you're running the school, teaching in the water, or a
              parent checking in on your child — SwimDeck was made with you in
              mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8"
                style={{ borderTop: `4px solid ${role.borderColor}` }}
              >
                <p className="text-xs font-medium uppercase tracking-widest text-[#5a6070] mb-1">
                  For the
                </p>
                <h3 className="font-serif text-2xl font-bold text-[#1a2e3f] mb-7">
                  {role.h3}
                </h3>
                <ul className="space-y-3">
                  {role.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-[#5a6070] leading-relaxed"
                    >
                      <span className="text-[#2E7BB4] font-semibold flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section id="testimonials" className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2E7BB4] mb-4">
              What schools are saying
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#1a2e3f]">
              Real swim schools. Real results.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#F5F0E8] rounded-xl p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-serif text-5xl text-[#2E7BB4] leading-none">
                    &ldquo;
                  </span>
                  <span className="inline-block text-xs bg-yellow-100 text-yellow-700 border border-yellow-200 px-2 py-0.5 rounded font-medium">
                    placeholder
                  </span>
                </div>
                <p className="font-serif italic text-[#1a2e3f] text-lg leading-relaxed mb-8">
                  {t.quote}
                </p>
                <div className="border-t border-[#e8e0d4] pt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#2E7BB4] text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a2e3f] text-sm">
                      {t.name}
                    </p>
                    <p className="text-[#5a6070] text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="bg-[#F5F0E8] py-28">
        <div className="max-w-[560px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2E7BB4] mb-4">
              Get in touch
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#1a2e3f] mb-4">
              See SwimDeck in action
            </h2>
            <p className="text-[#5a6070] leading-relaxed">
              Tell us a little about your school and we'll reach out to set up a
              time to chat.
            </p>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1a2e3f] mb-1.5">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-lg border border-[#e8e0d4] bg-white text-[#1a2e3f] placeholder:text-[#5a6070] text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7BB4] focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a2e3f] mb-1.5">
                  Swim school name
                </label>
                <input
                  type="text"
                  placeholder="Riverside Swim School"
                  className="w-full px-4 py-3 rounded-lg border border-[#e8e0d4] bg-white text-[#1a2e3f] placeholder:text-[#5a6070] text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7BB4] focus:border-transparent transition-shadow"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1a2e3f] mb-1.5">
                Email address
              </label>
              <input
                type="email"
                placeholder="jane@yourswimschool.com"
                className="w-full px-4 py-3 rounded-lg border border-[#e8e0d4] bg-white text-[#1a2e3f] placeholder:text-[#5a6070] text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7BB4] focus:border-transparent transition-shadow"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1a2e3f] mb-1.5">
                Anything you&apos;d like us to know?{" "}
                <span className="font-normal text-[#5a6070]">optional</span>
              </label>
              <textarea
                placeholder="Tell us a bit about your school..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-[#e8e0d4] bg-white text-[#1a2e3f] placeholder:text-[#5a6070] text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7BB4] focus:border-transparent resize-none transition-shadow"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1a2e3f] text-white py-4 rounded-lg font-medium hover:bg-[#243d54] transition-colors"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="bg-[#1a2e3f] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#" className="font-serif text-xl font-bold leading-none">
            <span className="text-white">Swim</span>
            <span className="text-[#2E7BB4]">Deck</span>
          </a>
          <p className="text-[#C9A84C] text-sm">
            © 2026 SwimDeck ·{" "}
            <a
              href="mailto:lukas@swimdeck.io"
              className="hover:underline"
            >
              lukas@swimdeck.io
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
