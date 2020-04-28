import React from "react";
import AuthContext from "../../../data/AuthContext"

import Axios from "axios";
const BASE_URL = "http://localhost:3333/api";
export default function ManageCheckin() {
  const authContext = React.useContext(AuthContext)
  const [error, setError] = React.useState(null);
 

 

  React.useEffect(() => {
    const start = async () => {
        authContext.API.readToken(authContext.authState).then(function(result){
          if (result.role !== 'CLIENT_ADMIN'){
           return setError("404. Please try again.")
          } 
        })
    }
    start()
  }, [])
// function manageCheckin(props){ 
//   // eslint-disable-next-line
//   const fetchPermission  = async(id) => {
//      const settings = { method: 'PUT',
//      headers: {
//        'Accept': 'application/json',
//        'Content-Type': 'application/json'
//      }}
 
//    try{
//      const uri = BASE_URL + '/permission/:userId'
//      const response = await fetch(uri, settings);
 
//    if(response.status === 500) {
//     console.log("Server Error.");
//     return;
//   }

 
//   // eslint-disable-next-line
//   let data = await response.json();

// } catch(err) {
//   console.error(err);
// }
// }}




    return(
        <div>
          {error !== null ? error : 
          <div>
           
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. 
            Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. 
            Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
            Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. </p>
          </div>
        }
      </div>
    ) 
  }