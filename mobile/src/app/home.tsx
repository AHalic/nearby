import { useEffect, useState } from "react";
import { Alert, Text, TouchableWithoutFeedback, View } from "react-native";

import { api } from "@/services/api";
import Categories, { CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import Places from "@/components/places";
import MapView, { Callout, Marker } from "react-native-maps";

import * as Location from "expo-location";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { router } from "expo-router";

type MarketProps = PlaceProps & {
    latitude: number
    longitude: number
}


// Hard coded location
const currentLocation = {
    latitude: -23.561187293883442,
    longitude: -46.656451388116494
}

export default function Home() {
    const [categories, setCategories] = useState<CategoriesProps>([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [markets, setMarkets] = useState<MarketProps[]>([])

    const [isLoading, setIsLoading] = useState(false)

    const fetchCategories = async () => {
        try {
            const { data } = await api.get("/categories")
            setCategories(data)
            setSelectedCategory(data[0].id)

        } catch (error) {
            console.error(error)
            Alert.alert("Error", "An error occurred while fetching the categories")
        }
    }

    const fetchMarkets = async () => {
        if (!selectedCategory) {
            return
        }

        setIsLoading(true)

        try {
            const { data } = await api.get(`/markets/category/${selectedCategory}`)
            setMarkets(data)
        } catch (error) {
            console.error(error)
            Alert.alert("Error", "An error occurred while fetching the markets")
        }

        setIsLoading(false)
    }


    // Function to get current Location
    // not being used as data is seeded
    const getCurrentLocation = async () => {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync()

            if (!granted) {
                Alert.alert("Error", "Permission to access location was denied")
                return
            } else {
                const location = await Location.getCurrentPositionAsync()
                console.log(location)
            }

        } catch (error) {
            console.error(error)
            Alert.alert("Error", "An error occurred while fetching the current location")
        }
    }

    useEffect(() => {
        // getCurrentLocation()
        fetchCategories()
    }, [])

    useEffect(() => {
        fetchMarkets()
    }, [selectedCategory])

    return (
        <View style={{ flex: 1 }} pointerEvents="box-none">
            <Categories 
                categories={categories}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
            />

            {!isLoading && (
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: currentLocation.latitude,
                        longitude: currentLocation.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker
                        identifier="current"
                        coordinate={{
                            latitude: currentLocation.latitude,
                            longitude: currentLocation.longitude
                        }}
                        image={require("@/assets/location.png")}
                    />

                    {markets.map((market) => (
                        <Marker
                            key={market.id}
                            identifier={market.id}
                            coordinate={{
                                latitude: market.latitude,
                                longitude: market.longitude
                            }}
                            image={require("@/assets/pin.png")}
                        >
                            {/* Details shown when pin is clicked
                                TODO: not working
                            */}
                            <Callout
                                onPress={() => router.navigate(`/market/${market.id}`)}
                            >
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            color: colors.gray[600],
                                            fontFamily: fontFamily.medium
                                        }}
                                    >
                                        {market.name}
                                    </Text>

                                    <Text
                                        style={{
                                            fontSize: 12,
                                            color: colors.gray[600],
                                            fontFamily: fontFamily.regular
                                        }}
                                    >
                                        {market.address}
                                    </Text>
                                </View>
                            </Callout>
                        </Marker>
                    ))}

                </MapView>
            )}

            <Places places={markets} />
        </View>
    )
}
