class MarcaService {

  constructor(){

  }

  generate() {

  }

   create(data) {

    return {nombre: 'creado'};
  }

  find() {
    return {nombre: 'encontrados marca'};
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

module.exports = MarcaService;
