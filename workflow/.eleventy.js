module.exports = config => {
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: '../www/site',
      includes: "site/_includes",
      data: "src/site/_data"
    }
  };
};