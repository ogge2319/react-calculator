export function calculate(a, operator, b) {
    switch (operator) {
        
        case '+': return a + b
        case '-': return a - b
        case '*': return a * b
        case '/': return b === 0 ? "fel" : a / b

        default: return 'fel'
    }
}