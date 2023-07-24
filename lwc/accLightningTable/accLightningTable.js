import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import searchAccountRecordType from '@salesforce/apex/AccountProvider.searchAccountRecordType';
import deleteAccRecords from '@salesforce/apex/AccountProvider.deleteAccRecords';

export default class AccLightningTable extends LightningElement {

    objAccount={'sObjectType' : 'Account'};
    accList;
    showTableFlag = false;
    totalRecord = 0;
    selectedRecords;
    selectedRecordsCount = 0;

    draftValues=[];

    accColumns = [
        { label: 'Account Name', fieldName: 'Name', editable: true },
        { label: 'Type', fieldName: 'Type', editable: true },
        { label: 'Rating', fieldName: 'Rating', editable: true }
    ];


    typeHandler(event){
        this.objAccount.Type = event.target.value;

        searchAccountRecordType({'objAcc' : this.objAccount})
        .then(result=>{
            console.log(result);
            this.accList = result;

            if(JSON.stringify(result).length > 10){
                this.showTableFlag = true;
                this.totalRecord = result.length;
            }
            else{
                this.showTableFlag = false;
                this.totalRecord = 0;
            }
        })
        .catch(error=>{
            console.log(error);
            this.showTableFlag = false;
            this.totalRecord = 0;
        })
    }

        deleteRecordHandler(){

            deleteAccRecords({'accIdList' : this.selectedRecords, 'accObject' : this.objAccount})
            .then(result=>{
                this.accList = result;
                this.totalRecord = result.length;
                this.successToastMessage();
            })
            .catch(error=>{

            })
        }

        selectedRecordHandler(event){
            const selectedRows = event.detail.selectedRows;
            this.selectedRecordsCount = selectedRows.length;
            console.log(event.detail.selectedRows);
            let recordsSets = new Set();
            
            for(let i = 0; i < selectedRows.length; i++){
                recordsSets.add(selectedRows[i].Id);
            }
            this.selectedRecords = Array.from(recordsSets);
        }

        successToastMessage(){
            const evt = new ShowToastEvent({
               title: 'Account deleted',
               message: 'Record has been deleted',
               variant: 'success',
           });
           this.dispatchEvent(evt);
        }
    }


