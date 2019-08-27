import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
import { FormBuilder,Validator } from '@angular/forms';//vailidator specify in validator classa
import {passwordValidator} from './shared/password-validator'
import {RegistrationService} from './registration.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{//We want to subscribe email on ngOninit lifecycle hook for email validation
  
 
  
  registrationForms : FormGroup

  get userName()//to use this refernce we can make html code cleaner by direct calling this method
  {
    return this.registrationForms.get('userName');
  }
  get email()//to use this refernce we can make html code cleaner by direct calling this method
  {
    return this.registrationForms.get('email');
  }
  get alternateEmails()//for calling this feild 
  {
    return this.registrationForms.get('alternateEmails') as FormArray;
  }
  addAlternateEmail()//on calling this method form contrlis addes to formcontrol array
  {
    this.alternateEmails.push(this.fb.control(''))
  }
  
  constructor(private fb :FormBuilder,private registrationService : RegistrationService){}
  ngOnInit()///We want to subscribe email on ngOninit lifecycle hook for email validation
  {
    this.registrationForms = this.fb.group({//on form builder group method is calling for formFroupObject Creation 
      //this get formControl feild as key in this construtor
  userName : ['Rakesh',[Validators.required,Validators.minLength(3)]],//spcifying validation rule to form control
  email : [],
  subscribe : [false],//addes both this feild
  password : ['8889888'],
  confirmPassword : [],
  address : this.fb.group({
    city :['indore'],
    state : [],
    postalCode : []
  }),alternateEmails : this.fb.array([])//creting array type form control feild which will be genrate at form feild on user action
    },{validator : passwordValidator});//validator on formGroup not on the formControl for holding all values of the form
    this.registrationForms.get('subscribe').valueChanges //for holding subsribe feild value and apply validation email according to this checkd and unchecked value
    .subscribe(checkedValue =>{
      const email = this.registrationForms.get('email');
      if(checkedValue)
      {
        email.setValidators(Validators.required)//call this mehod if subscribe value is checked
      }
      else{
        email.clearValidators();//call this mehod if subscribe value is unchecked
      }
      email.updateValueAndValidity();//finally call this method for checking email final condition
    })
  }
 

  
 /*registrationForms = new FormGroup(//this FormGroup class object is initialize by formControl object hence 
  //in form group constructor
   {
      userName  : new FormControl('Sonali'),
      password  : new FormControl(''),
      confirmPassword  : new FormControl(''),
      address :new FormGroup(//this address contain formControl field hence create by FormGroup to group togethe formControl method
        {
          city : new FormControl(''),
          state : new FormControl(''),
          postalCode :new FormControl('')

        })//to associate this module with view there is certain directive on html form and registrationForms bind this 
        //html form with FormGroup and formControl feild
   }
 );*/
 onLoadApi()
 {
   this.registrationForms.setValue({//this setValue method accept an object whitch mathces the structure 
    //of form group with control names as keys and have to pass all  feilds which is availanel in form
    userName :'Vaibhav',
    password  : '1234',
    confirmPassword  : '1234',
    address :
    {
      city : 'ujjain',
      state : 'mp',
      postalCode : 456001
    }
   });
 }
 onLoadApi1()
 {
   this.registrationForms.patchValue({//this patchValue  method accept an object whitch mathces the structure 
    //of form group with control names as keys and can pass only few feild as well
    userName :'Vaibhav',
    password  : '1234',
    confirmPassword  : '1234',
   });
 }
 onSubmit()
 {
   console.log(this.registrationForms.value);
   this.registrationService.register(this.registrationForms.value)
   .subscribe(
     response =>console.log('Success!!!!!!!',response),
     error =>console.error('Error',error)
   );
 }
}
