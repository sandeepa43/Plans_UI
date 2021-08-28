import React, { useState } from 'react';
import {View,Text,Image, TextInput, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import CrossIcon from "../assets/crossIcon.png";
import {DATA} from "../data"
import {styles} from "../styles"
const MainScreen=()=>{
    const [visible,setVisible]=useState(1)
    const offers=[
        {label:"Best Offers for You",key:1},
        {label:"Popular",key:2},
        {label:"Special Recharge",key:3},
        {label:"Top Up",key:4}
    ]
    
      const Item = ({ title,content }) => (
        <View style={styles.item}>
            <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.selectBtn}>
              <Text style={styles.selectText}>Select</Text>
          </TouchableOpacity>
          </View>
          <Text  style={styles.contentText}>{content}</Text>
        </View>
      );
      
    const renderItem = ({ item }) => (
        <Item title={item.title} content={item.content}/>
      );
    
    return(
    
        <View style={styles.container}>
            <View style={[styles.row,styles.HeadContainer]}>
            <View>
                <Text style={styles.headText}>Browse Plans</Text>
                <Text style={styles.subHeading}>for Airtel Kolkata</Text>
            </View>
            <Image source={CrossIcon} style={styles.crossImg}/>
            </View>
          <TextInput placeholder="Search Plan Amount, Talktime" style={styles.searchInput}/>
          <ScrollView horizontal  showsHorizontalScrollIndicator={false} style={styles.margin_Vertical_20}>
              {offers.map((i)=>(
              <TouchableOpacity key={i.key} onPress={()=>setVisible(i.key)}>
                  <Text style={[styles.offersText,visible==i.key?styles.activeOfferText:styles.inactiveOfferText]}>
                  {i.label}
                  </Text>
              </TouchableOpacity>
              ))}
          </ScrollView>
          {visible?
          <FlatList
           data={DATA[visible-1]}
           renderItem={renderItem}
           keyExtractor={item => item.id}
          />
          :null}
        </View>
        
    )
}

export default MainScreen