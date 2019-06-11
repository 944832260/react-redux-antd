import * as React from "react";
import { connect } from 'react-redux'
import { changeHead } from "../../store/actions/user";


class AboutBundle extends React.Component {

  componentWillMount() {
    let headData = {};
    headData.value = '关于';
    this.props.changeHead(headData);
  }

  go(){
     this.props.history.push({
       pathname: '/',
     })
  }

  render() {
    return (
      <h1 id="about">
        <p>About</p>
        <p onClick={() => {this.go()}}>go Home</p>
      </h1>
    );
  }
}
function mapStateToProps(state) {
  return {
    headmsg: state.headmsg
  }
}
function mapDispatchToProps(dispatch) {
  return {
    //更新头部显示
    changeHead: (obj) => {
      dispatch(changeHead(obj));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutBundle);
