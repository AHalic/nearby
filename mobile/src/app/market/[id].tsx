import { useEffect, useRef, useState } from "react";

import { Redirect, router, useLocalSearchParams } from "expo-router";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Alert, Modal, View, StatusBar, ScrollView } from "react-native";

import Loading from "@/components/loading";
import Cover from "@/components/market/cover";
import { PlaceProps } from "@/components/place";

import { api } from "@/services/api";
import Details from "@/components/market/details";
import Coupon from "@/components/market/coupon";
import { Button } from "@/components/button";

export default function Market() {
    const [_, requestPermissionCamera] = useCameraPermissions()
    const params = useLocalSearchParams<{ id: string }>()

    const [market, setMarket] = useState<PlaceProps>()
    const [coupon, setCoupon] = useState<string | null>()
    const [isLoading, setIsLoading] = useState(true)

    const [isCameraOpen, setIsCameraOpen] = useState(false)
    const [couponIsFetching, setCouponIsFetching] = useState(false)

    const qrLock = useRef(false)

    const fetchMarket = async () => {
        setIsLoading(true)
        try {
            const { data } = await api.get(`/markets/${params.id}`)
            setMarket(data)
            setIsLoading(false)
        } catch (error) {
            console.error(error)
            Alert.alert("Error", "An error occurred while fetching the market", [{
                text: "Go back",
                onPress: () => router.back()
            }])
        }

    }

    const handleCamera = async () => {
        try {
            const { granted } = await requestPermissionCamera()

            if (!granted) {
                Alert.alert("Error", "You need to grant camera permissions to scan QR codes")
                return
            }

            setIsCameraOpen(true)
            qrLock.current = false
        } catch (error) {
            console.error(error)
            Alert.alert("Error", "An error occurred starting the camera")
        }
    }

    const handleCouponScan = async (id: string) => {
        try {
            setCouponIsFetching(true)

            const { data } = await api.patch(`/coupons/${id}`)
            Alert.alert("Success", `Coupon scanned successfully ${data.coupon}`)
            setCoupon(data.coupon)
        } catch (error) {
            console.error(error)
            Alert.alert("Error", "An error occurred while scanning the QR code")
        } finally {
            setCouponIsFetching(false)
        }
    }

    const handleUseCoupon = async (id: string) => {
        setIsCameraOpen(false)

        Alert.alert("Confirmation", "Are you sure you want to use this coupon?", [{
            text: "Cancel",
            style: "cancel"
        }, {
            text: "Yes",
            onPress: () => handleCouponScan(id)
        }])
    }

    useEffect(() => {
        fetchMarket()
    }, [params.id, coupon])

    if (isLoading) {
        return <Loading />
    }

    if (!market) {
        return <Redirect href="/home" />
    }

    return (
        <View 
            style={{ flex: 1 }}
        >
            <StatusBar barStyle="light-content" hidden={isCameraOpen} />

            <ScrollView showsVerticalScrollIndicator={false}>

                <Cover uri={market.cover} />

                <Details
                    {...market}
                />

                {coupon && <Coupon code={coupon} />}

                <View style={{ padding: 32 }}>
                    <Button onPress={handleCamera}>
                        <Button.Title>Scan QR Code</Button.Title>
                    </Button>
                </View>

                <Modal style={{ flex: 1 }} visible={isCameraOpen}>
                    <CameraView 
                        style={{ flex: 1 }}
                        facing="back"
                        onBarcodeScanned={({ data }) => {
                            if (data && !qrLock.current) {
                                qrLock.current = true
                                setTimeout(() => handleUseCoupon(data), 500)
                            }
                        }}
                    />

                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Button
                            onPress={() => setIsCameraOpen(false)}
                            loading={couponIsFetching}
                        >
                            <Button.Title>Close</Button.Title>
                        </Button>
                    </View>
                </Modal>
            </ScrollView>
        </View>
    )
}
