import axios from 'axios'

const AuthPage = (props) => {
     const onSubmit = (e) => {
       e.preventDefault();
       const { value } = e.target[0];
       axios.post(
          'http://localhost:3001/authenticate',
          {username: value}
          )
          .then (r => props.onAuth({ ...r.data, secret: value }) )
          .catch(error => console.log('error', error))
     };
   
     //When the form Submit, we trigger the onASubmitfunction and set user and set onAuth in App.jsx

     return (
       <div className="background">
         <form onSubmit={onSubmit} className="form-card">
           <div className="form-title">Welcome 👋</div>
   
           <div className="form-subtitle">Set a username to get started</div>
   
           <div className="auth">
             <div className="auth-label">Username</div>
             <input className="auth-input" name="username" />
             <button className="auth-button" type="submit">
               Enter
             </button>
           </div>
         </form>
       </div>
     );
   };
   
   export default AuthPage;