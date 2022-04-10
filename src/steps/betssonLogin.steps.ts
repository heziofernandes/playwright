import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { Given, When, Then } from '@cucumber/cucumber';
import expect from 'expect';

Given('Go to the Betsson website', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
  await page.locator('text="OK"').click({ timeout: 120000 });
  await page.locator('#m-accWidget--header__btnLogin').click();
});

When('I type {string} in email', async function (this: ICustomWorld, username: string) {
  const page = this.page!;
  await page.fill('#dlg-login-username', username);
});
When('I type {string} in password', async function (this: ICustomWorld, password: string) {
  const page = this.page!;
  await page.fill('#dlg-login-password', password);
});

When('I click on enter', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('#dlg-login-login').click();
});

Then("I should see Access your account", async function (this: ICustomWorld) {
  const page = this.page!;
  expect(page.locator('text="R$ 0,00"')).toBeTruthy();
});
