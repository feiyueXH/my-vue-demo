module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', 'standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    // // function的参数前加空格
    'space-before-function-paren': [0], //这里跟vscode无法很好在函数名后面添加空格,索性我们把这个限制去掉

    //======https://www.cnblogs.com/dreamsqin/p/10906951.html 关于vue代码规范参照这篇文章===============
    //DOM 模板中总是 kebab-case
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ],
    //JS/JSX 中的组件名应该始终是 PascalCase 的
    'vue/name-property-casing': ['error', 'PascalCase'],
    //prop名大小写：在声明 prop 的时候，其命名应该始终使用 camelCase
    'vue/prop-name-casing': ['error', 'camelCase'],
    //prop必须设置数值类型
    'vue/require-prop-types': 'error',
    //v-for必须设置键值
    'vue/require-v-for-key': 'error',
    //不要把 v-if 和 v-for 用在同一个元素上——因为v-for 比 v-if 具有更高的优先级。
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: false
      }
    ],
    //多个特性的元素应该分多行撰写，每个特性一行。
    /**
     * <img
     *  :url='url'
     *  :name='name'
     * />
     */
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],

    //指令缩写 (用 : 表示 v-bind: 和用 @ 表示 v-on:)
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],

    //组件/实例的选项的顺序
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'data',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],

    //元素/组件特性的顺序
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ]
      }
    ]
  }
}
