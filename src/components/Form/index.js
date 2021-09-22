// Import the necessary libraries
import React, { useState } from 'react';
import { Wrapper } from './Form.styles';
import { toast } from 'react-toastify';
import { Col, Form, FormGroup, Input, Label, Row, Button } from "reactstrap";

// Create the form component.
const FormComponent = ({data, alerts, toggle}) => {
    const [value, setValue] = useState({
        symbol: "",
        exchange_name: "",
        token_address: "",
        exchange_address: "",
        blockchain: "",
        alert_price: "",
        current_price: "",
        notification_type: "",
        aboveOrbelow: "",
    });

    // handle change event of all input.
    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    };

    // Function to append data
    const saveData = () => {
        const exchangeData = data.exchange_name.filter((exchange) => {
            return exchange.name === value.exchange_name
        });

        const content = {
            id: data.data.length + 1,
            exchange_name: value.exchange_name,
            symbol: exchangeData[0].symbol,
            logo: exchangeData[0].logo,
            exchange_address: value.exchange_address,
            blockchain: value.blockchain,
            alert_price: value.alert_price,
            current_price: value.alert_price,
            notification_type: value.notification_type,
        }

        alerts.push(content);
    };

    // handle submit event of form
    const submitForm = (e) => {
      e.preventDefault();
      saveData();
     toast.success("Alert Added");
     toggle();
    };


  return (
      <Wrapper>
          <Form className='form-alert' onSubmit={submitForm}>
              <Row className="row-input">
                  <Col md={12}>
                      <FormGroup>
                          <Label for="token">TOKEN ADDRESS</Label>
                          <Input
                              type="text"
                              name="token_address"
                              id="token_address"
                              value={value.token_address}
                              onChange={(e) => changeHandler(e)}
                              required
                          />
                      </FormGroup>
                  </Col>
              </Row>
              <Row className='d-flex row-input'>
                  <Col md={6}>
                      <FormGroup>
                          <Label for="chain">CHAIN (ETH , Polygon,  BSC, ETC.)</Label>
                          <Input
                              type="select"
                              name="blockchain"
                              id="blockchain"
                              value={value.blockchain}
                              onChange={(e) => changeHandler(e)}
                              required
                          >
                              <option selected>Select an option</option>
                              {
                                  data.blockchain.map((blockchain) => (
                                      <option value={blockchain.name}>{blockchain.name}</option>
                                  ))
                              }
                          </Input>
                      </FormGroup>
                  </Col>
                  <Col md={6}>
                      <FormGroup>
                          <Label for="exchange_name">EXCHANGE (PANCAKESWAP, UNISWAP, ETC.)</Label>
                          <Input
                              type="select"
                              name="exchange_name"
                              id="exchange_name"
                              value={value.exchange_name}
                              onChange={(e) => changeHandler(e)}
                              required
                          >
                              <option selected>Select an option</option>
                              {
                                  data.exchange_name.map((exchange) => (
                                      <option value={exchange.name}>{exchange.name}</option>
                                  ))
                              }
                          </Input>
                      </FormGroup>
                  </Col>
              </Row>
              <Row className="row-input">
                  <Col md={8}>
                      <FormGroup>
                          <Label for="targetPrice">TARGET PRICE</Label>
                          <Input
                              type="number"
                              name="alert_price"
                              id="alert_price"
                              value={value.alert_price}
                              onChange={(e) => changeHandler(e)}
                              required
                          />
                      </FormGroup>
                  </Col>
                  <Col md={4}>
                      <FormGroup>
                          <Label for="aboveorbelow">ABOVE OR BELOW</Label>
                          <Input
                              type="select"
                              name="aboveOrbelow"
                              id="aboveOrbelow"
                              value={value.aboveOrbelow}
                              onChange={(e) => changeHandler(e)}
                              required
                          >
                              <option selected>Select an option</option>
                              <option value="above">Above</option>
                              <option value="below">Below</option>
                          </Input>
                      </FormGroup>
                  </Col>
              </Row>
              <Row className="row-input">
                  <Col md={12}>
                      <FormGroup>
                          <Label for="notification">NOTIFICATION TYPE</Label>
                          <Input
                              type="select"
                              name="notification_type"
                              id="notification_type"
                              value={value.notification_type}
                              onChange={(e) => changeHandler(e)}
                              required
                          >
                              <option selected>Select an option</option>
                              {
                                  data.notification_type.map((notification) => (
                                      <option value={notification.name}>{notification.name}</option>
                                  ))
                              }
                          </Input>
                      </FormGroup>
                  </Col>
              </Row>
              <Button type="submit" style={{ background: '#149868' }} className="w-100 my-3">Submit</Button>
          </Form>
      </Wrapper>

  )
};

export default FormComponent;