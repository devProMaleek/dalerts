// Import the necessary libraries and components.
import React, { useState, useEffect } from 'react';
import { Table, Container, Button, Modal, ModalBody } from 'reactstrap';
import data from '../../data.json';
import { Wrapper } from './Table.styles';
import FormComponent from '../Form';
import { toast } from 'react-toastify';
import AlertComponent from "../Alert";

// import Bell from '../img/Vector';

// Create table component.
const TableComponent = () => {

    // Set States
    const [alerts, setAlerts] = useState([]);
    const [appData, setAppData] = useState({});
    const [modal, setModal] = useState(false);
    const [searchText, setSearchText] = useState("");


    // exclude column list from filter
    const excludeColumns = ["id", "logo", "token_address", "exchange_address", "alert_price", "current_price"];

    // handle change event of search input
    const handleChange = value => {
        setSearchText(value);
        filterData(value);
    };

    // filter records by search text
    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") setAlerts(data.data);
        else {
            const filteredData = alerts.filter(item => {
                return Object.keys(item).some(key =>
                    excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
                );
            });
            setAlerts(filteredData);
        }
    }

    // Toggle function for the new alerts modal.
    const toggle = () => {
        setModal(!modal)
    };

    // Remove function to delete alerts entries on the table.
    const remove = (id) => {
        const removeAlert = alerts.filter((alert) => {
            return alert.id !== id;
        })
        setAlerts(removeAlert);
        toast.success('Alert Cancelled')
    };

    // Effect to handle new alerts.
    useEffect(()=> {
        getAllAlerts();
    }, [])

    // Function to fetch all alerts from the json file
    const getAllAlerts = () => {
        setAlerts(data.data);
        setAppData(data);
    };

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
                            <th><Button outline size="sm" color="success" onClick={() => toggle()}>+ New Alert</Button></th>
                        </tr>
                    </thead>

                    <tbody className="table-data">
                        <tr className="searchbar w-100">
                            <td colSpan={6}>
                                {/*Search Input*/}
                                <div className="form-group has-search">
                                    <span className="fa fa-search form-control-feedback"/>
                                    <input type="text" className="form-control search"  placeholder="SEARCH FOR TOKEN SYMBOL, EXCHANGE NAME, OR NOTIFICATION TYPE"
                                           value={searchText} onChange={e => handleChange(e.target.value)} />
                                </div>
                            </td>
                        </tr>
                        {
                            alerts &&
                            alerts.map((alert, index) => (
                                (
                                    <AlertComponent remove={remove} alert={alert} index={index} cancel={true}/>
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



            {/*    Modal*/}
                    <div className="modal-content2"  style={{ background: '#1F2231' }}>
                        <Modal className="modal-dialog modal-dialog-centered modal-lg modal-content2"  isOpen={modal} toggle={toggle}>
                            <div id="modal-content" style={{ background: '#1F2231' }}>
                                <ModalBody id='modal-alert' className="modal-content2">
                                    <FormComponent data={appData} alerts={alerts} toggle={toggle}/>
                                </ModalBody>
                            </div>
                        </Modal>
                    </div>

            </Container>
        </Wrapper>
    );
};
export default TableComponent;