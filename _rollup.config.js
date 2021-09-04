import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

const extensions = ['.js' ];

export default  {
  input: 'index.js',
  output: [
    {
      file: 'index.cjs',
      format: 'cjs',
      sourcemap: false
    }
  ],
  plugins: [
    resolve({ extensions }),
    babel({ babelHelpers: 'bundled', include: ['./index.js'], extensions, exclude: './node_modules/**'})
  ]
}
