/*jshint esversion: 6 */
const getNum = () => {
  return Math.floor(Math.random() * 10) + 1;
};

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    
    return (
      <div>
        <h1>Your number is {num}</h1>
        <p>{num === 7 ? "Congrats!" : "Unlucky..."}</p>
        {num === 7 && <img src="https://media.giphy.com/media/Qv5JV60U5Qm26Ipp9J/giphy.gif" />}
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));
