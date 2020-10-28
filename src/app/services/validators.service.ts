import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  /**
   * Simula un método asíncrono que hace una petición
   * @param control 
   */
  emailForbiddenAsinc(control) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value.startsWith('admin') ||control.value.startsWith('root') ||control.value.startsWith('sysadmin')) {
          resolve({ emailForbidden: true });
        }
        resolve(null);
      }, 3000);
    });


  }
}
