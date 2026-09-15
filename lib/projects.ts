import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export type ProjectType = 'case' | 'project';

export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  type: ProjectType;
  order: number;
  year: string | null;
  role: string | null;
  stack: string[];
  image: string | null;
  confidential: boolean;
};

export type Project = ProjectMeta & {
  html: string;
};

const projectsDirectory = path.join(process.cwd(), 'content', 'projects');

const escapeAttribute = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/* Case study images can be large screenshots, so load them lazily. */
marked.use({
  renderer: {
    image({ href, title, text }) {
      const titleAttribute = title ? ` title="${escapeAttribute(title)}"` : '';
      return `<img src="${escapeAttribute(href)}" alt="${escapeAttribute(
        text
      )}"${titleAttribute} loading="lazy" decoding="async">`;
    },
  },
});

/* Files starting with an underscore, like the template, are never published. */
const projectFileNames = () =>
  fs
    .readdirSync(projectsDirectory)
    .filter((fileName) => fileName.endsWith('.md') && !fileName.startsWith('_'));

const readProject = (fileName: string) => {
  const slug = fileName.replace(/\.md$/, '');
  const file = fs.readFileSync(path.join(projectsDirectory, fileName), 'utf8');
  const { data, content } = matter(file);

  for (const field of ['title', 'summary', 'type']) {
    if (!data[field]) {
      throw new Error(`content/projects/${fileName} is missing "${field}"`);
    }
  }
  if (data.type !== 'case' && data.type !== 'project') {
    throw new Error(
      `content/projects/${fileName} has type "${data.type}", expected "case" or "project"`
    );
  }

  const meta: ProjectMeta = {
    slug,
    title: String(data.title),
    summary: String(data.summary),
    type: data.type,
    order: Number(data.order ?? 999),
    year: data.year ? String(data.year) : null,
    role: data.role ? String(data.role) : null,
    stack: Array.isArray(data.stack) ? data.stack.map(String) : [],
    image: data.image ? String(data.image) : null,
    confidential: Boolean(data.confidential),
  };

  return { meta, content, draft: Boolean(data.draft) };
};

const publishedProjects = () =>
  projectFileNames()
    .map(readProject)
    .filter((project) => !project.draft)
    .sort((a, b) => a.meta.order - b.meta.order);

export const getAllProjects = (): ProjectMeta[] =>
  publishedProjects().map((project) => project.meta);

/* Only case studies get their own page. Projects link out through the redirects in next.config.js. */
export const getCaseStudySlugs = (): string[] =>
  publishedProjects()
    .filter((project) => project.meta.type === 'case')
    .map((project) => project.meta.slug);

export const getCaseStudy = (slug: string): Project => {
  const project = publishedProjects().find(
    (candidate) => candidate.meta.slug === slug && candidate.meta.type === 'case'
  );
  if (!project) {
    throw new Error(`No published case study found for "${slug}"`);
  }
  return { ...project.meta, html: marked.parse(project.content, { async: false }) };
};
