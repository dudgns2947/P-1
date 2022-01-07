import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Secret");
  }
  async getHtml() {
    return `
    <h1>Hello World</h1>
    `;
  }
}
