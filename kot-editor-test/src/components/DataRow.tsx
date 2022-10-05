import { useState, ReactNode } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import { ResponseDataType } from '../store/slices/api.slice';

export type DataRowPropsType = {
  isLoading: boolean,
  isCollapsed: boolean,
  rowData: ResponseDataType,
  index: number
}

export function CustomToggle({ children, eventKey }: { children: ReactNode, eventKey: string }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{
        backgroundColor: 'pink',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 0
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}
const DataRow = (({ props }: { props: DataRowPropsType }) => {

  return (
    <Container>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Row>
                <Col xs={1}>
                  <div>
                    <span>{props.index + 1}</span>
                  </div>
                </Col>
                <Col xs={5}>
                  <LeftPanel data={props.rowData.text}/>
                </Col>
                <Col xs={6}>
                  <RightPanel index={props.index} data={props.rowData.translate}/>
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
          <Card.Footer className="text-muted">
            <CustomToggle eventKey="0">Collapse!</CustomToggle>
          </Card.Footer>
        </Card>
      </Accordion>
    </Container>


  )
});

export default DataRow;
