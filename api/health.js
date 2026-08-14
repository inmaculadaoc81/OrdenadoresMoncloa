export default function handler(req,res){
  return res.status(200).json({
    ok:true,
    service:'OrdenadoresMoncloa API',
    node:process.version
  });
}
