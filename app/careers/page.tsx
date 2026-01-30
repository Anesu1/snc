import type { Metadata } from 'next';

import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

export const metadata: Metadata = {
  title: 'Careers - Six Nine Construction',
  description:
    "Explore open roles at Six Nine Construction. Join our teams in project delivery, engineering, and operations to help build Zimbabwe's future.",
};

const roles:any[] = [
  // {
  //   title: 'Site Engineer',
  //   department: 'Project Delivery',
  //   location: 'Mutare, Zimbabwe',
  //   type: 'Full-time',
  //   level: 'Mid-level',
  //   summary:
  //     'Lead daily site execution, coordinate subcontractors, and drive quality and safety standards on commercial builds.',
  //   responsibilities: [
  //     'Coordinate site teams, subcontractors, and suppliers to maintain schedule.',
  //     'Track materials, equipment, and work progress with daily reporting.',
  //     'Enforce safety procedures and quality inspections on all work fronts.',
  //   ],
  //   requirements: [
  //     'BSc in Civil Engineering or Construction Management.',
  //     '3+ years of site supervision experience.',
  //     'Strong knowledge of local building codes and HSE practices.',
  //   ],
  // },
  // {
  //   title: 'Quantity Surveyor',
  //   department: 'Commercial',
  //   location: 'Mutare, Zimbabwe',
  //   type: 'Full-time',
  //   level: 'Mid-level',
  //   summary:
  //     'Own project cost control, tender preparation, and contract administration across multiple work packages.',
  //   responsibilities: [
  //     'Prepare BOQs, cost plans, and tender submissions.',
  //     'Monitor project costs, variations, and procurement spend.',
  //     'Support client reporting and contractor evaluations.',
  //   ],
  //   requirements: [
  //     'BSc in Quantity Surveying or related field.',
  //     '3+ years in construction cost management.',
  //     'Strong Excel and contract administration skills.',
  //   ],
  // },
  // {
  //   title: 'Health & Safety Officer',
  //   department: 'Operations',
  //   location: 'Mutare, Zimbabwe',
  //   type: 'Full-time',
  //   level: 'Senior',
  //   summary:
  //     'Champion safety compliance, conduct audits, and lead safety training across project sites.',
  //   responsibilities: [
  //     'Run safety inductions, toolbox talks, and site inspections.',
  //     'Investigate incidents and maintain compliance documentation.',
  //     'Collaborate with site leadership to reduce risk exposure.',
  //   ],
  //   requirements: [
  //     'Recognized HSE certification and 5+ years site experience.',
  //     'Knowledge of ISO 45001 or similar standards.',
  //     'Confident communicator with strong reporting discipline.',
  //   ],
  // },
  // {
  //   title: 'Graduate Engineer (Internship)',
  //   department: 'Engineering',
  //   location: 'Mutare, Zimbabwe',
  //   type: 'Internship',
  //   level: 'Entry',
  //   summary:
  //     'Join active project teams to learn planning, site coordination, and construction best practices.',
  //   responsibilities: [
  //     'Support site engineers with measurements and progress reports.',
  //     'Assist with QA checks and drawing revisions.',
  //     'Learn procurement and material tracking workflows.',
  //   ],
  //   requirements: [
  //     'Final year or recent graduate in Civil Engineering.',
  //     'Strong willingness to learn on-site processes.',
  //     'Good communication and team collaboration.',
  //   ],
  // },
];

const benefits = [
  {
    title: 'Clear Growth Tracks',
    description: 'Mentorship, certifications, and internal promotions tied to performance.',
  },
  {
    title: 'Safety-First Culture',
    description: 'Daily toolbox talks, proactive risk management, and modern safety standards.',
  },
  {
    title: 'Impactful Projects',
    description: 'Work on commercial, residential, and infrastructure builds across Zimbabwe.',
  },
  {
    title: 'Team-First Environment',
    description: 'Collaborate with experienced engineers, QS teams, and project leaders.',
  },
];

const applicationEmail = 'info@snc.co.zw';

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-energetic text-primary-foreground">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full border border-white/40" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full border border-white/30" />
          </div>
          <div className="container mx-auto px-4 py-16 md:py-20 relative">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-mono uppercase tracking-[0.3em] opacity-80">Careers</p>
                <h1 className="mt-4 text-4xl md:text-5xl font-headline font-bold leading-tight">
                  Build your future with Six Nine Construction.
                </h1>
                <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl">
                  Join a team delivering landmark projects with precision, transparency, and a deep respect
                  for safety. We invest in people who are ready to build Zimbabwe's future.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={`mailto:${applicationEmail}?subject=Career%20Application%20-%20Six%20Nine%20Construction`}
                    className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-md font-headline font-semibold shadow-construction hover:shadow-construction-lg transition-all duration-300 hover:scale-105"
                  >
                    Apply Now
                  </a>
                  <a
                    href="#open-roles"
                    className="inline-flex items-center px-6 py-3 border border-white/40 rounded-md font-headline font-semibold text-primary-foreground/90 hover:bg-white/10 transition-all duration-300"
                  >
                    View Open Roles
                  </a>
                </div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur">
                <div className="text-sm font-mono uppercase tracking-[0.2em] opacity-80">At a glance</div>
                <div className="mt-6 grid gap-5">
                  <div>
                    <div className="text-2xl font-headline font-bold">USD 2M+ Projects</div>
                    <p className="text-sm text-primary-foreground/80">
                      Multi-disciplinary builds in commercial, residential, and civil works.
                    </p>
                  </div>
                  <div>
                    <div className="text-2xl font-headline font-bold">Safety Driven</div>
                    <p className="text-sm text-primary-foreground/80">
                      Certified systems, active audits, and on-site leadership.
                    </p>
                  </div>
                  <div>
                    <div className="text-2xl font-headline font-bold">Growth Focused</div>
                    <p className="text-sm text-primary-foreground/80">
                      Structured mentoring and internal advancement paths.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <p className="text-sm font-mono uppercase tracking-[0.3em] text-secondary">Why join us</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-headline font-bold text-foreground">
                A culture built on accountability and craftsmanship.
              </h2>
              <p className="mt-4 text-textSecondary">
                We believe the best projects are delivered by teams that feel trusted, supported, and
                challenged. Our people are the reason our clients keep choosing us.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-card rounded-2xl border border-border p-6 shadow-construction hover:shadow-construction-lg transition-all duration-300"
                >
                  <h3 className="text-lg font-headline font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-3 text-sm text-textSecondary leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="open-roles" className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-mono uppercase tracking-[0.3em] text-secondary">Open roles</p>
                <h2 className="mt-3 text-3xl md:text-4xl font-headline font-bold text-foreground">
                  Opportunities to build with us.
                </h2>
                <p className="mt-4 text-textSecondary">
                  Each role includes hands-on exposure to real projects, with clear expectations and
                  immediate impact.
                </p>
              </div>
              <div className="text-sm text-textSecondary">
                Don't see your role? Email your CV to{' '}
                <a
                  className="text-primary font-semibold hover:text-secondary transition-colors"
                  href={`mailto:${applicationEmail}?subject=General%20Application%20-%20Six%20Nine%20Construction`}
                >
                  {applicationEmail}
                </a>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {roles.length > 0 ? roles.map((role) => (
                <div
                  key={role.title}
                  className="bg-card border border-border rounded-2xl p-6 shadow-construction hover:shadow-construction-lg transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-headline font-semibold text-foreground">{role.title}</h3>
                      <p className="text-sm text-textSecondary">
                        {role.department} · {role.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
                      <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">
                        {role.type}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">
                        {role.level}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-textSecondary leading-relaxed">{role.summary}</p>

                  <div className="mt-5">
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary">
                      Responsibilities
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-textSecondary">
                      {role.responsibilities.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary">Requirements</p>
                    <ul className="mt-3 space-y-2 text-sm text-textSecondary">
                      {role.requirements.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`mailto:${applicationEmail}?subject=Application%20-%20${encodeURIComponent(
                        role.title,
                      )}`}
                      className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-semibold shadow-construction hover:shadow-construction-lg transition-all duration-300"
                    >
                      Apply for this role
                    </a>
                    <span className="inline-flex items-center px-4 py-2 border border-border rounded-md text-xs font-mono uppercase tracking-widest text-textSecondary">
                      {role.department}
                    </span>
                  </div>
                </div>
              )): (
                <div className="text-center py-12">
                  <p className="text-lg text-textSecondary">No open roles at the moment.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="rounded-3xl border border-border bg-card shadow-construction-lg p-8 md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <p className="text-sm font-mono uppercase tracking-[0.3em] text-secondary">How to apply</p>
                  <h2 className="mt-3 text-3xl md:text-4xl font-headline font-bold text-foreground">
                    Keep your application focused and clear.
                  </h2>
                  <p className="mt-4 text-textSecondary">
                    Send your CV and a short cover note explaining the projects you've worked on and the
                    role you're applying for. Our team will respond within 5 business days.
                  </p>
                </div>
                <div className="bg-muted rounded-2xl p-6">
                  <p className="text-sm font-mono uppercase tracking-[0.2em] text-secondary">
                    Application checklist
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-textSecondary">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                      <span>Updated CV with contact details.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                      <span>Project portfolio or relevant highlights.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                      <span>Certification copies (where applicable).</span>
                    </li>
                  </ul>
                  <a
                    href={`mailto:${applicationEmail}?subject=Career%20Application%20-%20Six%20Nine%20Construction`}
                    className="mt-6 inline-flex w-full items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-md font-headline font-semibold shadow-construction hover:shadow-construction-lg transition-all duration-300"
                  >
                    Email your application
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
