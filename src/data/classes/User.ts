export class User{
  constructor(
    public email:string,
    protected password:string,
  ){}
}

export class UserRegistration extends User{
  constructor(
    email:string,
    public firstName:string,
    public lastName:string,
    public username:string,
    public password:string
  ){
    super(email,password);
  }
}

export class UserLogin extends User{
  constructor(
    email:string,
    public password:string
  ){
    super(email,password);
  }
}