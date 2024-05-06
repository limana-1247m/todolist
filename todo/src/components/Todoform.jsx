import {useState} from 'react';

const Todoform = ({addTodo}) => {
    const[value, setValue] = useState("");
    const[category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category)  // 
        setValue("");
        setCategory(""); // Linha 10 e 11 faz com que depois de clicar em adicionar os nomes sumam
    };

  return (
     <div className='todoform'>
    <h2>Criar tarefa</h2>
    <form onSubmit={handleSubmit}>
    <input 
    type="text" 
    placeholder="Digite o nome da tarefa"
    value={value}
     onChange={(e) => setValue(e.target.value)}/>

   
    <select value={category} onChange={(e) => setCategory(e.target.value)} >
        <option value="">Selecione uma categoria</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Estudos">Estudos</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Entreternimento">Entreternimento</option>
    </select>
    <button type='submit'>Adicionar</button>
    </form>
    </div>
  )};


export default Todoform
