const { getUser } = require("./data");
  
 const findMostCommonTitle = (myId, degOfSeparation) => {

    let queue = [myId];
    const seen = new Set(queue);
    const jobs = {};

    for(let i = 0; i <= degOfSeparation; i++){
        const newQueue = [];
        while(queue.length){
            const user = getUser(queue.shift());

            // queue up next iteration of connection

            for(let j = 0; j < user.connections.length; j++){
                const connection = user.connections[j];

                if(!seen.has(connection)){
                    newQueue.push(connection);
                    seen.add(connection);
                }
            }

            // count the job
            jobs[user.title] = jobs[user.title] ? jobs[user.title] + 1 : 1
        }
        queue = newQueue;
    }

    const jobKeys = Object.keys(jobs);
    let biggestNo = jobs[jobKeys[0]];
    let jobName = jobKeys[0];

    for(let i = 1; i < jobKeys.length; i++){
        const currentJob = jobKeys[i];

        if(jobs[currentJob] > biggestNo){
            jobName = currentJob;
            biggestNo = jobs[currentJob];
        }
    }
    return jobName;
 }

 console.log(findMostCommonTitle(11, 3));