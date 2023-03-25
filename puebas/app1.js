import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

const NotasComponent = () => {
  const [nombre, setNombre] = useState("");
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");
  const [id, setId] = useState("");
  const [notas, setNotas] = useState([]);

  const calcularPromedio = () => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const n3 = parseFloat(nota3);
    const promedio = (n1 + n2 + n3) / 3;
    return promedio.toFixed(2);
  };

  const guardarNota = () => {
    const nuevaNota = { id, nombre, nota1, nota2, nota3 };
    setNotas([...notas, nuevaNota]);
    limpiarFormulario();
  };

  const buscarPorId = () => {
    const notaEncontrada = notas.find((nota) => nota.id === id);
    if (notaEncontrada) {
      setNombre(notaEncontrada.nombre);
      setNota1(notaEncontrada.nota1);
      setNota2(notaEncontrada.nota2);
      setNota3(notaEncontrada.nota3);
    } else {
      alert(`No se encontró ninguna nota con el id ${id}`);
    }
  };

  const limpiarFormulario = () => {
    setNombre("");
    setNota1("");
    setNota2("");
    setNota3("");
    setId("");
  };

  return (
    <View>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <TextInput
        placeholder="Nota 1"
        value={nota1}
        onChangeText={(text) => setNota1(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Nota 2"
        value={nota2}
        onChangeText={(text) => setNota2(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Nota 3"
        value={nota3}
        onChangeText={(text) => setNota3(text)}
        keyboardType="numeric"
      />
      <Button title="Guardar" onPress={guardarNota} />
      <TextInput
        placeholder="Buscar por Id"
        value={id}
        onChangeText={(text) => setId(text)}
        keyboardType="numeric"
      />
      <Button title="Buscar" onPress={buscarPorId} />
      <Button title="Limpiar" onPress={limpiarFormulario} />
      /*
      {promedio && (
        <Text style={styles.resultado}>
          El promedio de las notas es: {promedio}
        </Text>
      )}
      */
      <Text>Notas guardadas:</Text>
      {notas.map((nota) => (
        <View key={nota.id}>
          <Text>Id: {nota.id}</Text>
          <Text>Nombre: {nota.nombre}</Text>
          <Text>Nota 1: {nota.nota1}</Text>
          <Text>Nota 2: {nota.nota2}</Text>
          <Text>Nota 3: {nota.nota3}</Text>
          <Text>Promedio: {calcularPromedio(nota)}</Text>
        </View>
      ))}
    </View>
  );
};

export default NotasComponent;
