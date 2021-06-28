/**
 * @return {Component} returns list of links
 */
export default function Sidebar(props) {
  return (
    <nav>
      <a href="">Logo</a>
      <a href="">Projects</a>
      <a href="">About</a>
      
      <UserLinks data={props.data} />
    </nav>
  )
}


const UserLinks = ({data}) => {
  return (
    <>
    <ul>
      {data.map((key, index) => {
        {return <li key={index}>
            <a href={key.link}>
              {key.name}
            </a>
          </li>}
      })}
    </ul>
  </>
  )
}
/* 
Current error
Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
 */

// const NavItems = (data) => {
//   data = [
//     {name: 'github', link: 'https://www.github.com/bommezijn'},
//     {name: 'insta', link: 'https://www.instagram.com/n.bmzn'},
//   ]
//   return (
//     <ul>
//       {data.map((key, index) => {
//         <a index={index} href={key.link}>
//           <p>{key.name}</p>
//           <span></span>
//         </a>
//       })}
//     </ul>
//   )
// }