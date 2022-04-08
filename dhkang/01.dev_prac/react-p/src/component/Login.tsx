import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUserInfo } from "../interface";
import { UserState } from "../reducer";
import { login } from "../slicer/userSlice";

function Login() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const [person, setPerson] = useState<IUserInfo>();

  const user = useSelector((state: UserState) => state.user);
  const dispatch = useDispatch();

  let userInfo: IUserInfo = {
    id: null,
    pwd: "",
    name: "",
    age: 0,
    addr: "",
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login({ id, pwd }));
    setPerson(() => {
      return {
        id,
        pwd,
        name: "dh",
        age:28,
        addr:"seoul"
      }
    });
  };
  const handleChangeId = (event: React.FormEvent<HTMLInputElement>) => {
    setId(event.currentTarget.value);
  };
  const handleChangePwd = (event: React.FormEvent<HTMLInputElement>) => {
    setPwd(event.currentTarget.value);
  };

  const handleCheck = () => {
    console.log("handleCheck: ", user);
    console.log(userInfo);
    console.log("person", person);
  };
  return (
    <>
      <div>
        <h1>User Login</h1>
        <form onSubmit={handleSubmit}>
          <label>ID</label>&nbsp;&nbsp;&nbsp;
          <input onChange={handleChangeId} />
          <br />
          <label>PWD</label>&nbsp;&nbsp;&nbsp;
          <input onChange={handleChangePwd} />
          <br />
          <button>Login</button>
        </form>
        <br />
        <button onClick={handleCheck}>checkState</button>
      </div>
      <div style={{ marginTop: 50 }}>
        {person !== undefined && (
          <>
            <span>{`ID: ${person.id}`}</span>
            <br />
            <span>{`PWD: ${person.pwd}`}</span>
            <br />
            <span>{`name: ${person.name}`}</span>
            <br />
            <span>{`age: ${person.age}`}</span>
            <br />
            <span>{`addr: ${person.addr}`}</span>
            <br />
          </>
        )}
      </div>
    </>
  );
}

export default Login;
