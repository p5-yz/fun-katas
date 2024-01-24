const getTweetData = require('../get-tweet-data.js')

// TO DO LIST: 
// It should return { tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 0 } if tweet string is empty
// It should return the length of n for any string without a mention or a hashtag length n the tweet.
// It should return the a hash tags and hash tag count( #awesomeNorthcoders ) in the tweet
// It should return the a mention tags and hash mention count( #awesomeNorthcoders ) in the tweet
// It should the amount of mentions ( @northcoders ) in the tweet 
// It should return an array of mentions.
// It should only want to return unique hash tags
// It should handle mentioned.

describe('getTweetData', ()=> {
    test ('It should return { tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 0 } if tweet string is empty', ()=>{
        const tweetObj = { tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 0 }
        const emptyString = ''
        const tweet = getTweetData(emptyString)
        expect(tweet).toEqual(tweetObj)
    })
    test('It should return the length of n for any string without a mention or a hashtag length n the tweet.', ()=> {
        const nonEmptyString = 'My awesome tweet'
        const tweet = getTweetData(nonEmptyString)
        expect(tweet.length).toEqual(nonEmptyString.length)
    })
    test('It should return the a hash tags and hash tag count( #awesomeNorthcoders ) in the tweet', ()=>{
        const hashString = '#northcoders is great!'
        const tweet = getTweetData(hashString)
        expect(tweet.tagCount).toBe(1)
        expect(tweet.tags[0]).toBe('#northcoders')
    })
    test('It should return the a mention tags and hash mention count( #awesomeNorthcoders ) in the tweet', ()=>{
        const mentionsString = '#northcoders is #great so say we all at the @firm!'
        const tweet = getTweetData(mentionsString)
        expect(tweet.mentionCount).toBe(1)
        expect(tweet.mentions[0]).toBe('@firm!')
    })
})