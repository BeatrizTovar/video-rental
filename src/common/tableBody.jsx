import React, { Component } from "react";
import _ from "lodash";

class tableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };
  render() {
    const { columns, data } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr>
            {columns.map(column => (
              <td>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default tableBody;
