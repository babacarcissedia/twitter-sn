# Goal
Just getting started. Let's have some fun

The main goal is to get Senegalese account profile picture then apply some deep learning to classify a person from that nationality or not

The following step is to so using twint library:
- start from a lambda Senegalese user
- append followers and followings with to queue:
  - twint -u $username --followers --user-full
  - twint -u $username --following --user-full
- get user bio with:
  - twint -u $username --user-full -o "$username.json" --json
- try to find Senegal or [🇸🇳](https://abs-0.twimg.com/emoji/v2/svg/1f1f8-1f1f3.svg) in bio or tweet name to confirm that is Senegalese
- once we gather all the dataset we will need do do some cleaning and preprocessing
operation on our data
  * make sure data distribution is good (same amount of male and female)




## Possible options: Get tweets from a specific ip
```bash
  latitude=$1
  longitude=$2
  distance=$3
  twint -g="${latitude},${longitude},${distance}km" -o file.csv --csv
```

Available output formats are csv,json


## Find social media influencer
Follow recipe from Mark @neo4j
