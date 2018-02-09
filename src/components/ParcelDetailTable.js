import React from 'react'

import moment from 'moment'

const ParcelDetailTable = ({ parcel }) => (
  <div>
    <span className="db f7 fw7 bb">Address</span>
    <span className="db pb1 f4">{parcel.address}</span>
    <span className="db f7 fw7 bb">Owner</span>
    <span className="db pb1 f4">{parcel.owner1}</span>
    <span className="db f7 fw7 bb">Last Sale</span>
    <span className="db pb1 f4">{parcel.last_sale_date ? `on ${moment(parcel.last_sale_date).format('LL')} for ${parcel.last_sale_price}` : `No record.`}</span>
    <span className="db f7 fw7 bb">Dimensions</span>
    <span className="db pb1 f4">{parcel.frontage} x {parcel.depth}</span>
  </div>
)

export default ParcelDetailTable