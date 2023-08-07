import axios from "axios";

const baseUrl = "https://todo-back2-sw5v.onrender.com";

const getAllToDo = (setToDo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      setToDo(data);
    })
    .catch((err) => console.log(err));
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then(() => {
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateTodo = (toDoId, text, setText, setToDo, setIsUpdating) => {
  axios
    .put(`${baseUrl}/update`, { _id: toDoId, text })
    .then(() => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDo) => {
  axios
    .delete(`${baseUrl}/delete/${_id}`)
    .then((data) => {
      console.log(data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};
export { getAllToDo, addToDo, updateTodo, deleteToDo };
