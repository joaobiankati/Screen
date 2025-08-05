import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Home(){

    function handleAddProduct(){
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Compras</Text>
            <Text style={styles.todaysDate}>Quarta-feira, 17 de Julho de 2025</Text>

            <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder= "Nome do Produto"
                placeholderTextColor={"#BDBABA"}
                keyboardType="default"
                />

                <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>    
            </View> 
            
            <Text style={styles.buy}>Compras Pendentes</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#ebe6e6",
        padding: 24
    },
    title: {
        color: "#000",
        fontSize: 24,
        fontWeight: "bold", //700,
        lineHeight: 28.8,
        marginTop: 48,
    },
    todaysDate: {
        color: "#000",
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 28.8,

    },
    buy: {
        color: "#000",
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 28.8,
        marginTop: 36
        
    },
    input: {
        flex: 1,
        height: 56,
        padding: 16,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 5,
        borderRadius: 5,
        marginRight: 16,
    
    },
    form : {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 18,
    },

    button: {
        width: 56, 
        height: 56,
        backgroundColor: "#31C667",
        borderRadius: 5,
    
        alignItems: "center",
        justifyContent: "center"
    },
    textButton: {
        color: "#fff",
        fontSize: 24,
    }
})