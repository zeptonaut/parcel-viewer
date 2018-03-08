import React from 'react'
import moment from 'moment'
import _ from 'lodash'

class ParcelDetailTable extends React.Component {
  render() {
    const parcel = this.props.parcel
    console.log(parcel)

    if (parcel === undefined) {
      return (
        <div>
          <span className="red fw5">Couldn't find record!</span>
        </div>
      );
    }

    const data = {
      'Address': parcel.address,
      'Owner': `${parcel.owner1}${parcel.owner2 ? ` & ${parcel.owner2}` : `` }`,
      'Owner Address': `${parcel.owner_street}, ${parcel.owner_city}, ${parcel.owner_state}`,
      'Last Sale Date': parcel.last_sale_date ? moment(parcel.last_sale_date).format('LL') : `No record`,
      'Last Sale Price': `$${_.parseInt(parcel.last_sale_price).toLocaleString()}` || `No record`,
      'Taxable Status': `${parcel.taxable_status}` || `Unknown`,
      'Taxable Value': `$${_.parseInt(parcel.taxable_value).toLocaleString()}` || `No record`,
      'Land Value': `$${_.parseInt(parcel.land_value).toLocaleString()}` || `No record`,
      'Improved Value': `$${_.parseInt(parcel.improved_value).toLocaleString()}` || `No record`,
      'Depth x Frontage': `${parcel.depth} x ${parcel.frontage} ft`,
      'Total Acres': `${parcel.total_acres}`,
      'Zoning': parcel.zoning_name,
      '# of Buildings': parcel.num_buildings,
      'Legal Description': parcel.legaldesc,
    }

    return (
      <div>
        <table>
          <tbody>
            {Object.keys(data).map(k => (
              <tr key={k}>
                <td className="fw7 w4 pv1" style={{borderBottom: '1px dashed #ddd', alignItems: 'top'}}>{k}</td>
                <td className="pl2 fw4 h2" style={{borderBottom: '1px dashed #ddd'}}>{data[k]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}


export default ParcelDetailTable