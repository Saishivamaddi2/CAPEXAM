using {ust.saishiva.maddi.db.master} from '../db/datamodel';
using {ust.saishiva.maddi.db.transaction} from '../db/datamodel';


service catalogService @(path: 'catalogService'){
    entity employeeSet as projection on master.employees;
    entity businesspartnerset as projection on master.businesspartner;
    entity addressSet as projection on master.address;
    entity productSet as projection on master.product;
    entity PoItems as projection on transaction.poitems;
    entity POs @(odata.draft.enabled: true) as projection on transaction.purchaseorder;
    
}