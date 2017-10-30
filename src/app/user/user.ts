import {Meta} from './meta';
import {Injectable} from '@angular/core';

@Injectable()
export class User {
  private access: string;
  private id: string;

  constructor(private meta:Meta) {
  }

  public getMeta(): Meta {
    return this.meta;
  }

  public getAccess(): string {
    return this.access;
  }

  public getId(): string {
    return this.id;
  }

  public createFrom(rawData: any):any {
    this.meta.createFrom(rawData);
    this.access = rawData.access;
    this.id = rawData.id;
    return {meta: this.meta, access: this.access, id: this.id};
  }
}
