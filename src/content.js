function operate(elementSelector, retryCount, doOperation) {
    if (retryCount <= 0) return;
    
    const element = document.querySelector(elementSelector);
    if (element) {
        doOperation(element);
        return
    }
    setTimeout(() => {
        operate(elementSelector, retryCount - 1, doOperation);
    }, 100);
}

const OPERATION_RETRY = 600;
(function (event) {
    operate("a[href^='/messages']", OPERATION_RETRY, element => {
        element.click();
    });
})();

