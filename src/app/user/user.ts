import {Meta} from './meta';
import {Injectable} from '@angular/core';

@Injectable()
export class User {
  private access: string;

  constructor(private meta:Meta) {
  }

  public getMeta(): Meta{
    return this.meta;
  }

  public getAccess(): string{
    return this.access;
  }

  public createFrom(rawData: any):any {
    this.meta.createFrom(rawData);
    this.access = rawData.access;
    return {meta: this.meta, access: this.access};
  }
}
