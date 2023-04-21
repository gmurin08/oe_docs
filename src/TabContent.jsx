import bullet from './assets/arrow_icon.png'

export default function TabContent(){
    return (<div className='tab-content-container'>
        <div className="tab-text">
          When you begin working for a contributing employer, it is very important that you complete 
          an Enrollment Form in order for the Fund Office to have your most up-to-date and complete 
          information.  Keep in mind, this form also includes your beneficiary information, your dependent 
          information, and much more. Please make time to complete and submit this form.
        </div>
        <div className="link-container">
          <img src={bullet} style={{width:'15px'}} alt="" /> <a href='#'>Enrollment Form</a>
        </div>
    </div>)

}