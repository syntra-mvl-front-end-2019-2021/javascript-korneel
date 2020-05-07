console.log('Assert ready!');

function loadCss(filename) {}

function appendTo($element, html) {
    $element.innerHTML += html;
}

function fail() {
    return '<span style="color: indianred; margin-right: 20px;">[fail]</span>';
}

function success() {
    return '<span style="color: lawngreen; margin-right: 20px;">[success]</span>';
}

function assertFunctionExists(functionName, $assertContainer) {
    if (typeof window[functionName] === 'function') {
        appendTo(
            $assertContainer,
            `<p class="asserter success">${success()} Function ${functionName} found</p>`
        );
    } else {
        appendTo(
            $assertContainer,
            `<p class="asserter fail">${fail()} Function ${functionName} not found</p>`
        );
    }
}

(function prepFile() {
    const $assertContainer = document.getElementById('assertions');
    const containers = [
        `<div id="getLargestItemInArray"><h2>1. Get Largest Item In Array</h2><div class="assert-container"></div></div>`,
        `<div id="reverseArray"><h2>2. Reverse Array</h2><div class="assert-container"></div></div>`,
        `<div id="arraySum"><h2>3. Array Sum</h2><div class="assert-container"></div></div>`,
        `<div id="stringOfFirstLetters"><h2>4. String Of First Letters</h2><div class="assert-container"></div></div>`,
        `<div id="combineArrays"><h2>5. Combine Arrays</h2><div class="assert-container"></div></div>`,
        `<div id="numberToDigitArray"><h2>6. Number to Digit Array</h2><div class="assert-container"></div></div>`,
        `<div id="translateToPigLating"><h2>7. Tranlate To Pig Latin</h2><div class="assert-container"></div></div>`,
        `<div id="translateToMorse"><h2>8. Translate To Morse</h2><div class="assert-container"></div></div>`,
        `<div id="translateToMorseFancy"><h2>9. Translate To Morse Fancy</h2><div class="assert-container"></div></div>`,
    ];

    const fileref = document.createElement('link');
    fileref.setAttribute('rel', 'stylesheet');
    fileref.setAttribute('type', 'text/css');
    fileref.setAttribute(
        'href',
        'https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.min.css'
    );
    document.getElementsByTagName('head')[0].appendChild(fileref);

    containers.forEach((html) => appendTo($assertContainer, html));
})();

(function assertReverseArray() {
    const $assertContainer = document.querySelector(
        '#getLargestItemInArray .assert-container'
    );

    assertFunctionExists('getLargestItemInArray', $assertContainer);
})();

(function assertReverseArray() {
    const $assertContainer = document.querySelector(
        '#reverseArray .assert-container'
    );

    assertFunctionExists('reverseArray', $assertContainer);
})();

(function assertArraySum() {
    const $assertContainer = document.querySelector(
        '#arraySum .assert-container'
    );

    assertFunctionExists('arraySum', $assertContainer);
})();

(function assertStringOfFirstLetters() {
    const $assertContainer = document.querySelector(
        '#stringOfFirstLetters .assert-container'
    );

    assertFunctionExists('stringOfFirstLetters', $assertContainer);
})();

(function assertCombineArrays() {
    const $assertContainer = document.querySelector(
        '#combineArrays .assert-container'
    );

    assertFunctionExists('combineArrays', $assertContainer);
})();

(function assertNumberToDigitArray() {
    const $assertContainer = document.querySelector(
        '#numberToDigitArray .assert-container'
    );

    assertFunctionExists('numberToDigitArray', $assertContainer);
})();

(function assertTranslateToPigLating() {
    const $assertContainer = document.querySelector(
        '#translateToPigLating .assert-container'
    );

    assertFunctionExists('translateToPigLating', $assertContainer);
})();

(function assertTranslateToMorse() {
    const $assertContainer = document.querySelector(
        '#translateToMorse .assert-container'
    );

    assertFunctionExists('translateToMorse', $assertContainer);
})();

(function assertTranslateToMorseFancy() {
    const $assertContainer = document.querySelector(
        '#translateToMorseFancy .assert-container'
    );

    assertFunctionExists('translateToMorseFancy', $assertContainer);
})();

(function countTotals() {
    const $assertContainers = document.querySelectorAll('.assert-container');

    $assertContainers.forEach(($assertContainer) => {
        const $all = $assertContainer.querySelectorAll('.asserter');
        const $success = $assertContainer.querySelectorAll('.asserter.success');

        appendTo(
            $assertContainer,
            `<p style="border-top: 1px solid white; padding-top: .8em;">${
                $success.length === $all.length ? success() : fail()
            } ${$success.length}/${$all.length} assertions succeeded (${
                ($success.length * 100) / $all.length
            }%) </p>`
        );
    });
})();
