const next = {
    "presets": [
        "next/babel"
    ],
    "plugins": [
        [
            "babel-plugin-root-import"
        ]
    ],
    "env": { // For React Native
        "production": {
            "plugins": [
                "babel-plugin-root-import"
            ]
        }
    }
}

module.exports = {
    env: {
        test: {
            presets: [
                [
                    'env',
                    {
                        targets: {
                            node: 'current'
                        },
                        modules: 'commonjs'
                    }
                ]
            ]
        },
        production: next,
        development: next
    }
};