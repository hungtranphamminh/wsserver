import { registerRoom } from "../utils/generator.js";

/* register for room ID */
export const registerCall = (req, res) => {
  const action = req.body.action;
  const address = req.body.address;

  // Save the data (in a real application, you would save this data to your database)
  console.log(`Action: ${action}, Address: ${address}`);

  switch(action){
    case "register call":{
      const replyMsg = {
        roomId:registerRoom(address)
      }
      res.status(200).send(replyMsg);
      break
    }
    default:{
      res.status(404).send({ message: 'None-existed action!' });
    }
  }  
};

export const requestJoinRoom = (req,res) => {
  
}