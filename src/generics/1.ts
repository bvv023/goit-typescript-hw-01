import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching from ${url}: ${error.message}`);
    } else {
      throw new Error(`Error fetching from ${url}: ${String(error)}`);
    }
  }
}

async function demoFetch() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  
  try {
    const data = await fetchData<{ userId: number; id: number; title: string; completed: boolean }>(url);
    console.log('Fetched data:', data);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('Error:', String(error));
    }
  }
}

demoFetch();
