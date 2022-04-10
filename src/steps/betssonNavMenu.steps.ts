import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { Given, When, Then } from '@cucumber/cucumber';
import expect from 'expect';

Given('logged into the site Betsson', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
  await page.locator('text="OK"').click();
  await page.locator('#m-accWidget--header__btnLogin').click();
  await page.fill('#dlg-login-username', 'fernandes007');
  await page.fill('#dlg-login-password', 'F3rnandes@');
  await page.locator('#dlg-login-login').click();
  expect(page.locator('text="R$ 0,00"')).toBeTruthy();
});

When('I click on Panel', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('text="PAINEL"').click();
});

Then('I should see Panel informations', async function (this: ICustomWorld) {
  const page = this.page!;
  expect(page.locator('text="Escale agora"')).toBeTruthy();
});

When('I click on Tournaments', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('text="TORNEIOS"').click();

});

Then('I should see Tournaments informations', async function (this: ICustomWorld) {
  const page = this.page!;
  expect(page.locator('text="Torneios Oficiais"')).toBeTruthy();
  expect(page.locator('text="criados pelos usuários"')).toBeTruthy();
});

When('I click on Tickets', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('text="Tickets"').click();
});

Then('I should see Tickets informations', async function (this: ICustomWorld) {
  const page = this.page!;
  expect(page.locator('text="Controle de Tickets"')).toBeTruthy();
  expect(page.locator('text="Tickets disponíveis"')).toBeTruthy();
});

When('I click on Live', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('text="AO VIVO"').click();
});

Then('I should see Live informations', async function (this: ICustomWorld) {
  const page = this.page!;
  expect(page.locator('text="Destaques da partida"')).toBeTruthy();
  expect(page.locator('text="Estatísticas do jogador"')).toBeTruthy();
});
