import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// //helper functions

// function isNative (value) {
//     if (value === "Yes") {
//       return "native";
//   } else if (value === "No") {
//       return "not native";
//   };
// };

// function aOrAn (name) {
//       if (name.endsWith("s")) {
//         return "";
//     } else if (name.startsWith("a") || name.startsWith("e") || name.startsWith("i") || name.startsWith("o") || name.startsWith("u")) {
//       return "an";
//   } else {
//       return "a";
//   };
// };

// function stock (currentStockLevel) {
//   if (currentStockLevel) {
//     return false;
// } else if (!currentStockLevel) {
//     return true;
// } else {
//     return "error";
// };
// };

// function shopKeepResponse (currentStockLevel) {
//   if (currentStockLevel) {
//     return "Yes, we have fruit!"
// } else {
//     return "No, this is a local shop for local people, there's nothing for you har"
// }
// }

// //core functions

// // function Fruit (props) {
// // 	return (
// //   <div>This fruit is {aOrAn(props.name)} {props.name}, it {props.colour}, {props.size} and is {props.native} to this country</div>
// //   );
// // };


// class Fruit extends React.Component {
// showFruitIfStock = (props) => {
// return (
// <div>This fruit is {aOrAn(props.name)} {props.name}, it {props.colour}, {props.size} and is {props.native} to this country</div>
// );
// }
// }

// const redApple = <Fruit name="apple" colour="varies in colour" size="medium" native={isNative("Yes")}/>;
// const orange = <Fruit name="orange" colour="is orange" size="medium" native={isNative("No")}/>;
// const grapes = <Fruit name="grapes" colour="varies in colour" size="small" native={isNative("No")}/>;

// class Shop extends React.Component {
//   state = { fruitInStock: false }

// handleClick = () => {
//     this.setState({
//     fruitInStock: stock(this.state.fruitInStock)
//   });
// };

//   render () {
//     return (
//   <div>
//       <button onClick={this.handleClick}>
//       Is there any fruit, Mr Shopkeep?
//     </button>
//     <p>Said the Shopkeep: "{shopKeepResponse(this.state.fruitInStock)}"</p>
//     <div>{redApple}{orange}{grapes}</div>
//   </div>
//   );
// };
// };

// //ReactDOM.render(<div>{redApple}{orange}{grapes}</div>, mountNode);
// ReactDOM.render(
//     <Shop />,
//     document.getElementById('root')
//   );

///////////////////////////////SHOP////////////////////////

//stock

const stock = ["pineapple", "orange", "mango"];

//helperfunctions
function checkStock (item, array) {
    var isInStock;
    array.forEach(value => {
        if (value.toLowerCase() === item.toLowerCase()) {
            isInStock = true;
        };
    }); 
    if (isInStock) {
        return "in Stock";
    } else {
        return "not in Stock";
    };
};

class ShopForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      //this.state = {valueAge: ''};
   
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    handleChange(event) {
      this.setState({value: event.target.value});
      //this.setState({valueAge: event.target.valueAge});
    }
   
    handleSubmit(event) {
        var stockString = checkStock(this.state.value, stock)
      alert(`${this.state.value} is ${stockString}` );
      event.preventDefault();
    }
    render() {
      return (
          <div>
        <div>Welcome to the Shop. Ask me if there is something in stock</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Check if it's in stock"/>
        </form>
        </div>
      );
    }
  }

//========================================

ReactDOM.render(
    <ShopForm />,
    document.getElementById('root')
  );