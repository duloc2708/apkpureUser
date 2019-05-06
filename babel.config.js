const next = {
    "presets": [
        "next/babel"
    ],
    // "plugins": [
    //     [
    //         "babel-plugin-root-import"
    //     ]
    // ],
    // "env": { // For React Native
    //     "production": {
    //         "plugins": [
    //             "babel-plugin-root-import"
    //         ]
    //     }
    // }
}


module.exports = {
    env: {
        production: next,
        development: next
    }
};