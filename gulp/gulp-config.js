/* gulp-config.js */
module.exports = {
  project: {
    prefix: 'ids',
    zipName: 'documentation',
    idsTokensThemeName: 'theme-soho'
  },
  paths: {
    root: './',
    demo: './demo',
    node_modules: `${process.cwd()}/node_modules`,
    dist: {
      root: './documentation',
      docs: './documentation/docs',
      demo: './documentation/demo',
      idsTokens: './documentation/ids-identity'
    },
    src: {
      root:     './src',
      packages: './src/packages',
      mdFiles: [
        './src/*.md',
        './src/packages/*/README.md'
      ]
    },
    site: {
      root:      './site',
      templates: './site/templates',
      www:       './site/www'
    },
    idsIdentity: {
      root: `${process.cwd()}/node_modules/ids-identity/dist`,
      tokens: `${process.cwd()}/node_modules/ids-identity/dist/tokens/web`,
      icons: `${process.cwd()}/node_modules/ids-identity/dist/icons`,
      font: `${process.cwd()}/node_modules/ids-identity/dist/font`
    },
    tasks: './gulp/tasks',
    idsCssPackage: './dist'
  },
  urls: {
    local: 'http://localhost/api/docs/',
    localDebug: 'http://localhost:9002/api/docs/',
    staging: 'https://staging.design.infor.com/api/docs/',
    prod: 'https://design.infor.com/api/docs/'
  },
  options: {
    markdownRenderer: (renderer, highlightjs) => {
      renderer.code = (code, language) => {
        // Check whether the given language is valid for highlight.js.
        const validLang = !!(language && highlightjs.getLanguage(language));
        // Highlight only if the language is valid.
        const highlighted = validLang ? highlightjs.highlight(language, code).value : code;
        // Render the highlighted code with `hljs` class.
        return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
      };
      return renderer;
    },
    stylelint: {
      failAfterError: true,
      reporters: [{
        formatter: 'verbose',
        console: true
      }]
    }
  }
};
