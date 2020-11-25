import Puzzle from './lib/Puzzle';

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
