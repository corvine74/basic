module.exports = config => {
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src/content',
      output: 'dist',
      includes: "../site/_includes",
      data: "../site/_data"
    }
  };
};