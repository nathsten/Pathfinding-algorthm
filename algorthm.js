// WARNING: THE CODE IS NOT PRETTY!!
// @ts-check
const startBtn = $("start");

/**
 * Returns up if startpoint is in a lower row/collum than end, 
 * and down if its in a higher row/collum
 * @param {number} s
 * @param {number} e
 * @returns {string} direction from start to end
 */
const findDirection = (e, s) => {
    if(s <= e){
        return "up";
    }
    if(s >= e){
        return "down";
    }
}

// If failed, mark current node as useless, then clearPath(board), then start over. 

/**
 * @param {number[][]} b
 */
const findPath = b => {
    let start = [];
    let end = [];
    boardDiv.childNodes.forEach(a => a.className.includes("startPoint") ? a.id.split(" ").forEach(id => start.push(Number(id))):0);
    boardDiv.childNodes.forEach(a => a.className.includes("endPoint") ? a.id.split(" ").forEach(id => end.push(Number(id))):0);
    let pathFound = false;
    let failed = false;
    let currentNode = [start[0], start[1]];

    const UpUp = () => {
        // Down
        try{
            if(b[currentNode[0]+1][currentNode[1]] === 0){
                // Right
                if(currentNode[0] >= end[0] && b[currentNode[0]][currentNode[1]+1] === 0){
                    b[currentNode[0]][currentNode[1]+1] = 4;
                    currentNode = [currentNode[0], currentNode[1]+1];
                    drawBoard(b);
                    return;
                }
                else{
                    // Down
                    b[currentNode[0]+1][currentNode[1]] = 4;
                    currentNode = [currentNode[0]+1, currentNode[1]];
                    drawBoard(b);
                    return;
                }
            }
        } catch(e){};
        // Right
        try{
            if(b[currentNode[0]][currentNode[1]+1] === 0){
                // Down
                if(currentNode[1] >= end[1] && b[currentNode[0]+1][currentNode[1]] === 0){
                    b[currentNode[0]+1][currentNode[1]] = 4;
                    currentNode = [currentNode[0]+1, currentNode[1]];
                    drawBoard(b);
                    return;
                }
                else{
                    // Rigth
                    b[currentNode[0]][currentNode[1]+1] = 4;
                    currentNode = [currentNode[0], currentNode[1]+1];
                    drawBoard(b);
                    return;
                }
            }
        } catch(e){};
        // Up
        try{
            if(b[currentNode[0]-1][currentNode[1]] === 0){
                b[currentNode[0]-1][currentNode[1]] = 4;
                currentNode = [currentNode[0]-1, currentNode[1]];
                drawBoard(b);
                return;
            }   
        } catch(e){};

        // Left
        try{
            if(b[currentNode[0]][currentNode[1]-1] === 0){
                b[currentNode[0]][currentNode[1]-1] = 4;
                currentNode = [currentNode[0], currentNode[1]-1];
                drawBoard(b);
                return;
            }
        } catch(e){};
    }

    const downDown = () => {
        // Up
        try{
            if(b[currentNode[0]-1][currentNode[1]] === 0){
                if(currentNode[0] <= end[0] && b[currentNode[0]][currentNode[1]-1] === 0){
                    // Left
                    b[currentNode[0]][currentNode[1]-1] = 4;
                    currentNode = [currentNode[0], currentNode[1]-1];
                    drawBoard(b);
                    return;
                }
                else{
                    // Up
                    b[currentNode[0]-1][currentNode[1]] = 4;
                    currentNode = [currentNode[0]-1, currentNode[1]];
                    drawBoard(b);
                    return;
                }
            }
        } catch(e){};

        // Left
        try{
            if(b[currentNode[0]][currentNode[1]-1] === 0){
                if(currentNode[1] <= end[1] && b[currentNode[0]-1][currentNode[1]] === 0){
                    // Up
                    b[currentNode[0]-1][currentNode[1]] = 4;
                    currentNode = [currentNode[0]-1, currentNode[1]];
                    drawBoard(b);
                    return;
                }
                else{
                    // Left
                    b[currentNode[0]][currentNode[1]-1] = 4;
                    currentNode = [currentNode[0], currentNode[1]-1];
                    drawBoard(b);
                    return;
                }
            }
        } catch(e){};

        // Down
        try{
            if(b[currentNode[0]+1][currentNode[1]] === 0){
                // Right
                if(currentNode[0] >= end[0] && b[currentNode[0]][currentNode[1]+1] === 0){
                    b[currentNode[0]][currentNode[1]+1] = 4;
                    currentNode = [currentNode[0], currentNode[1]+1];
                    drawBoard(b);
                    return;
                }
                else{
                    // Down
                    b[currentNode[0]+1][currentNode[1]] = 4;
                    currentNode = [currentNode[0]+1, currentNode[1]];
                    drawBoard(b);
                    return;
                }
            }
        } catch(e){};

        // Right
        try{
            if(b[currentNode[0]][currentNode[1]+1] === 0){
                // Down
                if(currentNode[1] >= end[1] && b[currentNode[0]+1][currentNode[1]] === 0){
                    b[currentNode[0]+1][currentNode[1]] = 4;
                    currentNode = [currentNode[0]+1, currentNode[1]];
                    drawBoard(b);
                    return;
                }
                else{
                    // Right
                    b[currentNode[0]][currentNode[1]+1] = 4;
                    currentNode = [currentNode[0], currentNode[1]+1];
                    drawBoard(b);
                    return;
                }
            }
        } catch(e){};
    }

    const upDown = () => {
        // Down
        try{
            if(b[currentNode[0]+1][currentNode[1]] === 0){
                if(currentNode[0] >= end[0] && b[currentNode[0]][currentNode[1]-1] === 0){
                    // Left
                    b[currentNode[0]][currentNode[1]-1] = 4;
                    currentNode = [currentNode[0], currentNode[1]-1];
                    drawBoard(b);
                    return;
                }
                else{
                    // Down
                    b[currentNode[0]+1][currentNode[1]] = 4;
                    currentNode = [currentNode[0]+1, currentNode[1]];
                    drawBoard(b);
                    return;
                }
            }
        } catch(e){};
        // Left
        try{
            if(b[currentNode[0]][currentNode[1]-1] === 0){
                if(currentNode[0] <= end[0] && b[currentNode[0]+1][currentNode[1]] === 0){
                    // Down
                    b[currentNode[0]+1][currentNode[1]] = 4;
                    currentNode = [currentNode[0]+1, currentNode[1]];
                    drawBoard(b);
                    return;
                }
                else{
                    // Left
                    b[currentNode[0]][currentNode[1]-1] = 4;
                    currentNode = [currentNode[0], currentNode[1]-1];
                    drawBoard(b);
                    return;
                }
            }
        } catch(e){};

        // Right
        try{
            if(b[currentNode[0]][currentNode[1]+1] === 0){
                // Left
                if(currentNode[1] >= end[1] && b[currentNode[0]+1][currentNode[1]] === 0){
                    b[currentNode[0]+1][currentNode[1]] = 4;
                    currentNode = [currentNode[0]+1, currentNode[1]];
                    drawBoard(b);
                    return;
                }
                else{
                    // Right
                    b[currentNode[0]][currentNode[1]+1] = 4;
                    currentNode = [currentNode[0], currentNode[1]+1];
                    drawBoard(b);
                    return;
                }
            }
        } catch(e){};

        // Up
        try{
            if(b[currentNode[0]-1][currentNode[1]] === 0){
                // Left
                if(currentNode[0] <= end[0] && b[currentNode[0]][currentNode[1]-1] === 0){
                    b[currentNode[0]][currentNode[1]-1] = 4;
                    currentNode = [currentNode[0], currentNode[1]-1];
                    drawBoard(b);
                    return;
                }
                else{
                    // Up
                    b[currentNode[0]-1][currentNode[1]] = 4;
                    currentNode = [currentNode[0]-1, currentNode[1]];
                    drawBoard(b);
                    return;
                }
            }
        } catch(e){};
    }

    const downUp = () => {
        // Right
        try{
            if(b[currentNode[0]][currentNode[1]+1] === 0){
                if(currentNode[0] <= end[0] && b[currentNode[0]-1][currentNode[1]] === 0){
                    // Up
                    b[currentNode[0]-1][currentNode[1]] = 4;
                    currentNode = [currentNode[0]-1, currentNode[1]];
                    drawBoard(b);
                    return;
                }
                else{
                    // Right
                    b[currentNode[0]][currentNode[1]+1] = 4;
                    currentNode = [currentNode[0], currentNode[1]+1];
                    drawBoard(b);
                    return;
                }
            }
        } catch(e){};

        // Up
        try{
            if(b[currentNode[0]-1][currentNode[1]] === 0){
                // Right
                if(currentNode[1] <= end[1] && b[currentNode[0]][currentNode[1]+1] === 0){
                    b[currentNode[0]][currentNode[1]+1] = 4;
                    currentNode = [currentNode[0], currentNode[1]+1];
                    drawBoard(b);
                    return;
                }
                else{
                    // Up
                    b[currentNode[0]-1][currentNode[1]] = 4;
                    currentNode = [currentNode[0]-1, currentNode[1]];
                    drawBoard(b);
                    return;
                }
            }
        } catch(e){};

        // Left 
        try{
            if(b[currentNode[0]][currentNode[1]-1] === 0){
                if(currentNode[0] <= end[0] && b[currentNode[0]+1][currentNode[1]] === 0){
                    // Down
                    b[currentNode[0]+1][currentNode[1]] = 4;
                    currentNode = [currentNode[0]+1, currentNode[1]];
                    drawBoard(b);
                    return;
                }
                else{
                    // Left
                    b[currentNode[0]][currentNode[1]-1] = 4;
                    currentNode = [currentNode[0], currentNode[1]-1];
                    drawBoard(b);
                    return;
                }
            }
        } catch(e){};   
        // Down
        try{
            if(b[currentNode[0]+1][currentNode[1]] === 0){
                if(currentNode[0] >= end[0] && b[currentNode[0]][currentNode[1]-1] === 0){
                    // Left
                    b[currentNode[0]][currentNode[1]-1] = 4;
                    currentNode = [currentNode[0], currentNode[1]-1];
                    drawBoard(b);
                    return;
                }
                else{
                    // Down
                    b[currentNode[0]+1][currentNode[1]] = 4;
                    currentNode = [currentNode[0]+1, currentNode[1]];
                    drawBoard(b);
                    return;
                }
            }
        } catch(e){};

    }

    // Checks if start is in a higher or lower rown than end
    switch(findDirection(end[0], start[0])){
        case "up":{
            // Checks if start is in a higher or lower collum than end.
            switch(findDirection(end[1], start[1])){
                case"up":{
                    console.log("up up");
                    while(pathFound === false){
                        try{
                            if((b[currentNode[0]-1][currentNode[1]] && b[currentNode[0]-1][currentNode[1]] === 2)
                                || b[currentNode[0]+1][currentNode[1]] === 2
                                || b[currentNode[0]][currentNode[1]+1] === 2
                                || b[currentNode[0]][currentNode[1]-1] === 2){
                                    pathFound = true;
                            }
                        } catch(e){};
                        if(pathFound === true){
                            break;
                        }

                        try{
                            if((b[currentNode[0]-1][currentNode[1]] === 1 || b[currentNode[0]-1][currentNode[1]] === 4 || b[currentNode[0]-1][currentNode[1]] === 5 || (b[currentNode[0]-1][currentNode[1]] === 3 && b[currentNode[0]+1][currentNode[1]] === 5))
                                && (b[currentNode[0]+1][currentNode[1]] === 1 || b[currentNode[0]+1][currentNode[1]] === 4  || b[currentNode[0]+1][currentNode[1]] === 5 || (b[currentNode[0]+1][currentNode[1]] === 3 && b[currentNode[0]-1][currentNode[1]] === 5))
                                && (b[currentNode[0]][currentNode[1]+1] === 1 || b[currentNode[0]][currentNode[1]+1] === 4  || b[currentNode[0]][currentNode[1]+1] === 5 || (b[currentNode[0]][currentNode[1]+1] === 3 && b[currentNode[0]][currentNode[1]-1] === 5))
                                && (b[currentNode[0]][currentNode[1]-1] === 1 || b[currentNode[0]][currentNode[1]-1] === 4) || b[currentNode[0]][currentNode[1]-1] === 5 || (b[currentNode[0]][currentNode[1]-1] === 3 && b[currentNode[0]][currentNode[1]+1] === 5)){
                                    failed = true;
                            }
                        } catch(e){};
                        if(failed === true){
                            clearPath(b);
                            b[currentNode[0]][currentNode[1]] = 5;
                            currentNode = [start[0], start[1]];
                            failed = false;
                        }

                        if(currentNode[0] >= end[0] && currentNode[1] >= end[1]){
                            downDown();
                        }
                        else if(currentNode[0] <= end[0] && currentNode[1] >= end[1]){
                            upDown();
                        }
                        else if(currentNode[0] > end[0] && currentNode[1] < end[1]){
                            downUp();
                        }
                        else{
                            UpUp();
                        }
                    }
                    break;
                }
                case"down":{
                    console.log("up down");
                    while(pathFound === false){
                        try{
                            if((b[currentNode[0]-1][currentNode[1]] === 2)
                                || b[currentNode[0]+1][currentNode[1]] === 2
                                || b[currentNode[0]][currentNode[1]+1] === 2
                                || b[currentNode[0]][currentNode[1]-1] === 2){
                                    pathFound = true;
                            }
                        } catch(e){}; 
                        if(pathFound === true){
                            break;
                        }

                        try{
                            if((b[currentNode[0]-1][currentNode[1]] === 1 || b[currentNode[0]-1][currentNode[1]] === 4 || b[currentNode[0]-1][currentNode[1]] === 5 || (b[currentNode[0]-1][currentNode[1]] === 3 && b[currentNode[0]+1][currentNode[1]] === 5))
                                && (b[currentNode[0]+1][currentNode[1]] === 1 || b[currentNode[0]+1][currentNode[1]] === 4  || b[currentNode[0]+1][currentNode[1]] === 5 || (b[currentNode[0]+1][currentNode[1]] === 3 && b[currentNode[0]-1][currentNode[1]] === 5))
                                && (b[currentNode[0]][currentNode[1]+1] === 1 || b[currentNode[0]][currentNode[1]+1] === 4  || b[currentNode[0]][currentNode[1]+1] === 5 || (b[currentNode[0]][currentNode[1]+1] === 3 && b[currentNode[0]][currentNode[1]-1] === 5))
                                && (b[currentNode[0]][currentNode[1]-1] === 1 || b[currentNode[0]][currentNode[1]-1] === 4) || b[currentNode[0]][currentNode[1]-1] === 5 || (b[currentNode[0]][currentNode[1]-1] === 3 && b[currentNode[0]][currentNode[1]+1] === 5)){
                                    failed = true;
                            }
                        } catch(e){};
                        if(failed === true){
                            clearPath(b);
                            b[currentNode[0]][currentNode[1]] = 5;
                            currentNode = [start[0], start[1]];
                            failed = false;
                        }

                        if(currentNode[0] >= end[0] && currentNode[1] <= end[1]){
                            downDown();
                        }
                        else if(currentNode[0] <= end[0] && currentNode[1] <= end[1]){
                            UpUp();
                        }
                        else if(currentNode[0] >= end[0] && currentNode[1] <= end[1]){
                            downUp();
                        }
                        else{
                            upDown();
                        }
                    }
                    break;
                }
            }
            break;
        }
        case"down":{
            // Checks if start is in a higher or lower collum than end.
            switch(findDirection(end[1], start[1])){
                case"up":{
                    console.log("down up");
                    while(pathFound === false){
                        try{
                            if(b[currentNode[0]-1][currentNode[1]] === 2
                                || b[currentNode[0]+1][currentNode[1]] === 2
                                || b[currentNode[0]][currentNode[1]+1] === 2
                                || b[currentNode[0]][currentNode[1]-1] === 2){
                                    pathFound = true;
                            }
                        } catch(e){};
                        if(pathFound === true){
                            break;
                        }

                        try{
                            if((b[currentNode[0]-1][currentNode[1]] === 1 || b[currentNode[0]-1][currentNode[1]] === 4 || b[currentNode[0]-1][currentNode[1]] === 5 || (b[currentNode[0]-1][currentNode[1]] === 3 && b[currentNode[0]+1][currentNode[1]] === 5))
                                && (b[currentNode[0]+1][currentNode[1]] === 1 || b[currentNode[0]+1][currentNode[1]] === 4  || b[currentNode[0]+1][currentNode[1]] === 5 || (b[currentNode[0]+1][currentNode[1]] === 3 && b[currentNode[0]-1][currentNode[1]] === 5))
                                && (b[currentNode[0]][currentNode[1]+1] === 1 || b[currentNode[0]][currentNode[1]+1] === 4  || b[currentNode[0]][currentNode[1]+1] === 5 || (b[currentNode[0]][currentNode[1]+1] === 3 && b[currentNode[0]][currentNode[1]-1] === 5))
                                && (b[currentNode[0]][currentNode[1]-1] === 1 || b[currentNode[0]][currentNode[1]-1] === 4) || b[currentNode[0]][currentNode[1]-1] === 5 || (b[currentNode[0]][currentNode[1]-1] === 3 && b[currentNode[0]][currentNode[1]+1] === 5)){
                                    failed = true;
                            }
                        } catch(e){};
                        if(failed === true){
                            clearPath(b);
                            b[currentNode[0]][currentNode[1]] = 5;
                            currentNode = [start[0], start[1]];
                            failed = false;
                        }

                        if(currentNode[0] >= end[0] && currentNode[1] >= end[1]){
                            downDown();
                        }
                        else if(currentNode[0] <= end[0] && currentNode[1] >= end[1]){
                            upDown();
                        }
                        else if(currentNode[0] <= end[0] && currentNode[1] <= end[1]){
                            UpUp();
                        }
                        else{
                            downUp();
                        }
                    }
                    break;
                }
                case"down":{
                    console.log("down down");
                    while(pathFound === false){
                        try{
                            if(b[currentNode[0]-1][currentNode[1]] === 2
                                || b[currentNode[0]+1][currentNode[1]] === 2
                                || b[currentNode[0]][currentNode[1]+1] === 2
                                || b[currentNode[0]][currentNode[1]-1] === 2){
                                    pathFound = true;
                            }
                        } catch(e){};
                        if(pathFound === true){
                            break;
                        }

                        try{
                            if((b[currentNode[0]-1][currentNode[1]] === 1 || b[currentNode[0]-1][currentNode[1]] === 4 || b[currentNode[0]-1][currentNode[1]] === 5 || (b[currentNode[0]-1][currentNode[1]] === 3 && b[currentNode[0]+1][currentNode[1]] === 5))
                                && (b[currentNode[0]+1][currentNode[1]] === 1 || b[currentNode[0]+1][currentNode[1]] === 4  || b[currentNode[0]+1][currentNode[1]] === 5 || (b[currentNode[0]+1][currentNode[1]] === 3 && b[currentNode[0]-1][currentNode[1]] === 5))
                                && (b[currentNode[0]][currentNode[1]+1] === 1 || b[currentNode[0]][currentNode[1]+1] === 4  || b[currentNode[0]][currentNode[1]+1] === 5 || (b[currentNode[0]][currentNode[1]+1] === 3 && b[currentNode[0]][currentNode[1]-1] === 5))
                                && (b[currentNode[0]][currentNode[1]-1] === 1 || b[currentNode[0]][currentNode[1]-1] === 4) || b[currentNode[0]][currentNode[1]-1] === 5 || (b[currentNode[0]][currentNode[1]-1] === 3 && b[currentNode[0]][currentNode[1]+1] === 5)){
                                    failed = true;
                            }
                        } catch(e){};
                        if(failed === true){
                            clearPath(b);
                            b[currentNode[0]][currentNode[1]] = 5;
                            currentNode = [start[0], start[1]];
                            failed = false;
                        }

                        if(currentNode[0] <= end[0] && currentNode[1] <= end[1]){
                            UpUp();
                        }
                        else if(currentNode[0] < end[0] && currentNode[1] < end[1]){
                            upDown();
                        }
                        else if(currentNode[0] >= end[0] && currentNode[1] <= end[1]){
                            downUp();
                        }
                        else{
                            downDown();
                        }
                    }
                    break;
                }
            }
            break;
        }
    }
}

startBtn.addEventListener("click", () => {
    if(startPoint === true && endPoint === true){
        findPath(board);
    }
    else{
        alert("Please select start and end point")
    }
});