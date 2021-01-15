import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';
import Sign from "../../../Assets/Sign.PNG";
import LogitoPDG from "../../../Assets/LogitoPDF.png"

//Font.register({family:"Andika New Basic", src:"https://fonts.googleapis.com/css2?family=Andika+New+Basic&display=swap"});
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingLeft:15,
    paddingRight:10,
    marginTop:"auto"
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
    fontSize:12,
    color:"#404040",
    fontWeight:"black",
    fontStyle:"bold",
    textAlign:"justify"
  },
  text:{
    marginTop:2,
    fontSize:12,
    color:"#404040",
    textAlign:"justify",
    marginLeft:10,
  },
  img:{
    width:"100pt",
    height:"100pt",
    position:"absolute",
    marginLeft:"80%",
    marginTop:"auto"
  },
  imgLog:{
    width:"20pt",
    height:"80pt",
    position:"absolute",
    marginLeft:"50%",
    marginTop:"auto",
  }
});

// Create Document Component
const MyDocument = (props) => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      <View style={styles.row}>
        <View style={styles.section}>
          {/*informacion*/}
          <Text style={styles.title}>Fórmula Médica</Text>
          <View style={styles.content, styles.space}>
            <Text style={styles.title}>Paciente: <Text style={styles.text}>{props.form.pet}</Text></Text>
            <Text style={styles.title}>Especie: <Text style={styles.text}>{props.form.kind}</Text></Text>
            <Text style={styles.title}>Tutor(a): <Text style={styles.text}>{props.form.name}</Text></Text>
          </View>
        </View>
        <View style={styles.section}>
          {/*Informacion*/}
          <Text style={styles.title}>Fecha: {props.form.date}</Text>
          <View style={styles.content, styles.space}>
            <Text style={styles.title}>Edad: <Text style={styles.text}>{props.form.age}</Text></Text>
            <Text style={styles.title}>Raza: <Text style={styles.text}>{props.form.breed}</Text></Text>
            <Text style={styles.title}>Peso: <Text style={styles.text}>{props.form.weight}</Text></Text>
          </View>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.column, styles.section}>
          {/*Receta medica*/}
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
          <Text style={styles.title}>RECOMENDACIONES:</Text>
          <Text style={styles.space, styles.text}>{props.form.obs}</Text>
        </View>
      </View>
      {/*Sign*/}
      <View>
        <Image style={styles.imgLog} src={LogitoPDG}/>
        <Image style={styles.img} src={Sign}/>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
