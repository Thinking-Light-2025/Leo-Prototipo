import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '@/src/components/global';
import { height, width } from '@/src/firebase/functions/interface';
import { AntDesign } from '@expo/vector-icons';
import { TxtInput, ViewBack1, ViewBack2 } from '@/src/components/objects';

export default function Config() {
  return (
    <View style={styles.container_all}>

        <Text style={styles.Title}>Configurações</Text>
        <Text style={styles.subTitle}>Personalize sua experiençia</Text>

        <View style={styles.ViewBack}>
              <Text style={styles.ViewBack2_Title}>Suporte</Text>

              <View style={styles.ViewBack2_area}>
                  <Text style={styles.ViewBack2_area_text}>Sobre nos</Text>
                  <AntDesign name="caretright" size={24} colors={colors.amarelo2} />
              </View>
              <View style={styles.ViewBack2_area}>
                  <Text style={styles.ViewBack2_area_text}>Brilho</Text>
                  <AntDesign name="caretright" size={24} colors={colors.amarelo2} />
              </View>
              <View style={styles.ViewBack2_area}>
                  <Text style={styles.ViewBack2_area_text}>Enviar feedBack</Text>
                  <AntDesign name="caretright" size={24} colors={colors.amarelo2} />
              </View>
        </View> 

        <View style={styles.ViewBack}>
              <Text style={styles.ViewBack2_Title}>Mude sua conta</Text>

            <View style={styles.boxsInput}>
              <TxtInput></TxtInput>
              <TxtInput></TxtInput>
              <TxtInput></TxtInput>
              <TxtInput></TxtInput>
              <TxtInput></TxtInput>
            </View>

        </View> 

    </View>
  )
};

const styles = StyleSheet.create({
  container_all: {
    flex: 1, 
    alignItems: 'center',
    backgroundColor: colors.preto
  },
  Title: {
    fontSize: 40,
    color: colors.amarelo2,
    fontWeight: '600',
    marginTop: 40
  },
  subTitle: {
    fontSize: 18,
    color: colors.amarelo2,
    marginRight: 160,
    marginTop: 10,
    marginBottom: 20,
  },

  ViewBack: {
    width: '90%',
    minHeight: 55,
    alignItems: 'center',
    backgroundColor: colors.fundo2,
    borderRadius: 15,
    padding: 15,
    marginBottom: 30,
  },
  ViewBack2_Title: {
    fontSize: 34,
    color: colors.tituloBranco,
    fontWeight: '500',
  },
  boxsInput: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around'
  },
  ViewBack2_area: {
    width: width * 0.8,
    height: 50,
    marginTop: 15,
    backgroundColor: colors.cinza,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    paddingInline: 45,
  },
  ViewBack2_area_text: {
    fontSize: 18,
    color: colors.tituloBranco,
  },
}) 