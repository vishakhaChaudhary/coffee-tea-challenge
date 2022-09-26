/* import packages */
import React from 'react';
import { Props } from 'framer-motion/types/types';
import Image from 'next/image';

const List: React.FC<Props> = (props): JSX.Element => {
  const { data } = props || {};
  const { id = "", title = "", image = "", type = "" } = data || {};

  return (
    <>
      <div className='card' id={id} data-testid='listItem'>
        <div className='product-thumbnail'>
          <span className='center'>
          <Image loader={() => image} src={image} alt={title} layout='fill' unoptimized={true} />
          </span>
        </div>
        <div className='list-container' data-testid='list-container'>
          <hr />
          <div className='product-detail' data-testid='product-detail'>
            <h4>
              <b>{title}</b>
            </h4>
            <p className={`produt-type ${type.toLowerCase()}`}>{type}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
