import { Tweet } from "@/types/tweet";
import { user, valdemir } from "./user";

export const tweet: Tweet = {
  id: 123,
  user: user,
  body: 'Esse Nivus é Lindo! Volks é Volks 🤪',
  image: 'https://i.postimg.cc/43WpMgC8/b206af210829961-67181abb68753.jpg',
  likeCount: 523,
  commentCounter: 61,
  retweetCount: 0,
  liked: true,
  retweeted: false,
  dataPost: new Date(2024, 0, 0, 0, 0, 23),
};

export const tweetValdemir: Tweet = {
  id: 123,
  user: valdemir,
  body: 'EU ODEIO PROGRAMAÇÃO... EU ODEIO PROGRAMAÇÃO... EITA, FUNCIONOU! EU AMO PROGRAMAÇÃO S2 HAHA',
  likeCount: 692,
  commentCounter: 41,
  retweetCount: 0,
  liked: false,
  retweeted: false,
  dataPost: new Date(2024, 0, 0, 0, 0, 23),
};