import React from 'react'


const Card =({images}) =>{
  const tags = images.tags.split(',');
   
   return(
    <div>
    <div className="xl:max-w-sm rounded overflow-hidden shadow-lg mt-20">
<img src={images.webformatURL} alt="Not Found" className="w-full"/>
<div className="px-6 py-4">
 <div className="text-purple-500 text-bold text-xl mb-2">by {images.user}</div>
 <div >
  <ul>
    <li>
      <strong>Views :</strong>           
      {images.views}
    </li>
    <li>
      <strong>Downloades :</strong>
      {images.downloads}
    </li>
    <li>
      <strong>Likes :</strong>
      {images.likes}
    </li>
  </ul>
 </div>
</div>
<div className="px-6 py-4">
  {tags.map((tag,index) =>(
         <sapn key={index} className="bg-gray-200 rounded-full px-3 py-1 mr-2 text-gray-700 font-semibold text-sm">#{tag}</sapn>

  ))}
</div>
</div>
</div>

   )
}

export default Card
