// endpoint
//http://localhost:3000/api/getblog?slug=how-to-learn-js
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  // fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(err,data)=>{
  //   if(err){
  //     res.status(500).json({error:"no such blog found"})
  //   }
  //   console.log(req.query.slug);
  //   res.status(200).json(JSON.parse(data))
  // })
  let data= await fs.readdir("blogdata")
  let myfile;
  let allBlogs=[];
  for(let index=0;index<data.length;index++){
    const item=data[index]
    console.log(item)
    myfile=await fs.readFile(('blogdata/' +item),'utf-8')
    // myfile=await fs.readFile((`blogdata/${req.query.slug}.json`),'utf-8')
    //my file is a string hence we parse it
    allBlogs.push(JSON.parse(myfile));
  }
  
  console.log(req.query.slug);
  res.status(200).json(allBlogs)
} 