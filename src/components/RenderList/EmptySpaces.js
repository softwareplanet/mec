import React from 'react';
import image from "../../equipment/images/space.png";

const addEmptySpaces = (windowWidth, itemsnumber) => {
    let numberOfItemsInLine = parseInt(windowWidth / 187);
    let numberOfWhiteSpaces = numberOfItemsInLine - (itemsnumber % numberOfItemsInLine);
    let result = [];
    for (let i = 0; i <= numberOfWhiteSpaces; i++)
        result.push(<img key={i} width="160px" height="0.1px" src={image} />);
    return result;
};

export default addEmptySpaces;