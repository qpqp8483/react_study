import React, { useState } from 'react';
const UserContext = React.createContext({ username: "mike", helloCount:0 });
const SetUserContext = React.createContext(() => {});

const CreateContext = () => {

  const [user, setUser] = useState({ username:'mike', helloCount: 0 });

  return (
    <div className="App">
      <SetUserContext.Provider value={setUser}>        
        <UserContext.Provider value={user}>
          <Profile />
        </UserContext.Provider>
      </SetUserContext.Provider>
    </div>
  );
  
}

const Profile = React.memo(() =>{
  return (
    <div>
      <Greeting />
    </div>
  );
});

const Greeting = () => {
  return (
    <SetUserContext.Consumer>
      {setUser => (
        <UserContext.Consumer>
          {({ username, helloCount }) => (
            <React.Fragment>
              <p>{`${username}님 안녕하세요.`}</p>
              <p>{`인사 횟수: ${helloCount}`}</p>
              <button
                onClick={() => {
                  setUser({ username, helloCount: helloCount + 1 })
                }}
              >
                인사하기
              </button>
            </React.Fragment>
          )}
        </UserContext.Consumer>
      )}
    </SetUserContext.Consumer>
  )
}

export default CreateContext;
