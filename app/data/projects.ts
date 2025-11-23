// app/data/projects.ts
export type Project = {
  id: string;
  title: string;
  desc: string;
  tech: string[]; // list of tech names
  link?: string;
};

export const initialProjects: Project[] = [
  {
    id: "p-shyick-portfolio",
    title: "Shyick Portfolio",
    desc: "Personal portfolio built with Next.js and Tailwind — showcases my work, skills and contact info.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://shyicktech-portfolio.vercel.app",
  },
  {
    id: "p-chatla",
    title: "ChatLa",
    desc: "Real-time social chat app built with Flutter and Firebase for photo/video sharing and messaging.",
    tech: ["Flutter", "Firebase"],
    link: "#",
  },
  {
    id: "p-forex-course",
    title: "Forex Course",
    desc: "A 4-week educational forex course (PDF) with charts and long-form lessons.",
    tech: ["PDF", "Education"],
    link: "#",
  },
];

// tip: to add a new project manually — copy a block and change id/title/desc/tech/link
``