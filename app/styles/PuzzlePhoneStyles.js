export default  {
    progressBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 15, // Add padding to make the container taller
      },
      progressBar: {
        height: '100%',
        backgroundColor: 'blue',
        width: '0%', // This will be dynamic as the progress changes
      },
      progressText: {
        position: 'absolute',
        right: 15,
        color: '#000',
      },
      dropdownButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1, 
        borderColor: '#d0d0d0', 
        borderRadius: 10,
        paddingVertical: 15, 
        width: '90%', 
        alignSelf: 'center',
        marginBottom: 20, 
        backgroundColor: '#ffffff', 
        paddingHorizontal:10,
      },
      syllableSpacesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end', // Align items to the bottom
        marginTop: 20,
        marginBottom: 20,
        width: '90%', // Assuming you want it to match other elements
        alignSelf: 'center', // Center the container
      },
      
      syllableSpace: {
        borderBottomWidth: 1, // Only show the bottom border
        borderColor: 'black',
        width: '18%', // Adjust based on your layout needs
        marginHorizontal: 2, // Keep them close or adjust as needed
        height: 2, // Minimal height since it's just an underline
        paddingVertical: 0, // No vertical padding necessary for an underline
      },
      
      gameMessageContainer: {
        borderWidth: 1,
        borderColor: '#d0d0d0',
        borderRadius: 5,
        height: 45, 
        marginBottom: 20,
        width: '90%', // Set width to 90% of the parent container
        alignSelf: 'center', // Center the gameMessageContainer within the parent
      },
      syllablesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20, 
      },

      syllableButton: {
        backgroundColor: 'grey',
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginBottom:5,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '30%',
      },
      syllableText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        flex: 1, 
      },
      syllableCountContainer: {
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        padding: 5,
      },
      syllableCount: {
        fontSize: 14,
      },
      controlButtonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20, 
      },
      controlButton: {
        backgroundColor: 'grey',
        paddingHorizontal: 16,
        paddingVertical: 10,
        margin:5,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '22%',
      },
    };