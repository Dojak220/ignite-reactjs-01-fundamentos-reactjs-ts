import { Header } from "./components/Header";
import { Post, PostProps } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css"

import "./global.css"

interface Post extends PostProps {
  id: number,
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Dojak220.png",
      name: "Dorgival Rocha",
      role: "Developer",
    },
    content: [
      {type: "paragraph", content: "E aí, beleza?"},
      {type: "paragraph", content: "Esse é um novo post para visualização"},
      {type: "link", content: "Acesse esse link"},
    ],
    publishedAt: new Date("2023-02-03 18:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Developer",
    },
    content: [
      {type: "paragraph", content: "Olá, como estão?"},
      {type: "paragraph", content: "Esse é o Mayk falando"},
      {type: "link", content: "Acesse esse link aqui"},
    ],
    publishedAt: new Date("2023-02-03 20:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt} 
            />)
          }
        </main>
      </div>
    </>
  )
}

export default App
