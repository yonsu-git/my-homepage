import { FaGithub } from "react-icons/fa";
import { FaXTwitter} from "react-icons/fa6"
function App() {
  return (
    <div className="container">
      <div className="card">
      <h1>Inagaki Hirotoのホームページ</h1>
      <p>Programmingができるようになりたい。</p>
      </div>

      <div className="card">
        <h2>About</h2>
        <p>
          計算化学・Python・機械学習に興味があります。
        </p>
      </div>

      <div className="card">
        <h2>Links</h2>
        <ul className="link">
          <li><a href="https://github.com/"><FaGithub /></a></li>
          <li><a href="https://x.com/home?lang=ja"><FaXTwitter /></a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;

