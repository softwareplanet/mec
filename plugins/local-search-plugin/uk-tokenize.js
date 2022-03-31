module.exports = function(str){
    return (str.match(/[\w\u0401-\u0457-]+/g) || [])
        .map(forwardTokens)
        .flat()
}

function forwardTokens(word) {
    if (word.length <=1) {
        return word;
    }
    let tokens = [];
    for (let token = word; token.length >= 1; token = token.substring(0, token.length -1)) {
        tokens.unshift(token);
    }
    return tokens;
}
