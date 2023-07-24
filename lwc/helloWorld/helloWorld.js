import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    name; //undefined
    firstName  = 'Mahindra' //string
    lastName = '& Mahindra'; //string
    age = 25; //number
    salary = 50000.23; //Decimal
    flag = true; //boolean
    date = new Date(); // date

    objAcc = {'sObjectType' : 'Account'}; //Standard obj create
    objApp = {'sObjectType' : 'Applicant__c'}; //Custom obj create

    objAcc = {'Name' : 'Electro Mall' , 
              'Rating' : 'Hot' , 
              'SLA__c' : 'Gold'};

    objApp = {'First_Name__c' : 'Guru' , 
            'Last_Name__c' : 'Modi' , 
            'Gender__c' : 'Male'};

    empList = ['Shanta','Shakira','Nayan'];

    display(){

    }

    get calculations(){
        return 'Bunty';
    }

    get myName(){
        return this.objAcc.Name;
    }

    get myAge(){
        return this.age;
    }

}