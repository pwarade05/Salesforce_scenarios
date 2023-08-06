public with sharing class ContactRequestAPI {


    @AuraEnabled
    public static void verifyMobile(ID contactRecordId){

        System.debug('@received= '+contactRecordId);

        String mobileNumber = [select Id, MobilePhone FROM Contact WHERE ID =: contactRecordId].MobilePhone;
        
        if(String.isNotBlank(mobileNumber)){
        System.debug('Mobile '+mobileNumber);

        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://api.veriphone.io/v2/verify?phone='+mobileNumber+'&key=C2A393963D9B49B28791AEDAD8001B68');
        request.setMethod('GET');

        HttpResponse response = http.send(request);

        if(response.getStatusCode()==200){
            system.debug('#Received ='+response.getBody());

            ContactAPIWraper objWrap = (ContactAPIWraper) JSON.deserialize(response.getBody(), ContactAPIWraper.class);

            Contact objCon = new Contact(Id=contactRecordId);
            objCon.Mobile_Operator__c = objWrap.carrier;

            if(objWrap.phone_valid){
                objCon.Phone_Valid__c = true;
            }
            else{
                objCon.Phone_Valid__c = false;
            }

            update objCon;
        }

    }
}

public class ContactAPIWraper{
    public Boolean phone_valid;
    public String carrier;
}
}