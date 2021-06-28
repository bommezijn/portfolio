import Sidebar from "../components/sidebar/Sidebar";

export default function Home() {

const data = [
  {name: 'github', link: 'https://www.github.com/bommezijn'},
  {name: 'insta', link: 'https://www.instagram.com/n.bmzn'},
]
// console.log(data)
  return (
    <main>
      <h1>
        Hello World
      </h1>
      <p>Upcoming portfolio.</p>
      <Sidebar data={data}/>
    </main>
  )
}
