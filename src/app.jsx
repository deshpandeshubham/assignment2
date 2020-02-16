class ProductTable extends React.Component {
    render() {
        const rowStyle = {border: "1px solid silver", padding: 4, width: "25%"}
        return (
            <table style = {{borderCollapse: "collapse", width: 700}}>
                <thead align="left">
                    <tr>
                        <th style={rowStyle}>Product Name</th>
                        <th style={rowStyle}>Price</th>
                        <th style={rowStyle}>Category</th>
                        <th style={rowStyle}>Image</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductRow rowStyle = {rowStyle} productName = "Jeans" productPrice = {1000} productCategory = "Clothing" productImage = "Img"/>
                    <ProductRow rowStyle = {rowStyle} productName = "Guitar" productPrice = {2000} productCategory = "Music" productImage = "Img"/>
                </tbody>
            </table>
        )
    }
}

class ProductRow extends React.Component {
    render() {
        return(
            <tr>
                <td style = {this.props.rowStyle}>{this.props.productName}</td>
                <td style = {this.props.rowStyle}>{this.props.productPrice}</td>
                <td style = {this.props.rowStyle}>{this.props.productCategory}</td>
                <td style = {this.props.rowStyle}>{this.props.productImage}</td>
            </tr>
        )
    }
}

class AddProduct extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <p>
                        <label>Category<br/>
                            <select id="prdCat">
                                <option value="shirts">Shirts</option>
                                <option value="jeans">Jeans</option>
                                <option value="jackets">Jackets</option>
                                <option value="sweaters">Sweaters</option>
                                <option value="accessories">Accessories</option>
                            </select>
                        </label>
                    </p>
                    <p>
                        <label>Price Per Unit<br/> 
                        <input type="text" name="prdPrice" value="$"/></label>
                    </p>
                    <p>
                        <label>Product Name<br/> 
                        <input type="text" name="prdName"/></label>
                    </p>
                    <p>
                        <label>Image URL<br/> 
                        <input type="text" name="prdImg"/></label>
                    </p>
                    <input type="submit" value="Add Product"></input>
                </form>
            </div>
        )
    }
}

class Product extends React.Component {
    render() {
        return (
            <div id="mainDiv">
                <h1>My Company Inventory</h1>
                <h3>Showing all availble products</h3>
                <hr/><br/>
                <ProductTable/>
                <h3>Add a new product to inventory</h3>
                <hr/>
                <AddProduct/>
            </div>
        )
    }   
}
   
ReactDOM.render(<Product/>, document.getElementById('section1'));