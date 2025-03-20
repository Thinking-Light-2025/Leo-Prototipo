import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '@/src/components/global';
import { TxtInput, Botão } from '@/src/components/objects';
import { height, width } from '@/src/firebase/functions/interface';
import { AntDesign } from '@expo/vector-icons';

export default function Config() {
  return (
    <View style={styles.container_all}>

        <Text style={styles.Title}>Configurações</Text>
        <Text style={styles.subTitle}>Personalize sua experiençia</Text>

        {/* <View style={styles.container_conf} >

              <View style={styles.container_inputs} >
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

        </View> */}

        <View style={styles.container_alter}>

          <Text style={styles.container_alter_title}>Altere seus dados</Text>

            <View style={styles.container_alter_inputs}> 
                <TxtInput></TxtInput>
                <TxtInput></TxtInput>
                <TxtInput></TxtInput>
                <TxtInput></TxtInput>
                <TxtInput></TxtInput>
            </View>

            <Botão></Botão>

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
    fontSize: 20,
    color: colors.amarelo2,
    marginRight: 120,
    marginTop: 10,
    marginBottom: 20,
  },

  container_conf: {
    width: width * 1,
    height: 400,
    alignItems: 'center',
    padding: 10,
  },

  container_inputs: {
    width: width * 0.9,
    minHeight: 20,
    alignItems: 'center',
    backgroundColor: colors.fundo
  },
  ViewBack2_Title: {
    fontSize: 34,
    color: colors.amarelo2,
    fontWeight: '500',
  },
  ViewBack2_area: {
    width: width * 0.8,
    height: 50,
    marginTop: 15,
    backgroundColor: colors.cinza,
    justifyContent: 'space-between' ,
    alignItems: 'center',
    paddingInline: 50,
    flexDirection: 'row',
    borderRadius: 10,
    padding: 5,
  },
  ViewBack2_area_text: {
    fontSize: 18,
    color: colors.tituloBranco,
  },

  container_alter: 
  {
    width: width * 0.9,
    minHeight: 400,
    alignItems: 'center',
    backgroundColor: colors.fundo,
    borderRadius: 15,
    padding: 10,
  },
  container_alter_title: 
  {
    fontSize: 25,
    color: colors.amarelo2,
    fontWeight: '500',
    marginBottom: 10,
  },
  container_alter_inputs: 
  {
    width: width * 0.9,
    minHeight: 200,
    paddingBlock: 10,
    alignItems: 'center',
  },

}) 