import {UserInterface} from './user';
import {ResultInterface} from './result';
export interface ContestInterface {
  comment:string;
  gid:string;
  home:UserInterface;
  visitor:UserInterface;
  id:String;
  rematch:String;
  result:ResultInterface;
  scheduled:string;
  status:string;
  updated:string;
}
