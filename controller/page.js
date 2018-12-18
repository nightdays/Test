let arr = [];
for(let i=0; i<30; i++) {
    arr.push({index: i+1});
}


export default function getPageData(pageNum , pageSize=10) {
    let startIndex = (pageNum - 1) * pageSize;
    let endIndex = pageNum * pageSize
    let temp = [];
    for(let i = startIndex ; i < endIndex ; i++) {
        temp.push(arr[i]);
    }
    return {
        total : arr.length,
        data: temp
    }
}