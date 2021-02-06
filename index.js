/*jshint esversion: 6 */
class App extends React.Component {
  render() {
    return (
      <div>
        <Friend
        name="Elton"
        hobbies={["Piano", "Singing", "Dancing"]} 
        />
        <Friend
        name="Frida"
        hobbies={["Drawing", "Painting", "Reading"]} 
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
