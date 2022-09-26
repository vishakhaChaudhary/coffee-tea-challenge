/* import packages */
import React from 'react';
import { Props } from 'framer-motion/types/types';
import dynamic from 'next/dynamic';

/* import service */
import { teaService } from '../services';

/* wrap a component in nextjs dynamic method to load the page dynamically */
const TeaComponent = dynamic(() => import('../components/tea'), {
  loading: () => <h1 className="container">Loading.....</h1>
});

/* function to fetch list of tea */
export const getServerSideProps = async (context) => {
  const teaList = await teaService.fetchAllTea();
  
  return { props: { teaList }};
}

const Tea = (props : Props): JSX.Element => {
  return <TeaComponent {...props} />
}

export default Tea;
