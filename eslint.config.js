module.exports = {
    "parserOptions": {
        "ecmaVersion": 2020
    },

    "env": {
        "es6": true,
        "node": true
    },

    "extends": "prettier",

    "rules": {
        "no-cond-assign": ["error", "always"],
        "no-console": "warn",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": 0,
        "no-extra-semi": "error",
        "no-func-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-negated-in-lhs": "error",
        "no-obj-calls": "error",
        "no-regex-spaces": "error",
        "no-sparse-arrays": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "use-isnan": "error",
        "valid-typeof": "error",
        "accessor-pairs": "error",
        "block-scoped-var": "error",
        "complexity": 0,
        "consistent-return": 0,
        "curly": ["error", "all"],
        "default-case": "error",
        "dot-notation": "error",
        "eqeqeq": "error",
        "guard-for-in": "error",
        "no-alert": "error",
        "no-caller": "error",
        "no-confusing-arrow": "error",
        "no-div-regex": "error",
        "no-else-return": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-implied-eval": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-native-reassign": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-new": "error",
        "no-octal-escape": "error",
        "no-octal": "error",
        "no-param-reassign": 0,
        "no-process-env": 0,
        "no-proto": "error",
        "no-redeclare": "error",
        "no-return-assign": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-unused-expressions": "error",
        "no-void": "error",
        "no-warning-comments": "warn",
        "no-with": "error",
        "radix": "error",
        "vars-on-top": "error",
        "yoda": "error",
        "strict": "error",
        "no-catch-shadow": "error",
        "no-delete-var": 0,
        "no-label-var": "error",
        "no-shadow": [
            "error",
            {
                "allow": ["_"]
            }
        ],
        "no-shadow-restricted-names": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-undefined": 0,
        "no-unused-vars": [
            "error",
            {
                "argsIgnorePattern": "^ignore|_$"
            }
        ],
        "no-use-before-define": ["error", "nofunc"],
        "handle-callback-err": "warn",
        "no-mixed-requires": "error",
        "no-new-require": "error",
        "no-path-concat": "error",
        "no-process-exit": 0,
        "no-restricted-modules": 0,
        "no-sync": "warn",
        "camelcase": "error",
        "computed-property-spacing": ["error", "never"],
        "consistent-this": ["error", "that"],
        "eol-last": "error",
        "func-names": 0,
        "func-style": 0,
        "indent": ["error", 4],
        "max-nested-callbacks": ["error", 5],
        "no-array-constructor": "error",
        "no-continue": 0,
        "no-inline-comments": 0,
        "no-lonely-if": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multiple-empty-lines": 0,
        "no-nested-ternary": "error",
        "no-new-object": 0,
        "no-spaced-func": "error",
        "no-ternary": 0,
        "no-trailing-spaces": "error",
        "no-underscore-dangle": "error",
        "one-var": 0,
        "padded-blocks": 0,
        "quote-props": 0,
        "quotes": [
            "error",
            "double",
            {
                "allowTemplateLiterals": true
            }
        ],
        "semi-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "semi": ["error", "always"],
        "sort-vars": 0,
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "space-before-blocks": ["error", "always"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": ["error", "always"],
        "wrap-regex": "error",
        "constructor-super": "error",
        "generator-star-spacing": 0,
        "no-this-before-super": "error",
        "no-var": "error",
        "object-shorthand": 0,
        "prefer-const": "error",
        "no-const-assign": "error",
        "max-depth": ["error", 5],
        "max-len": ["error", 120],
        "max-params": ["error", 5],
        "max-statements": 0,
        "no-bitwise": "error",
        "no-plusplus": "error"
    }
};
