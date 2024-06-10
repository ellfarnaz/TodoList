import AsyncStorage from "@react-native-async-storage/async-storage";
import { Todo } from "../types";

export const getTodos = async (): Promise<Todo[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem("@todos");
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const saveTodos = async (todos: Todo[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(todos);
    await AsyncStorage.setItem("@todos", jsonValue);
  } catch (e) {
    console.error(e);
  }
};
