import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // if you turn this is authenticated to false, you wouldnt be able to reach the protected routes
  isAuthenticated(){
  	return true;
  }

  // if you change this Admin to anything else it wouldnt let u in
  decode(){
  	return { 'name':'mohamed' , 'Role': 'Admin' };
  }
}
