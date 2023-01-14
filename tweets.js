
const tweetForm = document.querySelector('#tweetForm');
const tweetContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (e) { 
    e.preventDefault();
    // const userInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    // console.log(userInput.value, tweetInput.value)
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    tweetContainer.append(newTweet);
}

//first we set off an empty li 
//then we make a bold tag
//then inside the bold tag we append the username
//then we take that bold tag and append it to our li
//after that we append the li with the tweet text
//then append all in tweetContainer(li)