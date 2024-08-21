const cds = require('@sap/cds');
 
module.exports = cds.service.impl(async function() {
    const { employeeSet } = this.entities;
 
    this.before('CREATE', 'employeeSet', async (req) => {
        const { salaryAmount, Currency_code } = req.data;
        if (salaryAmount >= 50000  ) {
            req.error(400, 'Employee’s salary must be less than 50000 USD ');
        }
        if(Currency_code !== 'USD')
            {
                req.error(400, 'Employee’s salary currency must be in USD');
        }
        else{
            console.log('Created successfully');
        }
    });
 
    this.after('CREATE', 'employeeSet', async (data, req) => {
        console.log('Create operation successful');
    });
    this.before('UPDATE', 'employeeSet', async (req) => {
        const { nameFirst, loginName } = req.data;
        const oldEmployee = await SELECT.one.from(Employees).where({ ID: req.params[0] });
        if (oldEmployee.nameFirst !== nameFirst || oldEmployee.loginName !== loginName) {
            req.error(400, 'Operation not allowed');
        }
        const { salaryAmount, currencyCode } = req.data;
        if (salaryAmount >= 50000 || currencyCode !== 'USD') {
            req.error(400, 'Employee’s salary must be less than 50000 USD');
        }
    });
 
    this.after('UPDATE', 'employeeSet', async (data, req) => {
        console.log('Update operation successful');
    });
 
    this.before('DELETE', 'employeeSet', async (req) => {
        const employee = await SELECT.one.from(Employees).where({ ID: req.params[0] });
        if (employee.nameFirst.startsWith('S')) {
            req.error(400, 'Deletion not allowed for employees whose nameFirst starts with "S"');
        }
    });
 
    this.after('DELETE', 'employeeSet', async (data, req) => {
        console.log('Delete operation successful');
    });
});
 