/*jshint esversion: 6 */

class Hello extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Hi {this.props.to} from {this.props.from}!</h1>
      </div>
    );
  }
}
