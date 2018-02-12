import React from 'react'

import moment from 'moment'
import _ from 'lodash'

class ParcelDetailTable extends React.Component {

  render() {
    const parcel = this.props.parcel

    const data = {
      'Address': parcel.address,
      'Owner': parcel.owner1,
      'Owner Address': `${parcel.owner_street}, ${parcel.owner_city}, ${parcel.owner_state}`,
      'Last Sale Date': parcel.last_sale_date ? moment(parcel.last_sale_date).format('LL') : `No record`,
      'Last Sale Price': `$${_.parseInt(parcel.last_sale_price).toLocaleString()}` || `No record`,
      'Taxable Value': `$${_.parseInt(parcel.taxable_value).toLocaleString()}` || `No record`,
      'Dimensions': `${parcel.depth} x ${parcel.frontage}`,
      'Zoning': parcel.zoning,
      '# of Buildings': parcel.num_buildings,
      'Legal Description': parcel.legaldesc,
    }
    return (
      (
        <div style={{display: 'flex'}}>
        <table>
          {Object.keys(data).map(k => (
            <tr>
              <td className="fw7 w4 pv1" style={{borderBottom: '1px dashed #ddd', alignItems: 'top'}}>{k}</td>
              <td className="pl2 fw4 h2" style={{borderBottom: '1px dashed #ddd'}}>{data[k]}</td>
            </tr>
          ))}
        </table>
        </div>
      )
    )
  }
}


export default ParcelDetailTable