import { useState } from 'react';

export const Task = (props) => {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);

  const handleMarkAsDone = () => {
    setIsCompleted(true);
    props.markAsDone(props.id);
  };

  const taskClassName = isCompleted
    ? 'text-green-800 px-6 py-4 font-medium whitespace-nowrap dark:text-white'
    : 'text-black px-6 py-4 font-medium whitespace-nowrap dark:text-white';

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row" className={taskClassName}>
            {props.taskName}
          </th>
          <td className="px-6 py-4 text-right">
            <button onClick={handleMarkAsDone} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Completed
            </button>
          </td>
          <td className="px-6 py-4 text-right">
            <button onClick={() => props.deleteTask(props.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
