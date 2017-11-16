import {UserGithubInterface} from './user';
export interface GameInterface {
  competitors: any;
  created: string;
  id: string;
  location: string;
  name: string;
  schedule: any;
  status: string;
  rules: string[];
  table: any;
}
export interface addPlayerInterface {
  uid: string;
  club: string;
}

export interface addGameInterface {
  name: string;
  location: string;
  players?: UserGithubInterface[];
}
