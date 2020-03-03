import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import {
  Content, Card, CardItem, Left, Body, Right, Fab, Icon,
} from "native-base";
import { CustomHeader } from "../../components";

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  content: { margin: 3 },
  title: { fontSize: 19, color: "#009933" },
  more: { flex: 1, alignItems: "center", justifyContent: "center" },
  fab: { backgroundColor: "#00cc66" },
});


const ListScreenView = ({
  navigation, blogData, handlePagingByOffset, refreshContent,
}) => (
  <SafeAreaView style={styles.safeArea}>
    <CustomHeader title="글목록" isHome navigation={navigation} />
    <Content style={styles.content}>
      { blogData && blogData.items.length > 0 && blogData.items.map((item) => (
        <Card key={item.id}>
          <CardItem header bordered>
            <Left>
              <TouchableOpacity onPress={() => navigation.navigate("Detail", { id: item.id })}>
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            </Left>
            <Right>
              <Text note>{item.createdAt}</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Body>
              <TouchableOpacity onPress={() => navigation.navigate("Detail", { id: item.id })}>
                <Text>
                  {item.description}
                </Text>
              </TouchableOpacity>
            </Body>
          </CardItem>
        </Card>
      ))}
      <Card style={{ flex: 0 }}>
        <CardItem header bordered>
          <TouchableOpacity
            style={styles.more}
            onPress={handlePagingByOffset}
          >
            <Text>더보기</Text>
          </TouchableOpacity>
        </CardItem>
      </Card>
      <Fab
        position="bottomRight"
        onPress={refreshContent}
        style={styles.fab}
      >
        <Icon name="refresh" />
      </Fab>
    </Content>
  </SafeAreaView>
);

ListScreenView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  blogData: PropTypes.shape({
    // total: PropTypes.number.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    items: PropTypes.array.isRequired,
  }).isRequired,
  // blogPaging: PropTypes.shape({
  //   offset: PropTypes.number.isRequired,
  //   size: PropTypes.number.isRequired,
  // }).isRequired,
  handlePagingByOffset: PropTypes.func.isRequired,
  refreshContent: PropTypes.func.isRequired,
};

export default ListScreenView;
