// class LeadsPage{
//    get home(){
//      return browser.url("http://49.249.28.218:8888/")
//      }

//     // get crm(){ return browser.$('(//div[@class="product"])[3]')}
//     // get vtiger(){ return browser.$('//td[@data-label="Row 1"]/child::a[text()="V-Tiger"]')}
//     get username(){return $('//div[@class="input"]/child::input[@type="text"]')}
//     get password(){return $('//input[@type="password"]')}
//     get login(){return $('//div[@class="button"]/child::input[@id="submitButton"]')}
//     get lead(){ return browser.$('//td[@class="tabUnSelected"]/child::a[text()="Leads"]')}
//     get createlead(){return $('//img[@title="Create Lead..."]')}
//     get dropdown(){return $('//td[@class="dvtCellInfo"]/child::select[@name="salutationtype"]')}
    
//     //filling details of lead
//     get firstname(){return $('//td[@class="dvtCellInfo"]/child::input[@name="firstname"]')}
//     // get lastname(){return $('//input[@name="lastname"]')}
//     // get company(){return $('//input[@name="company"]')}
//     // get designation(){return $('//input[@name="designation"]')}
//     // get phone(){return $('//input[@name="phone"]')}
//     // get leadsource(){return $('//select[@name="leadsource"]')}

//     async Test(usernameval){
//         await browser.maximizeWindow()
//         await this.username.waitForDisplayed();
//         // await this.username.click();
//          (await this.username).setValue(usernameval);
//          await this.password.setValue('admin');
//          (await this.login).click();      
//          (await this.lead).click();  
//          (await this.createlead).click();
//          (await this.dropdown).selectByVisibleText('Mr.')
//          (await this.firstname).waitForDisplayed()
//          (await this.firstname).click()
//         //  (await this.firstname).setValue('avi')
      
//         await browser.pause(5000);   
//     }
// }
// export default new LeadsPage()