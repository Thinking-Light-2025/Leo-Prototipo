// 'PAGINA INICIAL'
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router'; // TENTANDO FAZER A NAVEGAÇÃO
import { colors } from '../src/components/global';
import { BotãoInicio } from '../src/components/objects';
import { Dimensions } from 'react-native';

// DIMENSÕES DA TELA Q CONVERSAMOS
const { width, height } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // Estado para controlar a tela de carregamento

  const handleLoginPress = () => router.replace('/login');
  const handleCreateAccountPress = () => router.replace('/createAccount');

  // Efeito para animar a entrada ao montar o componente
    useEffect(() => {
    // Simula um carregamento
    const loadData = async () => {
      // Simule um atraso para a tela de carregamento
      await new Promise(resolve => setTimeout(resolve, 4000)); // 2 segundos
      setLoading(false); // Oculta a tela de carregamento
    }; loadData();
    })


  // if (loading) {
  //   // Tela de carregamento
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <ActivityIndicator size="large" color={colors.amarelo1} />
  //       <Text style={styles.loadingText}>Carregando...</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>

      <View style={styles.bottomContainer}>
        <Text style={styles.Title}>Go 2 Work</Text>
        <Text style={styles.subTitle}>Criado pela Thinking Light</Text>

        <View style={styles.viewButton}>
            <View style={styles.areaButton}>
              <View style={styles.buttonLogin} onPress={handleLoginPress}>
                <Text style={styles.buttonText}>
                  Entre na sua conta              
                </Text>
              </View>
              <View style={styles.buttonCreate} onPress={handleCreateAccountPress}>
                <Text style={styles.buttonText2}>
                  Crie sua conta
                </Text>
              </View>
            </View>
        </View>

        <Link href={'/(tabs)/Home/Home'} style={styles.linkText}>
          Entrar em uma conta
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.preto
  },
  Title: {
    fontSize: 50,
    color: colors.amarelo2,
    fontWeight: '700'
  },
  subTitle: {
    fontSize: 18,
    color: colors.tituloBranco,
  },
  bottomContainer: {
    width: width * 0.9,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  areaButton: {
    width: width * 0.9,
    height: 160,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: colors.preto,
    fontWeight: '500',
  },
  buttonText2: {
    fontSize: 20,
    color: colors.amarelo2,
    fontWeight: '500',
  },
  viewButton: {
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: colors.cinza,
    justifyContent: 'center',
    borderRadius: 20,
    height: 200,
  },
  buttonLogin: {
    width: '90%',
    height: 60,
    backgroundColor: colors.amarelo2,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonCreate: {
    width: '90%',
    height: 60,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: colors.amarelo2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  linkText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10
  }
});