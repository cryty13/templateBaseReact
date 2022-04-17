import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductList from './cliente-list/cliente-table'
import AddProduct from './cliente-add'
import EditProduct from './cliente-edit'
import Orders from './cliente-orders'

const Ecommerce = props => {
  const { match } = props
	return (
		<Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/product-list`} />
			<Route path={`${match.url}/cliente-add`} component={AddProduct} />
			<Route path={`${match.url}/cliente-edit/:id`} component={EditProduct} />
			<Route path={`${match.url}/cliente-list`} component={ProductList} />
			<Route path={`${match.url}/cliente-orders`} component={Orders} />
		</Switch>
	)
}

export default Ecommerce

