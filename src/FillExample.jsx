import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function FillExample() {
  return (
    <Tabs
      defaultActiveKey="welfare"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="enrollment" title="Enrollment Form">
        Test
      </Tab>
      <Tab eventKey="union" title="Union Forms">
      Test
      </Tab>
      <Tab eventKey="welfare" title="Welfare Forms">
        Test
      </Tab>
      <Tab eventKey="pension" title="Pension Forms" >
        Test
      </Tab>
      {/* <Tab eventKey="spd" title="Summary Plan Description" >
        Test
      </Tab> */}
    </Tabs>
  );
}

export default FillExample;