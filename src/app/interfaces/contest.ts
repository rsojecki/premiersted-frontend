import {UserInterface} from './user';
export interface ContestInterface {
  comment:string;
  gid:string;
  home:UserInterface;
  visitor:UserInterface;
  id:String;
  rematch:String;
  result:any;
  scheduled:string;
  status:string;
  updated:string;
}
