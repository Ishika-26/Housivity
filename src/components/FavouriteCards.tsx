import { FlatList, StyleSheet, Text, View, ImageSourcePropType, Image, ScrollView, Pressable } from 'react-native';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import CardData from '../hooks/CardData';
import type { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../store/slices';

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


    const wishlist = useSelector((state: any) => state.wishlist.data);

    useEffect(() => {
        if (wishlist) {
            setCardData(wishlist)
        }
    }, [wishlist]);

    const isWishlisted = (item: any) => wishlist.some((i: any) => i.id === item.id);

    const handlePress = (item: any) => {
        if (isWishlisted(item)) {
            dispatch(removeFavourite(item));
        } else {
            dispatch(addFavourite(item));
        }
    };

    const renderItem = useCallback(({ item }: any) => {
        const wishlisted = isWishlisted(item);

        return (
            <View style={styles.cardContainer}>
                <ScrollView horizontal={true}>
                    {item.images.map((index: any) => (
                        <ImageContainer imageUrl={{ uri: `https://logiqproperty.blr1.digitaloceanspaces.com/${index}` }} key={index} />
                    ))}
                </ScrollView>
                <View style={styles.infoContainer}>
                    <View style={{ width: "70%" }}>
                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <View style={[styles.tagContainer]}>
                                {item.isListed ? <Text style={styles.tagContainerText}>Listed</Text> : null}
                            </View>
                            <View style={[styles.tagContainer]}>
                                {item.foodAvailability ? <Text style={styles.tagContainerText}>Food Availability</Text> : null}
                            </View>
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ fontSize: 20 }}> ₹ {item.displayPrice.fixedPrice}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, color: "black" }}>{item.name}</Text>
                        </View>
                        <View style={styles.locationContainer}>
                            <Icon name='location-sharp' size={24} color={"#fe6636"} />
                            <Text style={{ flexWrap: 'wrap' }}>{item.address.fullAddress}</Text>
                        </View>
                    </View>
                    <View style={styles.btnContainer}>
                        <Pressable onPress={() => handlePress(item)}>
                            <Icon name={wishlisted ? 'heart' : 'heart-outline'} size={35} color={"#fe6636"} />
                        </Pressable>
                    </View>
                </View>
            </View>
        )

    }, [wishlist]);

    const keyExtractor = useCallback((item: any) => item.id, []);

    if (cardData.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>There is nothing to show here</Text>
            </View>
        )
    }
    else{
        return (
            <FlatList
                data={cardData}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        )
    }

}

export default FavouriteCards

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#C2C2C2",
        marginBottom: 18,
        marginHorizontal: 12,
        padding: 16
    },
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