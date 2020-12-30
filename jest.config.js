module.exports = {
    "moduleNameMapper": {
        "^@/(.+)": "<rootDir>/resources/js/$1"
    },
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
}
