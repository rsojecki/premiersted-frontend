import {Injectable} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
@Injectable()
export class Meta {
  private avatar_url: SafeStyle;
  private email: string;
  private login: string;
  private name: string;
  private provider: string;

  constructor(private sanitizer: DomSanitizer) {

  }

  public getAvatar_url(): SafeStyle {
    return this.avatar_url;
  }

  public getEmail(): string {
    return this.email;
  }

  public getLogin(): string {
    return this.login;
  }

  public getName(): string {
    return this.name;
  }

  public getProvider(): string {
    return this.provider;
  }

  public createFrom(rawData: any):any {
    this.avatar_url = this.sanitizer.bypassSecurityTrustStyle('url("' + rawData.meta.avatar_url + '")');
    this.email = rawData.meta.email;
    this.login = rawData.meta.login;
    this.name = rawData.meta.name;
    this.provider = rawData.meta.provider;
    return {avatar_url: this.avatar_url, email: this.email, login: this.login, name: this.name, provider: this.provider};
  }
}
