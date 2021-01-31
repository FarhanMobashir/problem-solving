function bracketMatch(text) {

    // checks if everything is balaced 
    var differenceCount = 0;
    // keep track of leading braces that have not been opened
    var missingOpening = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '(') {
            differenceCount += 1
        } else if (text[i] === ')') {
            // You're closing a bracket
            differenceCount += -1
        }

        // What if you haven't opened a closing brace?
        // diff = -1
        // I need another one opening bracket!

        if (differenceCount < 0) {
            missingOpening += 1;
            differenceCount += 1;
        }
    }

    // "()()"
    return differenceCount + missingOpening;
}

  // "())("
  // ( diff = 1
  // ) diff = 0
  // ) diff -1 -> opening +1 difference = 0
  // ( diff 1 