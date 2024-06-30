import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FilterIcon from 'react-native-vector-icons/Entypo'


const FilterBar = () => {
    const [filterCount, setFilterCount] = useState(0)
    return (
        <View style={[styles.flexTab, styles.tabGap]}>
            <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
                <View style={[styles.flexTab, styles.filterTabInner, styles.filterTab, styles.focusedTab]}>
                    <View style = {styles.filterCount}>
                        <Text style={[styles.filterTabFont, styles.filterCountText]}>0</Text>
                    </View>
                    <Text style={[styles.filterTabFont, {color: "#fe6636"}]}>Filters</Text>
                    <FilterIcon name='sound-mix' size={24} color={"#fe6636"} />
                </View>
                <View style={[styles.flexTab, styles.filterTab, { gap: 5 }]}>
                    <Text style={styles.filterTabFont}>Types of Property</Text>
                    <FilterIcon name='chevron-small-down' size={24} color={"grey"} />
                </View>
                <View style={[styles.flexTab, styles.filterTab]}>
                    <Text style={styles.filterTabFont}>BHK Type</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default FilterBar

const styles = StyleSheet.create({
    flexTab: {
        display: "flex",
        flexDirection: "row"
    },
    filterTabInner: {
        gap: 10,
    },
    tabGap: {
        // marginRight: 10
    },
    filterTab: {
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 25,
        justifyContent: "center",
        marginRight: 10,
        borderColor: "#C2C2C2"
    },
    focusedTab: {
        borderColor: "#fe6636"
        
    },
    filterTabFont: {
        fontSize: 16
    },
    filterCount: {
        backgroundColor: "#fe6636",
        borderRadius: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 6.75
    },
    filterCountText: {
        color: "white"
    }
})