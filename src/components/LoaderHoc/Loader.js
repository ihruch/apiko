import React from 'react'
import Loading from './../Loading';

const Loader = isLoading => Component => {

	class Loader extends React.Component {
		render() {
			const { isLoading } = this.props;
			return (isLoading) ? <Loading />  :  <Component {...this.props} />
		}
	}
	return Loader;

}

export default Loader

