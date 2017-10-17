import {Injectable} from '@angular/core';
@Injectable()
export class Meta {
  private avatar_url: string;
  private email: string;
  private login: string;
  private name: string;
  private provider: string;

  public createFrom(rawData: any):any {
    this.avatar_url = rawData.meta.avatar_url;
    this.email = rawData.meta.email;
    this.login = rawData.meta.login;
    this.name = rawData.meta.name;
    this.provider = rawData.meta.provider;
    return {avatar_url: this.avatar_url, email: this.email, login: this.login, name: this.name, provider: this.provider};
  }
}
