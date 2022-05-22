module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  style: {
    postOptions: {
      plugins: [
        require('tailwindcss')('./tailwind.config'),
        require('autoprefixer'),
        require('postcss'),
      ],
    },
  },
};
