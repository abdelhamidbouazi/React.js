export const Task = (props) => {
	return (
		<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
				<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
					{props.taskName}
				</th>
				<td class="px-6 py-4 text-right">
					<button onClick={() => props.deleteTask(props.id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline" >
						Delete
					</button>
				</td>
			</tr>
		</table>
	)
}
