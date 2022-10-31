import '../App.css';
import '../Styles/headertext.css'
import Content from './Content';
import ContentVersion from './ContentVersion'

function HeaderText() {
  return (
      <div className='header-text-container'>
        <div className="header-title">
            Project Name Example
        </div>
        <Content />
        <ContentVersion />
      </div>    
  );
}

export default HeaderText;