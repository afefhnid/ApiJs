const baseUrl = "http://localhost:3002";
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

  //detail

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

  static async getCompanyByName(idUser) {
    console.log("fff", idUser);
    let init = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    let call = await fetch(`${baseUrl}/companys/ticket/user/${idUser}`, init);
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

    let call = await fetch(`${baseUrl}/companys`, init);
    return call;
  }
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

  static async update(id, body) {
    console.log(id);
    console.log(body);
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
