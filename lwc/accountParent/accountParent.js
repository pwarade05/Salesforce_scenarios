import { LightningElement } from 'lwc';
import searchConRecords from '@salesforce/apex/CommunicationProvider.searchConRecords';
export default class AccountParent extends LightningElement {
    objAccount ={'sObject' : 'Account'};
    conList;

    nameHandler(event){
        this.objAccount.Name = event.target.value;
        console.log(this.objAccount.Name);
    }

    searchContactHandler(){
        searchConRecords({'objAcc' : this.objAccount})
        .then(result=>{
            console.log(result);
            this.conList = result;
            console.log(this.conList);
        })
        .catch(error=>{
            console.log(error);
        })
    }
}