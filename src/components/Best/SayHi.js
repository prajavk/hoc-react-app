// closure in React
/* wrong way
class SayHi extends Component {

render () {
 return () {
  <Button onClick={(e) => console.log('Say Hi', e)}>
    Click Me
  </Button>
 }
  }
}
*/
// right way
import React from "react";
class SayHi extends React.Component {
  showHiMessage = this.showMessage("Hi");
  render() {
    return <button onClick={this.showHiMessage}>Click Me</button>;
  }
}
export default SayHi;
