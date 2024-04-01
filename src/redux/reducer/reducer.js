let initialState = {
  contactList: []
};

function reducer(state = initialState, action) {
  let { type, payload } = action; 
  //코드 줄이기: type이랑 payload 앞에 항상 action. 이 붙으니까 이렇게 객체로 만들어주고 action. 안써줘도됌
  
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: payload.name, phoneNum: payload.phoneNum },
        ],
      }; //reducer는 return을 해서 store에 저장

    default:
      return { ...state }; //switch함수는 항상 default : return 해줘야한다
  }
}

export default reducer;
