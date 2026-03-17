class Database {
  constructor() {
    this.mensajes = [];
  }

  agregarMensaje(mensaje) {
    this.mensajes.push(mensaje);
  }

  obtenerMensajes() {
    return this.mensajes;
  }
}

module.exports = Database;
