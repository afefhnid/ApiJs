const baseUrl = "http://localhost:3003";
class CompanyService {
  static async list() {
    let init = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    let call = await fetch(`${baseUrl}/companys`, init);
    return call;
  }
  /**
   * listTicket
   */
  static async getTickets() {
    let init = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    let call = await fetch(`${baseUrl}/companys/tickets`, init);
    return call;
  }

  /**
   * Compagny details
   * @param {id} id
   */

  static async details(id) {
    let init = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    let call = await fetch(`${baseUrl}/companys/${id}`, init);
    return call;
  }
  /**
   * get compagnie by name
   * @param {*} idUser
   */
  static async getCompanyByName(idUser) {
    let init = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    let call = await fetch(`${baseUrl}/companys/ticket/user/${idUser}`, init);
    return call;
  }

  /**
   * create Compagny
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

    let call = await fetch(`${baseUrl}/companys`, init);
    return call;
  }
  /**
   * add tickets
   * @param {*} id
   * @param {*} body
   */
  static async addTicket(id, body) {
    let init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };

    let call = await fetch(`${baseUrl}/companys/${id}/ticket`, init);
    return call;
  }
  /**
   * delete ticket
   * @param {*} idTicket
   * @param {*} idCompany
   */
  static async deleteTicket(idTicket, idCompany) {
    let init = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    };

    let call = await fetch(
      `${baseUrl}/companys/${idCompany}/ticket/${idTicket}`,
      init
    );
    return call;
  }

  /**
   * delete compagny
   * @param {*} id
   */
  static async delete(id) {
    let init = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    };

    let call = await fetch(`${baseUrl}/companys/${id}`, init);
    return call;
  }
  /**
   * update Ticket
   * @param {*} idCompany
   * @param {*} idTicket
   * @param {*} body
   */
  static async updateTicket(idCompany, idTicket, body) {
    let init = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };

    let call = await fetch(
      `${baseUrl}/companys/${idCompany}/ticket/${idTicket}`,
      init
    );
    return call;
  }
  /**
   * getTicketByUser
   * @param {*} id
   */
  static async getTicketByUser(id) {
    let init = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    let call = await fetch(`${baseUrl}/companys/ticket/${id}`, init);
    return call;
  }
  /**
   * update companys
   * @param {*} id
   * @param {*} body
   */
  static async update(id, body) {
    let init = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };

    let call = await fetch(`${baseUrl}/companys/${id}`, init);
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

export default CompanyService;
