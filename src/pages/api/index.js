import style from "@/styles/Home.module.css";
import { Inter } from 'next/font/google';
import Head from 'next/head';
// import App from './_app';

const inter = Inter({ subsets: ["latin"] });

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="./icons8-controle-50.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>React App</title>
      </Head>

      <body className={`${style.body} ${inter.className}`}>

      </body>
    </>
  )
}

