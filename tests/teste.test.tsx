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

// describe('Percorrendo as rotas', () =>{
//   //espera-se que os testes falhem caso não contenha o /numero especificado ou o texto referente a cada página
//   beforeAll(async () => {
    
//     const browser = await puppeteer.launch();
//     return browser
//   })
//   test('validando a primeira rota, mega sena.', async () =>{
//     const page = await browser.newPage();
//     await page.goto('http://localhost:3000/0');
//     await expect(page.url()).toContain('/0')

//     await page.waitForSelector('div.logo > span')
//     let element = await page.$('div.logo > span')   
//     let value = await page.evaluate(el => el?.textContent, element)
//     //o teste irá falhar caso o valor seja diferente de  quina
//     expect(value).toContain('mega-sena')
//     await page.close();
//   });
//   test('validando a segunda rota, quina.', async () =>{
//     const page = await browser.newPage();
//     await page.goto('http://localhost:3000/1');

//     await expect(page.url()).toContain('/1')
//     await page.waitForSelector('div.logo > span')
//     let element = await page.$('div.logo > span')   
//     let value = await page.evaluate(el => el?.textContent, element)
//     //o teste irá falhar caso o valor seja diferente de  quina
//     expect(value).toContain('quina')
//     await page.close();
//   });
//   test('validando a terceira rota, LOTOFÁCIL.', async () =>{
//     const page = await browser.newPage();
//     await page.goto('http://localhost:3000/2');
//     await expect(page.url()).toContain('/2')

//     await page.waitForSelector('div.logo > span')
//     let element = await page.$('div.logo > span')   
//     let value = await page.evaluate(el => el?.textContent, element)
//     //o teste irá falhar caso o valor seja diferente de lotofácil
//     expect(value).toContain('lotofácil')
//     await page.close();

//   });
//   test('validando a quarta rota, LOTOMANIA.', async () =>{
//     const page = await browser.newPage();
//     await page.goto('http://localhost:3000/3');
//     await expect(page.url()).toContain('/3')

//     await page.waitForSelector('div.logo > span')
//     let element = await page.$('div.logo > span')   
//     let value = await page.evaluate(el => el?.textContent, element)
//     //o teste irá falhar caso o valor seja diferente de lotomania
//     expect(value).toContain('lotomania')
//     await page.close();


//   });
//   test('validando a quinta rota, TIMEMANIA.', async () =>{
//     const page = await browser.newPage();
//     await page.goto('http://localhost:3000/4');
//     await expect(page.url()).toContain('/4')

//     await page.waitForSelector('div.logo > span')
//     let element = await page.$('div.logo > span')   
//     let value = await page.evaluate(el => el?.textContent, element)
//     //o teste irá falhar caso o valor seja diferente de timemania
//     expect(value).toContain('timemania')
//     await page.close();


//   });
//   test('validando a sexta rota, DIA DE SORTE.', async () =>{
//     const page = await browser.newPage();
//     await page.goto('http://localhost:3000/5');
//     await expect(page.url()).toContain('/5')

//     await page.waitForSelector('div.logo > span')
//     let element = await page.$('div.logo > span')   
//     let value = await page.evaluate(el => el?.textContent, element)
//     //o teste irá falhar caso o valor seja diferente de dia de sorte
//     expect(value).toContain('dia de sorte')
//     await page.close();


//   });
  
// })


describe('Validando números', () =>{
  beforeAll(async () => {
    jest.setTimeout(30000)
    const browser = await puppeteer.launch();
    return browser
  })
  test('validando os números da primeira rota, mega sena.', async () =>{
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/0');

    await page.waitForSelector('div.ball')
    let element = await page.$$('div.ball')   
    // let value = await page.evaluate(el => el[0]?.innerText, element)
    let values = await page.$$eval('div.ball', elems => elems.map(elem => elem.textContent))
    // let element = await page.$$('div.ball')   
    // let value = await page.evaluate(el => el[0]?.innerText, element)

    let pegandoNumeros = fetch("https://brainn-api-loterias.herokuapp.com/api/v1/concursos/2359").then(function(data) {
        return data
    });
    
    console.log(values)
    console.log(pegandoNumeros)
    
    expect(values).toContain('a')
    await page.close();
  });
  // test('validando a segunda rota, quina.', async () =>{
  //   const page = await browser.newPage();
  //   await page.goto('http://localhost:3000/1');

  //   await expect(page.url()).toContain('/1')
  //   await page.waitForSelector('div.logo > span')
  //   let element = await page.$('div.logo > span')   
  //   let value = await page.evaluate(el => el?.textContent, element)
  //   //o teste irá falhar caso o valor seja diferente de  quina
  //   expect(value).toContain('quina')
  //   await page.close();
  // });
  // test('validando a terceira rota, LOTOFÁCIL.', async () =>{
  //   const page = await browser.newPage();
  //   await page.goto('http://localhost:3000/2');
  //   await expect(page.url()).toContain('/2')

  //   await page.waitForSelector('div.logo > span')
  //   let element = await page.$('div.logo > span')   
  //   let value = await page.evaluate(el => el?.textContent, element)
  //   //o teste irá falhar caso o valor seja diferente de lotofácil
  //   expect(value).toContain('lotofácil')
  //   await page.close();

  // });
  // test('validando a quarta rota, LOTOMANIA.', async () =>{
  //   const page = await browser.newPage();
  //   await page.goto('http://localhost:3000/3');
  //   await expect(page.url()).toContain('/3')

  //   await page.waitForSelector('div.logo > span')
  //   let element = await page.$('div.logo > span')   
  //   let value = await page.evaluate(el => el?.textContent, element)
  //   //o teste irá falhar caso o valor seja diferente de lotomania
  //   expect(value).toContain('lotomania')
  //   await page.close();


  // });
  // test('validando a quinta rota, TIMEMANIA.', async () =>{
  //   const page = await browser.newPage();
  //   await page.goto('http://localhost:3000/4');
  //   await expect(page.url()).toContain('/4')

  //   await page.waitForSelector('div.logo > span')
  //   let element = await page.$('div.logo > span')   
  //   let value = await page.evaluate(el => el?.textContent, element)
  //   //o teste irá falhar caso o valor seja diferente de timemania
  //   expect(value).toContain('timemania')
  //   await page.close();


  // });
  // test('validando a sexta rota, DIA DE SORTE.', async () =>{
  //   const page = await browser.newPage();
  //   await page.goto('http://localhost:3000/5');
  //   await expect(page.url()).toContain('/5')

  //   await page.waitForSelector('div.logo > span')
  //   let element = await page.$('div.logo > span')   
  //   let value = await page.evaluate(el => el?.textContent, element)
  //   //o teste irá falhar caso o valor seja diferente de dia de sorte
  //   expect(value).toContain('dia de sorte')
  //   await page.close();


  // });

})


  





  
  




  
  
  


  

  
