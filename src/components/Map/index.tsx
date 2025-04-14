import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import MapView, { Circle } from "react-native-maps";
import { styles } from "./styles";
import { useMap } from "./useMap";

const Map = () => {
  const {
    //*Variables
    location,
    expanded,
    //*Functions
    onClickExpanded,
  } = useMap();
  if (!location) return null;

  const mapContent = (
    <MapView
      style={expanded ? styles.fullscreenMap : styles.map}
      region={location}
      zoomEnabled
      scrollEnabled={expanded}
      pitchEnabled={false}
      rotateEnabled={false}
      showsCompass={false}
    >
      <Circle
        center={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
        radius={500}
        strokeColor="rgba(0,122,255,0.3)"
        fillColor="rgba(0,122,255,0.1)"
      />
    </MapView>
  );

  return (
    <View style={styles.container}>
      {mapContent}
      {!expanded && (
        <TouchableOpacity style={styles.expandButton} onPress={onClickExpanded}>
          <FontAwesomeIcon icon={faExpand} size={20} color="#fff" />
        </TouchableOpacity>
      )}
      {expanded && (
        <Modal visible={true} animationType="slide">
          <View style={styles.modalContainer}>
            {mapContent}
            <TouchableOpacity
              style={styles.collapseButton}
              onPress={onClickExpanded}
            >
              <FontAwesomeIcon icon={faExpand} size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default Map;
