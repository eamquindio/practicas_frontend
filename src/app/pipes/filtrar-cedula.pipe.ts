import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarCedula'
})
export class FiltrarCedulaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultUsers = [];

    for (const user of value) {
        if (user.identifier.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          resultUsers.push(user);
        }
    }
    return resultUsers;
  }

}
