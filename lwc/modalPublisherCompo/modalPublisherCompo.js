import { LightningElement, track } from 'lwc';
import pubsub from 'c/pubsub';
import searchAddressRecords from '@salesforce/apex/ApplicantProvider.searchAddressRecords';


export default class ModalPublisherCompo extends LightningElement {
    @track applicantObject = {'sObjectType' : 'Applicant__c'};
    addressList;
    
    applicantFirstNameHandler(event){
        this.applicantObject.First_Name__c = event.target.value;
        
    }
    applicantLastNameHandler(event){
        this.applicantObject.Last_Name__c = event.target.value;
       
    }
    
    searchAddressRecordsHandler(){
        
       //Calling Apex Method searchAddressRecords
       searchAddressRecords({'objApp' : this.applicantObject})
       .then(result=>{
           console.log(result);
           this.addressList = result;
    
           //Send Data to PubSub
           pubsub.publish('eventName' , this.addressList);
           
       })
       .catch(error=>{
           console.log(error);
           
       })
    
       
    }
    
    }
    