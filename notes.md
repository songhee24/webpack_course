// может писать отдельно babel конфиги

 babel.config.json
{
"presets": [
"@babel/preset-env",
"@babel/preset-typescript",
[
"@babel/preset-react",
{
"runtime": "automatic"
}
]
]
}
