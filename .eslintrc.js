module.exports = {
    env: {
        browser : true, // ignore browser globals
        es6     : true, // ignore ES6 globals
        node    : true  // ignore node globals
    },
    extends: ['eslint:recommended', 'plugin:vue/recommended'],
    parserOptions: {
        sourceType: 'module',
        parser: 'babel-eslint'
    },
    plugins: [ 'vue' ],
    rules: {
        // Overrides
        'vue/singleline-html-element-content-newline': 0,                       // allow the use of single line elements for nav bar

        // Possible Errors
        'vue/no-shared-component-data'               : 'error',                 // enforce component's data property to be a function
        'vue/require-default-prop'                   : 'error',                 // enforce props default values to be valid
        'vue/return-in-computed-property'            : 'error',                 // enforce that a return statement is present in computed property

        // Best Practices
        'vue/no-async-in-computed-properties'        : 'error',                 // disallow asynchronous actions in computed properties
        'vue/no-side-effects-in-computed-properties' : 'error',                 // disallow side effects in computed properties
        'vue/order-in-components'                    : 'error',                 // enforce order of properties in components
        'vue/require-valid-default-prop'             : 'error',                 // require default value for props
        'vue/require-prop-types'                     : 'error',                 // require type definitions in props

        // Stylistic Issues
        'vue/attribute-hyphenation'                  : ['error', 'always'],     // enforce attribute naming style in template (about-me over aboutMe)
        'vue/html-quotes'                            : ['error', 'double'],     // enforce quotes style of HTML attributes (class='red' over class='red')
        'vue/mustache-interpolation-spacing'         : ['error', 'never'],      // enforce unified spacing in mustache interpolations ({{module}} over {{ module }})
        'vue/name-property-casing'                   : ['error', 'kebab-case'], // enforce specific casing for the name property in Vue components (AboutMe over aboutMe and about-me)
        'vue/v-bind-style'                           : ['error', 'shorthand'],  // enforce v-bind directive style ( :title='title' over v-bind:title='title')
        'vue/v-on-style'                             : ['error', 'longform'],   // enforce v-on directive style (v-on:click='doSomething' over @click='doSomething')
        'vue/no-multi-spaces'                        : 'error',                 // disallow multiple spaces
        'vue/max-attributes-per-line'                : 0,                       // disable rule that requires a new line for multiple attributes
        'vue/html-indent'                            : ['error',4],             // use 4 spaces for indents
        'vue/script-indent'                          : ['error',4, {            // use 4 spaces for indents
            'switchCase': 1         // indent case within switch
        }],

        // Basic ES6
        'indent'                                     : ['error',4, {            // use 4 spaces for indents
            'SwitchCase': 1         // indent case within switch
        }],
        'linebreak-style'                            : 0,                       // mixed environment let git config enforce line endings
        'quotes'                                     : ['error','single'],
        'semi'                                       : ['error','always'],
        'no-var'                                     : 'error',
        'no-console'                                 : 0                        // allow use of console.log
    }
};
