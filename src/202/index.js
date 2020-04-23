var isHappy = function(num) {
    let numArr = String(num).split('');
    let checkNum;
    let checkMap = {};
    while(checkNum !== 1) {
        checkNum = 0;
        numArr.map(i => {
            checkNum += i * i;
        });
        numArr = String(checkNum).split('');
        if(checkMap[numArr.sort()]) {
            break;
        }
        checkMap[numArr.sort()] = true;
    }
    return checkNum === 1;
};