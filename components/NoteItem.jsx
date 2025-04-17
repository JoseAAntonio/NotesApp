import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const NoteItem = ({ note, onDelete }) => {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{note.text}</Text>
      <TouchableOpacity onPress={() => onDelete(note.$id)}>
        <Text style={styles.delete}>❌</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    noteItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#e6e6fa",
        padding: 20,
        borderRadius: 10,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    noteText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#4b0082",
    },
    delete: {
        fontSize: 18,
        color: '#ff4444',
    }
});

export default NoteItem;