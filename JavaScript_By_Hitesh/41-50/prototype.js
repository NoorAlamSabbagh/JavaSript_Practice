// let myName = "Noor Alam"
// let myChannel = "Chai"
// console.log(myName.trim().length);


const myHeroes = ["Thor", "Spiderman", "IronMan"]


let heroPower = {
    Thor: "Hammer",
    Spiderman: "Sling",
    IronMan: "Suits",

    getSpiderPower: function(){
      console.log(`Spider power is $(this.SpiderMan)`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all Objects`)
}

// heroPower.hitesh();
myHeroes.hitesh()