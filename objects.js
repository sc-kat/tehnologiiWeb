const user = {
  name: "Adrian",
  sayHello: function () {
    return "Hello, " + this.name;
  },

  sayHello2: () => {
    return "Hello, " + this.name;
  },
};

console.log(user.name);
console.log(user.sayHello()); /* de ce imi returneaza undefined?  */
console.log(user.sayHello2());
