import BasePage from '../base.page';

const url = '#/login';
export default class LoginPage extends BasePage {
  constructor() {
    super(url);
  }

  clickFillFormLink() {
    return new Promise((resolve) => {
      element(by.css('.main-container .fill-form')).then(() => {
        element(by.css('.main-container .fill-form')).click();
        resolve();
      });
    });
  }

  submitForm() {
    element(by.css('.main-container form button[type="submit"]')).click();
  }
}

