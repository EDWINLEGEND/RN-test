import * as React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Button, Text, FAB } from 'react-native-paper';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export deafault function NotesListScreen(){
    const navigation = useNavigation();
    const [notes,setNotes]=React.useState([]);
    
    }