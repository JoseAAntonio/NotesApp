import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";

import NoteList from "@/components/NoteList";
import AddNoteModal from "@/components/AddNoteModal";

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    { id: "1", text: "Note 1" },
    { id: "2", text: "Note 2" },
    { id: "3", text: "Note 3" },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");

  //!SECTION Add new note
  const addNote = () => {
    if (typeof newNote !== "string" || newNote.trim() === "") return;

    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: Date.now().toString(),
        text: newNote,
      },
    ]);

    setNewNote("");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <NoteList notes={notes} />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>

      {/* Modal */}
      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f8ff", // Changed to a light blue background for better aesthetics
  },
  addButton: {
    backgroundColor: "#4CAF50", // Green background for the button
    paddingVertical: 15, // Vertical padding for better touch area
    paddingHorizontal: 30, // Horizontal padding for better touch area
    borderRadius: 25, // Rounded corners for a modern look
    alignItems: "center", // Center the text inside the button
    justifyContent: "center",
    shadowColor: "#000", // Added shadow for a subtle 3D effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Added elevation for Android shadow
    marginTop: 20, // Added margin to separate the button from other elements
  },
  addButtonText: {
    color: "#fff", // White text for contrast
    fontSize: 16, // Slightly larger font size for readability
    fontWeight: "bold", // Bold text for emphasis
  },
  
});

export default NoteScreen;
