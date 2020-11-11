// function selfResolve(val) {
//   newPromise.state = 'resolved';
//   newPromise.result = val;
// }
//
// function selfRejected(error) {
//   newPromise.state = 'rejected';
//   newPromise.result = error;
// }
//
// function SelfPromise(callback) {
//   callback(selfResolve, selfRejected)
// }

function newPromiseCallback(resolve, reject) {
  setTimeout(function () {
    resolve('Hello Promise');
    // reject(new Error('Hello Error'));
  }, 2000);
}

let newPromise = new Promise(newPromiseCallback);

console.log(newPromise);

function newPromiseResolved(result) {
  console.log(result);
}

function newPromiseError(error) {
  console.log(error);
}

function newPromiseDone() {
  console.log("I'm done");
}

// newPromise.then(newPromiseResolved);
// newPromise.catch(newPromiseError);
// newPromise.finally(newPromiseDone).then(newPromiseResolved, newPromiseError);

setTimeout(function () {
  newPromise.finally(newPromiseDone);
}, 5000);

function loadScriptPr(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
  });
}

loadScriptPr('/article/promise-chaining/one.js')
  .then(function (script) {
    return loadScriptPr('/article/promise-chaining/two.js');
  })
  .then(function (script) {
    return loadScriptPr('/article/promise-chaining/three.js');
  })
  .then(function (script) {
    // use functions declared in scripts
    // to show that they indeed loaded
    // one();
    // two();
    // three();
  })
  .catch(function (error) {
    console.log(error);
  });

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}

loadScript('1.js', function (error, script) {
  if (error) {
    // handleError(error);
  } else {
    // ...
    loadScript('2.js', function (error, script) {
      if (error) {
        // handleError(error);
      } else {
        // ...
        loadScript('3.js', function (error, script) {
          if (error) {
            // handleError(error);
          } else {
            // ...continue after all scripts are loaded (*)
          }
        });
      }
    });
  }
});
