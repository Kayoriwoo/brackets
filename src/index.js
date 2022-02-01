module.exports = function check(str) {
    let stack = [];
    //ключи - закрывающиеся скобки, значения - соответсвующие открывающиеся
    let brackets = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };

    for (let i = 0; i < str.length;i++) {
        const current = str[i];

        //если скобки не равны возвращаем false с помощью метода pop(находит по ключу)
        if(isCloseBracket(current)) {
            if (brackets[current] !== stack.pop()) return false;
            //если есть соотвествующая открывающая скобка, кладем ее в стек
        } else {
            stack.push(current)
        }
    }
    //проверям что стек остался пустой
    return stack.length === 0;
}
//ищем в массиве закрывающую скобку
function isCloseBracket (ch) {
    return [')',']','}'].indexOf(ch) > -1;
}
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
