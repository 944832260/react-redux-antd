import * as React from "react";
import { connect } from 'react-redux'


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            whichPage: null
        };
    }

    componentWillMount() {
       
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            whichPage: nextProps.headmsg.value
        })
    }

    render() {
        let { whichPage} = this.state;
        return (
            <h1 id="header">
                <p>{whichPage}</p>
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
        // 更新用户数据
        loginIn: (obj) => {
            dispatch(loginIn(obj));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
