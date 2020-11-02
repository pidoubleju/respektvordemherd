const useCapitalization = (expression) => {
    return `${expression[0].toUpperCase()}${expression.slice(1)}`;
}

export default useCapitalization;