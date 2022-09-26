/* import packages */
import React from 'react';
import { Props } from 'framer-motion/types/types';
import dynamic from 'next/dynamic';

/* import services */
import { coffeeService } from '../services';

/* wrap a coffee component in nextjs dynamic method to load the page dynamically */
const CoffeeComponent = dynamic(() => import('../components/coffee'), {
  loading: () => <h1 className="container">Loading.....</h1>
});

/* function to fetch list of coffees */
export const getServerSideProps = async (context) => {
  const coffeeList = await coffeeService.fetchAllCoffees();
  
  return { props: { coffeeList }};
}

const Coffee = (props : Props): JSX.Element => {
  return <CoffeeComponent {...props} />

}

export default Coffee;
