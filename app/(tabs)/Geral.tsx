import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  ScrollView,
} from 'react-native';
import { colors } from '@/src/components/global';
import { useGlobalSearchParams } from 'expo-router';
import { height, Vagas, width } from '@/src/firebase/functions/interface';
import { fetchJobs_Geral } from '@/src/firebase/functions/get/getJobs';

export default function Geral() {
  const { coleção, campo, valor, coleçãoUnica } = useGlobalSearchParams();
  const dataBox = { coleção, campo, valor };
  const dataBox2 = { coleçãoUnica };

  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const valueData = { setJobs, setFilteredJobs, setLoading };
    fetchJobs_Geral(valueData, dataBox, dataBox2);
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter(job =>
        (job.name_vaga && job.name_vaga.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (job.empresa && job.empresa.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredJobs(filtered);
    }
  }, [searchQuery, jobs]);

  const renderItem = ({ item }: { item: Vagas }) => (
    <View style={stylesVagas.item}>
      <Text style={stylesVagas.title}>{item.name_vaga}</Text>
      <Text style={stylesVagas.subTitle}>{item.empresa}</Text>

      <View style={stylesVagas.box_mode}>
        <Text style={stylesVagas.mode}>Salário:</Text>
        <Text style={stylesVagas.mode}>R$ {item.salario}</Text>
      </View>

      <View style={stylesVagas.box_mode}>
        <Text style={stylesVagas.mode}>Modalidades:</Text>
        <Text style={stylesVagas.mode}>{item.modalidades}</Text>
      </View>

      <View style={stylesVagas.box_mode}>
        <Text style={stylesVagas.mode}>Contato:</Text>
        <Text style={stylesVagas.mode}>{item.gmail}</Text>
      </View>

      <View style={stylesVagas.box_mode}>
        <Text style={stylesVagas.mode}>Localização:</Text>
        <Text style={stylesVagas.mode}>{item.localizacao}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.containerTop}>
          <TextInput
            style={styles.searchBar}
            placeholder="Buscar vagas..."
            placeholderTextColor="#aaa"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Text style={styles.titleTop}>
            {campo} {valor}
          </Text>
        </View>

        <View style={styles.containerBottom}>
          {loading ? (
            <ActivityIndicator size="large" color={colors.amarelo1} />
          ) : (
            <FlatList
              data={filteredJobs}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              nestedScrollEnabled
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 50 }}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fundo,
  },
  containerTop: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: colors.preto,
    alignItems: 'center',
  },
  titleTop: {
    fontSize: 20,
    color: colors.amarelo2,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
  },
  searchBar: {
    width: '100%',
    height: 50,
    backgroundColor: colors.cinza,
    borderRadius: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: colors.tituloBranco,
    elevation: 2,
  },
  containerBottom: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});

const stylesVagas = StyleSheet.create({
  item: {
    width: '100%',
    backgroundColor: colors.cinza,
    borderRadius: 15,
    padding: 16,
    marginBottom: 15,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.tituloBranco,
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 18,
    color: colors.tituloAmarelo,
    marginBottom: 10,
  },
  box_mode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  mode: {
    fontSize: 16,
    color: colors.tituloBranco,
  },
});
