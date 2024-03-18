import  {v5 as uuidv5} from 'uuid'

const UUID_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';

/** 
 * @description
 * 
 * */ 
export const registerRoom = (address) => {
  return uuidv5(address, UUID_NAMESPACE)
}