// describe('Flight Booking', async() => { 
//     it('Homepage',async()=>{
//         await browser.url('https://blazedemo.com/')
//         await browser.getTitle()
//         await browser.maximizeWindow()
//         await browser.$('//select[@class="form-inline"]').selectByVisibleText('Boston')
//         await browser.$('//select[@name="toPort"]').selectByIndex(5)
//         // await browser.$('//select[@name="toPort"]').selectByAttribute('value','value')
//         await browser.pause(5000)
//         await browser.$('//input[@type="submit"]').click()
//         await browser.pause(5000)
//         await browser.$('(//input[@type="submit"])[2]').click()
//         await browser.$('(//input[@type="submit"])[2]')

//         // const elem = await browser.$('//input[@type="submit"]')
//         // elem.scrollIntoView()
//         await browser.$('//input[@id="inputName"]').setValue("Avinash kumar")
//         await browser.$('//input[@id="address"]').setValue("sai balaji pg,7th street,btm 2nd stage")
//         await browser.$('//input[@id="address"]').setValue("Bangalore")
//         await browser.$('//input[@id="state"]').setValue("Karnataka")
//         await browser.$('//input[@id="zipCode"]').setValue("495004")
//         const elem = await browser.$('//input[@type="submit"]')
//         elem.scrollIntoView()
//         await browser.$('//select[@class="form-inline"]').selectByIndex(1)
//         await browser.$('//input[@id="creditCardNumber"]').setValue("78894625241853")
//         await browser.$('//input[@id="creditCardMonth"]').setValue("9")
//         await browser.$('//input[@id="creditCardYear"]').setValue("2024")
//         await browser.pause(5000)
//         await browser.$('//input[@id="nameOnCard"]').setValue("Avinash")
//         await browser.$('//input[@type="checkbox"]').click()
//         await browser.$('//input[@type="submit"]').click()
//         await browser.pause(5000)
//         await browser.scroll(0,800)
//         await browser.pause(3000)
//         await browser.scroll(0,-800) 
//         await browser.back()
//         await browser.back()
//         await browser.$('//a[text()="home"]').click()
//         await browser.$('//a[contains(@class,"btn")]').click()
//         await browser.$('//input[@id="email"]').setValue("avinash.ku.04@gmail.com")
//         await browser.$('//button[@type="submit"]').click()
//         await browser.back()
//     //    let message = await browser.$('//h1[text()="Thank you for your purchase today!"]')
//     //     expect(message).toHaveText("Thank you for your purchase today!")
//     //
//          await browser.pause(5000)
//     })
// })