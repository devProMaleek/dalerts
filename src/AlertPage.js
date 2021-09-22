import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import data from "./data.json";
import AlertComponent from "./components/Alert";
import {Wrapper} from "./components/Table/Table.styles";
import { Container, Table} from "reactstrap";

const AlertPage = () => {
    const { id } = useParams();
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        getAlert(id);
    }, []);

    const getAlert = (id) => {
        const alertData = data.data.filter(function(item){
            return item.id == id
        });
        setAlerts(alertData);
    }

    return (
        <Wrapper>
            <Container className="d-flex justify-content-center">
                <Table responsive striped>
                    <thead>
                    <tr>
                        <th>SYMBOL</th>
                        <th>EXCHANGE
                            <p className='m-0 p-0 small small-font'>Chain</p>
                        </th>
                        <th>ALERT PRICE</th>
                        <th>CURRENT PRICE</th>
                        <th>NOTIFICATION TYPE</th>
                    </tr>
                    </thead>
                    <tbody className="table-data">
                    {
                        alerts &&
                        alerts.map((alert, index) => (
                            (
                                <AlertComponent alert={alert} index={index} cancel={false}/>
                            )

                        ))
                    }

                    <tr className="container">
                        <td colSpan={6}>
                            {alerts.length === 0 && <span>No records found to display!</span>}
                        </td>
                    </tr>

                    </tbody>
                </Table>

            </Container>
        </Wrapper>
    );
};

// Export the component.
export default AlertPage;