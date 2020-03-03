import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import {
  Content, Card, CardItem, Body, Left, Right, Container, Picker,
} from "native-base";
import HTMLView from "react-native-htmlview";
import { CustomHeader } from "../../components";

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  title: { fontSize: 19, color: "#009933" },
  picker: { height: 50, width: 100, color: "#747474" },
  pickerItem: { backgroundColor: "#fff" },
});


const DetailScreenView = ({
  navigation, data, selected, onValueChange,
}) => (
  <SafeAreaView style={styles.safeArea}>
    <Container>
      <CustomHeader title="상세보기" navigation={navigation} />
      <Content>
        <Card>
          <CardItem header bordered>
            <Left>
              <Text style={styles.title}>{data.title}</Text>
            </Left>
            <Right>
              <Picker
                mode="dropdown"
                selectedValue={selected}
                style={styles.picker}
                onValueChange={onValueChange}
                itemStyle={styles.pickerItem}
              >
                <Picker.Item label="..." value="" />
                <Picker.Item label="  수 정  " value="Update" />
                <Picker.Item label="  삭 제  " value="Delete" />
              </Picker>
            </Right>
          </CardItem>
          <CardItem bordered>
            <Left>
              <Text note>{data.createdAt}</Text>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <HTMLView value={data.content} />
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  </SafeAreaView>
);
DetailScreenView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  selected: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default DetailScreenView;
