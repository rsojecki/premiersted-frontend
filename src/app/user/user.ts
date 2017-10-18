import {Meta} from './meta';
import {Injectable} from '@angular/core';

@Injectable()
export class User {
  private meta: Meta;
  private access: string;

  constructor(private MetaData:Meta) {
  }

  public createFrom(rawData: any):any {
    this.meta = this.MetaData.createFrom(rawData);
    this.access = rawData.access;
    return {meta: this.meta, access: this.access};
  }
}
