/**
 * @jest-environment puppeteer
 */
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



  // test('teste', async () => {
  //   const browser = await puppeteer.launch({ headless: false, slowMo:250 });
  //   const page = await browser.newPage();
  //   await page.goto('http://localhost:3000/0',{
  //     waitUntil: 'networkidle2',
  //   });
  //   // await page.click('.select-btn')
  //   let funcao = await page.evaluate( () => {
      
  //     let botao = document.querySelector('.dropdown');
  //     return botao
  //   }, 8000)
   


  //   setTimeout(() => {
  //     page.click(funcao())
  //     console.log("CONSOLE LOG DEMO:", funcao())
  //   }, 9000);
    
    
    
  //   await page.screenshot({path: 'example.png'});
  //   await page.click('button[select-option-button]="quina"');
  //   await page.click('QUINA');
  // }, 6000);
  //   expect(page.url()).toContain('/0')
 






//======================================================================//



  // test('teste', async () => {
    
  //   const browser = await puppeteer.launch({ headless: false });
  //   const page = await browser.newPage();
  //   await page.goto('http://localhost:3000/1',{
  //          waitUntil: 'networkidle2',
  //   })
  
  //   // setTimeout( async () => {
  //   //   await page.click('.dropdown')
        
  //   //   await page.click('#quina')
  //   // }, 4000);
  //     // let gettexto = await page.waitForSelector('.logo span')
  //   const time = setTimeout( async quinaa => {
  //   const quina = await page.evaluate("document.querySelector('.logo').innerHTML");
  //   const teste = document.getElementsByClassName('logo')
  //   console.log(teste);
  //   console.log(quina);
  //   return quina
  //   }, 4000);

    

  //   await expect(time).toMatch('<span>quina</span>')
  //   // await expect(result2).toMatch('<li>Metabolismo Basal : <span id=\"metabolismo_basal\">1634</span> cal</li>')
  //   page.close()

  // }, 6000);

//===================================================================//
  
// test('validating something', async () => {
//   jest.setTimeout(60000)
//   expect.assertions(1);
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto('http://localhost:3000/0')

//   setTimeout( async (done) => {
//     await page.click('.dropdown');
//     await page.click('#quina');
//     await page.waitForNavigation();
//     done()
//   }, 5000); 
//   try{
//     expect(page.url()).toContain('/1')
//     await page.close();
//   } catch(e){
//     expect(e).toMatch('error');
//   }

// })

//===================================================================//

describe('Percorrendo as rotas', () =>{
  //espera-se que os testes falhe caso não contenha o /numero especificado
  beforeAll(async () => {
    
    const browser = await puppeteer.launch({ headless: false});
    return browser
  })
  test('validando a primeira rota, mega sena.', async () =>{
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/0');
    await page.close();
    
    await expect(page.url()).toContain('/0')

  });
  test('validando a segunda rota, quina.', async () =>{
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/1');
    await page.close();

    await expect(page.url()).toContain('/0')
  });
  test('validando a terceira rota, LOTOFÁCIL.', async () =>{
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/2');
    await page.close();

    await expect(page.url()).toContain('/0')
  });
  test('validando a quarta rota, LOTOMANIA.', async () =>{
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/3');
    await page.close();

    await expect(page.url()).toContain('/0')
  });
  test('validando a quinta rota, LOTOMANIA.', async () =>{
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/4');
    await page.close();

    await expect(page.url()).toContain('/0')
  });
  test('validando a sexta rota, DIA DE SORTE.', async () =>{
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/5');
    await page.close();

    await expect(page.url()).toContain('/0')
  });
  
  
})


  





  
  




  
  
  


  

  
