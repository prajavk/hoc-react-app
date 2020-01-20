/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

// Inspired by https://github.com/airbnb/javascript but less opinionated.

// We use eslint-loader so even warnings are very visible.
// This is why we only use "WARNING" level for potential errors,
// and we don't use "ERROR" level at all.

// In the future, we might create a separate list of rules for production.
// It would probably be more strict.

// The ESLint browser environment defines all browser globals as valid,
// even though most people don't know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.
var restrictedGlobals = require('./confusing-browser-globals');

module.exports = {
  root: true,

  // CX ENHANCEMENT - EXTENDING THESE RULES
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],

  parser: 'babel-eslint',

  // CX ENHANCEMENT - Add plugins
  plugins: ['import', 'flowtype', 'jsx-a11y', 'react', 'jest', 'lean-imports', 'prettier', 'react-hooks'],

  // eslint-plugin-react settings
  settings: {
    react: {
      pragma: "React",  // Pragma to use, default to "React"
      version: "16.6", // React version, default to the latest React stable release
    }
  },

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },

  rules: {
    // http://eslint.org/docs/rules/
    'array-callback-return': 'warn',
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'dot-location': ['warn', 'property'],
    eqeqeq: ['warn', 'allow-null'],
    'new-parens': 'warn',
    'no-array-constructor': 'warn',
    'no-caller': 'warn',
    'no-cond-assign': ['warn', 'except-parens'],
    'no-const-assign': 'warn',
    'no-control-regex': 'warn',
    'no-delete-var': 'warn',
    'no-dupe-args': 'warn',
    'no-dupe-class-members': 'warn',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-pattern': 'warn',
    'no-eval': 'warn',
    'no-ex-assign': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-fallthrough': 'warn',
    'no-func-assign': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-regexp': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': ['warn', { allowLoop: true, allowSwitch: false }],
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-operators': [
      'warn',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: false
      }
    ],
    'no-multi-str': 'warn',
    'no-native-reassign': 'warn',
    'no-negated-in-lhs': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-symbol': 'warn',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'warn',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    'no-redeclare': 'warn',
    'no-regex-spaces': 'warn',
    'no-restricted-syntax': ['warn', 'WithStatement'],
    'no-script-url': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'warn',
    'no-throw-literal': 'warn',
    'no-undef': 'off', // off because despite us declaring Jest as the env, this causes linting issues with their globals. Not sure why.
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-unexpected-multiline': 'warn',
    'no-unreachable': 'warn',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    'no-unused-labels': 'warn',
    'no-unused-vars': [
      'warn',
      {
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    'no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false
      }
    ],
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': [
      'warn',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],
    'no-with': 'warn',
    'no-whitespace-before-property': 'warn',
    'require-yield': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    strict: ['warn', 'never'],
    'unicode-bom': ['warn', 'never'],
    'use-isnan': 'warn',
    'valid-typeof': 'warn',
    'no-restricted-properties': [
      'error',
      {
        object: 'require',
        property: 'ensure',
        message:
          'Please use import() instead. More info: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting'
      },
      {
        object: 'System',
        property: 'import',
        message:
          'Please use import() instead. More info: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting'
      }
    ],
    'getter-return': 'warn',

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-webpack-loader-syntax': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: true,
        ignore: []
      }
    ],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-is-mounted': 'warn',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/style-prop-object': 'warn',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['noHref'] // CX CHANGE. Removed invalidHref as a check.
      }
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/heading-has-content': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',
    'jsx-a11y/no-distracting-elements': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/scope': 'warn',

    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/define-flow-type': 'warn',
    'flowtype/require-valid-file-annotation': 'warn',
    'flowtype/use-flow-type': 'warn',

    // ** CX ENHANCEMENTS BEGIN HERE - DO NOT REMOVE **
    'new-cap': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-multi-spaces': 'warn',
    'no-param-reassign': 'warn',
    'no-var': 'error',
    'padded-blocks': [1, 'never'],
    'prefer-const': 'warn',
    semi: [1, 'always'],
    'no-trailing-spaces': 0,
    'eol-last': 0,
    'spaced-comment': 'warn',
    'no-underscore-dangle': 0,
    'no-alert': 'warn',
    radix: 'error',
    'jsx-quotes': 0,
    'object-shorthand': [1, 'always'],
    'keyword-spacing': [1, { before: true, after: true }],
    camelcase: [1, { properties: 'always' }],
    'lean-imports/import': [1, ['lodash', 'react-bootstrap']],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'warn',
    'jest/valid-expect': 'warn',
    'no-restricted-imports': [
      'warn',
      {
        paths: [
          {
            name: '@cx/theme/src/themes/cx/index.scss',
            message: 'As of CX 2.0, Themes are imported by webpack. Please remove this redundant import to avoid styling conflicts.'
          },
          {
            name: 'react-bootstrap/lib/Button',
            message:
              'Use @cx/ui/lib/Button instead. Question? Contact the CX team.'
          },
          {
            name: 'react-bootstrap/lib/Grid',
            message:
              'Use @cx/ui/lib/Grid instead. Question? Contact the CX team.'
          },
          {
            name: 'react-bootstrap/lib/Col',
            message:
              'Use @cx/ui/lib/Col instead. Question? Contact the CX team.'
          },
          {
            name: 'react-bootstrap/lib/Row',
            message:
              'Use @cx/ui/lib/Row instead. Question? Contact the CX team.'
          },
          {
            name: 'react-bootstrap/lib/FormField',
            message:
              'Use @cx/ui/lib/TextInput instead. Question? Contact the CX team.'
          },
          {
            name: '@cx/ui/lib/DataTable',
            message:
              'DataTable is deprecated. Use @cx/ui/lib/Table instead. See the CX UI docs for API change details.'
          },
          {
            name: 'babel-polyfill',
            message:
              'Babel polyfill is huge (28K gzipped) and redundant since CX already includes the polyfills you likely need. See packages/core/config/polyfills.js in the CX repository for a list of built-in polyfills. Need another polyfill? Contact the CX team.'
          }
        ],
        patterns: [
          '@cx/theme/src/themes/*'
        ]
      }
    ],
    'react/display-name': [1, { ignoreTranspilerName: false }],
    'react/forbid-prop-types': [1, { forbid: ['any'] }],
    'react/jsx-curly-spacing': 'warn',
    'react/jsx-key': 'warn',
    'react/jsx-no-bind': [
      1,
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowBind: false
      }
    ],
    'react/no-array-index-key': 'warn',
    'react/no-danger': 'warn',
    'react/no-did-mount-set-state': 'warn',
    'react/no-did-update-set-state': 'warn',
    'react/no-multi-comp': 'warn',
    'react/no-unknown-property': 'warn',
    'react/prefer-es6-class': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'warn',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': 'warn',
    'react/sort-prop-types': [1, { ignoreCase: true }],
    'react/jsx-wrap-multilines': 'warn',
    'react/no-unescaped-entities': ['warn', { 'forbid': ["'"] }],
    'react-hooks/rules-of-hooks': 'error',
    'jsx-a11y/label-has-for': 'warn',
    'jsx-a11y/no-onchange': 'warn'
  }
};
