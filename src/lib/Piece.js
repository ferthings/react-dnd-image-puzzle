import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';
import { puzzlePieceStyles } from './styles';

const Piece = memo((props) => {
  const { position, onSwap } = props;

  const [, dragEl] = useDrag({
    item: { position, type: 'PIECE' },
  });

  const [{ isOver }, dropRef] = useDrop({
    accept: 'PIECE',
    drop: (props) => {
      onSwap(
        props.position, // source position
        position // drop position
      );
    },
    collect: (monitor) => {
      return {
        isOver: monitor.isOver()
      }
    }
  });

  return (
    <div className="puzzle-piece" ref={dropRef}>
      <div 
        ref={dragEl} 
        style={puzzlePieceStyles({ ...props, isOver })}>
      </div>
    </div>
  );
});

Piece.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  pieces: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  onSwap: PropTypes.func.isRequired
};

export default Piece;
