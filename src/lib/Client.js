export default class Client {
  constructor() {
    this.host = "http://localhost:3001"
  }

  async account() {
    const resp = await this.fetch('account');
    return (await resp.json()).account;
  }

  async blockCount() {
    const resp = await this.fetch('block_count');
    return (await resp.json()).blockCount;
  }

  fetch(endpoint) {
    return fetch(`${this.host}/${endpoint}`);
  }
}
