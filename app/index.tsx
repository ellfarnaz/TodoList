import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import { getTodos, saveTodos } from "../utils/storage";
import { Todo } from "../types";
import uuid from "react-native-uuid";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  useEffect(() => {
    const loadTodos = async () => {
      const savedTodos = await getTodos();
      setTodos(savedTodos);
    };
    loadTodos();
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (todo: {
    title: string;
    description: string;
    completed: boolean;
  }) => {
    if (editingTodo) {
      setTodos(
        todos.map((t) =>
          t.id === editingTodo.id
            ? { ...t, title: todo.title, description: todo.description }
            : t
        )
      );
      setEditingTodo(null);
    } else {
      setTodos([...todos, { id: uuid.v4() as string, ...todo }]);
    }
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (todo: Todo) => {
    setEditingTodo(todo);
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="w-full bg-secondary h-10 mb-2 items-center  justify-center">
        <Text className="font-pbold text-xl">Aplikasi Todo List</Text>
      </View>
      <View className="flex-1 p-4 ">
        <TodoInput
          addTodo={addTodo}
          editingTodo={editingTodo}
        />
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
