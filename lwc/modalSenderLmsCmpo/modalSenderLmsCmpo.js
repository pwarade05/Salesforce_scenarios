import { LightningElement, track, wire } from 'lwc';
import MYCHANNEL from "@salesforce/messageChannel/ApplicantDataChannel__c";
import { MessageContext, publish } from 'lightning/messageService';

import searchAddressRecords from '@salesforce/apex/ApplicantProvider.searchAddressRecords';

export default class ModalSenderLmsCmpo extends LightningElement {

    @track applicantObj ={'sObjectType' : 'Applicant__c'};
    addressList;

    @wire(MessageContext)
    context


    appFirstNameHandler(event){
        this.applicantObj.First_Name__c = event.target.value;
    }

    appLastNameHandler(event){
        this.applicantObj.Last_Name__c = event.target.value;
    }

    searchAddressRecordsHandler(){

        searchAddressRecords({'objApp' : this.applicantObj})
        .then(result=>{
            console.log(result);
            this.addressList = result;

            const message={
                addressListLms:{
                    value:this.addressList
                }
            }

            publish(this.context, MYCHANNEL, message);

        })
        .catch(error=>{
            console.log(error);
        })
    }
    
}