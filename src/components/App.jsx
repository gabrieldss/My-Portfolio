import React, { useEffect, useState } from 'react';
import { content } from '../content';
import { companyLinks, degreeLinks, certificationLinks } from '../links';
import portrait from '../images/gabriel.jpeg';
import { curricula } from '../curricula';

const ids = ['about', 'experience', 'projects', 'contact'];
const email = 'gabriel-santosouza@hotmail.com';
const github = 'https://github.com/gabrieldss';
const linkedin = 'https://www.linkedin.com/in/gabrieldssouza/';
const toolkit = [['C# / .NET', 'ASP.NET Core', 'Entity Framework', 'SQL Server'], ['Angular', 'React', 'JavaScript', 'HTML / CSS', 'UX / UI'], ['Azure DevOps', 'Git / GitHub', 'CI / CD', 'Scrum', 'AI-assisted development']];

function Icon({ type = 'arrow', ...props }) {
  const paths = { arrow: 'M7 17 17 7M7 7h10v10', down: 'M12 4v16m-6-6 6 6 6-6', download: 'M12 3v12m-5-5 5 5 5-5M5 17v4h14v-4', code: 'm8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 20', mail: 'M3 5h18v14H3zM3 5l9 8 9-8', copy: 'M9 9h12v12H9zM15 5V3H3v12h2', check: 'm5 12 4 4L19 6', globe: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18', menu: 'M4 7h16M4 12h16M4 17h16', close: 'm6 6 12 12M6 18 18 6' };
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d={paths[type] || paths.arrow} /></svg>;
}

function External({ href, children, ...props }) { return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>; }
function SectionHeading({ label, title, children }) { return <div className="section-heading"><p className="eyebrow">{label}</p><h2>{title}</h2>{children && <p className="section-intro">{children}</p>}</div>; }

export default function App() {
  const [locale, setLocale] = useState(() => { try { const saved = localStorage.getItem('portfolio-language'); return content[saved] ? saved : 'en'; } catch { return 'en'; } });
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const t = content[locale];
  const curriculum = curricula[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = `Gabriel Souza — ${t.role}`;
    document.querySelector('meta[name="description"]').content = t.description;
    try { localStorage.setItem('portfolio-language', locale); } catch { /* Works without storage too. */ }
    setCopyStatus('');
  }, [locale, t]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-15% 0px -55% 0px' });
    ids.forEach(id => observer.observe(document.getElementById(id)));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!copyStatus) return;
    const timer = setTimeout(() => setCopyStatus(''), 3500);
    return () => clearTimeout(timer);
  }, [copyStatus]);

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(email); setCopyStatus('copied'); }
    catch { setCopyStatus('copyFailed'); }
  };

  return <>
    <a className="skip-link" href="#main">{t.skip}</a>
    <header className="site-header"><div className="container header-inner">
      <a className="logo" href="#home" aria-label="Gabriel Souza">gs<span>.</span></a>
      <nav id="navigation" aria-label={locale === 'en' ? 'Main navigation' : locale === 'es' ? 'Navegación principal' : 'Navegação principal'} className={menuOpen ? 'nav open' : 'nav'}>
        {ids.map((id, i) => <a href={`#${id}`} key={id} className={active === id ? 'active' : ''} aria-current={active === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{t.nav[i]}</a>)}
      </nav>
      <div className="header-actions"><label className="language-picker"><Icon type="globe" /><select aria-label={t.language} value={locale} onChange={e => setLocale(e.target.value)}><option value="en">EN</option><option value="pt-BR">PT-BR</option><option value="es">ES</option></select></label><button className="menu-toggle" aria-label={t.menu} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon type={menuOpen ? 'close' : 'menu'} /></button></div>
    </div></header>
    <main id="main">
      <section id="home" className="hero container">
        <div className="hero-copy"><p className="eyebrow"><span className="small-line" />{t.hello}</p><h1>{t.headline[0]}<br /><span>{t.headline[1]}</span></h1><p className="hero-intro">{t.intro}</p><div className="hero-buttons"><a className="button primary" href="#experience">{t.work}<Icon type="arrow" /></a><a className="button secondary" href={curriculum.href} download={curriculum.filename}>{t.curriculum}<Icon type="download" /></a></div><p className="location"><span className="status-dot" />{t.location}</p></div>
        <div className="portrait-composition"><div className="portrait-frame"><img src={portrait} alt={t.portrait} fetchPriority="high" /><span className="photo-caption">{t.photoLabel}</span></div><div className="profile-note"><span className="note-icon"><Icon type="code" /></span><div><strong>Gabriel Souza</strong><span>{t.role}</span></div><span className="status-dot" /></div></div>
        <a href="#about" className="scroll-link"><Icon type="down" />{t.scroll}</a>
      </section>
      <div className="toolkit-strip"><div className="container toolkit-inner"><span className="eyebrow">{t.focus}</span><div>{['.NET', 'Angular', 'React', 'SQL Server', 'Azure DevOps'].map(tool => <span key={tool}>{tool}</span>)}</div><span className="strip-symbol" aria-hidden="true">✳</span></div></div>
      <section id="about" className="section container">
        <div className="about-grid"><SectionHeading label={t.aboutLabel} title={t.aboutTitle} /><div className="about-copy">{t.bio.map(p => <p key={p}>{p}</p>)}<div className="principles">{t.principles.map(p => <span key={p}><Icon type="check" />{p}</span>)}</div></div></div>
        <div className="stack-section"><div className="stack-heading"><h3>{t.stackTitle}</h3><p>{t.stackText}</p></div><div className="stack-grid">{toolkit.map((tools, i) => <div className="stack-group" key={i}><span className="mono muted">0{i + 1}</span><h4>{t.stackGroups[i]}</h4><div className="tags">{tools.map(tool => <span key={tool}>{tool === 'AI-assisted development' ? (locale === 'pt-BR' ? 'Desenvolvimento com IA' : locale === 'es' ? 'Desarrollo con IA' : tool) : tool}</span>)}</div></div>)}</div></div>
      </section>
      <section id="experience" className="section experience-section"><div className="container"><SectionHeading label={t.expLabel} title={t.expTitle}>{t.expIntro}</SectionHeading><div className="timeline">{t.jobs.map((job, i) => <article className="job" key={job.company}><div className="job-meta"><span className="mono">{job.date}</span>{i === 0 && <span className="current-badge"><span className="status-dot" />{t.present}</span>}</div><div className="job-content"><h3>{job.title}</h3><External className="company" href={companyLinks[job.company]}>{job.company}<Icon /></External><p>{job.description}</p><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></div><span className="job-number" aria-hidden="true">0{i + 1}</span></article>)}</div>
      <div className="learning"><h3>{t.credentials}</h3><div className="learning-grid"><div><p className="eyebrow">{t.education}</p>{t.degrees.map((degree, i) => {
        const Degree = degreeLinks[i] ? External : 'div';
        return <Degree className="degree" key={degree} href={degreeLinks[i] || undefined}><span className="mono muted">{['2021–2022', '2021', '2017–2020', '2013–2016'][i]}</span><div><h4>{degree}{degreeLinks[i] && <Icon />}</h4><p>{t.degreeTypes[i]}</p></div></Degree>;
      })}</div><div className="certifications"><p className="eyebrow">{t.certifications}</p><External className="cert" href={certificationLinks['AZ-400']}><span className="cert-icon" aria-hidden="true">▦</span><div><span className="mono muted">02 / 2024</span><h4>AZ-400<Icon /></h4><p>Designing and Implementing<br />Microsoft DevOps Solutions</p></div></External><External className="cert" href={certificationLinks['AZ-204']}><span className="cert-icon" aria-hidden="true">▦</span><div><span className="mono muted">09 / 2023</span><h4>AZ-204<Icon /></h4><p>Developing Solutions<br />for Microsoft Azure</p></div></External></div></div></div>
      </div></section>
      <section id="projects" className="section container"><SectionHeading label={t.projectsLabel} title={t.projectsTitle}>{t.projectsIntro}</SectionHeading><div className="project-grid"><External href={`${github}/My_Projects`} className="project-card"><div className="project-art code-art" aria-hidden="true"><div className="editor"><div className="editor-bar"><i /><i /><i /><span>ideas → code → possibilities</span></div><div className="editor-code"><span className="code-muted">01</span> <span className="code-purple">const</span> developer = {'{'}<br /><span className="code-muted">02</span> &nbsp;name: <span className="code-green">'Gabriel'</span>,<br /><span className="code-muted">03</span> &nbsp;mindset: <span className="code-green">'always learning'</span>,<br /><span className="code-muted">04</span> &nbsp;ideas: <span className="code-blue">Infinity</span><br /><span className="code-muted">05</span> {'}'};</div></div></div><div className="project-body"><div className="project-top"><span className="mono muted">01 / {locale === 'pt-BR' ? 'REPOSITÓRIO' : locale === 'es' ? 'REPOSITORIO' : 'REPOSITORY'}</span><Icon /></div><h3>{t.repoTitle}</h3><p>{t.repoText}</p><span className="text-link">{t.repoLink}<Icon /></span></div></External><External href={github} className="project-card"><div className="project-art github-art" aria-hidden="true"><div className="git-orbit"><Icon type="code" width="52" height="52" /><span className="orbit-dot one" /><span className="orbit-dot two" /><span className="orbit-dot three" /></div><span className="github-handle">github.com / gabrieldss</span></div><div className="project-body"><div className="project-top"><span className="mono muted">02 / GITHUB</span><Icon /></div><h3>{t.githubTitle}</h3><p>{t.githubText}</p><span className="text-link">{t.githubLink}<Icon /></span></div></External></div></section>
      <section id="contact" className="contact-section"><div className="container"><p className="eyebrow">{t.contactLabel}</p><div className="contact-grid"><div><h2>{t.contactTitle}</h2><p className="section-intro">{t.contactText}</p><a className="button primary" href={`mailto:${email}`}>{t.emailAction}<Icon type="arrow" /></a></div><div className="contact-details"><span className="mono muted">EMAIL</span><a className="email-link" href={`mailto:${email}`}>{email}</a><button className="copy-button" onClick={copyEmail}><Icon type={copyStatus === 'copied' ? 'check' : 'copy'} />{copyStatus ? t[copyStatus] : t.copy}</button><span className="sr-only" role="status">{copyStatus ? t[copyStatus] : ''}</span><div className="social-links"><External href={linkedin}>LinkedIn<Icon /></External><External href={github}>GitHub<Icon /></External><a href={curriculum.href} download={curriculum.filename}>{t.curriculum}<Icon type="download" /></a></div><p className="spoken">{t.spoken}</p></div></div></div></section>
    </main>
    <footer className="container footer"><a className="logo" href="#home" aria-label="Gabriel Souza">gs<span>.</span></a><p>© {new Date().getFullYear()} Gabriel Souza<span>{t.footer}</span></p><a href="#home" className="back-top">{t.top}<Icon type="arrow" /></a></footer>
  </>;
}
