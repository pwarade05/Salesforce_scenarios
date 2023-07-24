public with sharing class AccountProvider {

    // @AuraEnabled
    // public static String createNewAccount(Account objAcc){
    //     insert objAcc;
    //     return 'Your New Account has been created successfully....!!!';
    // }

    // @AuraEnabled
    // public static List<Account> searchAccountRecord(Account objAcc){
    //     try{
    //         return [select Id, Name, Rating, CreatedDate, SLA__c from Account where Name=: objAcc.Name];
    //     }
    //     catch (Exception e){
    //         return null;
    //     }
    // }

    @AuraEnabled
    public static List<Account> searchAccountRecordType(Account objAcc){
        try {
            system.debug('recived '+objAcc);
            return [select Id, Name, Type, Rating from Account where Type =: objAcc.Type];

        } catch (Exception e) {
            return null;
        }
    }

    @AuraEnabled
    public static List<Account> deleteAccRecords(List<Id> accIdList, Account accObject){
        try {
            Database.Delete([select id from Account where ID IN : accIdList], false);

            system.debug('problem '+accObject);
            return [select Id, Name, Rating, Type from Account where type=: accObject.Type];

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}

