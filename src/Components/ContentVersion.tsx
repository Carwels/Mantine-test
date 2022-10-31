import '../Styles/contentversion.css'
import usersLogo from '../images/users.svg'
import userPlus from '../images/userPlus.svg'
import messagesIcon from '../images/messagesIcon.svg'

function ContentVersion() {
  return (
    <div>
          <table className='track-version'>
              <tr className='table-text-header'>
                  <th className='table-align'> # </th>
                  <th className='table-align'> Name </th>
                  <th> Versions </th>
                  <th> Team </th>
                  <th> Updates </th>
                  <th> Collab Space </th>
              </tr>
              
              <tr className='table-text'>
                <td>1</td>
                <td>Test room</td>
                <td>
                    <div className='table-text-center'>
                        <div className='circle-icon-version'>V1</div>
                        <div className='circle-icon-version'>V2</div>
                        <div className='circle-icon-version'>V3</div>
                        <div className="super-index-relative">
                            <span className="super-index">+5</span>
                        </div>
                    </div>
                </td>
                <td>
                    <div className='table-text-center'>
                        <div className='circle-icon-team'>T1</div>
                        <div className='circle-icon-team'>T2</div>
                        <div className='circle-icon-team'>T3</div>
                        <div className='circle-icon-border position'>
                            <img className="users-icon-center" src={userPlus} alt="users-icon" />
                            <div className="super-index-relative">
                                <span className="super-index position-hover">+2</span>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className='table-text-center'>
                        <div className='circle-icon-border grey-border'>
                            <img className='users-icon-center' src={messagesIcon} alt="message-icon" />
                        </div>
                    </div>
                </td>
                <td>
                    <div className='table-text-center'>
                        <div className='circle-icon-border'>
                            <img className="users-icon-center" src={usersLogo} alt="users-icon" />
                        </div>
                    </div>
                </td>
              </tr>
          </table>
    </div>
  );
}

export default ContentVersion;