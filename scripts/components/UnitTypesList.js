/*
 Not Found
 */

import React from 'react';

class UnitTypesList extends React.Component {
  render() {
    return (
      <div>
        <h1>Unit Types List</h1>

          <table>
            <tbody>
              {
                this.props.unitTypes.map((unitType) => {
                  return ( <tr key={ unitType.id }><td>{ unitType.name }</td></tr> )
                })
              }
            </tbody>
          </table>

      </div>
    )
  }
}

export default UnitTypesList;
