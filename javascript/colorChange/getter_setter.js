class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._emailtoUpperCase()
    }

    set email(value){
         this._email = value
    }
    get password(){
        return `${this._password}faisal`
    }

    set password(value){
         this._password = value
    }
}

const faisal = new User("faisal@gmail.com", "123")
console.log(faisal.password);