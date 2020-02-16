class ProductTable extends React.Component {
  render() {
    const rowStyle = {
      border: "1px solid silver",
      padding: 4,
      width: "25%"
    };
    return React.createElement("table", {
      style: {
        borderCollapse: "collapse",
        width: 700
      }
    }, React.createElement("thead", {
      align: "left"
    }, React.createElement("tr", null, React.createElement("th", {
      style: rowStyle
    }, "Product Name"), React.createElement("th", {
      style: rowStyle
    }, "Price"), React.createElement("th", {
      style: rowStyle
    }, "Category"), React.createElement("th", {
      style: rowStyle
    }, "Image"))), React.createElement("tbody", null, React.createElement(ProductRow, {
      rowStyle: rowStyle,
      productName: "Jeans",
      productPrice: 1000,
      productCategory: "Clothing",
      productImage: "Img"
    }), React.createElement(ProductRow, {
      rowStyle: rowStyle,
      productName: "Guitar",
      productPrice: 2000,
      productCategory: "Music",
      productImage: "Img"
    })));
  }

}

class ProductRow extends React.Component {
  render() {
    return React.createElement("tr", null, React.createElement("td", {
      style: this.props.rowStyle
    }, this.props.productName), React.createElement("td", {
      style: this.props.rowStyle
    }, this.props.productPrice), React.createElement("td", {
      style: this.props.rowStyle
    }, this.props.productCategory), React.createElement("td", {
      style: this.props.rowStyle
    }, this.props.productImage));
  }

}

class AddProduct extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement("form", null, React.createElement("p", null, React.createElement("label", null, "Category", React.createElement("br", null), React.createElement("select", {
      id: "prdCat"
    }, React.createElement("option", {
      value: "shirts"
    }, "Shirts"), React.createElement("option", {
      value: "jeans"
    }, "Jeans"), React.createElement("option", {
      value: "jackets"
    }, "Jackets"), React.createElement("option", {
      value: "sweaters"
    }, "Sweaters"), React.createElement("option", {
      value: "accessories"
    }, "Accessories")))), React.createElement("p", null, React.createElement("label", null, "Price Per Unit", React.createElement("br", null), React.createElement("input", {
      type: "text",
      name: "prdPrice",
      value: "$"
    }))), React.createElement("p", null, React.createElement("label", null, "Product Name", React.createElement("br", null), React.createElement("input", {
      type: "text",
      name: "prdName"
    }))), React.createElement("p", null, React.createElement("label", null, "Image URL", React.createElement("br", null), React.createElement("input", {
      type: "text",
      name: "prdImg"
    }))), React.createElement("input", {
      type: "submit",
      value: "Add Product"
    })));
  }

}

class Product extends React.Component {
  render() {
    return React.createElement("div", {
      id: "mainDiv"
    }, React.createElement("h1", null, "My Company Inventory"), React.createElement("h3", null, "Showing all availble products"), React.createElement("hr", null), React.createElement("br", null), React.createElement(ProductTable, null), React.createElement("h3", null, "Add a new product to inventory"), React.createElement("hr", null), React.createElement(AddProduct, null));
  }

}

ReactDOM.render(React.createElement(Product, null), document.getElementById('section1'));