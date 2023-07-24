import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateAccountForm extends LightningElement {
    successToastMessage(){
        const evt = new ShowToastEvent({
           title: 'Account created',
           message: 'Record has been created',
           variant: 'success',
       });
       this.dispatchEvent(evt);
  
      }
  }
  