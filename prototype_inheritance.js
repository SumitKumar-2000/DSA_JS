const p1 = {
    fname: "s",
    lname: "k",
    getFullName: function(){
        return `${this.sname} ${this.lname}`
    }
}

const p2 = Object.create(p1);

console.log(p2.fname)
console.log(p2.lname)
console.log(p2.getFullName())