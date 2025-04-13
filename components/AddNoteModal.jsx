import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";

const AddNoteModal = ({
  modalVisible,
  setModalVisible,
  newNote,
  setNewNote,
  addNote  
}) => {
    return ( 
        <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add a new Note</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your note..."
              placeholderTextColor="#aaa"
              value={newNote}
              onChangeText={setNewNote} // Fixed from onChange to onChangeText
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={addNote}>
                <Text style={styles.savelButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
     );
}


const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
        justifyContent: "center",
        alignItems: "center",
      },
      modalContent: {
        backgroundColor: "#fff", // White background for the modal
        padding: 20, // Padding inside the modal
        borderRadius: 10, // Rounded corners for the modal
        width: "80%", // Modal width relative to the screen
        shadowColor: "#000", // Shadow for a subtle 3D effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // Elevation for Android shadow
      },
      modalTitle: {
        fontSize: 20, // Larger font size for the title
        fontWeight: "bold", // Bold text for emphasis
        marginBottom: 10, // Margin below the title
        color: "#333", // Darker text color for better readability
      },
      input: {
        borderWidth: 1, // Border for the input field
        borderColor: "#ccc", // Light gray border color
        borderRadius: 5, // Rounded corners for the input field
        padding: 10, // Padding inside the input field
        fontSize: 16, // Font size for the input text
        marginBottom: 15, // Margin below the input field
        color: "#333", // Darker text color for better readability
      },
      modalButtons: {
        flexDirection: "row", // Arrange buttons in a row
        justifyContent: "space-between", // Space between the buttons
      },
      cancelButton: {
        backgroundColor: "#f44336", // Red background for the cancel button
        paddingVertical: 10, // Vertical padding for better touch area
        paddingHorizontal: 20, // Horizontal padding for better touch area
        borderRadius: 5, // Rounded corners for the button
      },
      cancelButtonText: {
        color: "#fff", // White text for contrast
        fontSize: 16, // Font size for readability
        fontWeight: "bold", // Bold text for emphasis
      },
      saveButton: {
        backgroundColor: "#4CAF50", // Green background for the save button
        paddingVertical: 10, // Vertical padding for better touch area
        paddingHorizontal: 20, // Horizontal padding for better touch area
        borderRadius: 5, // Rounded corners for the button
      },
      savelButtonText: {
        color: "#fff", // White text for contrast
        fontSize: 16, // Font size for readability
        fontWeight: "bold", // Bold text for emphasis
      },
})
 
export default AddNoteModal;