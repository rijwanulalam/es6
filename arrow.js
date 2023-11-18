const friends = ['alim', 'dalim', 'jalim', 'halumlim'];

const checkOddEven = (friends) => {
    const oddFriend = [];
    for(const friend of friends){
        if(friend.length % 2 !== 0){
            oddFriend.push(friend);
        }
    }
    return oddFriend;
}
const newFriends = checkOddEven(friends);
console.log(newFriends)
