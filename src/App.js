import { useState } from 'react';

function App() {
  const names = [
    '“When we strive to become better than we are, everything around us becomes better too.” — Paulo Coelho',

    "“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein",

    "“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi",

    '“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain',

    '“When you change your thoughts, remember to also change your world.”— Norman Vincent Peale',

    '"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill',
    '“Success usually comes to those who are too busy looking for it.” — Henry David Thoreau',

    '“I never dreamed about success. I worked for it.” —Estée Lauder',

    '“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” — Steve Jobs',

    "“Opportunities don't happen, you create them.” — Chris Grosser"];
  const [randomName, setRandomName] = useState('Caio');

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * names.length);
    const name = names[randomIndex];
    setRandomName(name)
  }




  return (
    <div>
      <h1>{randomName}</h1>
      <p className='p-button'><button onClick={handleClick}>Click me</button> and Get motivated.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt, perferendis nisi beatae, quo adipisci <br /> officiis sint commodi debitis odio fuga temporibus ut. Modi ipsum officiis, iusto excepturi saepe soluta. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt, perferendis nisi beatae, quo adipisci <br /> officiis sint commodi debitis odio fuga temporibus ut. Modi ipsum officiis, iusto excepturi saepe soluta.</p>
    </div>
  );
}

export default App;
