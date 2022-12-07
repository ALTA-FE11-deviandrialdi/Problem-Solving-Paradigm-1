function dragonOfLoowater(dragonHead: number[], knightHeight: number[]) {
  //  Your code here

  if (dragonHead.length > knightHeight.length) {
    return "knight fall";
  } else {
    dragonHead.sort((a, b) => {
      return a - b;
    });
    knightHeight.sort((a, b) => {
      return a - b;
    });

    let successfulKnightHeight = 0,
      SUCCESS = -Infinity;
    for (let dragon of dragonHead) {
      for (let k = 0; k < knightHeight.length; k++) {
        if (dragon <= knightHeight[k]) {
          successfulKnightHeight += knightHeight[k];
          knightHeight[k] = SUCCESS;
          break;
        }
      }
    }
    if (
      dragonHead.length ==
      knightHeight.filter((element) => element == SUCCESS).length
    ) {
      return successfulKnightHeight;
    }
    return "knight fall";
  }
}

export default dragonOfLoowater;
