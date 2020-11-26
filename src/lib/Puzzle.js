import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { puzzleWrapperStyles } from './styles';
import { shuffle, isEqual } from './utils';
import Piece from './Piece';

const Puzzle = (props) => {
  const { width, height, pieces, onComplete } = props;
  const rootPositions = [...Array(pieces * pieces).keys()];
  const [positions, setPositions] = useState(shuffle(rootPositions));

  const coords = rootPositions.map((pos) => ({
    x: Math.floor((pos % pieces) * (width / pieces)),
    y: Math.floor(pos / pieces) * (height / pieces),
  }));

  const onDropPiece = (sourcePosition, dropPosition) => {
    const oldPositions = positions.slice();
    const newPositions = [];

    for (let i in oldPositions) {
      const value = oldPositions[i];
      let newValue = value;

      if (value === sourcePosition) {
        newValue = dropPosition;
      } else if (value === dropPosition) {
        newValue = sourcePosition;
      }

      newPositions.push(newValue);
    }

    setPositions(newPositions);

    if (isEqual(rootPositions, newPositions)) {
      onComplete();
    }
  };

  const renderPieces = () =>
    positions.map((i) => (
      <Piece key={i} position={i} onDropPiece={onDropPiece} {...coords[i]} {...props} />
    ));

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={puzzleWrapperStyles({ width, height })}>{renderPieces()}</div>
      <style>
        {`
          .puzzle-piece:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </DndProvider>
  );
};

Puzzle.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  pieces: PropTypes.number,
  piecesCompleted: (props) =>
    props['pieces'] < 3 && new Error('Invalid prop type `pieces`. It should be >= 1'),
  onComplete: PropTypes.func,
};

Puzzle.defaultProps = {
  width: 400,
  height: 300,
  pieces: 3,
  onComplete: () => {},
};

export default Puzzle;
