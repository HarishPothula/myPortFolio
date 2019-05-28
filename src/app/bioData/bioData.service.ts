import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BioDataService {
  private restURL = 'http://localhost:3000/bioData';

  constructor(protected http: HttpClient) {
  }

  public getUrl(): string {
    return this.restURL;
  }

  public bioData(): Observable<any> {
    const URL = this.restURL;
    return this.http.get(URL);
  }
}
