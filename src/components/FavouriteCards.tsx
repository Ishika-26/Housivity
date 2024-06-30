import { FlatList, StyleSheet, Text, View, ImageSourcePropType, Image, ScrollView, Pressable } from 'react-native';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import CardData from '../hooks/CardData';
import type { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite } from '../store/slices';

type ImageProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType
}>

const ImageContainer = ({ imageUrl }: ImageProps): JSX.Element => {
    return (
        <View>
            <Image style={styles.diceImage} source={imageUrl} />
        </View>
    )
}


const FavouriteCards = () => {
    const [cardData, setCardData] = useState([]);
    const dispatch = useDispatch();


    const temp = useSelector((state: any) => {
        return state.wishlist.data
    })
    
    useEffect(() => {
        if(temp){
            setCardData(temp)
        }
    }, [temp]);

    const renderItem = useCallback(({ item }: any) => (
        <View style = {{borderWidth: 1, borderRadius: 8, borderColor: "#C2C2C2", marginBottom: 18, marginHorizontal: 4, padding: 16}}>
            <ScrollView horizontal={true}>
                
                    <ImageContainer imageUrl={{ uri: `https://logiqproperty.blr1.digitaloceanspaces.com/${item.images[0]}` }} />
                
            </ScrollView>
            <View style={styles.infoContainer}>
                <View style = {{width: "70%"}}>
                    <View style = {{flex: 1, flexDirection: "row", gap: 10}}>
                        <View style = {[styles.tagContainer]}>
                            {item.isListed ? <Text style = {styles.tagContainerText}>Listed</Text> : null}
                        </View>
                        <View style = {[styles.tagContainer]}>
                            {item.foodAvailability ? <Text style = {styles.tagContainerText}>Food Availability</Text> : null}
                        </View>
                    </View>
                    <View style = {{marginVertical: 10}}>
                        <Text style = {{fontSize: 20}}> ₹ {item.displayPrice.fixedPrice}</Text>
                    </View>
                    <View>
                        <Text style = {{fontSize: 16, color: "black"}}>{item.name}</Text>
                    </View>
                    <View style={styles.locationContainer}>
                        <Icon name='location-sharp' size={24} color={"#fe6636"} />
                        <Text style = {{flexWrap: 'wrap'}}>{item.address.fullAddress}</Text>
                    </View>
                </View>
                <View style = {styles.btnContainer}>
                    <Pressable onPress={() => dispatch(addFavourite(item))}>
                        <Icon name='heart-outline' size={35} color={"#fe6636"} />
                    </Pressable>
                </View>
            </View>
        </View>
    ), [dispatch]);

    const keyExtractor = useCallback((item: any) => item.id, []);

    return (
        <FlatList
            data={cardData}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
    )
}

export default FavouriteCards

const styles = StyleSheet.create({
    diceImage: {
        width: 400,
        height: 200,
        borderRadius: 8
    },
    infoContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 12,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        width: "100%",
        marginTop: 8,
    },
    btnContainer: {
        width: "20%",
        alignItems: "flex-end"
    },
    tagContainer: {
        padding: 8,
        backgroundColor: "#009c93",
        borderRadius: 5,
        marginBottom: 8
    },
    tagContainerText: {
        color: "white"
    }
});