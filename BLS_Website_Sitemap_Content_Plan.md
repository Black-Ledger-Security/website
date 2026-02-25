# Black Ledger Security — Website Sitemap & Content Plan

---

## SITE ARCHITECTURE (14 pages total)

```
blackledgersecurity.com/
│
├── index.html                    ← HOME
├── about.html                    ← ABOUT
├── services.html                 ← SERVICES OVERVIEW
│   ├── services/pentesting.html      ← Penetration Testing
│   ├── services/social-engineering.html  ← Social Engineering
│   ├── services/ai-security.html     ← AI / LLM Security Testing
│   ├── services/red-team.html        ← Adversary Simulation & Red Team
│   └── services/training.html        ← Security Training & Workshops
├── case-studies.html             ← CASE STUDIES
├── dark-dossier.html             ← DARK DOSSIER (research hub)
├── contact.html                  ← CONTACT / GET A QUOTE
└── faq.html                      ← FAQ
```

---

## GLOBAL ELEMENTS (every page)

### Navigation Bar
- Logo (horizontal wordmark, links to home)
- Home | About | Services ▾ | Case Studies | Dark Dossier | FAQ | [Contact — CTA button]
- Services dropdown: Penetration Testing, Social Engineering, AI Security, Red Team, Training
- Mobile: hamburger menu

### Footer
- Logo (stacked icon)
- Quick links: Home, About, Services, Case Studies, Contact
- "Research by Dark Dossier" with Substack link
- Social: LinkedIn | X | GitHub
- Email: contact@blackledgersecurity.com
- © 2026 Black Ledger Security LLC. All rights reserved.
- Charleston, SC

---

## PAGE-BY-PAGE CONTENT PLAN

---

### 1. HOME (index.html)
**Goal**: Establish credibility, communicate what you do, drive to Contact or Services.

**Hero Section**
- Headline: "We find what others miss."
- Subheadline: "Penetration testing, social engineering, and AI security assessments for organizations that take risk seriously."
- CTA buttons: [View Services] [Get a Quote]
- Background: Dark with subtle ledger-line pattern animation

**The Ledger (quick value props) — 3 columns**
- 🔓 Offensive Security → "We think like attackers so you don't have to learn the hard way."
- 🤖 AI Threat Testing → "LLMs, AI agents, and autonomous systems introduce new attack surfaces. We test them."
- 🎯 Social Engineering → "Your employees are your perimeter. We find out how well it holds."

**Trust Signals / Stats Section**
- [X] years in offensive security
- [X] engagements completed
- Industries served: Finance, Healthcare, SaaS, Government, Critical Infrastructure
- (You'll fill in real numbers — even ranges like "50+" work)

**Featured Dark Dossier Article**
- Pull in latest article card: thumbnail, title, subtitle, "Read the Briefing →"
- Positions you as a thought leader, not just a vendor

**CTA Banner**
- "Ready to see what's in your ledger?"
- [Schedule a Consultation]

---

### 2. ABOUT (about.html)
**Goal**: Build trust through your personal story and credentials.

**Hero**
- Headline: "Built by an operator, not a sales team."
- Your professional photo (the one we worked on)

**Your Story — 3-4 paragraphs**
Content angles to hit:
- Background in offensive security / penetration testing
- Why you started Black Ledger Security (saw a gap, especially in AI security)
- Philosophy: thorough, honest findings — the ledger doesn't lie
- Charleston, SC based, serving clients nationally

**Credentials / Certifications Section**
- List your certs (OSCP, GPEN, CEH, etc. — whatever you hold)
- Years of experience
- Notable industries / client types (without naming clients)

**Mission Statement**
- Something like: "Black Ledger Security exists to give organizations an honest accounting of their security posture — before an adversary does it for them."

**Dark Dossier Callout**
- "Our research arm, Dark Dossier, publishes original threat intelligence and security research."
- [Read Dark Dossier →]

---

### 3. SERVICES OVERVIEW (services.html)
**Goal**: Show full capability, route to individual service pages.

**Hero**
- Headline: "Every engagement. Every finding. Recorded."
- Subheadline: "We offer a full spectrum of offensive security services tailored to your risk profile."

**Service Cards (5 cards, each links to detail page)**

Each card:
- Icon (custom for each service)
- Service name
- 2-sentence description
- [Learn More →]

Cards:
1. **Penetration Testing** — "Systematic identification and exploitation of vulnerabilities across your network, applications, and infrastructure."
2. **Social Engineering** — "Phishing, vishing, pretexting, and physical assessments that test the human layer of your defenses."
3. **AI / LLM Security Testing** — "Red team assessments for AI agents, LLM integrations, and autonomous systems. Prompt injection, data exfiltration, supply chain risks."
4. **Adversary Simulation & Red Team** — "Full-scope, objective-based operations that simulate real-world threat actors targeting your organization."
5. **Security Training & Workshops** — "Hands-on training for your security team, developers, and executive leadership."

**"Not sure what you need?" CTA**
- "Every organization's risk profile is different. Let's talk about yours."
- [Schedule a Free Consultation]

---

### 4. SERVICE: Penetration Testing (services/pentesting.html)
**Goal**: Demonstrate depth, differentiate from commodity pentest shops.

**Sections:**
- Hero with service name + one-liner
- **What We Test**: Network (internal/external), Web applications, APIs, Mobile, Cloud (AWS/Azure/GCP), Wireless
- **Our Approach**: Reconnaissance → Enumeration → Exploitation → Post-exploitation → Reporting
- **What You Get**: Executive summary, technical findings with CVSS scores, remediation guidance prioritized by risk, debrief call, retest window
- **What Makes Us Different**: 
  - Manual testing, not just automated scans
  - We chain findings to demonstrate real business impact
  - Reports written for both executives and engineers
- CTA: [Request a Pentest Quote]

---

### 5. SERVICE: Social Engineering (services/social-engineering.html)
**Goal**: Show this isn't just "send a phishing email" — it's sophisticated adversary simulation of the human layer.

**Sections:**
- Hero
- **Assessment Types**: Email phishing, Spear phishing, Vishing (voice), Smishing (SMS), Pretexting, Physical social engineering (badge cloning, tailgating, USB drops)
- **Why It Matters**: Stats on human-layer attacks (use your Dark Dossier Article 1 data — 442% vishing surge, etc.)
- **Our Approach**: Custom pretext development, OSINT-driven targeting, realistic scenarios based on your industry threat landscape
- **Deliverables**: Campaign results dashboard, click/credential capture rates, individual vulnerability analysis, targeted training recommendations
- **Add-on**: Security awareness training post-assessment
- CTA: [Request a Social Engineering Assessment]

---

### 6. SERVICE: AI / LLM Security Testing (services/ai-security.html)
**Goal**: THIS IS YOUR DIFFERENTIATOR. Most pentest firms don't offer this. Lead with authority.

**Sections:**
- Hero: "Your AI is an attack surface. We prove it."
- **The Problem**: Organizations deploying LLMs, AI agents, and copilots without understanding the security implications. Reference Dark Dossier research.
- **What We Test**:
  - Prompt injection (direct and indirect)
  - Data exfiltration through LLM outputs
  - Tool/function calling abuse
  - Agent autonomy boundaries
  - Supply chain risks (plugins, skills, MCP servers)
  - Training data poisoning vectors
  - Jailbreak resilience
- **Frameworks We Follow**: OWASP Top 10 for LLMs, MITRE ATLAS, NIST AI RMF
- **Platforms We've Tested**: ChatGPT integrations, Claude deployments, OpenClaw/Open Interpreter, Custom RAG pipelines, AI copilots, Autonomous agents
- **Deliverables**: Full attack narrative, proof-of-concept exploits, risk-prioritized findings, architectural recommendations
- **Dark Dossier Research Callout**: "Our team publishes original AI security research. Read our latest findings."
- CTA: [Request an AI Security Assessment]

---

### 7. SERVICE: Adversary Simulation & Red Team (services/red-team.html)
**Goal**: Position this as the premium, full-scope offering.

**Sections:**
- Hero: "We simulate the adversaries you're actually facing."
- **What It Is**: Objective-based operations that simulate real-world threat actors. Not a checklist — a campaign.
- **How It Works**: Threat intelligence-informed scoping → Custom TTPs based on your threat model → Multi-vector attack chains (network + social + physical) → Objective completion (data exfil, domain admin, physical access) → Purple team debrief
- **Red Team vs. Pentest** (comparison table):
  | | Pentest | Red Team |
  |---|---|---|
  | Scope | Defined targets | Full organization |
  | Duration | 1-3 weeks | 4-12 weeks |
  | Detection | Announced | Unannounced |
  | Goal | Find vulns | Test detection & response |
  | Blue team | Not involved | Actively defending |
- **Deliverables**: Full attack narrative, MITRE ATT&CK mapping, detection gap analysis, purple team workshop
- CTA: [Discuss a Red Team Engagement]

---

### 8. SERVICE: Security Training & Workshops (services/training.html)
**Goal**: Recurring revenue opportunity. Position as hands-on, not death by PowerPoint.

**Sections:**
- Hero: "Training that sticks."
- **Offerings**:
  - Security Awareness Training (company-wide)
  - Social Engineering Defense Workshop (security teams)
  - AI Security for Developers (engineering teams)
  - Executive Threat Briefings (C-suite / board)
  - Custom Training Programs
- **Format**: On-site, virtual, or hybrid. Half-day, full-day, or multi-day.
- **What Makes It Different**: Taught by a working penetration tester, not a compliance trainer. Real demos, real scenarios, real adversary TTPs.
- CTA: [Request Training Information]

---

### 9. CASE STUDIES (case-studies.html)
**Goal**: Show outcomes without naming clients.

**Hero**: "The ledger speaks for itself."

**Format**: Card grid, each case study is a card with:
- Industry tag (e.g., "Financial Services", "SaaS", "Healthcare")
- Challenge (1 sentence)
- Approach (1 sentence)
- Result (1 sentence with a stat if possible)
- [Read Full Case Study →] (can expand inline or go to individual pages later)

**Placeholder case studies to start with** (anonymized / composited from your experience):
1. **Financial Services Firm** — "We compromised domain admin in 48 hours through a chained attack starting with a misconfigured Azure AD tenant."
2. **SaaS Company** — "A social engineering campaign achieved a 34% credential capture rate, leading to a company-wide security awareness overhaul."
3. **Healthcare Organization** — "We identified a patient data exfiltration path through an AI chatbot integration that had been in production for 6 months."

*(You can replace these with real anonymized engagements as you build your portfolio)*

---

### 10. DARK DOSSIER (dark-dossier.html)
**Goal**: Bridge between the consulting firm and the research publication.

**Hero**: Dark Dossier banner image we created
- "Threat research and intelligence from the Black Ledger Security team."

**Latest Articles** (3-4 cards pulling from Substack)
- Article thumbnail, title, date, 1-line description
- Each links to Substack

**Subscribe CTA**
- "Get threat briefings delivered to your inbox."
- Email input → Substack subscribe embed
- [Subscribe to Dark Dossier]

**About the Publication**
- 2 sentences on what Dark Dossier covers
- "Published weekly. Free. No fluff."

---

### 11. CONTACT (contact.html)
**Goal**: Convert visitors to conversations.

**Hero**: "Let's open the ledger."

**Two columns:**

**Left: Contact Form**
- Name
- Email
- Company
- Service interested in (dropdown: Pentest, Social Engineering, AI Security, Red Team, Training, Not Sure)
- Message / Brief description of needs
- [Submit]

**Right: Direct contact info**
- Email: contact@blackledgersecurity.com
- Phone: (if you want one — Google Voice works)
- Location: Charleston, SC (serving clients nationally)
- LinkedIn link
- Response time: "We respond within 24 hours."

**Note**: Form submissions can go to Formspree (free tier, 50 submissions/mo) or Netlify Forms if you host there. No backend needed.

---

### 12. FAQ (faq.html)
**Goal**: Handle objections, reduce friction to contact.

**Hero**: "Frequently asked questions."

**Questions to include:**

1. **What industries do you work with?**
   → Finance, healthcare, SaaS, government, critical infrastructure, and more. Our methodology adapts to your regulatory and threat environment.

2. **How long does a typical engagement take?**
   → Penetration tests: 1-3 weeks. Social engineering campaigns: 2-4 weeks. Red team operations: 4-12 weeks. Training: half-day to multi-day.

3. **Do you only work with large enterprises?**
   → No. We work with organizations of all sizes. If you have assets worth protecting, we can help.

4. **What's the difference between a penetration test and a red team engagement?**
   → (Link to red team service page comparison table)

5. **What does your reporting look like?**
   → Every engagement includes an executive summary, detailed technical findings with CVSS scores, proof-of-concept evidence, and prioritized remediation guidance.

6. **Do you offer retesting after remediation?**
   → Yes. Every engagement includes a retest window at no additional cost.

7. **What is AI / LLM security testing?**
   → (Brief answer + link to AI security service page)

8. **Where are you located?**
   → Charleston, SC. We serve clients nationally and can work on-site or remotely.

9. **How do I get started?**
   → [Contact us] for a free initial consultation. We'll scope your needs and provide a proposal.

10. **Do you carry professional liability insurance?**
    → Yes. (Get this when you formalize the LLC — clients will ask.)

---

## CONTENT DEPENDENCIES (what you need to provide)

| Item | Status | Notes |
|------|--------|-------|
| Professional photo | ✅ Have it | Darkened version from earlier |
| Certifications list | ❌ Need from you | OSCP, GPEN, etc. |
| Years of experience | ❌ Need from you | For trust signals |
| Engagement count (approx) | ❌ Need from you | Even "50+" works |
| Real case study material | ❌ Need from you | Anonymized past work |
| Phone number (optional) | ❌ Need from you | Google Voice recommended |
| Contact email | ⏳ Pending | Need domain + Google Workspace |
| LLC formation | ❌ Pending | SC Secretary of State |

---

## DESIGN NOTES FOR BUILD

- **Dark theme** throughout (Obsidian #0c0c10 background)
- **Lora serif** for headlines, page titles
- **DM Sans or system sans** for body copy
- **DejaVu Mono** for technical details, code, classification marks
- **Crimson red** (#b41e1e) for accents, CTAs, hover states
- Subtle ledger-line textures in backgrounds
- Red spine motif as section dividers
- Mobile-first responsive design
- Smooth scroll, minimal animation (professional, not flashy)
- Static HTML/CSS/JS — deployable to Cloudflare Pages directly
