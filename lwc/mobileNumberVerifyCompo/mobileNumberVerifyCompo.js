import { LightningElement, api } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';
import verifyMobile from '@salesforce/apex/ContactRequestAPI.verifyMobile';

export default class MobileNumberVerifyCompo extends LightningElement {
    @api recordId;

    verifyMobileHandler(){
        console.log(this.recordId);

        verifyMobile({'contactRecordId' : this.recordId})
        .then(result=>{
            console.log(result);
            this.dispatchEvent(new CloseActionScreenEvent());
        })
        .catch(error=>{
            console.log(error);
            this.dispatchEvent(new CloseActionScreenEvent());
        })
    }
}