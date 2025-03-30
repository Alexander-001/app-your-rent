import React from "react";
import { FlatList, View } from "react-native";
import { Entry } from "../../pages/home/menu/profile/useProfile";
import SliderItem from "../SliderItem";

interface SliderI {
  dataSlider: Entry[];
}

const Slider: React.FC<SliderI> = ({ dataSlider }) => {
  return (
    <View>
      <FlatList
        data={dataSlider}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

export default Slider;
