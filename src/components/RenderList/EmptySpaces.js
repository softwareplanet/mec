import React from 'react';
import image from "../../equipment/images/space.png";

const GAP = 15;
const CARD_WIDTH = 160;
const addEmptySpaces = (containerWidth, itemsnumber) => {
    let numberOfItemsInLine = parseInt((containerWidth  + GAP) / (CARD_WIDTH + GAP));
    let numberOfWhiteSpaces = numberOfItemsInLine - (itemsnumber % numberOfItemsInLine);
    let result = [];
    for (let i = 0; i <= numberOfWhiteSpaces; i++)
        result.push(<img key={i} width={CARD_WIDTH + "px"} height="0.1px" src={image} alt ="" />);
    return result;
};

export default addEmptySpaces;