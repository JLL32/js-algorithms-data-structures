function reverseString(str: string): string {
    if (str.length == 1)
        return str[0]
    return str[str.length - 1] + reverseString(str.slice(0, -1))
}

console.log(reverseString('yoyo mastery') == 'yretsam oyoy');
