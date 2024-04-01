import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux"; 

const ContactForm = () => {
  let [name, setName] = useState("");
  let [phoneNum, setPhoneNum] = useState("");
  let dispatch = useDispatch() //action을 가져오는 리액트훅

  const addContact = (e) => {
    e.preventDefault(); //Form 특성상 새로고침되는거 막아주기
    dispatch({type:"ADD_CONTACT", payload:{name, phoneNum}}) //action을 dispatch로 이렇게 던져주고, reducer로 이동~~
    setName("");
    setPhoneNum("");
  };

  return (
    <div className="form-area">
      <Form onSubmit={(e)=>addContact(e)}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력해 주세요"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhoneNum">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="number"
            placeholder="전화번호를 입력해 주세요"
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </Form.Group>
        <Button variant="dark" type="submit" >
          추가
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
