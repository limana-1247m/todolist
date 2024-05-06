import { useState } from 'react';
import Todo from "./components/Todo";
import Todoform from './components/Todoform';
import Search from './components/Search';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1, 
      text: "Verificar máquina do operário 02",
      category: "Trabalho",
      isCompleted: false,
    },

    {
      id: 2, 
     text: "Terminar leitura do livro ",
      category: "Pessoal",
      isCompleted: false,
    },

    {
      id: 3, 
      text: "Estudar para prova de BD",
      category: "Estudos",
      isCompleted: false,
    },
    ]);

     const [search, setSearch] = useState("");
     const [filter, setFilter] = useState("All");
     const [sort, setSort] = useState("Asc");

   const addTodo = (text,category) =>{
    const newTodos = [
      ...todos,
      {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
  ];

  setTodos(newTodos) //states tem o poder de reinderizar os componentes e isso vai fazer com que as novas tarefas sejam adicionadas
   
};
const removeTodo = (id) => {
const  newTodos = [...todos]
const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null
);
setTodos(filteredTodos)
};

const completeTodo = (id) =>{
  const newTodos = [...todos]
  newTodos.map((todo) =>
   todo.id === id ? (todo.isCompleted = !todo.isCompleted):todo);
   setTodos(newTodos);
};




 //me baseio no id porque ele é único e isso vai ajudar a saber qual deve ser removido da lista
 //linha 46 contém todos os todos
 // .filter serve para encontrar os itens que tem o id diferente e deixá-los na lista, e o todo que tiver o id igual vai ser excluído
 //linha 47 : (todo => todo.id !== id ? todo : null); => o todo.id que estiver diferente (!==) do id informado vai retornar. Porém se for igual (:) vai retornar nulo.

  return ( 
     <div className="app">
  <h1>Lista de Tarefas</h1>
  <Search search={search} setSearch={setSearch}/>
  <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>

<div className="todo-list">
{ todos
  .filter((todo) => 
  filter === "All" 
  ? true
  : filter === "Completed" 
 ? todo.isCompleted 
 : !todo.isCompleted)  
.filter((todo)=>
 todo.text.toLowerCase().includes(search.toLowerCase()) 
  )
  .map((todo) => (
   <Todo key={todo.id}   // sempre que o react repete um componente ele precisa de um atributo/prop chamada KEY
    todo={todo}
    removeTodo={removeTodo}
     completeTodo={completeTodo}/> 
  
)) }


</div>
<Todoform addTodo={addTodo}/>  
</div> // passar a função como propiedade para ela poder executar. E adicionar a nova tarefa
  );
}

  

export default App

