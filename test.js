function testVar(active) {
  console.log(x);

  if (active === true) {
    var x = 10;
  }

  console.log(x); // x is accessible here because var is function-scoped
}

// testVar(true);

let number = 3;
number = 4;
