function User(username,isLoggedIn){
    this.username = username;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const user1 = new User("sk",false);
const user2 = new User("rk",true);

// error: user1 is overwritten by user2, thus to create seperate instance use new keyword


console.log("user1: ",user1);
