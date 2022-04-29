import React from 'react'
const AtividadeForm = (props) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target
        props.setAtividade({ ...props.atividade, [name]: value })
    }
    return (
        <form className='formulario'>
            <h2 className='titulos'>Formulário de Atividade</h2>
            <div className="form-group">
                <label className="titulos">ID</label>
                <input className="form-control" type="text" name="_id" readOnly
                    value={props.atividade._id} onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <label className="titulos">Nome</label>
                <input className="form-control" type="text" name="nome"
                    value={props.atividade.nome} onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <label className="titulos">Data</label>
                <input className="form-control" type="datetime-local" name="data"
                    value={props.atividade.data} onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <label className="titulos">STATUS</label>
                <select className="form-control" type="text" name="status"
                    value={props.atividade.status} onChange={handleInputChange}>
                    <option value="Pendente">Selecione um...</option>
                    <option value="Fazer">À Executar</option>
                    <option value="Fazendo">Executando</option>
                    <option value="Feito">Concluído</option>
                </select>
            </div>
            <div className="form-group">
                <button id ="btnSalvar" type="button" onClick={props.salvar}
                    className="btn btn-primary">Salvar</button>
                <button id ="btnCancelar" type="button" onClick={props.cancelar}
                    className="btn btn-danger">Cancelar</button>
            </div>
        </form>
    )
}
export default AtividadeForm