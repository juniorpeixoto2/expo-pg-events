import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../component/Participants";

export function Home() {
  function handleAddParticipant() {
    console.log("Adicionar participante");
    if (participants.includes("teste1")) {
      return Alert.alert(
        "Participante existente",
        "Já existe um participante com esse nome"
      );
    }
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover", "Deseja remover o participante?", [
      {
        text: "Sim",
        onPress: () => {
          participants.filter((participant) => participant !== name);
          Alert.alert("Removido");
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  const participants = [
    "teste1",
    "teste2",
    "teste3",
    "teste4",
    "teste5",
    "teste6",
    "teste7",
    "teste8",
    "teste9",
    "teste10",
    "teste11",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            onRemove={() => handleRemoveParticipant("teste2")}
            name={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
