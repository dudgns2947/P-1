import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Promotion");
  }
  async getHtml() {
    return `
    <h1>Hello World</h1>
    `;
  }
}
