import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';

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

export class Product extends Component {
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
        const newName = this.newName.value
        const newCat = this.newCat.value
        const newPrice = this.newPrice.value


            newName !== '' && newCat !== '' && newPrice !== '' && this.setState({
                products: [...this.state.products, {name: newName, category: newCat, price: '$' + newPrice}]
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
        <div className="container py-5 border my-5 col-8">
    
            <h1 className="mb-4">My Inventory</h1>
            <form className="form-group">
                <input type='text' value={term} className="form-control" placeholder='Search...' onChange={this.searchHandler}/>
            </form><br />
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {products.filter(searchingFor(term)).map((item, index) => ( 
                        <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                        <td><button class="btn btn-info" onClick={(e)=> this.removeItem(item)}>Delete</button></td>
                    </tr>  
                    ))} 
                </tbody>
            </table>
            
            <h2 className="heading">Add New Product</h2>

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

                <button className="btn btn-info">Save</button>
            </form>
        </div>
    )}}

    
