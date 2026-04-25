const student = {
    fname: "sumit",
    lname: "kumar",
    age: 24,
}

const proxyStudent = new Proxy(student, {
    get(target, property){
        if(property in target) return Reflect.get(target, prop);
        throw new Error("Property not found with in the object")
    },

    set(target, property, value){
        if(!(property in target)) throw new Error(`${property} does not exist`);

        switch(property){
            case "fname": 
            case "lname": 
                if(typeof value !== "string") throw new Error(`${property} must be string`)
            case "age":
                if(typeof value !== "number") throw new Error(`${property} must be number`)
                if(value <= 0) throw new Error(`${property} can't be less than 1`)
        }

        // Default Case
        Reflect.set(target, value);
        target[property] = value;
    }
})


proxyStudent.agee = 100
console.log(proxyStudent);