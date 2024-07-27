import { StyleSheet } from 'react-native';

/*
#0D0D0D gray-700    #1A1A1A gray-600    #262626 gray-500    #333333 gray-400    #808080 gray-300    #D9D9D9 gray-200    #F2F2F2 gray-100

#1E6F9F blue-dark   #4EA8DE blue    #5E60CE purple-dark     #8284FA purple

#E25858 danger
*/

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1A1A"
    },
    logoContainer: {
        backgroundColor: "#0D0D0D",
        height: 173,
        padding: 24,
        justifyContent: 'center',
        alignItems:'center'
    },
    addTaskContainer: {
        flexDirection: 'row',
        margin: "auto",
        marginTop: -25,
        width: '90%',
        paddingTop: 0,
        gap: 4,
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        borderRadius: 6,
        borderColor: "#0D0D0D",
        borderWidth: 1,
        color: '#F2F2F2',
        padding: 16,
        fontSize: 16,
        marginRight: 5
    },
    addButton: {
        height: 52,
        width: 52,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center"
    },
    taskControll: {
        width:'90%',
        flexDirection: 'row',
        margin: "auto",
        marginTop: 24,
        justifyContent: "space-between"
    },
    taskCount: {
        flexDirection: 'row',
        gap: 8
    },
    taksCountTextBlue: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#4EA8DE"
    },
    taksCountTextPurple: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#8284FA"
    },
    taksCountNumber: {
        backgroundColor: "#333333",
        borderRadius: 60,
        paddingHorizontal: 8,
        paddingVertical: 2,
        color: "#D9D9D9",
        fontWeight: 'bold',
        fontSize: 12
    },
    taskContainer: {
        marginTop: 20
    }
});