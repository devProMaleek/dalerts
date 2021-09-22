//Import the necessary libraries.
import React from 'react';
import {Button} from "reactstrap";



// Create Alert component.
const AlertComponent = ({ remove, alert, index, cancel }) => {
    return (
        <tr className="row-data" key={index}>
            <td><img src={alert.logo} alt={alert.exchange_name} className='mx-3'/>{alert.symbol}</td>
            <td>
                {alert.exchange_name}
                <p className='m-0 p-0 small small-font'>{alert.blockchain}</p>
            </td>
            <td>{alert.alert_price}</td>
            <td>{alert.current_price}</td>
            <td>{alert.notification_type}</td>
            {
                cancel &&
                <td><Button outline size="sm" color="success" onClick={() => remove(alert.id)}>CANCEL</Button></td>
            }
        </tr>
    )
}

// Export the component.
export default AlertComponent;