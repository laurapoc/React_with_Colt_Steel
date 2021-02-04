/*jshint esversion: 6 */

const getMood = () => {
  const moods = ["Angry", "Hungry", "Silly", "Quiet", "Paranoid"];
  return moods[Math.floor(Math.random() * moods.length)];
};

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My image!</h1>
        <h3>My number is: {2 * 8.4}</h3>
        <h3>My current mood is: {getMood()}</h3>
        <img src="https://images.unsplash.com/photo-1611846043818-e4186a5a494e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" />
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
