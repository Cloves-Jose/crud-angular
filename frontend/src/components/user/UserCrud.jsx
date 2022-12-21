import React, { Component } from "react";
import Main from "../template/Main";

import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

/**
 * Link para a API
 */
const baseUrl = 'http://localhost/3001/users'

/**
 * Criando estado inicial do componente
 */
const initalState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {
    
    /**
     * Iniciando o estado a 
     * partir do operador 
     * spread
     */
    state = { ...initalState }

    /**
     * Função responsável por limpar o 
     * formulário quando o botão 
     * cacelar for clicado.
     */
    clear() {
        this.setState({ user: initalState.user })
    }

    /**
     * Usado tanto para incluir quanto para 
     * deletar um usuário
     */
    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        axios[method](url, user)
            .then(res => {
                const list = this.getUpdatedList(res.data)
                this.setState({ user: initalState.user, list })
            })
    }

    /**
     * Retorna a lista atualizada
     * com o novo elemento na 
     * primeira posição
     * @param {*} user 
     */
    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    /**
     * Vai atualizar os campos
     * do formulário
     * @param {*} event 
     */
    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    /**
     * Renderização do formulário
     */
    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" 
                                className="form-control" 
                                name="name"
                                value={this.state.user.name}
                                onChange={name => this.updateField(name)}
                                placeholder="Digite o nome..."
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" 
                                className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={email => this.updateField(email)}
                                placeholder="Digite o email..."
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={(e) => this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2" onClick={(e) => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}