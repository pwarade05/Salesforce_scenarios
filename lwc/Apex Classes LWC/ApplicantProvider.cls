public with sharing class ApplicantProvider {

    @AuraEnabled
    public static List<Address__c> searchAddressRecords(Applicant__c objApp){

       Id appLId =  [select Id from Applicant__c where First_Name__c =: objApp.First_Name__c and Last_Name__c =: objApp.Last_Name__c].Id;

       return  [select Id,Name,City__c, State__c, Country__c from Address__c where Applicant__c =: appLId];
    }
}

