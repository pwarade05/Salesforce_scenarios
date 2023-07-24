import { LightningElement } from 'lwc';
import createNewContact from '@salesforce/apex/ContactProvider.createNewContact';

export default class CreateContact extends LightningElement {
    
    objContact = {'sObjectType' : 'Contact'};

    nameHandler(event){
        this.objContact.Salutation = event.target.value;
        console.log(this.objContact.Salutation);
    }

    firstHandler(event){
        this.objContact.FirstName = event.target.value;
        console.log(this.objContact.FirstName);
    }

    lastHandler(event){
        this.objContact.LastName = event.target.value;
        console.log(this.objContact.LastName);
    }

    emailHandler(event){
        this.objContact.Email = event.target.value;
        console.log(this.objContact.Email);
    }

    createContactHandler(){ //js controller Method
        console.log('Button Method Called');

        createNewContact({'objCon' : this.objContact}) //Apex controller method
        .then(success=>{
            console.log(success);
        })
        .catch(lochaHai=>{
            console.log(lochaHai);
        })
    }
}