const AtividadeList = (props) => (

    
    <div className="tabela">
        <h2 className="titulos">Agenda de Atividades</h2>
        <button id="btnAtt" className="btn btn-primary" onClick={props.onClickAtualizar}  type="button">Atualizar Lista</button>
        <button id="btnInserir" className="btn btn-primary" type="button" onClick={props.inserir}>Inserir</button>
        <table className="table">
            <thead>
                <tr> 
                <th className="titulos">Index</th>
                <th className="titulos">Nome</th>
                <th className="titulos">Data</th>
                <th className="titulos">STATUS</th>
                </tr>
            </thead>
            <tbody>
                {props.atividades.length > 0 ? (props.atividades.map((o, index) => (
                    <tr key={index}>
                        <td className="titulos" >{o._id}</td> <td className="titulos">{o.nome}</td> <td className="titulos">{o.data}</td> <td className="titulos">{o.status}</td>
                        <td>
                        <button id="btnEditar" onClick={() => props.editar(o._id)} className="btn btn-primary btn-sm">Editar</button>
                        <button id="btnExcluir" onClick={() => props.excluir(o._id)} className="btn btn-danger btn-sm">Excluir</button>
                        </td>         
                    </tr>
                ))) : (
                    <tr> <td  className="titulos" colSpan={3}>Nenhuma Atividade.</td> </tr>
                )}
            </tbody>
        </table>
    </div>
)

export default AtividadeList