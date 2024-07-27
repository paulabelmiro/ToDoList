import { StyleSheet } from 'react-native';

/*
#0D0D0D gray-700    #1A1A1A gray-600    #262626 gray-500    #333333 gray-400    #808080 gray-300    #D9D9D9 gray-200    #F2F2F2 gray-100

#1E6F9F blue-dark   #4EA8DE blue    #5E60CE purple-dark     #8284FA purple

#E25858 danger
*/

export const styles = StyleSheet.create({
   listItem: {
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#333333",
    color: "#F2F2F2",
    borderRadius: 8,
    flexWrap: "nowrap",
    margin: "auto",
    width: "90%",
    padding: 12,
    marginBottom: 8
   },
   listText: {
    color: "#F2F2F2"
   }
});