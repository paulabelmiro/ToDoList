import { Text, View } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { styles } from './styles'; 

export default function index() {
  return (
    <View style={styles.emptyComtainer}>
        <MaterialCommunityIcons name="clipboard-text-off-outline" size={86} color="#333333" style={styles.emptyIcon}/>
        <Text style={styles.emptyTextBold}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.emptyText}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
};