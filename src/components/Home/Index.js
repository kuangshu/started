import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

export class Index extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }
    

    render() {
        return (
        <div>Index</div>
      );
    }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Index);
export {

}
