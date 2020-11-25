# React DnD Image Puzzle

Create a puzzle from an image

## Install package


```sh
npm install react-dnd-image-puzzle
```

## Your app

```js
import Puzzle from 'react-dnd-image-puzzle';

function App() {
  const onComplete = () => {
    console.log('Puzzle is completed!');
  };

  return (
    <Puzzle
      image="https://www.laurag.tv/wp-content/uploads/2020/02/bob-esponja.jpg"
      width={800}
      height={480}
      pieces={4}
      onComplete={onComplete}
    />
  );
}

export default App;
```

## Props

Property    | Type     | Required | Default | Description
:---        | :---     | :---     | :---    | :---
image       | string   | yes      |         | Image for the puzzle: an absoulte image URI or an imported image
width       | number   | no       | 400     | Image width
height      | number   | no       | 300     | Image height
pieces      | number   | no       | 3       | Number of pieces per side. 3x3 pieces by default
onComplete  | funciton | no       |         | Callback when the puzzle is completed
-----