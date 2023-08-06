import { LightningElement, wire } from 'lwc';
import MYCHANNEL from "@salesforce/messageChannel/ApplicantDataChannel__c";
import { APPLICATION_SCOPE, MessageContext, subscribe } from 'lightning/messageService';


const columns = [
    { label: 'Name', fieldName: 'Name', editable: true },
   { label: 'Country', fieldName: 'Country__c', editable: true },
   { label: 'State', fieldName: 'State__c', editable: true },
   { label: 'City', fieldName: 'City__c', editable: true }
 ];
 
export default class ModalReceiverLmsCmpo extends LightningElement {

    addressRecordList;
    columns = columns;

    @wire(MessageContext)
    context

    connectedCallback(){
        this.receiveDataHandler()
    }

    receiveDataHandler(){
        subscribe(this.context, MYCHANNEL, (message)=>{this.handleMessage(message)}, {scope : APPLICATION_SCOPE})
    }

    handleMessage(message){
        this.addressRecordList = message.addressListLms.value
    }
}