class practice{
   get dropdown(){ return $('//section[text()="Dropdown"]') }
   get mouseaction(){return $('//section[text()="Mouse Actions"]')}
   get clickhold(){return $('//section[text()="Click & Hold"]')}
   get circleclick(){return $('//div[@id="circle"]')}
   get textbox(){return $('//ul[@class="mt-1 ps-3 pe-4"]/descendant::section[text()="Text Box"]')}
   get textfield(){return $('//input[@id="name"]')}
   get submit(){return $('//button[@type="submit"]')}
   get checkbox(){}
   get check(){return $('//input[@id="domain1"]')}
   get movetoelement(){return $('//input[@id="mode6"]')}

  
   //bl
   async test(){
   await browser.maximizeWindow()
   await this.dropdown.click()
   await this.mouseaction.waitForDisplayed({timeout:3000}) //waitfordisplayed
   await this.mouseaction.click()
   const text= await this.mouseaction.getText()           //gettext()
   await this.clickhold.click()                           //click
   await this.circleclick.doubleClick()                   //doubleclick
   await browser.pause(5000)                              //pause()
   console.log(text);
   }

   async test1(){
      await this.textbox.click()             
      const val = await this.textbox.getAttribute('class')           //getAttribute()       
      const val1= await this.submit.getCSSProperty('disabled')       //getCssProperty()  
      const isdisp = await this.textfield.isDisplayed()              //isDisplayed()
      const isview = await this.textfield.isDisplayedInViewport()    //isDisplayedInViewport()
      const isenable = await this.textfield.isEnabled()              //isEnabled()
      const isexist = await this.textfield.isExisting()              //isExisting()
      const isfocus = await this.textfield.isFocused()               //isFocused()
      await this.textfield.addValue("testing.!!!")                   //addValue()

      console.log(val)
      console.log(val1)
      console.log(isdisp)
      console.log(isview)
      console.log(isenable)
      console.log(isexist)
      console.log(isfocus)
   }

   async test2(){
      await this.check.waitForDisplayed({timeout:3000})
      await this.check.click()
      const issel = await this.check.isSelected()                    //isSelected()
      await this.movetoelement.moveTo()
      await browser.pause(5000)
      console.log(issel)
   }
}

export default new practice()