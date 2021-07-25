import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
   const [user, setUser] = useState([]);
   const [page, setPage] = useState(1);
   useEffect(() => {
      fetch(`https://reqres.in/api/users?page=${page}`)
         .then((res) => res.json())
         .then((res) => setUser(res.data))
         .catch((err) => console.log(err));
   }, [page]);

   function back() {
      if (page > 1 && page !== 1) {
         setPage(page - 1);
      }
   }

   function next() {
      if (user.length > 0) {
         setPage(page + 1);
      }
   }

   return (
      <>
      <div className='main'>
         <div className="heading">Contact List</div>
         <div className='content'>
            {user &&
               user.map((data, item) => {
                  return (
                     <div className='user' key={item}>
                        <img
                           src={data.avatar}
                           className='avatar-image'
                           alt={data.first_name}
                        />
                        <span>
                           <p>
                              <b>{data.first_name} {data.last_name}</b>
                              <br />
                         {data.email}</p>
                        </span>
                     </div>
                  );
               })}
            {user.length === 0 && (
               <div className='end'>
                  <h1>End Of Data</h1>
               </div>
            )}
         </div>
         
       </div>
       <div className='footer'>
            <button className="next" onClick={next}>Next</button>
            <button className="back" onClick={back}>Back</button>

         </div>
       

       </>
   );
}

export default App;
