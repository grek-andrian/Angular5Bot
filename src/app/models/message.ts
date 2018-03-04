export class Message {
  content: string;
  timestamp: Date;
  avatar: string;
  author: string;
 
  constructor(content: string, avatar: string,  author: string, timestamp?: Date){
    this.content = content;
    this.timestamp = timestamp;
    this.avatar = avatar;
    this.author = author;
  }
}