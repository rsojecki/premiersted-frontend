import {UserInterface} from './user';
import {ResultInterface} from './result';
import {ClubInterface} from './club';
export interface ContestInterface {
  comment: string;
  gid: string;
  home: LinkInterface;
  visitor: LinkInterface;
  id: string;
  rematch: string;
  result: ResultInterface;
  scheduled: string;
  status: string;
  updated: string;
}

export interface LinkInterface {
  user: UserInterface;
  club?: ClubInterface;
}
