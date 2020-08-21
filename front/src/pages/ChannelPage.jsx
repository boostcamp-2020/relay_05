import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import MainMenu from "../components/MainMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 850,
  },
}));

// 각자 이미지 링크를 복붙해주세요 ! !
const images = [
  "https://user-images.githubusercontent.com/52685325/90862293-33307700-e3c8-11ea-8625-211a3c497573.jpg",
  "https://user-images.githubusercontent.com/52685325/90862340-42afc000-e3c8-11ea-82bc-161a362c41e9.jpg",
  "https://user-images.githubusercontent.com/52685325/90862378-50654580-e3c8-11ea-9be3-d6349c142e47.jpg",
  "https://user-images.githubusercontent.com/52685325/90862385-52c79f80-e3c8-11ea-9d79-6941186322e7.jpg",
  "https://user-images.githubusercontent.com/52685325/90862394-5529f980-e3c8-11ea-8238-68eb8955b8ce.jpg",
  "https://user-images.githubusercontent.com/52685325/90862396-578c5380-e3c8-11ea-8de0-f3da076bd191.jpg",
  "https://user-images.githubusercontent.com/52685325/90862408-59eead80-e3c8-11ea-80af-324e444e884c.jpg",
  "https://user-images.githubusercontent.com/52685325/90862415-5c510780-e3c8-11ea-8024-3bd685b40a64.jpg",
  "https://user-images.githubusercontent.com/52685325/90862420-5e1acb00-e3c8-11ea-82a7-e4fb45eb21e6.jpg",
  "https://user-images.githubusercontent.com/52685325/90862484-72f75e80-e3c8-11ea-82d1-5e628195cf48.jpg",
  "https://user-images.githubusercontent.com/52685325/90862494-75f24f00-e3c8-11ea-808b-f73d8a662465.jpg",
  "https://user-images.githubusercontent.com/52685325/90862498-77bc1280-e3c8-11ea-9e30-ea5b297a5af2.jpg",
];

export default function ChannelPage() {
  const classes = useStyles();

  return (
    <div style={{ display: "flex" }}>
      <MainMenu />

      <div style={{ margin: "15px" }}>
        <h1>축 부캠 졸!</h1>

        <GridList cellHeight={400} className={classes.gridList} cols={3}>
          {images.map((image) => (
            <GridListTile key={image} cols={1}>
              <img src={image} alt={image} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
