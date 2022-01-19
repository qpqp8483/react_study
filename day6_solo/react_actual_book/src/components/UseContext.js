import React, { useContext, useState } from 'react';
const UserContext = React.createContext();

const UseContent = () => {
    
    const user = { name: 'mike', age: 23 };

  return (
    <div className="App">
        <UserContext.Provider value={user}>
          <Profile />
        </UserContext.Provider>
    </div>
  );
  
}

const Profile = () =>{
    const user = useContext(UserContext);
    console.log(`user: ${user.name}, ${user.age}`);

  return (
    <div>
        <UserContext.Consumer>
            {user => (
                <>
                    <p>{`name is ${user.name}`}</p>
                    <p>{`age is ${user.age}`}</p>
                </>
            )}
        </UserContext.Consumer>
    </div>
  );
};


export default UseContent;
