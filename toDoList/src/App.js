import './index.css';
import { useState } from 'react';
import { Task } from './Task.js';

function App() {
	const [todoList, setTodoList] = useState([]);
	const [newTask, setNewTask] = useState('');

	const addTask = () => {
		if (newTask) {
			const task = {
				id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
				taskName: newTask,
        		isCompleted: false
			};
			setTodoList([...todoList, task]);
		} else
			{
				alert('please type something');
        		setTodoList([...todoList]);
			}
	};
	const handleChnage = (event) => {
		setNewTask(event.target.value);
	};
	const markAsDone = (id) => {
		setTodoList(
			todoList.map((task) => {
				if (task.id === id ){
					console.log(task.isCompleted);
					return {...task, isCompleted: true};
				}else {
					 return task;
				}
			})
		)
	};

	const deleteTask = (id) => {
		setTodoList(todoList.filter((task) => task.id !== id));
		console.log(id);
	};
	return (
		<div className="grid justify-items-stretch w-full mt-2">
			<div className="justify-self-center w-full">
				<div className="flex items-center">
					<div className="relative w-1/3">
						<input onChange={handleChnage} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full" placeholder="Add Task" required/>
					</div>
					<button onClick={addTask} className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Add
					</button>
				</div>
			</div>

			<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
				{todoList.map((task) => {
					return <Task isCompleted={todoList.isCompleted} markAsDone={markAsDone} deleteTask={deleteTask} taskName={task.taskName} id={task.id} />;
				})}
			</div>
		</div>
	);
}
export default App;
