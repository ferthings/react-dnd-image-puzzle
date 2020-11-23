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
