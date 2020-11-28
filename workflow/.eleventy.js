module.exports = config => {
  return {
    dir: {
      input: 'src/content',
      output: 'dist',
      includes: "../site/_includes",
      data: "../site/_data"
    }
  };
};