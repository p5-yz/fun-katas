/*
  We want easy access to the following data:

The length of the tweet.
The amount of hash tags ( #awesomeNorthcoders ) in the tweet as well as an array of them.
The amount of mentions ( @northcoders ) in the tweet as well as an array of them.
We only want to return unique hash tags and handles mentioned.

Examples

You can use these examples to start building up your test suite.

getTweetData("My awesome tweet");
// should return { tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 }
getTweetData("My awesome tweet to @northcoders");
// should return { tags: [], mentions: ['@northcoders'], tagCount: 0, mentionCount: 1, length: 32 }
getTweetData("My awesome tweet about #coding");
// should return { tags: ['#coding'], mentions: [], tagCount: 1, mentionCount: 0, length: 30 }
getTweetData("My awesome tweet about #coding to @northcoders");
// should return { tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 46 }
getTweetData("I am #coding with @northcoders I love #coding and @northcoders");
// should return { tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 }
*/

function getTweetData (tweetString) {
  const tweetStr = tweetString.split(' ')
  const hashes = [], mentions = []
  tweetStr.forEach(function (tweet){
    if (tweet[0] === '#')
      hashes.push(tweet)
      if (tweet[0] === '@')
      mentions.push(tweet)
  })
  console.log(hashes,mentions)
  const tweet = { tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: tweetString.length }
  for (const hash of hashes)
    tweet.tags.push(hash)
  tweet.tagCount = hashes.length

  for (const mention of mentions)
    tweet.mentions.push(mention)
  tweet.mentionCount = mentions.length

  console.log(tweet)
  // Your code here
  return tweet
};

module.exports = getTweetData;
