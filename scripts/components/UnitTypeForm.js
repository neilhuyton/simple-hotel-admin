import React from 'react';
import autobind from 'autobind-decorator';

@autobind
class UnitTypeForm extends React.Component {
  constructor() {
    super();

    this.state = {
      unitType: {
        id: null,
        name: ''
      }
    }
  }

  componentDidMount() {
    this.getUnitType(this.props.id);
  }

  getUnitType(id) {
    this.props.unitTypes.map((ut) => {
      if(ut.id === id) {
        this.state.unitType = ut;
        this.setState({ unitType: this.state.unitType });
      }
    })
  }

  createUnitType(e) {
    e.preventDefault();
    this.getUnitType(this.props.id);
  }

  changeHandler(e) {
    this.state.unitType.name = this.refs.name.value;
    this.setState({unitType: this.state.unitType});
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.saveUnitType(this.state.unitType);
  }

  render() {
    var linkState = this.props.linkState;
    return (
      <div>
        <h1>Unit Type Form</h1>
        <form onSubmit={ this.submitHandler }>
          <input type="text" ref="name" value={this.state.unitType.name} onChange={ this.changeHandler }  />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default UnitTypeForm;
