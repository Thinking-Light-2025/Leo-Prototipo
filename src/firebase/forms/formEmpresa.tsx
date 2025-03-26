// formPessoa.js
import { colors } from '@/src/components/global';
import { Botão, TextArea, TxtInput } from '@/src/components/objects';
import { auth, db } from '@/src/firebase/config';
import { height, width } from '@/src/firebase/functions/interface';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

export const FormEmpresa = () => {
  const router = useRouter();
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [ramoAtuacao, setRamoAtuacao] = useState('');
  const [qtdFuncionarios, setQtdFuncionarios] = useState('');
  const [cnpjEmpresa, setCnpjEmpresa] = useState('');
  const [emialEmpresarial, setEmialEmpresarial] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onRegisterPress = async () => {
    setIsLoading(true);
    if (!nomeEmpresa || !ramoAtuacao || !qtdFuncionarios || !cnpjEmpresa || !emialEmpresarial || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos."); 
    } 
    if (senha !== confirmarPassword) {
      Alert.alert('As senhas não são iguais.')
    }
    else {
    try {
       const userCredential = await createUserWithEmailAndPassword(auth, emialEmpresarial, senha);
       const uid = userCredential.user.uid;
       const tipo_conta = 'Empresa';
       const data = {
          uid: uid,
          nomeEmpresa,
          ramoAtuacao,
          qtdFuncionarios,
          cnpjEmpresa,
          emialEmpresarial,
          senha,
          tipo_conta,
          dataPublicacao: new Date(),
       };
       const pessoasSubCollectionRef = doc(db, 'Contas', uid);
       await setDoc(pessoasSubCollectionRef, data);
       Alert.alert("Conta Criada com sucesso!");
       router.replace('/(tabs)/Home/Home');
    } catch (error) {
       console.error("Erro ao criar a conta:", error);
       Alert.alert("Erro", "erro ao criar a conta");
    } finally {
       setIsLoading(false);
    }
  }
  };

   return (
    <View style={styles.container}>
        <View style={styles.containerMed}>
          <View style={styles.containerMed_AreaInput}>
            <Text style={styles.containerMed_AreaInput_text}>Digite o nome da empresa:</Text>
            <TxtInput
              value={nomeEmpresa}
              onChangeText={setNomeEmpresa}
              placeholder="..."
              placeholderTextColor={colors.amarelo2}
            />
          </View>
          <View style={styles.containerMed_AreaInput}>
            <Text style={styles.containerMed_AreaInput_text}>Digite o seu gmail:</Text>
            <TxtInput
              value={ramoAtuacao}
              onChangeText={setRamoAtuacao}
              placeholder="..."
              placeholderTextColor={colors.amarelo2}
            />
          </View>
          <View style={styles.containerMed_AreaInput}>
            <Text style={styles.containerMed_AreaInput_text}>Digite uma descrição sobre a empresa:</Text>
            <TxtInput 
              value={qtdFuncionarios}
              onChangeText={setQtdFuncionarios}
              placeholder='...'
              placeholderTextColor={colors.amarelo2}
            />
          </View>
          <View style={styles.containerMed_AreaInput}>
            <Text style={styles.containerMed_AreaInput_text}>Digite seu cnpj:</Text>
            <TxtInput 
              value={cnpjEmpresa}
              onChangeText={setCnpjEmpresa}
              placeholder='...'
              placeholderTextColor={colors.amarelo2}
            />
          </View>          
          <View style={styles.containerMed_AreaInput}>
            <Text style={styles.containerMed_AreaInput_text}>Digite seu setor da empresa:</Text>
            <TxtInput 
              value={emialEmpresarial}
              onChangeText={setEmialEmpresarial}
              placeholder='...'
              placeholderTextColor={colors.amarelo2}
            />
          </View>
          <View style={styles.containerMed_AreaInput}>
            <Text style={styles.containerMed_AreaInput_text}>Digite sua senha:</Text>
            <TxtInput
              value={senha}
              onChangeText={setSenha}
              placeholder="..."
              secureTextEntry={true}
              placeholderTextColor={colors.amarelo2}
            />
          </View>
          <View style={styles.containerMed_AreaInput}>
            <Text style={styles.containerMed_AreaInput_text}>Confirme sua senha:</Text>
            <TxtInput
              value={confirmarPassword}
              onChangeText={setConfirmarPassword}
              placeholder="..."
              secureTextEntry={true}
              placeholderTextColor={colors.amarelo2}
            />
          </View>
          <View style={styles.buttonArea}>
          <Botão onPress={onRegisterPress}> 
              <Text style={styles.textButton}>Cadastrar</Text>
          </Botão>
          </View>
        </View>
    </View>
   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: height * 1.2,
    backgroundColor: '#242424',
    alignItems: 'center',
  },
  containerMed: {
    width: width * 0.9,
    minHeight: 800,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  containerMed_subTitle: {
    fontSize: 17,
    color: colors.tituloBranco,
  },
  containerMed_AreaInput: {
    width: width * 0.9,
    maxHeight: 170,
    margin: 10,
    marginLeft: 50,
    justifyContent: 'center',
  },
  containerMed_AreaInput_text: {
    fontSize: 17,
    color: colors.tituloBranco,
    marginBottom: 8,
    marginLeft: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  textButton: {
    color: colors.preto,
    fontSize: 20,
    fontWeight: '400',
  },
  buttonArea: {
    width: width * 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
});