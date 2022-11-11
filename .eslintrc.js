// eslint-disable-next-line no-undef
module.exports = {
    extends: [
        "plugin:react/recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    env: {
        "browser": true,
        "amd": true,
        "node": true
    },
    rules: {
        indent: ["error", 4, { SwitchCase: 1 }],
        "linebreak-style": ["off", "windows"],
        quotes: ["error", "double"],
        semi: ["error", "never"],
        "space-in-parens": ["warn", "never"],
        "array-bracket-newline": ["warn", "consistent"],
        "comma-spacing": ["warn", { before: false, after: true }],
        "brace-style": ["warn", "1tbs", { allowSingleLine: true }],
        "keyword-spacing": ["warn", { before: true, after: true }],
        "key-spacing": ["warn", { beforeColon: false, afterColon: true, mode: "strict" }],
        "operator-linebreak": ["warn", "before"],
        "no-multiple-empty-lines": ["warn", { max: 2 }],
        "no-unneeded-ternary": ["warn"],
        "no-whitespace-before-property": ["warn"],
        "space-before-function-paren": ["warn", { anonymous: "always", named: "never", asyncArrow: "always" }],
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
    },
}
