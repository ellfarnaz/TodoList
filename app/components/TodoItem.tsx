import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Todo } from "../../types";
import { Ionicons } from "@expo/vector-icons";

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (todo: Todo) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleComplete,
  deleteTodo,
  editTodo,
}) => {
  return (
    <View
      style={[styles.todoContainer, todo.completed && styles.completedTodo]}>
      <TouchableOpacity onPress={() => toggleComplete(todo.id)}>
        <Text style={[styles.title, todo.completed && styles.completed]}>
          {todo.title}
        </Text>
        <Text style={[styles.description, todo.completed && styles.completed]}>
          {todo.description}
        </Text>
      </TouchableOpacity>
      <View className="flex-row  justify-between w-1/3 mr-2">
        <TouchableOpacity onPress={() => editTodo(todo)}>
          <Ionicons
            name="create-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteTodo(todo.id)}
          className="">
          <Ionicons
            name="trash-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity
          // style={{ backgroundColor: todo.completed ? "#FF9C01" : "red" }}
          onPress={() => toggleComplete(todo.id)}
          // className="border-2 border-white bg-gray-200 rounded-md  text-white items-center  self-center justify-center"
        >
          {todo.completed ? (
            <Ionicons
              name="close-circle-outline"
              size={24}
              color="black"
            />
          ) : (
            <Ionicons
              name="checkmark-done-outline"
              size={24}
              color="black"
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 3,
    borderColor: "#CDCDE0",
    marginBottom: 20,
    backgroundColor: "#FF9C01",
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },
  description: {
    fontSize: 12,
    fontFamily: "Poppins-SemiBold",
  },
  completed: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  completedTodo: {
    backgroundColor: "#232533",
  },
});

export default TodoItem;
