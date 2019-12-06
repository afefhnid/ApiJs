const baseUrl = "http://localhost:3003";
class UserService {
  static async list() {
    let init = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    let call = await fetch(`${baseUrl}/users`, init);
    return call;
  }
  //detail

  static async details(id) {
    let init = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    let call = await fetch(`${baseUrl}/users/${id}`, init);
    return call;
  }
  static async create(body) {
    let init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };

    let call = await fetch(`${baseUrl}/users`, init);
    return call;
  }
  static async delete(id) {
    let init = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    };

    let call = await fetch(`${baseUrl}/users/${id}`, init);
    return call;
  }
  static async update(id, body) {
    let init = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };

    let call = await fetch(`${baseUrl}/users/${id}`, init);
    return call;
  }

  static async authentication(body) {
    let init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };

    let call = await fetch(`${baseUrl}/users/authentication`, init);
    return call;
  }
}

export default UserService;
