/*jshint esversion: 6 */
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Ringo" from="Paul" bangs={4}  img="https://images.unsplash.com/photo-1612288528103-edc64749d4ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
