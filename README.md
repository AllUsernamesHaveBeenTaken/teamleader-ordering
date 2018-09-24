# Teamleader Ordering challenge
This repository contains a coding challenge for [Teamleader](https://github.com/teamleadercrm) in react,
built with [create-react-app](https://github.com/facebook/create-react-app).

You can find the instruction of the challenge [here](https://github.com/teamleadercrm/coding-test/blob/master/2-ordering.md).

## Installation
```
$ git clone git@github.com:AllUsernamesHaveBeenTaken/teamleader-ordering.git
$ cd teamleader-ordering
$ npm install
$ npm start
```

## Components

### Pure function / Stateless components

[OrderDetail](https://github.com/AllUsernamesHaveBeenTaken/teamleader-ordering/blob/master/src/Components/orders/OrderDetail.js)

[OrderOverview](https://github.com/AllUsernamesHaveBeenTaken/teamleader-ordering/blob/master/src/Components/orders/OrderOverview.js)

[OrderSideBarItem](https://github.com/AllUsernamesHaveBeenTaken/teamleader-ordering/blob/master/src/Components/orders/OrderSideBarItem.js)

[OrderSideBar](https://github.com/AllUsernamesHaveBeenTaken/teamleader-ordering/blob/master/src/Components/orders/OrderSideBar.js)

[ProductItem](https://github.com/AllUsernamesHaveBeenTaken/teamleader-ordering/blob/master/src/Components/productd/ProductItem.js)

[ProductList](https://github.com/AllUsernamesHaveBeenTaken/teamleader-ordering/blob/master/src/Components/productd/ProductList.js)

[FlashMessage](https://github.com/AllUsernamesHaveBeenTaken/teamleader-ordering/blob/master/src/Elements/FlashMessage.js)

[Modal](https://github.com/AllUsernamesHaveBeenTaken/teamleader-ordering/blob/master/src/Elements/Modal.js)

### Pure Components

[AddProduct](https://github.com/AllUsernamesHaveBeenTaken/teamleader-ordering/blob/master/src/Components/productd/AddProduct.js)

### Components

[Portal](https://github.com/AllUsernamesHaveBeenTaken/teamleader-ordering/blob/master/src/Utilities/Portal.js)

### Render Props Component

[Toggle](https://github.com/AllUsernamesHaveBeenTaken/teamleader-ordering/blob/master/src/Utilities/Toggle.js)

### Context API

[OrderContext](https://github.com/AllUsernamesHaveBeenTaken/teamleader-ordering/blob/master/src/Contexts/OrderContext.js)

[ProductContext](https://github.com/AllUsernamesHaveBeenTaken/teamleader-ordering/blob/master/src/Contexts/ProductContext.js)

## Testing

This app uses the [react-testing-library](https://github.com/kentcdodds/react-testing-library) to test components and functionality.

In order to run the tests use following command:

```
$ npm test
```

To see its coverage:

```
$ npm test -- --coverage
```
