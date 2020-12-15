import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';
import Banner from "../Assets/banner.jpg"
import Sign from "../Assets/Sign.PNG"

//Font.register({family:"Andika New Basic", src:"https://fonts.googleapis.com/css2?family=Andika+New+Basic&display=swap"});
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingLeft:15,
    paddingRight:10,
  },
  column:{
    flexDirection:"column"
  },
  row:{
    flexDirection:'row',
  },
  section: {
    margin: 5,
    marginTop:50,
    flexGrow:1
  },
  space:{
    marginTop:20,
    marginLeft:0,
  },
  title:{
    fontSize:20,
    fontStyle:"bold",
    textAlign:"justify"
  },
  text:{
    marginTop:2,
    fontSize:15,
    textAlign:"justify",
    marginLeft:10,
  },
  img:{
    width:"100pt",
    height:"100pt",
    position:"absolute",
    marginLeft:"80%",
    marginTop:"auto"
  }
});

// Create Document Component
const MyDocument = (props) => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      {/*Banner*/}
      <View>
        <Image src={Banner}/>
      </View>
      <View style={styles.row}>
        <View style={styles.section}>
          {/*informacion*/}
          <Text style={styles.title}>Fórmula Médica</Text>
          <View style={styles.content}>
            <Text style={styles.text}>Paciente: {props.form.pet}</Text>
            <Text style={styles.text}>Especie: {props.form.kind}</Text>
            <Text style={styles.text}>Tutor(a): {props.form.name}</Text>
          </View>
        </View>
        <View style={styles.section}>
          {/*Informacion*/}
          <Text style={styles.title}>Fecha: {props.form.date}</Text>
          <View style={styles.content}>
            <Text style={styles.text}>Edad: {props.form.age}</Text>
            <Text style={styles.text}>Raza: {props.form.breed}</Text>
            <Text style={styles.text}>Peso: {props.form.weight}</Text>
          </View>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.column, styles.section}>
          {/*Receta medica*/}
          <Text style={styles.title}>Receta Médica:</Text>
          {
            props.medi.map((item,i) =>{
            return(
              <View style={styles.column, styles.space}>
                <Text style={styles.title}>{i+1}.{item.name}</Text>
                <Text style={styles.text}>{item.descr}</Text>
              </View>
            )})
          }
        </View>
        {/*Recomendaciones*/}
        <View style={styles.column, styles.space}>
          <Text style={styles.title}>Recomendaciones:</Text>
          <Text style={styles.space, styles.text}>{props.form.obs}</Text>
        </View>
      </View>
      {/*Sign*/}
      <View>
        <Image style={styles.img} src={Sign}/>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
