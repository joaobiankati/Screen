import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Product } from "./components/Product";

export default function Home(){

    function handleAddProduct(){

    }

    function handleProductRemove(name: String) {
        console.log("Você cliclou no botão de remover Produto")
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
            
            <Text style={styles.listTitle}>Compras Pendentes</Text>
            
            <View style={styles.list}>
            {/* <Text style={styles.listEmptyText}>Comprou todos os produtos? Adicione produtos a sua lista de compras.</Text> */}

            <Product name="iPhone" onRemove={() => handleProductRemove("iPhone")} />
            </View>
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
    listTitle: {
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 24,
        marginBottom: 36
        
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
        width: "100%",
        flexDirection: "row",
        marginTop: 18,

        marginBottom: 36,
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
    },

    listEmptyText: {
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 19.2,
        textAlign: "center",
    },

    list: {
        flex: 1,
        justifyContent: "center",
    }
})