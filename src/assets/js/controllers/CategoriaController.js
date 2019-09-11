class CategoriaController {

  constructor(){
    this._categorias = new Categorias()
    this._CategoriaService = new CategoriaService()
    this._categoriaView = new CategoriaView()
  }

  montar(){
    this._CategoriaService.listarTodas()
      .then(categorias => categorias.map(categoria => this._categorias.adicionar(categoria)))
      .then(() => this._categoriaView.montarListagem(this._categorias))
  }
}
 