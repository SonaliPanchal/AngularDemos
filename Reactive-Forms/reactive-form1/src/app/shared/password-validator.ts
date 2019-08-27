import { AbstractControl } from "@angular/forms";

export function passwordValidator(control : AbstractControl):{ [key : string]:boolean} |null {
const password = control.get('password');
const confirmPassword = control.get('confirmPassword');
if(password.pristine || confirmPassword.pristine)//this condtion is to not show any error message without 
//changing the confirm password feild
{
    return null;
}
return password && confirmPassword && password.value != confirmPassword.value ?
{'misMatch' : true} :
null;
}