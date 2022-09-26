/* import packages */
import { Props } from 'framer-motion/types/types';
import React from 'react';

/* import components */
import { ContentNotFound, List } from '../generic';

/* import constant */
import { cms } from '../../cms/constant';

/**
 * Coffee Component
 * @param props 
 * @returns JSX element
 */
const CoffeeComponent: React.FC<Props> = (props): JSX.Element => {
  const { coffeeList = [] } = props || {};

  /* method to render list of coffee */
  const renderCoffeeList = () => {
    const list = coffeeList.map((coffee) => {
      return <List key={coffee.id} data={coffee} />;
    });

    return list;
  };

  if (!coffeeList.length) {
    return <ContentNotFound />;
  }

  return (
    <div className="container">
      <h2>{cms.coffee.title}</h2>
      <p>{cms.coffee.description}</p>
      <div className="list">{renderCoffeeList()}</div>
    </div>
  );
};

export default CoffeeComponent;
