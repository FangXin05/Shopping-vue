module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // vw适配的标准屏幕宽度
      // 设计图是750，调成一倍，适配375标准屏幕
      viewportWidth: 375
    }
  }
}
