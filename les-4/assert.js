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
        `<div id="wordCount"><h2>1. Get the number of occurrences of a word in a sentence</h2><div class="assert-container"></div></div>`,
        `<div id="scrabbleScoreCalculator"><h2>2. Scrabble score calculator</h2><div class="assert-container"></div></div>`,
        `<div id="isPangram"><h2>3. Determine if sentence is a pangram</h2><div class="assert-container"></div></div>`,
        `<div id="findAnagrams"><h2>4. Find all anagrams</h2><div class="assert-container"></div></div>`,
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

(function assertWordCount() {
    const functionName = 'wordCount';
    const $assertContainer = document.querySelector(
        '#wordCount .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        ['Ik heb honger, heb jij ook honger.', 'heb'],
        2
    );
})();

(function assertScrabbleScoreCalculator() {
    const functionName = 'scrabbleScoreCalculator';
    const $assertContainer = document.querySelector(
        '#scrabbleScoreCalculator .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
})();

(function assertScrabbleScoreCalculator() {
    const functionName = 'isPangram';
    const $assertContainer = document.querySelector(
        '#isPangram .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
})();

(function assertScrabbleScoreCalculator() {
    const functionName = 'isPangram';
    const $assertContainer = document.querySelector(
        '#isPangram .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
})();
