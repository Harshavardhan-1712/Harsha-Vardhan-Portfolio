/* =========================================================
   CONTENT — edit here to update projects, certs, and stack
   ========================================================= */
const DATA = {
  leetcode: "https://leetcode.com/", // TODO: replace with your LeetCode handle URL
  hackerrank: "https://www.hackerrank.com/", // TODO: replace with your HackerRank handle URL
  resume: "#", // TODO: link to your hosted resume PDF

  typing: [
    "Building AI Applications",
    "Building Scalable Software",
    "Full-Stack Development",
    "Open Source Enthusiast",
    "Prompt Engineering"
  ],

  stack: [
    { cat: "Programming", items: ["Python", "Java", "JavaScript", "C"] },
    { cat: "Frontend", items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
    { cat: "Backend", items: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "JWT", "RBAC"] },
    { cat: "Database", items: ["MongoDB", "MySQL", "SQLite"] },
    { cat: "Cloud & DevOps", items: ["AWS", "Docker", "GitHub", "Render", "Vercel", "Netlify"] },
    { cat: "AI", items: ["Prompt Engineering", "LLMs", "Google Gemini", "OpenAI", "LangChain (learning)", "Vector DBs (learning)"] },
    { cat: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Figma", "Canva", "Power BI"] }
  ],

  projects: [
    {
      icon: "◆", color: "mint", badge: "AI Platform",
      title: "PromptPilot AI",
      desc: "An AI prompt-engineering platform for building, testing, and streaming responses from Gemini-backed prompts.",
      problem: "Prompt iteration was scattered across notes and chat logs with no versioning or reusable structure.",
      tech: "React, Node.js, Express, Docker, Google Gemini API",
      features: "Streaming responses, prompt library & versioning, authenticated workspaces, responsive UI",
      challenges: "Handling streamed AI responses smoothly in the UI while keeping the interface responsive on slower connections.",
      github: "https://github.com/Harshavardhan-1712", // TODO: link exact repo
      demo: "#"
    },
    {
      icon: "▣", color: "violet", badge: "Full-Stack",
      title: "Internship Aggregator (InternHub)",
      desc: "A full-stack platform that aggregates internship listings with role-based dashboards for students and admins.",
      problem: "Students had to check dozens of scattered sources to find relevant internships.",
      tech: "Next.js, Express, MongoDB, JWT",
      features: "Role-based authentication, admin dashboard, student portal, listing search & filters",
      challenges: "Designing a clean JWT-based auth flow that cleanly separated admin and student permissions.",
      github: "https://github.com/Harshavardhan-1712", // TODO: link exact repo
      demo: "#"
    },
    {
      icon: "✓", color: "amber", badge: "EdTech",
      title: "Smart Test Hub",
      desc: "An online assessment platform for creating tests, tracking performance, and managing question banks.",
      problem: "Manual test creation and grading was slow and error-prone for small cohorts.",
      tech: "React, Node.js, Express, MongoDB",
      features: "Question bank management, authenticated test-taking, performance tracking & analytics",
      challenges: "Building a question-management workflow that stayed simple for instructors while supporting multiple question types.",
      github: "https://github.com/Harshavardhan-1712", // TODO: link exact repo
      demo: "#"
    },
    {
      icon: "◈", color: "mint", badge: "Wellness",
      title: "Ray of Hope",
      desc: "A responsive mental-wellness site with AI-assisted sentiment support and curated resources.",
      problem: "People in distress often don't know where to start looking for support resources.",
      tech: "HTML, CSS, JavaScript",
      features: "Sentiment-aware assistant, curated support resources, multimedia engagement content",
      challenges: "Designing a calm, accessible experience for users who may be in a vulnerable state.",
      github: "https://github.com/Harshavardhan-1712", // TODO: link exact repo
      demo: "#"
    },
    {
      icon: "⌘", color: "violet", badge: "CLI Tool",
      title: "Employee Payroll Management",
      desc: "A terminal-based payroll system with built-in analytics for a small organization's HR workflow.",
      problem: "Small teams often manage payroll in spreadsheets prone to manual error.",
      tech: "Python, SQLite, Pandas",
      features: "Employee records, payroll calculation, CLI-driven analytics and reports",
      challenges: "Keeping the CLI usable and fast while layering in Pandas-driven analytics on top of SQLite.",
      github: "https://github.com/Harshavardhan-1712", // TODO: link exact repo
      demo: "#"
    }
  ],

  certifications: [
    { icon: "◆", name: "IBM SkillsBuild", issuer: "IBM" },
    { icon: "✦", name: "Prompt Engineering", issuer: "IBM" },
    { icon: "◇", name: "Web Development Fundamentals", issuer: "IBM" },
    { icon: "☁", name: "AWS Cloud Practitioner", issuer: "AWS" },
    { icon: "◈", name: "AI for Beginners", issuer: "AWS" },
    { icon: "✺", name: "Claude 101", issuer: "Anthropic" },
    { icon: "◉", name: "Google AI Essentials", issuer: "Google" },
    { icon: "▣", name: "GenAI Data Analytics", issuer: "Tata" },
    { icon: "✧", name: "Foundations of Generative AI", issuer: "—" }
  ]
};

/* =========================================================
   LOADER
   ========================================================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.classList.add("hidden"), 350);
});

/* =========================================================
   THEME TOGGLE (persists via localStorage)
   ========================================================= */
(function initTheme(){
  const saved = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const theme = saved || (prefersLight ? "light" : "dark");
  if (theme === "light") document.documentElement.setAttribute("data-theme", "light");

  document.getElementById("themeToggle").addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });
})();

/* =========================================================
   NAV: mobile toggle, scroll state, scroll-spy
   ========================================================= */
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}));

const sections = document.querySelectorAll("main section[id]");
const navLinkEls = document.querySelectorAll(".nav-link");

function onScroll(){
  nav.classList.toggle("scrolled", window.scrollY > 20);

  // progress bar
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  document.getElementById("progressBar").style.width = pct + "%";

  // back to top
  document.getElementById("backToTop").classList.toggle("visible", window.scrollY > 600);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const id = entry.target.id;
      navLinkEls.forEach(l => l.classList.toggle("active", l.dataset.section === id));
    }
  });
}, { rootMargin: "-45% 0px -45% 0px" });
sections.forEach(s => spy.observe(s));

/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */
const reveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("in-view");
      reveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => reveal.observe(el));

/* =========================================================
   CURSOR GLOW (desktop only, respects reduced motion)
   ========================================================= */
const glow = document.getElementById("cursorGlow");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reducedMotion && window.matchMedia("(pointer:fine)").matches){
  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }, { passive: true });
} else if (glow) {
  glow.style.display = "none";
}

/* =========================================================
   TYPING EFFECT
   ========================================================= */
(function typeLoop(){
  const el = document.getElementById("typingText");
  if (!el || reducedMotion) { el.textContent = DATA.typing[0]; return; }
  let phraseIndex = 0, charIndex = 0, deleting = false;

  function tick(){
    const phrase = DATA.typing[phraseIndex];
    if (!deleting){
      charIndex++;
      el.textContent = phrase.slice(0, charIndex);
      if (charIndex === phrase.length){
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = phrase.slice(0, charIndex);
      if (charIndex === 0){
        deleting = false;
        phraseIndex = (phraseIndex + 1) % DATA.typing.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 65);
  }
  tick();
})();

/* =========================================================
   RENDER: stack grid
   ========================================================= */
(function renderStack(){
  const grid = document.getElementById("stackGrid");
  grid.innerHTML = DATA.stack.map(group => `
    <div class="stack-cat">
      <h3>${group.cat}</h3>
      <div class="tags">${group.items.map(i => `<span>${i}</span>`).join("")}</div>
    </div>
  `).join("");
})();

/* =========================================================
   RENDER: project cards (expandable)
   ========================================================= */
(function renderProjects(){
  const colorMap = { mint: "#00FFC6", violet: "#7B5EA7", amber: "#FFD166" };
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = DATA.projects.map((p, i) => {
    const c = colorMap[p.color] || "#00FFC6";
    return `
    <article class="project-card" data-index="${i}" tabindex="0" role="button" aria-expanded="false">
      <div class="project-card-head">
        <span class="project-icon" style="color:${c}">${p.icon}</span>
        <span class="project-badge" style="color:${c}">${p.badge}</span>
      </div>
      <h3>${p.title}</h3>
      <p class="desc">${p.desc}</p>
      <div class="tag-row">${p.tech.split(", ").map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="project-more"><span class="chevron">▾</span> Details</div>
      <div class="project-detail">
        <dl>
          <dt>Problem</dt><dd>${p.problem}</dd>
          <dt>Stack</dt><dd>${p.tech}</dd>
          <dt>Features</dt><dd>${p.features}</dd>
          <dt>Challenges</dt><dd>${p.challenges}</dd>
        </dl>
        <div class="project-links">
          <a href="${p.github}" target="_blank" rel="noopener" onclick="event.stopPropagation()">GitHub ↗</a>
          <a href="${p.demo}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Live Demo ↗</a>
        </div>
      </div>
    </article>`;
  }).join("");

  grid.querySelectorAll(".project-card").forEach(card => {
    const toggle = () => {
      const open = card.classList.toggle("open");
      card.setAttribute("aria-expanded", String(open));
    };
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " "){ e.preventDefault(); toggle(); }
    });
  });
})();

/* =========================================================
   RENDER: certifications
   ========================================================= */
(function renderCerts(){
  const grid = document.getElementById("certGrid");
  grid.innerHTML = DATA.certifications.map(c => `
    <div class="cert-card">
      <span class="cert-icon">${c.icon}</span>
      <div>
        <h4>${c.name}</h4>
        <span>${c.issuer}</span>
      </div>
    </div>
  `).join("");
})();

/* =========================================================
   Wire up dynamic links (resume, leetcode, hackerrank)
   ========================================================= */
document.getElementById("resumeLink").href = DATA.resume;
document.getElementById("leetcodeLink").href = DATA.leetcode;
document.getElementById("leetcodeCard").href = DATA.leetcode;
document.getElementById("hackerrankCard").href = DATA.hackerrank;

/* =========================================================
   COPY EMAIL
   ========================================================= */
const copyBtn = document.getElementById("copyEmail");
copyBtn.addEventListener("click", async () => {
  const email = copyBtn.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
  } catch (e) { /* clipboard unavailable — fail silently */ }
  copyBtn.classList.add("copied");
  const hint = copyBtn.querySelector(".copy-hint");
  const original = hint.textContent;
  hint.textContent = "Copied!";
  setTimeout(() => { hint.textContent = original; copyBtn.classList.remove("copied"); }, 1800);
});

/* =========================================================
   CONTACT FORM (client-side only — wire to a backend or
   form service such as Formspree/EmailJS for real delivery)
   ========================================================= */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById("formStatus");
  if (!form.checkValidity()){
    status.textContent = "Please fill in every field with a valid email.";
    return;
  }
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
  // TODO: replace with a real submission (Formspree, EmailJS, or your API)
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:${copyBtn.dataset.email}?subject=${subject}&body=${body}`;
  status.textContent = "Opening your email client...";
  form.reset();
});

/* =========================================================
   BACK TO TOP
   ========================================================= */
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
});

/* =========================================================
   FOOTER YEAR
   ========================================================= */
document.getElementById("year").textContent = new Date().getFullYear();
