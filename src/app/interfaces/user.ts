export interface UserInterface {
  avatar_url:string;
  name:string;
  id:string;
}

export interface MetaInterface {
  avatar_url:string;
  name:string;
  login:string;
  email:string;
  provider:string;
}

export interface UserGithubInterface {
  id:string;
  access:string;
  meta:MetaInterface;
}
