console.log('Assert ready!');

function loadCss(filename) {}

function appendTo($element, html) {
    $element.innerHTML += html;
}

function spacing() {
    return '<span style="color: transparent; display: inline-block; width: 5rem;"></span>';
}

function fail() {
    return '<span style="color: indianred; display: inline-block; width: 5rem;">[fail]</span>';
}

function success() {
    return '<span style="color: lawngreen; display: inline-block; width: 5rem;">[success]</span>';
}

function assertFunctionExists(functionName, $assertContainer) {
    if (typeof window[functionName] === 'function') {
        appendTo(
            $assertContainer,
            `<p class="asserter success">${success()} Function <code>${functionName}()</code> found</p>`
        );
    } else {
        appendTo(
            $assertContainer,
            `<p class="asserter fail">${fail()} Function <code>${functionName}()</code> not found</p>`
        );
    }
}

function assertResult($assertContainer, functionName, params, expected) {
    const paramsString = JSON.stringify(params);
    const expectedString = JSON.stringify(expected);
    const actualString = JSON.stringify(
        window[functionName].apply(this, params)
    );

    if (expectedString === actualString) {
        appendTo(
            $assertContainer,
            `<p class="asserter success">${success()} <code>${functionName}(${paramsString.substring(
                1,
                paramsString.length - 1
            )})</code> did return <code>${expectedString}</code></p>`
        );
    } else {
        appendTo(
            $assertContainer,
            `<p class="asserter fail">${fail()} ${functionName}(${paramsString.substring(
                1,
                paramsString.length - 1
            )}) did not return ${expectedString}</p><p>${spacing()} it returned: ${actualString}</p>`
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
    const functionName = 'getLargestItemInArray';
    const $assertContainer = document.querySelector(
        '#getLargestItemInArray .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult($assertContainer, functionName, [[1, 2, 3]], 3);
    assertResult($assertContainer, functionName, [[9, 2, 3, 6]], 9);
})();

(function assertReverseArray() {
    const functionName = 'reverseArray';
    const $assertContainer = document.querySelector(
        '#reverseArray .assert-container'
    );

    assertFunctionExists('reverseArray', $assertContainer);
    assertResult($assertContainer, functionName, [[1, 2, 3]], [3, 2, 1]);
    assertResult(
        $assertContainer,
        functionName,
        [[5, 2, 3, 9, 12]],
        [12, 9, 3, 2, 5]
    );
})();

(function assertArraySum() {
    const functionName = 'arraySum';
    const $assertContainer = document.querySelector(
        '#arraySum .assert-container'
    );

    assertFunctionExists('arraySum', $assertContainer);
    assertResult($assertContainer, functionName, [[1, 2, 3]], 6);
    assertResult($assertContainer, functionName, [[2, 11, 7, 12]], 32);
    assertResult($assertContainer, functionName, [[2, 11, -4]], 9);
})();

(function assertStringOfFirstLetters() {
    const functionName = 'stringOfFirstLetters';
    const $assertContainer = document.querySelector(
        '#stringOfFirstLetters .assert-container'
    );

    assertFunctionExists('stringOfFirstLetters', $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        [['home', 'away', 'back', 'forth']],
        'habf'
    );
    assertResult(
        $assertContainer,
        functionName,
        [['Dog', 'cat', 'snake']],
        'Dcs'
    );
    assertResult(
        $assertContainer,
        functionName,
        [['Cat', 'ostrich', 'owl', 'leopard']],
        'Cool'
    );
})();

(function assertCombineArrays() {
    const functionName = 'combineArrays';
    const $assertContainer = document.querySelector(
        '#combineArrays .assert-container'
    );

    assertFunctionExists('combineArrays', $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        [
            ['a', 'b', 'c'],
            [1, 2, 3],
        ],
        ['a', 1, 'b', 2, 'c', 3]
    );
    assertResult(
        $assertContainer,
        functionName,
        [
            ['a', 'b', 'c'],
            [1, 2, 3, 4, 5],
        ],
        ['a', 1, 'b', 2, 'c', 3, 4, 5]
    );
    assertResult(
        $assertContainer,
        functionName,
        [
            ['a', 'b', 'c', 'd', 'e'],
            [1, 2],
        ],
        ['a', 1, 'b', 2, 'c', 'd', 'e']
    );
})();

(function assertNumberToDigitArray() {
    const functionName = 'numberToDigitArray';
    const $assertContainer = document.querySelector(
        '#numberToDigitArray .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult($assertContainer, functionName, [2342], [2, 3, 4, 2]);
    assertResult($assertContainer, functionName, [1], [1]);
    assertResult(
        $assertContainer,
        functionName,
        [2057830],
        [2, 0, 5, 7, 8, 3, 0]
    );
})();

(function assertTranslateToPigLating() {
    const functionName = 'translateToPigLating';
    const $assertContainer = document.querySelector(
        '#translateToPigLating .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        ['the quick brown fox'],
        'hetay uickqay rownbay oxfay'
    );
    assertResult(
        $assertContainer,
        functionName,
        ['The quick brown fox'],
        'Hetay uickqay rownbay oxfay'
    );
    assertResult(
        $assertContainer,
        functionName,
        ['My name is Slim Shady'],
        'Ymay amenay siay Limsay Hadysay'
    );
})();

(function assertTranslateToMorse() {
    const functionName = 'translateToMorse';
    const $assertContainer = document.querySelector(
        '#translateToMorse .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        ['abcdefghijklmnopqrstuvwxyz'],
        '*_|_***|_*_*|_**|*|**_*|__*|****|**|*___|_*_|*_**|__|_*|___|*__*|__*_|*_*|***|_|**_|***_|*__|_**_|_*__|__**'
    );
    assertResult(
        $assertContainer,
        functionName,
        ['Hello World'],
        '****|*|*_**|*_**|___| *__|___|*_*|*_**|_**|'
    );
    assertResult(
        $assertContainer,
        functionName,
        ['Weary stare'],
        '*__|*|*_|*_*|_*__| ***|_|*_|*_*|*|'
    );
    assertResult(
        $assertContainer,
        functionName,
        ['JavaScript is cool'],
        '*___|*_|***_|*_|***|_*_*|*_*|**|*__*|_| **|***| _*_*|___|___|*_**|'
    );
})();

(function assertTranslateToMorseFancy() {
    const functionName = 'translateToMorseFancy';
    const $assertContainer = document.querySelector(
        '#translateToMorseFancy .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        ['abcdefghijklmnopqrstuvwxyz'],
        '*_|_***|_*_*|_**|*|**_*|__*|****|**|*___|_*_|*_**|__|_*|___|*__*|__*_|*_*|***|_|**_|***_|*__|_**_|_*__|__**|'
    );
    assertResult(
        $assertContainer,
        functionName,
        ['Hello World'],
        '****|*|*_**|*_**|___ *__|___|*_*|*_**|_**'
    );
    assertResult(
        $assertContainer,
        functionName,
        ['Weary stare'],
        '*__|*|*_|*_*|_*__ ***|_|*_|*_*|*'
    );
    assertResult(
        $assertContainer,
        functionName,
        ['JavaScript is cool'],
        '*___|*_|***_|*_|***|_*_*|*_*|**|*__*|_ **|*** _*_*|___|___|*_**'
    );
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
