import { PrettyChatWindow} from 'react-chat-engine-pretty'
//MultiChatSocket which socket user connect to their chat
//MultiChatWindow is UI where user send and recieve messenger
//Logic which is statement api call make Chat app work
const ChatsPage = (props) => {
     
     return (
     <div style = {{ height : '100vh'}}>
          <PrettyChatWindow
               projectId='b232c035-d02c-438a-87ea-731da2c2d045'
               username= {props.user.username}
               secret={props.user.secret}
               style={{ height : '100%'}}
               />
     </div>
     )
}

export default ChatsPage