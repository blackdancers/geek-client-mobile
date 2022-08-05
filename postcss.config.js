module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375
    }
  }
}

// 该插件对行内样式无效，建议样式通过类来定义
