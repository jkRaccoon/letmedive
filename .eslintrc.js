module.exports = {
	extends: [
		'standard',
		'plugin:vue/base'
	],
/*
	'rules': [
		'standard',
		'plugin:vue/base',
		'plugin:vue/essential',
		'@vue/airbnb'
	],
*/
	root: true,

	env: {
		node: true
	},

	rules: {
		semi: [
			2,
			'always'
		],
		indent: [
			2,
			'tab',
			{
				SwitchCase: 1
			}
		],
		'no-tabs': 0,
		'vue/html-indent': [
			'error',
			'tab',
			{
				attribute: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: []
			}
		],
		'vue/max-attributes-per-line': [
			2,
			{
				singleline: 10,
				multiline: {
					max: 1,
					allowFirstLine: false
				}
			}
		],
		'vetur.validation.template': 0,
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	},

	parserOptions: {
		parser: 'babel-eslint'
	}
};
