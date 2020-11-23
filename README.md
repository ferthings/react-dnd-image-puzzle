# React DnD Image Puzzle

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```js
import Puzzle from './components/Puzzle';
import image from './assets/main-square-urban-tourism-spain.jpg'

function App() {
  const onComplete = () => {
    console.log('Puzzle is completed!');
  }

  return (
    <Puzzle
      image={image}
      width={575}
      height={800}
      pieces={3}
      onComplete={onComplete}
    />
  );
}

export default App;
```

Property    | Type     | Required | Default value | Description
:---        | :---     | :---     | :---          | :---
image       | string   | yes      |               | Image for the puzzle: an absoulte image URI or an imported image
width       | number   | no       | 400           | Image width
height      | number   | no       | 300           | Image height
pieces      | number   | no       | 3             | Number of pieces per side. 3x3 pieces by default
onComplete  | funciton | no       |               | Callback when the puzzle is completed
-----