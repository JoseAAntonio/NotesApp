import { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextInput  } from "react-native";

const NoteScreen = () => {
    const [notes, setNotes] = useState([
        {id: '1', text: 'Note 1'},
        {id: '2', text: 'Note 2'},
        {id: '3', text: 'Note 3'},
      ]);
    const [modalisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState('');

    return (
        <View style={styles.container}>
            <FlatList 
                data={notes}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={styles.noteItem}>
                        <Text style={styles.noteText}>{item.text}</Text>
                    </View>
                )}
            />

        <TouchableOpacity style={styles.addButton} onPress={() => {setModalVisible(true)}}>
                <Text style={styles.addButtonText}>
                    + Add Note
                </Text>
        </TouchableOpacity>    

        {/* Modal */} 
        <Modal
        visible={modalisible}
        animationType="slide"
        transparent
        onRequestClose={() => {setModalVisible(false)}}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Add a new Note</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Enter your note..."
                    placeholderTextColor='#aaa'
                    value={newNote}
                    onChange={setNewNote}
                    />
                    <View style={styles.modalButtons}>
                        <TouchableOpacity style={styles.cancelButton} onPress={() => {setModalVisible(false)}}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveButton}>
                            <Text style={styles.savelButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>   

        </View>
      );
}

const styles = StyleSheet.create({
    container:{
       flex: 1,
       padding: 20,
       backgroundColor: '#f0f8ff', // Changed to a light blue background for better aesthetics
    },
    noteItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#e6e6fa', // Changed to a lavender background for note items
        padding: 20, // Increased padding for better spacing
        borderRadius: 10, // Increased border radius for a smoother look
        marginVertical: 8, // Increased margin for better spacing between items
        shadowColor: '#000', // Added shadow for a subtle 3D effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2, // Added elevation for Android shadow
    },
    noteText: {
       fontSize: 18,
       fontWeight: 'bold', // Made text bold for better readability
       color: '#4b0082', // Changed text color to indigo for better contrast
    },
    addButton: {
        backgroundColor: '#4CAF50', // Green background for the button
        paddingVertical: 15, // Vertical padding for better touch area
        paddingHorizontal: 30, // Horizontal padding for better touch area
        borderRadius: 25, // Rounded corners for a modern look
        alignItems: 'center', // Center the text inside the button
        justifyContent: 'center',
        shadowColor: '#000', // Added shadow for a subtle 3D effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3, // Added elevation for Android shadow
        marginTop: 20, // Added margin to separate the button from other elements
    },
    addButtonText: {
        color: '#fff', // White text for contrast
        fontSize: 16, // Slightly larger font size for readability
        fontWeight: 'bold', // Bold text for emphasis
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff', // White background for the modal
        padding: 20, // Padding inside the modal
        borderRadius: 10, // Rounded corners for the modal
        width: '80%', // Modal width relative to the screen
        shadowColor: '#000', // Shadow for a subtle 3D effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // Elevation for Android shadow
    },
    modalTitle: {
        fontSize: 20, // Larger font size for the title
        fontWeight: 'bold', // Bold text for emphasis
        marginBottom: 10, // Margin below the title
        color: '#333', // Darker text color for better readability
    },
    input: {
        borderWidth: 1, // Border for the input field
        borderColor: '#ccc', // Light gray border color
        borderRadius: 5, // Rounded corners for the input field
        padding: 10, // Padding inside the input field
        fontSize: 16, // Font size for the input text
        marginBottom: 15, // Margin below the input field
        color: '#333', // Darker text color for better readability
    },
    modalButtons: {
        flexDirection: 'row', // Arrange buttons in a row
        justifyContent: 'space-between', // Space between the buttons
    },
    cancelButton: {
        backgroundColor: '#f44336', // Red background for the cancel button
        paddingVertical: 10, // Vertical padding for better touch area
        paddingHorizontal: 20, // Horizontal padding for better touch area
        borderRadius: 5, // Rounded corners for the button
    },
    cancelButtonText: {
        color: '#fff', // White text for contrast
        fontSize: 16, // Font size for readability
        fontWeight: 'bold', // Bold text for emphasis
    },
    saveButton: {
        backgroundColor: '#4CAF50', // Green background for the save button
        paddingVertical: 10, // Vertical padding for better touch area
        paddingHorizontal: 20, // Horizontal padding for better touch area
        borderRadius: 5, // Rounded corners for the button
    },
    savelButtonText: {
        color: '#fff', // White text for contrast
        fontSize: 16, // Font size for readability
        fontWeight: 'bold', // Bold text for emphasis
    },
});

export default NoteScreen;