import { marked } from 'marked';

marked.setOptions({
  breaks: true,
  gfm: true
});

// Configurar o marked para abrir links em nova guia
marked.use({
  renderer: {
    link(href, title, text) {
      return `<a href="${href}" title="${title || ''}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    }
  }
});

export { marked }; 