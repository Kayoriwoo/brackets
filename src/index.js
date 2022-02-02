module.exports = function check(str, bracketsConfig) {
    let bracketPairs = {};
    for (const bracketPair of bracketsConfig) {
        bracketPairs[bracketPair[0]] = bracketPair[1];
    }

    return checkCorrect(str, bracketPairs);

}
    function checkCorrect(str, bracketPairs) {
        if (str.length === 0) {
            return true;
        }

        let correctlyClosedBracketPair = findAndReturnCorrectlyClosedBrackets(str, bracketPairs);
        if (correctlyClosedBracketPair == null) {
            return false;
        }

        let newStr = str.replace(correctlyClosedBracketPair, "");
        return checkCorrect(newStr, bracketPairs);
    }

    function findAndReturnCorrectlyClosedBrackets(str, bracketPairs) {
    let openBrackets = Object.keys(bracketPairs);
        for (let i = 0; i < openBrackets.length; i++) {
            let bracketsAsString = openBrackets[i] + bracketPairs[openBrackets[i]];
            if (str.includes(bracketsAsString)) {
                return bracketsAsString;
            }
        }
        return null;
}


// module.exports = function check(str) {
//     let stack = [];
//     //ключи - закрывающиеся скобки, значения - соответсвующие открывающиеся
//     let brackets = {
//         ')' : '(',
//         ']' : '[',
//         '}' : '{'
//     };
//
//     for (let i = 0; i < str.length;i++) {
//         const current = str[i];
//
//         //если скобки не равны возвращаем false с помощью метода pop(находит по ключу)
//         if(isCloseBracket(current)) {
//             if (brackets[current] !== stack.pop()) return false;
//             //если есть соотвествующая открывающая скобка, кладем ее в стек
//         } else {
//             stack.push(current)
//         }
//     }
//     //проверям что стек остался пустой
//     return stack.length === 0;
// }
// //ищем в массиве закрывающую скобку
// function isCloseBracket (ch) {
//     return [')',']','}'].indexOf(ch) > -1;
// }
//
// alert(check('()', [['(', ')']])) // -> true
// alert(check('((()))()', [['(', ')']])) // -> true
// alert(check('())(', [['(', ')']])) // -> false
// alert(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']])) // -> true
// alert(check('[(])', [['(', ')'], ['[', ']']])) // -> false
// alert(check('[]()', [['(', ')'], ['[', ']']])) // -> true
// alert(check('[]()(', [['(', ')'], ['[', ']']])) // -> false
//
//
