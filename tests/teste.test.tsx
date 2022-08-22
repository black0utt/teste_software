// describe('Título da aplicação', () => {
//   beforeAll(async () => {
//     jest.setTimeout(30000)
//     await page.goto('http://localhost:3000/0');
//   });

//   it('A aplicação deve conter o titulo "Resultado das loterias"', async () => {
//     await expect(page.title()).resolves.toMatch('Resultado das loterias');
//   });
// });

// describe('Validando rotas da aplicação!', () =>{
//   //espera-se que os testes falhem caso não contenha o /numero especificado ou o texto referente a cada página
//   beforeAll(async () => {
//     jest.setTimeout(30000)
//   })
  
//   test('A rota /0 deve mostrar o resultado da Mega-sena.', async () =>{
//     const page = await browser.newPage();

//     await page.goto('http://localhost:3000/0');
//     await expect(page.url()).toContain('/0')
//     await page.waitForSelector('div.logo > span')

//     let element = await page.$('div.logo > span')   
//     let value = await page.evaluate(el => el?.textContent, element)

//     //o teste irá falhar caso o valor seja diferente de  mega-sena
//     expect(value).toContain('mega-sena')
//     await page.close();
//   });

//   test('A rota /1 deve mostrar o resultado da Quina.', async () =>{
//     const page = await browser.newPage();
//     await page.goto('http://localhost:3000/1');
//     await page.waitForSelector('div.logo > span')

//     let element = await page.$('div.logo > span')   
//     let value = await page.evaluate(el => el?.textContent, element)

//     //o teste irá falhar caso o valor seja diferente de  quina
//     expect(value).toContain('quina')
//     await page.close();
//   });
  
//   test('A rota /2 deve mostrar o resultado da Lotofacil.', async () =>{
//     const page = await browser.newPage();

//     await page.goto('http://localhost:3000/2');
//     await page.waitForSelector('div.logo > span')

//     let element = await page.$('div.logo > span')   
//     let value = await page.evaluate(el => el?.textContent, element)

//     //o teste irá falhar caso o valor seja diferente de lotofácil
//     expect(value).toContain('lotofácil')
//     await page.close();
//   });

//   test('A rota /3 deve mostrar o resultado da Lotomania.', async () =>{
//     const page = await browser.newPage();

//     await page.goto('http://localhost:3000/3');
//     await page.waitForSelector('div.logo > span')

//     let element = await page.$('div.logo > span')   
//     let value = await page.evaluate(el => el?.textContent, element)

//     //o teste irá falhar caso o valor seja diferente de lotomania
//     expect(value).toContain('lotomania')
//     await page.close();
//   });

//   test('A rota /4 deve mostrar o resultado da Timemania.', async () =>{
//     const page = await browser.newPage();

//     await page.goto('http://localhost:3000/4');
//     await page.waitForSelector('div.logo > span')

//     let element = await page.$('div.logo > span')   
//     let value = await page.evaluate(el => el?.textContent, element)

//     //o teste irá falhar caso o valor seja diferente de timemania
//     expect(value).toContain('timemania')
//     await page.close();
//   });

//   test('A rota /5 deve mostrar o resultado da Dia de Sorte.', async () =>{
//     const page = await browser.newPage();

//     await page.goto('http://localhost:3000/5');
//     await page.waitForSelector('div.logo > span')

//     let element = await page.$('div.logo > span')   
//     let value = await page.evaluate(el => el?.textContent, element)

//     //o teste irá falhar caso o valor seja diferente de timemania
//     expect(value).toContain('dia de sorte')
//     await page.close();
//   });
// })



// // ======= TESTE DE EXEMPLO QUE PODE SER UTIL CLICANDO COM PUPPETEER ================//

// const puppeteer = require('puppeteer');

// test('teste', async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();

//   await page.goto('http://localhost:3000',{
//     waitUntil: 'networkidle2',
//   })

//   setTimeout( async () => {
//     await page.click('.dropdown')
//     await page.click('button[aria-label="quina"]')
//   }, 4000);
// }, 6000);



// //================ PEGANDO VÁRIOS ELEMENTOS COM PUPPETER ===============//

// const axios = require('axios')
// describe('Compara resultado do projeto com a api que ele consome', () =>{
//   beforeAll(async () => {
//     jest.setTimeout(30000)
//   });

//   test('A rota /0 deve ter o mesmo resultado da api referente ao jogo da Mega-sena.', async () =>{
//     const page = await browser.newPage();

//     await page.goto('http://localhost:3000/0');
//     await page.waitForSelector('div.ball')

//     let values = await page.$$eval('div.ball', elems => elems.map(elem => elem.textContent))
      
//     //Compara o resultado do projeto com o resultado da api referente a Mega-sena
//     expect(values).toEqual(await axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/concursos/2359")
//     .then(response => response.data.numeros));      
//   });

//   test('A rota /1 deve ter o mesmo resultado da api referente ao jogo da Quina.', async () =>{
//     const page = await browser.newPage();

//     await page.goto('http://localhost:3000/1');
//     await page.waitForSelector('div.ball')

//     let values = await page.$$eval('div.ball', elems => elems.map(elem => elem.textContent))
      
//     //Compara o resultado do projeto com o resultado da api referente a Quina
//     expect(values).toEqual(await axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/concursos/5534")
//     .then(response => response.data.numeros));      
//   });

//   test('A rota /2 deve ter o mesmo resultado da api referente ao jogo da Lotofácil.', async () =>{
//     const page = await browser.newPage();

//     await page.goto('http://localhost:3000/2');
//     await page.waitForSelector('div.ball');

//     let values = await page.$$eval('div.ball', elems => elems.map(elem => elem.textContent))
      
//     //Compara o resultado do projeto com o resultado da api referente a Lotofácil
//     expect(values).toEqual(await axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/concursos/2200")
//     .then(response => response.data.numeros));      
//   });

//   test('A rota /3 deve ter o mesmo resultado da api referente ao jogo da Lotomania.', async () =>{
//     const page = await browser.newPage();

//     await page.goto('http://localhost:3000/3');
//     await page.waitForSelector('div.ball');

//     let values = await page.$$eval('div.ball', elems => elems.map(elem => elem.textContent))
      
//     //Compara o resultado do projeto com o resultado da api referente a Lotomania
//     expect(values).toEqual(await axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/concursos/2167")
//     .then(response => response.data.numeros));      
//   });

//   test('A rota /4 deve ter o mesmo resultado da api referente ao jogo da TimeMania.', async () =>{
//     const page = await browser.newPage();

//     await page.goto('http://localhost:3000/4');
//     await page.waitForSelector('div.ball');

//     let values = await page.$$eval('div.ball', elems => elems.map(elem => elem.textContent))
      
//     //Compara o resultado do projeto com o resultado da api referente a TimeMania
//     expect(values).toEqual(await axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/concursos/1622")
//     .then(response => response.data.numeros));      
//   });

//   test('A rota /5 deve ter o mesmo resultado da api referente ao jogo do Dia de Sorte.', async () =>{
//     const page = await browser.newPage();

//     await page.goto('http://localhost:3000/5');
//     await page.waitForSelector('div.ball')

//     let values = await page.$$eval('div.ball', elems => elems.map(elem => elem.textContent))
      
//     //Compara o resultado do projeto com o resultado da api referente ao Dia de Sorte
//     expect(values).toEqual(await axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/concursos/440")
//     .then(response => response.data.numeros));      
//   }); 
// });

// describe('Verificar as páginas por meio de screenshot', () =>{

//   test('Verifica página da Mega Sena', async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
  
//     await page.goto('http://localhost:3000',{
//       waitUntil: 'networkidle2',
//     })
  
//     setTimeout( async () => {
//       await page.click('.dropdown')
//       await page.click('button[aria-label="mega-sena"]')
//       await page.screenshot({path: 'megasena.png'});

//     }, 4000);
//   }, 6000);

//   test('Verifica página da Quina', async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
  
//     await page.goto('http://localhost:3000',{
//       waitUntil: 'networkidle2',
//     })
  
//     setTimeout( async () => {
//       await page.click('.dropdown')
//       await page.click('button[aria-label="quina"]')
//       setTimeout( async () => {
//         await page.screenshot({path: 'quina.png'});
//       }, 2000);
//     }, 4000);

//   }, 6000);

//   test('Verifica página da Lotofácil', async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
  
//     await page.goto('http://localhost:3000',{
//       waitUntil: 'networkidle2',
//     })
  
//     setTimeout( async () => {
//       await page.click('.dropdown')
//       await page.click('button[aria-label="lotofácil"]')
//       setTimeout( async () => {
//         await page.screenshot({path: 'Lotofacil.png'});
//       }, 2000);
//     }, 4000);

//   }, 6000);

//   test('Verifica página da Lotomania', async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
  
//     await page.goto('http://localhost:3000',{
//       waitUntil: 'networkidle2',
//     })
  
//     setTimeout( async () => {
//       await page.click('.dropdown')
//       await page.click('button[aria-label="lotomania"]')
//       setTimeout( async () => {
//         await page.screenshot({path: 'Lotomania.png'});
//       }, 2000);
//     }, 4000);

//   }, 6000);

//   test('Verifica página do Timemania', async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
  
//     await page.goto('http://localhost:3000',{
//       waitUntil: 'networkidle2',
//     })
  
//     setTimeout( async () => {
//       await page.click('.dropdown')
//       await page.click('button[aria-label="timemania"]')
//       setTimeout( async () => {
//         await page.screenshot({path: 'Timemania.png'});
//       }, 2000);
//     }, 4000);

//   }, 6000);

//   test('Verifica página do Dia de Sorte', async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
  
//     await page.goto('http://localhost:3000',{
//       waitUntil: 'networkidle2',
//     })
  
//     setTimeout( async () => {
//       await page.click('.dropdown')
//       await page.click('button[aria-label="dia de sorte"]')
//       setTimeout( async () => {
//         await page.screenshot({path: 'DiaDeSorte.png'});
//       }, 2000);
//     }, 4000);

//   }, 6000);

// })

import React from "react";
import { render, screen } from '@testing-library/react'

import { Select } from '../src/components/Select'

describe('<Select />', () => {
  it('usa o componente Select', () => {
    render(<Select label='teste' />)
    expect(screen.getByText('teste')).toBeInTheDocument()
  })
})