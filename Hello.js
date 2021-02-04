/*jshint esversion: 6 */

class Hello extends React.Component {
  render() {
    let bangs = "!".repeat(this.props.bangs);
    return (
      <div>
        <h1>
          <p>Hi {this.props.to} from {this.props.from}{bangs}</p>
          <img src={this.props.img}/>
        </h1>
      </div>
    );
  }
}
