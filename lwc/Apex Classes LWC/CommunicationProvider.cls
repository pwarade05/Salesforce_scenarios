public with sharing class CommunicationProvider {
  
    @AuraEnabled
    public static List<Contact> searchConRecords(Account objAcc){
        
        Id accId = [select Id from Account where Name=: objAcc.Name].Id;

        system.debug('Recevied= '+objAcc);
        system.debug('ID '+accId);
        system.debug('Address '+[select Id, Salutation, FirstName, LastName, Email from Contact where AccountId =: accId]);
       

        return [select Id, Salutation, FirstName, LastName, Email from Contact where AccountId =: accId];
    }
}