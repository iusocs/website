import {Control} from '@angular/common';
export class MyValids {
    static realEmail(control: Control){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = re.test(control.value);
        if (valid){
            return null
        } else {
            return {realEmail: true}
        }
    }
}
