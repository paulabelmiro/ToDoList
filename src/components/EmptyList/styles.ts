import { StyleSheet } from 'react-native';

/*
#0D0D0D gray-700    #1A1A1A gray-600    #262626 gray-500    #333333 gray-400    #808080 gray-300    #D9D9D9 gray-200    #F2F2F2 gray-100

#1E6F9F blue-dark   #4EA8DE blue    #5E60CE purple-dark     #8284FA purple

#E25858 danger
*/

export const styles = StyleSheet.create({
    emptyComtainer: {
        justifyContent: "center",
        margin: "auto",
        paddingHorizontal: 10,
        paddingVertical: 50,
        alignItems: "center"
    },
    emptyText: {
        textAlign: "center",
        color: "#808080",
        fontSize: 14
    },
    emptyTextBold: {
        textAlign: "center",
        color: "#808080",
        fontSize: 14,
        fontWeight: "bold"
    },
    emptyIcon: {
        marginBottom: 8,
    }
});