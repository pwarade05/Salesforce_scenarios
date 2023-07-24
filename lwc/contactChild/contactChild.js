import { LightningElement, api} from 'lwc';

export default class ContactChild extends LightningElement {
    @api receivedContactList;
  
    draftValues=[];

    contactColumns =[
        { label: 'Salutation', fieldName: 'Salutation', editable: true },
        { label: 'First Name', fieldName: 'FirstName', editable: true },
        { label: 'Last Name', fieldName: 'LastName', editable: true},
        { label: 'Email ID', fieldName: 'Email', editable: true}
    ];
}
