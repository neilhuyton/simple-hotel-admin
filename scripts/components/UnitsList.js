import React from 'react';
import { Link } from 'react-router-dom'

class UnitsList extends React.Component {
  render() {
    return (
      <div>
        <h1>Units List</h1>
          <table>
            <tbody>
              {
                this.props.units.map((unit) => {
                  return (
                    <tr key={ unit.id }>
                      <td><Link to={`/unit/${ unit.id }`}>{ unit.name }</Link>
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

export default UnitsList;
