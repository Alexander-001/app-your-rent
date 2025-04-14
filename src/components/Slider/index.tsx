import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";
import SliderItem from "../SliderItem";

interface SliderI {
  dataSlider: { image: string }[];
}

const { width } = Dimensions.get("window");

const Slider: React.FC<SliderI> = ({ dataSlider }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View>
      <FlatList
        data={dataSlider}
        renderItem={({ item, index }) => (
          <View style={{ width }}>
            <SliderItem item={item} index={index} />
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScroll}
        ref={flatListRef}
        snapToInterval={width}
        decelerationRate="fast"
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />
      <View style={styles.paginationWrapper}>
        <View style={styles.pagination}>
          {dataSlider.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationWrapper: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "15%",
    height: 20,
    borderRadius: 10,
    paddingTop: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: "#09f",
  },
  dotInactive: {
    backgroundColor: "#ccc",
  },
});

export default Slider;
