// export function ProjectCard({ title, date, url, desc, img_url }) {
//   return (
//     <div className="group rounded-md overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-103">
//       <a href={url} target="_blank" rel="noreferrer noopener">
//         <img src={img_url} className="w-full object-cover" />
//         <div className="px-4 py-4 bg-gray-700 transition-colors duration-300 group-hover:bg-gray-00">
//           <h1 className="text-xl font-semibold">{title}</h1>
//           <p className="text-sm">{date}</p>
//           <p className="text-sm mt-1">{desc}</p>
//         </div>
//       </a>
//     </div>
//   );
// }

export function ProjectCard({ title, date, url, desc, img_url }) {
  return (
    <div className="group relative w-full h-80 rounded-md overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-103">
      <a href={url} target="_blank" rel="noreferrer noopener" className="block h-full">
        <img
          src={img_url}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 w-full bg-gray-700/90 text-white px-4 py-4 transition-colors duration-300 group-hover:bg-gray-600/90">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="text-sm">{date}</p>
          <p className="text-sm mt-1 line-clamp-4">{desc}</p>
        </div>
      </a>
    </div>
  );
}

