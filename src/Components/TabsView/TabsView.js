import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import User from '../AboutUser/User';
import Links from '../Links/Links';
import Result from '../Result/Result';
// import Tabs,  {TabPane}  from 'rc-tabs';
import '../TabsView/tabview.css'

const TabsView = () => {



    return (
        <div>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col className='tabs' sm={3}>

                        <User />

                        <Nav variant="pills" className="flex-column tab_link">
                            <Nav.Item >
                                <Nav.Link className='tab_colur' eventKey="first">My Links</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='tab_colur' eventKey="second">My admit Card</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='tab_colur' eventKey="third">Semester Registeration</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='tab_colur' eventKey="four">Internal Marks</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='tab_colur' eventKey="five">Faculty Feedback</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='tab_colur' eventKey="six">Fee Details</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='tab_colur' eventKey="seven">Fee Payment</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='tab_colur' eventKey="eight">Result</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9} className='tabs_content'>
                        <Tab.Content className='content'>
                            <Tab.Pane eventKey="first">
                                <Links/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Links />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Links />
                            </Tab.Pane>
                            <Tab.Pane eventKey="four">
                                <Links />
                            </Tab.Pane>
                            <Tab.Pane eventKey="five">
                                <Links />
                            </Tab.Pane>
                            <Tab.Pane eventKey="six">
                                <Links />
                            </Tab.Pane>
                            <Tab.Pane eventKey="seven">
                                <Links />
                            </Tab.Pane>
                            <Tab.Pane eventKey="eight">
                                <Result />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default TabsView;