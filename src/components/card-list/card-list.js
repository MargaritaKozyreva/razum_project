import React from "react";
import CardSection from "../card-section/card-section";
import CardListItem from "../card-list-item/card-list-item";
import "./card-list.css";

const cardList = props => {
  let elemSections = props.sections;
  let allCards = props.items;

  let sections = elemSections.map(item => {
    if (item.visible) {
      let elems = allCards
        .filter(i => i.type === item.name)
        .map(elem => <CardListItem elem={elem} key={elem.id} />);

      return <CardSection title={item.name} elems={elems} />;
    }
  });

  return sections;
};

export default cardList;
