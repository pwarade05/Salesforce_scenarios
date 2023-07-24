public with sharing class ContactProvider {

    @AuraEnabled 
    public static String createNewContact(Contact objCon){
        if (objCon.Email.endsWith('gmail.com') || objCon.Email.endsWith('yahoo.com')) {
            insert objCon;
           // system.debug('execute '+objCon.Email);            Note:--  if sometimes o/p is not showing then apply debug log..
        } 
       return 'Yay! your new contact has been created successfully...';
    }
}