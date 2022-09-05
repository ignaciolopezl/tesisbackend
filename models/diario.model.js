
class DiarioService {

  constructor(){

  }

  generate() {

  }

   create(data) {

    return {nombre: 'creado'};
  }

  find() {
    return {nombre: 'encontrados diario'};
  }

  async findOne(id) {
    return {nombre: 'encontrado'};
  }

  async update(id, changes) {
    return {nombre: 'actualizado'};
  }

  async delete(id) {
    return {nombre: 'borrado'};
  }

}

module.exports = DiarioService;
