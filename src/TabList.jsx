import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContent from './TabContent';
import bullet from './assets/arrow_icon.png'

function TabList() {

  const onLinkClick = () =>{
    fetch(link).then(res=>{
      res.blob().then(blob=>{
        const fileUrl = window.URL.createObjectURL(blob)
        let aLink = documennt.createElement('a');
        aLink.href = fileUrl
        aLink.download = 'pdf.pdf'
        aLink.click();
      })
    })
  }

  return (
    <div className="tab-outline">
    <Tabs
      defaultActiveKey="welfare"
      id="fill-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="enrollment" title="Enrollment Form">
        <TabContent/>
      </Tab>
      <Tab eventKey="union" title="Union Forms">
      <div className='tab-content-container'>
        <div className="tab-text">
        </div>
        <div className="link-container">
          <div className="link-line"><img src={bullet} style={{width:'15px'}} alt="" /> <a href='#'>Transfer Authorization Request</a></div>
        </div>
    </div>
      </Tab>
      <Tab eventKey="welfare" title="Welfare Forms">
      <div className='tab-content-container'>
        <div className="tab-text">
        </div>
        <div className="link-container">
          <div className="link-line"><img src={bullet} style={{width:'15px'}} alt="" /> <a href='#'>Address Change</a></div>
          <div className="link-line"><img src={bullet} style={{width:'15px'}} alt="" /> <a href='#'>Beneficiary Designation Change</a></div>
          <div className="link-line"><img src={bullet} style={{width:'15px'}} alt="" /> <a href='#'>Dental Claim Form</a></div>
          <div className="link-line"><img src={bullet} style={{width:'15px'}} alt="" /> <a href='#'>Vision Claim Form</a></div>
          <div className="link-line"><img src={bullet} style={{width:'15px'}} alt="" /> <a href='#' onClick = {onLinkClick}>Member Reimbursement Form</a></div>
        </div>
    </div>
      </Tab>
      <Tab eventKey="pension" title="Pension Forms" >
      <div className='tab-content-container'>
        <div className="tab-text">
        </div>
        <div className="link-container">
          <div className="link-line"><img src={bullet} style={{width:'15px'}} alt="" /> <a href='#'>Address Change</a></div>
          <div className="link-line"><img src={bullet} style={{width:'15px'}} alt="" /> <a href='#'>Beneficiary Designation Change</a></div>
          <div className="link-line"><img src={bullet} style={{width:'15px'}} alt="" /> <a href='#'>Notification of Retirement Application</a></div>
          <div className="link-line"><img src={bullet} style={{width:'15px'}} alt="" /> <a href='#'>Authorization for ACH (Direct Deposit)</a></div>
          <div className="link-line"><img src={bullet} style={{width:'15px'}} alt="" /> <a href='#'>PA State Tax Form</a></div>
        </div>
    </div>
      </Tab>
      {/* <Tab eventKey="spd" title="Summary Plan Description" >
        Test
      </Tab> */}
    </Tabs>
    </div>
  );
}

export default TabList;