import React, {Component} from 'react'

let PRODUCTS = [
    {id: 1, category: 'Music', price: '$459.99', name: 'Clarinet'},
    {id: 2, category: 'Music', price: '$5,000', name: 'Cello'},
    {id: 3, category: 'Music', price: '$4,500', name: 'Tuba'},
    {id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge'},
    {id: 5, category: 'Furniture', price: '$1,300', name: 'Dining Table'},
    {id: 6, category: 'Furniture', price: '$100', name: 'Bean Bag'}
];

function searchingFor(term){
    return function(x){
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term
    }
}

export class ProductTable extends Component {
    constructor(){
        super();
        this.state = {
            products: PRODUCTS,
            message: '',
            search: '',
            term: ''
        }
        this.searchHandler = this.searchHandler.bind(this)
    }
    removeItem(item){
        const newProducts = this.state.products.filter(product => {
            return product !== item
        })
        this.setState({
            products: [...newProducts]
        })
    }
    addItem(e){
        e.preventDefault()
        const {products} = this.state
        const newName = this.newName.value
        const newCat = this.newCat.value
        const newPrice = this.newPrice.value


            newName !== '' && newCat !== '' && newPrice !== '' && this.setState({
                products: [...this.state.products, {name: newName, category: newCat, price: newPrice}]
            })

        this.addForm.reset()
    }


    searchHandler(event){
        this.setState({term: event.target.value})
    }
    state = {
        rows: []
      };


   render() {
    const {products, term} = this.state
    return (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {products.filter(searchingFor(term)).map((item, index) => ( 
                    <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td><button onClick={(e)=> this.removeItem(item)}>X</button></td>
                </tr>  
                ))} 
            </tbody>
        </table>


            <form ref={input => this.addForm = input} onSubmit={(e) => {this.addItem(e)}}>
                <label>Name: <br />
                    <input ref={newName => this.newName = newName} type='text' /><br /><br />
                </label><br />

                <label>Category: <br />
                    <input ref={newCat => this.newCat = newCat} type='text' name='cat' />
                <br /><br />
                </label><br />
                
                <label>Price: <br />
                    <input ref={newPrice => this.newPrice = newPrice} type='text' name='price' /><br /><br />
                </label><br />

                <button>Save</button>
            </form>
        </div>
    )}}

    
