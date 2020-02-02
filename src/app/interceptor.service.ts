import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError, from } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

    debug = false;
    url = "";
    
  constructor(
    private storage: Storage
  ) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const TOKEN_KEY = 'ACCESS_TOKEN';
    // YOU CAN ALSO DO THIS
    // const token = this.authenticationService.getToke()

    return from(this.storage.get("ACCESS_TOKEN"))
        .pipe(
            switchMap(token => {

                console.log("TOKEN", token);
                if (token) {
                    request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
                }

                if (!request.headers.has('Content-Type')) {
                    request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
                }

                if (this.debug) {
                    request = request.clone({ url: this.url + request.url + '?XDEBUG_SESSION_START=1'});
                }

                return next.handle(request).pipe(
                    map((event: HttpEvent<any>) => {
                        if (event instanceof HttpResponse) {
                            // do nothing for now
                        }
                        return event;
                    }),
                    catchError((error: HttpErrorResponse) => {
                        const status =  error.status;
                        const reason = error && error.error.reason ? error.error.reason : '';

                        // this.presentAlert(status, reason);
                        return throwError(error);
                    })
                );
            })
        );


}
}
