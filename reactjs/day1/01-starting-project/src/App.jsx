function MyHead(){
  return(
    <header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      Fundamental React concepts you will need for almost any app you are
      going to build!
      iam sri harsha this is my first react application
    </p>
  </header>
  )
}

function App() {
  return (
    <div>
      <MyHead/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
