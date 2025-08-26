import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, ScrollView } from "react-native";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [tarea, setTarea] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [plazo, setPlazo] = useState("");
  const [tiempo, setTiempo] = useState("");

  const [tareas, setTareas] = useState([]);

  const guardarTarea = () => {
    if (!nombre || !tarea || !descripcion || !plazo || !tiempo) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      nombre,
      tarea,
      descripcion,
      plazo,
      tiempo,
    };

    setTareas([...tareas, nuevaTarea]);

    setNombre("");
    setTarea("");
    setDescripcion("");
    setPlazo("");
    setTiempo("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido {nombre.trim() || ""} </Text>


      {/* Formulario */}
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        onChangeText={setNombre}
        value={nombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Título de la tarea"
        onChangeText={setTarea}
        value={tarea}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción de la tarea"
        onChangeText={setDescripcion}
        value={descripcion}
      />
      <TextInput
        style={styles.input}
        placeholder="Plazo para realizarla"
        onChangeText={setPlazo}
        value={plazo}
      />
      <TextInput
        style={styles.input}
        placeholder="Tiempo promedio (horas)"
        keyboardType="numeric"
        onChangeText={setTiempo}
        value={tiempo}
      />

      <Button title="Guardar tarea" onPress={guardarTarea} />

      <ScrollView style={{ width: "100%", marginTop: 20 }}>
        {tareas.map((t) => (
          <View key={t.id} style={styles.card}>
            <Text style={styles.cardTitle}>📌 Resumen de la Tarea</Text>
            <Text>👤 Nombre: {t.nombre}</Text>
            <Text>📝 Tarea: {t.tarea}</Text>
            <Text>📖 Descripción: {t.descripcion}</Text>
            <Text>⏳ Plazo: {t.plazo}</Text>
            <Text>⏱️ Tiempo estimado: {t.tiempo}</Text>
          </View>
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9c989897",
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  card: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
    textAlign: "center",
  },
});
