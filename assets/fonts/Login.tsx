import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import TabBarIcon from "@/components/navigation/TabBarIcon";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView className="flex-1">
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        enableAutomaticScroll={true}>
        <View className="flex-1 flex-row">
          <View className=" bg-red-300 w-1/2"></View>
          <View className="flex justify-center items-center bg-green-300 w-1/2 p-6">
            <View className="w-full h-full bg-white items-center justify-center">
              <View className="flex justify-center items-center bg-red-300 w-36 h-36 rounded-full overflow-hidden border-2 m-5">
                <Image
                  className="w-full h-full"
                  style={{ objectFit: "contain" }}
                  source={require("../assets/images/logo.png")}
                />
              </View>

              <Text className="text-black text-2xl text-center font-semibold pt-4 pb-2	">
                Kios Pemandias Air Panas
              </Text>
              <View className="w-9/12 mt-4 items-center  ">
                <TextInput
                  className="w-11/12 p-2 border-2 border-gray-500 rounded-lg items-center "
                  placeholder="Username"
                  placeholderTextColor={"gray"}

                  // value={""}
                />
                <TextInput
                  className="w-11/12 p-2 border-2 border-gray-500 rounded-lg items-center mt-6"
                  placeholder="Password"
                  placeholderTextColor={"gray"}

                  // value={""}
                />
                <Link
                  href="/explore"
                  asChild>
                  <TouchableOpacity className="w-1/2 p-2 border-2 border-gray-1000 rounded-lg items-center mt-6 bg-blue-300 m-5">
                    <Text className="font-semibold text-lg">Masuk</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Index;
