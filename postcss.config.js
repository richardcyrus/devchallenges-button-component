// eslint-disable import/no-extraneous-dependencies
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcssImport from 'postcss-import'
import postcssNested from 'postcss-nested'
import postcssSortMediaQueries from 'postcss-sort-media-queries'

export default function (cfg) {
  const dev = cfg.env === 'development'

  return {
    map: dev ? { inline: true } : false,
    plugins: [
      postcssImport,
      postcssNested,
      postcssSortMediaQueries,
      autoprefixer,
      dev ? null : cssnano({ preset: 'default' }),
    ],
  }
}
