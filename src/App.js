import Puzzle from './components/Puzzle';
import image from './assets/main-square-urban-tourism-spain.jpg'

function App() {
  const onDone = () => {
    console.log('SUCCESS');
  }

  return (
    <Puzzle
      image={image}
      width={575}
      height={800}
      pieces={3}
      onComplete={onDone}
    />
  );
}

export default App;
