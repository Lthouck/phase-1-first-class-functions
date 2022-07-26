function receivesAFunction(someFunc) {
    someFunc()
}

function returnsANamedFunction() {
    return function namedFunc() {
        console.log('Returned!')
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Function without a name.")
    }
}

