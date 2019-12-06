const baseUrl = "http://localhost:3003";
class TypeService {
  /**
   * liste type
   */
  static async list() {
    let init = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    let call = await fetch(`${baseUrl}/types`, init);
    return call;
  }
  /**
   * details type
   * @param {*} id
   */

  static async details(id) {
    let init = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    let call = await fetch(`${baseUrl}/types/${id}`, init);
    return call;
  }
  /**
   * create type
   * @param {*} body
   */
  static async create(body) {
    let init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };

    let call = await fetch(`${baseUrl}/types`, init);
    return call;
  }
}

export default TypeService;
