export const firebasConfig = {
    apiKey: "AIzaSyCfLjXqE_NUoTBvJdAfYH4DXDr2EPBuTVY",
    authDomain: "pitstop-7ed2e.firebaseapp.com",
    databaseURL: "pitstop-7ed2e.firebaseio.com",
    projectId: "pitstop-7ed2e",
    storageBucket: "pitstop-7ed2e.appspot.com",
    messagingSenderId: "530569454384"
};

export const datasnapshotToArray = snapshot => {
    let returnArray = [];
    snapshot.forEach(element => {
        let item = element.val();
        item.key = element.key;
        returnArray.push(item)
    });
    return returnArray;
};
