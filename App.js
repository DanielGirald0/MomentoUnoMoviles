import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [asignatura, setAsignatura] = useState("");
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");
  const [promedio, setPromedio] = useState(null);
  const [error, setError] = useState(null);
  const [observacion, setObservacion] = useState(null)
  const [notas, setNotas] = useState([]);

  const calcularPromedio = () => {
    if (!nota1 || !nota2 || !nota3) {
      setError("Por favor ingresa todas las notas!");
      setPromedio(null);
    } else {
      const decimal = /^(?:[0-5](?:\.\d+)?|\.\d+)$/;
      if (!decimal.test(nota1) || !decimal.test(nota2) || !decimal.test(nota3)) {
        setError("Por favor digite nota valida!");
        setPromedio(null);
      } else {
        let nota11 = nota1 * 0.3
        let nota22 = nota2 * 0.35
        let nota33 = nota3 * 0.35
        console.log(nota11)
        console.log(nota22)
        console.log(nota33)
        const promedio = (nota11 + nota22 + nota33).toFixed(1);
        setPromedio(promedio);
        setError(null);
        if (promedio >= 3.0){
          setObservacion("Aprueba")
        }
        else if (promedio >= 2.0){
          setObservacion("Habilita")
        }
        else if (promedio < 2.0){
          setObservacion("Reprueba")
        }
      }
    }
    if (nombre !== '' && asignatura !== '' && nota1 !== '' && nota2 !== '' && nota3 !== '') {
    const nuevaNota = { id, nombre, asignatura, nota1, nota2, nota3, promedio, observacion };
    setNotas([...notas, nuevaNota]);
    }
    else {
    alert('Debe ingresar un nombre y las tres notas para guardar');
    }
  };

  const buscarPorId = () => {
    const notaEncontrada = notas.find((nota) => nota.id === id);
    if (notaEncontrada) {
      setNombre(notaEncontrada.nombre);
      setAsignatura(notaEncontrada.asignatura);
      setNota1(notaEncontrada.nota1);
      setNota2(notaEncontrada.nota2);
      setNota3(notaEncontrada.nota3);
      setPromedio(notaEncontrada.promedio);
      setObservacion(notaEncontrada.observacion);
    } 
    else {
      alert(`No se encontró ninguna nota con el id ${id}`);
    }
  };

  const limpiarFormulario = () => {
    setNombre("");
    setAsignatura("");
    setNota1("");
    setNota2("");
    setNota3("");
    setId("");
    setPromedio("");
    setObservacion("")
  };  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>SISTEMA DE NOTAS</Text>
      <Text style={styles.label}>Id: </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={id}
        onChangeText={(text) => setId(text)}
      />
      <Text style={styles.label}>Nombre: </Text>
      <TextInput
        style={styles.input}
        keyboardType="text"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <Text style={styles.label}>Asignatura:</Text>
      <TextInput
        style={styles.input}
        keyboardType="text"
        value={asignatura}
        onChangeText={(text) => setAsignatura(text)}
      />
      <Text style={styles.label}>Nota 1:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={nota1}
        onChangeText={(text) => setNota1(text)}
      />
      <Text style={styles.label}>Nota 2:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={nota2}
        onChangeText={(text) => setNota2(text)}
      />
      <Text style={styles.label}>Nota 3:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={nota3}
        onChangeText={(text) => setNota3(text)}
      />
      <Text style={styles.label}>Definitiva</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={promedio}
        onChangeText={(text) => setPromedio(text)}
      />
      <Text style={styles.label}>Observacion</Text>
      <TextInput
        style={styles.input}
        keyboardType="text"
        value={observacion}
        onChangeText={(text) => setObservacion(text)}
      />
      
      {error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={calcularPromedio}>
        <Text style={styles.buttonText}>Calcular/Guardar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={buscarPorId}>
        <Text style={styles.buttonText}>Buscar </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={limpiarFormulario}>
        <Text style={styles.buttonText}>Limpiar </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    backgroundColor: "yellowgreen",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 2,
    backgroundColor: "#FFE7AD",
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultado: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  error: {
    fontSize: 20,
    color: "red",
    marginTop: 20,
    textAlign: "center",
  },
});
