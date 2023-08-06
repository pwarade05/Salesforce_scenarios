import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';



const columns = [
   { label: 'Name', fieldName: 'Name', editable: true },
  { label: 'Country', fieldName: 'Country__c', editable: true },
  { label: 'State', fieldName: 'State__c', editable: true },
  { label: 'City', fieldName: 'City__c', editable: true }
];

 
export default class ModalSubscriberCompo extends LightningElement {
    addressRecordList;
   columns=columns;

   connectedCallback(){
      pubsub.subscribe("eventName" , (message) => {
          this.addressRecordList = message //Return Address List
       });
  }
}