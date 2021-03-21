import React from "react";
import PropTypes from 'prop-types';
import { CardWrapper } from "./index.style";

/**
 * Shared component for preview of an article
 * @component- Card
 */
const Card = props => {
    const { title } = props;
    return(
    <CardWrapper>
        <p>{title}</p>
    </CardWrapper>
);
}

Card.propTypes = {
    title: PropTypes.string.isRequired
}

export default Card;
