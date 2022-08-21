
const puppeteer = require('puppeteer');
// describe('Google', () => {
//   beforeAll(async () => {
//     await page.goto('https://google.com');
//   }, 10000);

//   it('should be titled "Google"', async () => {
//     await expect(page.title()).resolves.toMatch('Google');
//   });
// });

// describe('Título', () => {
//   beforeAll(async () => {
//     await page.goto('http://localhost:3000/0');
//   }, 10000);

//   it('should be titled "Resultado das loterias"', async () => {
//     await expect(page.title()).resolves.toMatch('Resultado das loterias');
//   });
// });


// describe('Título', () => {
//   beforeAll(async () => {
//     const browser = await puppeteer.launch({ headless: false, slowMo:250 });
//     const page = await browser.newPage();
//     await page.goto('http://localhost:3000/0',{
//       waitUntil: 'networkidle2',
//     });
//     // await page.click('.select-btn')
//     let funcao = await page.evaluate( () => {
      
//       let botao = document.querySelector('.dropdown');
//       return botao
//     }, 8000)
   

//   it('MUDANDO LOTERIA', async () => {
//     setTimeout(() => {
//       page.click(funcao())
//       console.log("CONSOLE LOG DEMO:", funcao())
//     }, 9000);
    
    
    
//     // await page.screenshot({path: 'example.png'});
//     // await page.click('button[select-option-button]="quina"');
//     // await page.click('QUINA');
//   }, 6000);
//     expect(page.url()).toContain('/0')
//   });
// });

describe('Google', () => {
  beforeAll(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/0',{
           waitUntil: 'networkidle2',
    })
  

  
    setTimeout( async () => {
      await page.click('.dropdown')
        
      await page.click('#quina')
    }, 2000);


  });
 
    
  it('should be titled "Google"', () => {
    
      expect(page.url()).toContain('/1')
      page.close();
  });



});

  
  




  
  
  


  

  
