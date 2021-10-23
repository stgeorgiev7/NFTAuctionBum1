import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Head from "../header/Header";
import Trending from "../trending/Trending";
import Auctions from "../auctions/Auctions";
import userImage from '../avatar/image/avatar.png'
import mediaImage from "../card/image/nft.jpg";


export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Head />
      <Trending cards={
        [
          {
            name: "Clock",
            user: { avatarUrl: userImage.src, verified: true },
            mediaUrl: mediaImage.src,
            price: 1,
            currency: "ETH",
          },
          {
            name: "DOGE",
            user: { avatarUrl: userImage.src, verified: true },
            mediaUrl: mediaImage.src,
            price: 2.3,
            currency: "ETH",
          },
          {
            name: "BTC",
            user: { avatarUrl: userImage.src, verified: true },
            mediaUrl: mediaImage.src,
            price: 5,
            currency: "ETH",
          },
          {
            name: "Litecoin",
            user: { avatarUrl: userImage.src, verified: true },
            mediaUrl: mediaImage.src,
            price: 10,
            currency: "ETH",
          }
        ]
      } />
     
     <Auctions cards={
        [
          {
            name: "Clock",
            user: { avatarUrl: userImage.src, verified: true },
            mediaUrl: mediaImage.src,
            price: 1,
            currency: "ETH",
            timeLeft: 12000,
          },
          {
            name: "DOGE",
            user: { avatarUrl: userImage.src, verified: true },
            mediaUrl: mediaImage.src,
            price: 2.3,
            currency: "ETH",
            timeLeft: 6000,
          },
          {
            name: "BTC",
            user: { avatarUrl: userImage.src, verified: true },
            mediaUrl: mediaImage.src,
            price: 5,
            currency: "ETH",
            timeLeft: 12000,
          },
          {
            name: "Litecoin",
            user: { avatarUrl: userImage.src, verified: true },
            mediaUrl: mediaImage.src,
            price: 10,
            currency: "ETH",
            timeLeft: 24000,
          }
        ]
      } />
      <Container className={classNames(styles.container)} maxWidth="xl">


        <Paper className={classNames(styles.paper)}>

          <Link href="/about" color="secondary">

          </Link>
        </Paper>
      </Container>
    </div>
  );
}
