import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { faDiagramNext } from "@fortawesome/free-solid-svg-icons";

@Injectable()
 export class AuthInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken=this.authService.getToken();
        if(authToken){
       const authReq=req.clone({
            headers:req.headers.set('Authorization','Bearer'+ authToken)
        });
        return next.handle(authReq);  
    } else{
        return next.handle(req);
    }
 }
}