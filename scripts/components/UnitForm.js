import React from 'react';
import autobind from 'autobind-decorator';

@autobind
class UnitForm extends React.Component {
  constructor() {
    super();

    this.state = {
      unit: {
        id: null,
        name: ''
      }
    }
  }

  componentDidMount() {
    this.getUnit(this.props.id);
  }

  getUnit(id) {
    this.props.units.map((u) => {
      if(u.id === id) {
        this.state.unit = u;
        this.setState({ unit: this.state.unit });
      }
    })
  }

  createUnit(e) {
    e.preventDefault();
    this.getUnit(this.props.id);
  }

  changeHandler(e) {
    this.state.unit.name = this.refs.name.value;
    this.setState({unit: this.state.unit});
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.saveUnit(this.state.unit);
  }

  render() {
    return (
      <div>
        <h1>Unit Form</h1>
        <form onSubmit={ this.submitHandler }>
          <input type="text" ref="name" value={this.state.unit.name} onChange={ this.changeHandler }  />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default UnitForm;
