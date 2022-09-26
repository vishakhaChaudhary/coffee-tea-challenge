/* import packages */
import React from "react";
import { Props } from "framer-motion/types/types";

/* import components */
import { ContentNotFound, List } from "../generic";

/* import constant */
import { cms } from "../../cms/constant";

/**
 * Tea Component
 * @param props 
 * @returns JSX element
 */
const TeaComponent: React.FC<Props> = (props) : JSX.Element => {
  const { teaList = [] } = props || {};

  /* method to render list of teas */
  const renderTeaList = () => {
    const list = teaList.map((tea) => {
      return <List key={tea.id} data={tea} />;
    });

    return list;
  };

  if (!teaList.length) {
    return <ContentNotFound />;
  }

  return (
    <div className="container">
      <h2>{cms.tea.title}</h2>
      <p>{cms.tea.decription}</p>
      <div className="list">{renderTeaList()}</div>
    </div>
  );
};

export default TeaComponent;
