import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
import { Todo } from "../../types";
import { showAlert } from "../../utils/alertUtils";

interface TodoInputProps {
  addTodo: (todo: {
    title: string;
    description: string;
    completed: boolean;
  }) => void;
  editingTodo: Todo | null;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo, editingTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTodo]);

  const handleAddTodo = () => {
    if (!title.trim() || !description.trim()) {
      showAlert(
        "Inputan belum terisi sepenuhnya",
        "Tolong isi inputan dengan benar !"
      );
      return;
    }

    addTodo({
      title,
      description,
      completed: false,
    });
    setTitle("");
    setDescription("");
    Keyboard.dismiss(); // Hide the keyboard
  };

  return (
    <View>
      <TextInput
        placeholder="Tugas"
        placeholderTextColor="grey"
        value={title}
        onChangeText={setTitle}
        className="border-2 border-secondary rounded-md p-2 text-white mb-4 bg-black-200 font-psemibold text-sm"
      />
      <TextInput
        className="border-2 border-secondary rounded-md p-2 text-white mb-4 bg-black-200 font-psemibold text-sm"
        placeholder="Deskripsi Tugas"
        placeholderTextColor="grey"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity
        onPress={handleAddTodo}
        className="border-2 border-white bg-gray-200 rounded-md p-2 text-white mb-4 bg-secondary items-center w-1/2 h-13 self-center justify-center">
        <Text className="font-pbold pt-[2px] text-base">
          {editingTodo ? "Update" : "Tambah"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;
