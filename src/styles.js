import {StyleSheet} from "react-native"
export const styles= StyleSheet.create({
    container:{
      marginTop:35,
      marginHorizontal:35,
    },
   
    headText:{
       color:"#F1800D",
       fontSize:20,
       fontWeight:"600",
    },
    subHeading:{
        color:"rgba(38, 50, 56, 0.7)",
        fontSize:16,
    },
    row:{
        flexDirection:"row",
        justifyContent:'space-between'
    },
    crossImg:{
        height:20,
        width:20,
    },
    searchInput:{
        borderBottomColor:"rgba(38, 50, 56, 0.1)",
        borderBottomWidth:1,
        marginVertical:10
    },
    offersText:{
        marginRight:10,
        fontSize:14
    },
    activeOfferText:{
        color:"rgba(38, 50, 56, 0.895979)"
    },
    inactiveOfferText:{
        color:"rgba(38, 50, 56, 0.4)"
    },
    margin_Vertical_20:{
        marginVertical:15,
        borderBottomWidth:1,
        paddingBottom:5,
        borderColor:"rgba(151, 151, 151, 0.3)",
        
    },
    contentText:{
        color:"rgba(38, 50, 56, 0.7)",
        fontSize:12,
        marginVertical:8
    },
    title:{
        color:"#263238",
        fontSize:18,
        fontWeight:"bold"
    },
    item:{
        marginVertical:15,
        paddingBottom:5,
        borderBottomWidth:0.5,
        borderBottomColor:"#979797"
    },
    selectBtn:{
        borderColor:"#F1800D",
        borderRadius:20,
        borderWidth:1,
        paddingHorizontal:12,
        paddingVertical:3
    },
    selectText:{
        color:"#F1800D",
        fontSize:12,

    }
})