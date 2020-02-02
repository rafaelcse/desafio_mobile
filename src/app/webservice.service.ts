import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  public url = "http://desafio.test/api";

  debug: any;
  constructor(
    private http: HttpClient,
    private storage: Storage
  ) { }


  sendpost(url: string, obj: object) {
    // let headers = {
    //   "Content-Type": "application/json"
    // };
    return this.http.post(this.url + url, obj).toPromise();
    // return this.http.post(url, obj, this.httpOptions).toPromise();
  }

  post(endpoint, parametros) {
    this.http.post(this.url + endpoint, parametros).subscribe(res => {
      // this.message = res['results'][0].name;
      console.log(res);
    });
  }



}


