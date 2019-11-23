import React, {Component} from 'react'
import {ProductTable} from './ProductTable'



export class ProductForm extends Component {
    submit(e){
        e.preventDefault()
        const {{ProductTable}.products} = this.state;
        const newItem = 'test'

        this.setState({
            products: [...this.state.products, newItem]
        })
    }
    render() {
        return(
            <div>
                <form onSubmit={(e) => {this.submit(e)}}>
                    <label>Name: <br />
                        <input type='text' onChange={this.newName} /><br /><br />
                    </label><br />

                    <label>Category: <br />
                        <input type='text' name='cat'  onChange={this.newCategory} />
                    <br /><br />
                    </label><br />
                    
                    <label>Price: <br />
                        <input type='text' name='price'  onChange={this.newPrice} /><br /><br />
                    </label><br />

                    <button>Save</button>
                </form>
            </div>
    )}}