import React, { useState }  from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import EmptyList from '../../components/EmptyList';
import ListItem from '../../components/ListItem';
 
export default function Home() {

    const [tasksList, setTasksList] = useState<string[]>([]);
    const [task, setTask] = useState('');

    function handleTaskAdd() {
        if(tasksList.includes(task)) {
            return Alert.alert("Tarefa existente", "Esta tarefa já consta em sua lista")
        }
        setTasksList(prevState => [...prevState, task]);
        setTask('');
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('./../../../assets/images/Logo.png')} />
            </View>
            <View>
                <View style={styles.addTaskContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor="#808080"
                        onChangeText={setTask}
                        value={task}   
                    />
                    <TouchableOpacity style={styles.addButton} onPress={handleTaskAdd}>
                        <AntDesign name="pluscircleo" size={16} color="#F2F2F2" />
                    </TouchableOpacity>
                </View>
                <View style={styles.taskControll}>
                <View style={styles.taskCount}>
                    <Text style={styles.taksCountTextBlue}>Criadas</Text>
                    <Text style={styles.taksCountNumber}>{tasksList.length}</Text>
                </View>
                <View style={styles.taskCount}>
                    <Text style={styles.taksCountTextPurple}>Concluídas</Text>
                    <Text style={styles.taksCountNumber}>0</Text>
                </View>
                </View>

            </View>
            <FlatList 
                data={tasksList}
                keyExtractor={item => item}
                renderItem={({item}) => (
                            <ListItem 
                            key={item}
                            task={item}
                            />
                )}
                ListEmptyComponent={() => ( <EmptyList /> )}
                style={styles.taskContainer}
            />
        </View>
    );
}