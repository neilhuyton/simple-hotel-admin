import React from 'react';
import { Link } from 'react-router-dom'

class UnitTypesList extends React.Component {
  render() {
    return (
      <div>
        <h1>Unit Types List</h1>
          <table>
            <tbody>
              {
                this.props.unitTypes.map((unitType) => {
                  return (
                    <tr key={ unitType.id }>
                      <td><Link to={`/unit-type/${ unitType.id }`}>{ unitType.name }</Link>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
      </div>
    )
  }
}

export default UnitTypesList;
