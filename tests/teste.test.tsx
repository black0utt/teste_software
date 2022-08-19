// import { render, screen } from '@testing-library/react';
// import React from 'react';
// import {Result} from '../src/components/Result'

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  }, 10000);

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google');
  });
});

describe('Título', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/0');
  }, 10000);

  it('should be titled "Resultado das loterias"', async () => {
    await expect(page.title()).resolves.toMatch('Resultado das loterias');
  });
});

// describe('<Result/>', () => {
//   it('search the text: Esse sorteio é meramente ilustrativo', () => {
//     render(<Result/>);

//     expect(screen.getByText('test')).toBeInTheDocument();
//   })
// })
