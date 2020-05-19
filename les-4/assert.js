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
            `<p class="asserter fail">${fail()} <code>${functionName}(${paramsString.substring(
                1,
                paramsString.length - 1
            )})</code> did not return <code>${expectedString}</code></p><p>${spacing()} it returned: <code>${actualString}</code></p>`
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
    assertResult(
        $assertContainer,
        functionName,
        ['A glittering gem is not enough.', 'empty'],
        0
    );
    assertResult(
        $assertContainer,
        functionName,
        ['Soms met een hoofdletter, soms niet.', 'soms'],
        2
    );
    assertResult(
        $assertContainer,
        functionName,
        [
            "(Hell) And it's gonna be swell\n" +
                "We have a show and we're gonna be late\n" +
                "(Hell) And it's gonna be great\n" +
                "We're in a rush and we're wasting our time\n" +
                "(Hell) And it's gonna be fine",
            'gonna',
        ],
        4
    );
})();

(function assertScrabbleScoreCalculator() {
    const functionName = 'scrabbleScoreCalculator';
    const $assertContainer = document.querySelector(
        '#scrabbleScoreCalculator .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult($assertContainer, functionName, ['elapse', [], 1], 8);
    assertResult(
        $assertContainer,
        functionName,
        ['elapse', [{ index: 2, multiplier: 3 }], 1],
        10
    );
    assertResult(
        $assertContainer,
        functionName,
        [
            'elapse',
            [
                { index: 2, multiplier: 3 },
                { index: 4, multiplier: 2 },
            ],
            1,
        ],
        11
    );
    assertResult($assertContainer, functionName, ['elapse', [], 3], 24);
    assertResult(
        $assertContainer,
        functionName,
        [
            'elapse',
            [
                { index: 2, multiplier: 3 },
                { index: 4, multiplier: 2 },
            ],
            2,
        ],
        22
    );
    assertResult($assertContainer, functionName, ['chimpanzee', [], 1], 28);
    assertResult(
        $assertContainer,
        functionName,
        ['chimpanzee', [{ index: 5, multiplier: 3 }], 1],
        30
    );
    assertResult(
        $assertContainer,
        functionName,
        ['chimpanzee', [{ index: 22, multiplier: 3 }], 1],
        28
    );
})();

(function assertScrabbleScoreCalculator() {
    const functionName = 'isPangram';
    const $assertContainer = document.querySelector(
        '#isPangram .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        ['The quick brown fox jumps over the lazy dog'],
        true
    );
    assertResult($assertContainer, functionName, ['Not a pangram'], false);
    assertResult(
        $assertContainer,
        functionName,
        ['Op brute wijze ving de schooljuf de quasi-kalme lynx'],
        true
    );
})();

(function assertScrabbleScoreCalculator() {
    const functionName = 'findAnagrams';
    const $assertContainer = document.querySelector(
        '#findAnagrams .assert-container'
    );

    assertFunctionExists(functionName, $assertContainer);
    assertResult(
        $assertContainer,
        functionName,
        ['master', ['stream', 'pigeon', 'maters']],
        ['stream', 'maters']
    );
    assertResult(
        $assertContainer,
        functionName,
        ['panels', ['Naples', 'planes', 'lanes']],
        ['Naples', 'planes']
    );
    assertResult(
        $assertContainer,
        functionName,
        ['diagnose', ['agonised', 'San Diego', 'sondage']],
        ['agonised', 'San Diego']
    );
    assertResult(
        $assertContainer,
        functionName,
        ['an aisle', ['is a lane', 'aliens', 'saline']],
        ['is a lane']
    );
})();
