import { marked } from 'marked';

marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: false,
  mangle: false,
  sanitize: false,
  smartLists: true,
  smartypants: true,
  xhtml: false
});

export { marked }; 