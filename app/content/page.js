import Link from "next/link";

export default function Content() {
  return (
    <div className="content-item-container">
      <h1>Content</h1>
      <div className="home-child1"></div>
      <div className="pilihan-content">
        <div className="top-row">
          <div className="content-bentuk1">
            <img
              className="content-gender-equality-0-1"
              alt=""
              src="/assets/gender-equality-0-1.png"
            />
          </div>

          <div className="content-bentuk2">
            <p>
              GENDER
              <br />
              EQUALITY
            </p>
            <Link href="/" className="content-btn-smr1">
              See More
            </Link>
          </div>
        </div>

        <div className="bottom-row">
          <div className="content-bentuk3">
            <p>TOKOH WANITA INDONESIA</p>
            <Link href="/" className="content-btn-smr2">
              See More
            </Link>
          </div>

          <div className="content-bentuk4">
            <img
              className="content-gender-equality-1-1"
              alt=""
              src="/assets/gender-equality-1-1.png"
            />
          </div>
        </div>
      </div>
      <div id="chatContainer" className="chat-container">
        <Link href={"/diskusi"} id="btn-diskusi">
          Diskusi
        </Link>

        <Link href={"/"} id="btnScrollToTop" title="Kembali ke atas">
          &#8679;
        </Link>
      </div>
    </div>
  );
}
