import Link from "next/link";

export default function Home() {
  return (
    <main className="home-main">
      <div className="home-item-container">
        <section className="hero">
          <img className="home-item" alt="" src="/assets/vector-16.svg" />

          <img className="home-inner" alt="" src="/assets/group-162534.svg" />
          <div className="hero-sec">
            <p className="hero-let">Education for all</p>
            <p className="hero-let">
              <span>Empowerment</span> for
            </p>
            <p className="hero-let">Everyone</p>
            <p className="hero-p">
              Transforming Lives Through Inclusive Education
            </p>
            <a href="#middle" className="btn-start">
              Get started
            </a>
          </div>

          <div className="home-child1"></div>

          <img className="home-child" alt="" src="/assets/group-162533.svg" />

          <img className="add-icon" alt="" src="/assets/add.svg" />
        </section>

        <div className="hero-hub-gender-1-icon_container">
          <img
            className="hero-hub-gender-1-icon"
            alt=""
            src="/assets/herohub-gender-1@2x.png"
          />
        </div>

        <div className="middle" id="middle">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

        <section className="content">
          <div className="content1">
            <h2 className="judul-content">
              Kenapa hal ini
              <br />
              penting?
            </h2>
            <br />
            <p>
              Beberapa point Gender Equality harus
              <br />
              disuarakan
            </p>
          </div>

          <div className="content2">
            <div className="isi1-content2">
              <img className="group-inner" alt="" src="/assets/group-542.svg" />
              <p className="judul-isi">Keadilan Sosial</p>
              <p>
                setiap gender memiliki hak
                <br />
                yang sama untuk mengakses
                <br />
                peluang, sumber daya, dan
                <br />
                keuntungan dalam kehidupan.
              </p>
            </div>

            <div className="isi2-content2">
              <img
                className="group-child1"
                alt=""
                src="/assets/group-555.svg"
              />
              <p className="judul-isi">Pembangunan Berkelanjutan</p>
              <p>
                Partisipasi aktif perempuan
                <br />
                dalam semua bidang dapat
                <br />
                mencapai pertumbuhan yang
                <br />
                inklusif dan berkelanjutan.
              </p>
            </div>

            <div className="isi3-content2">
              <img
                className="group-child2"
                alt=""
                src="/assets/group-556.svg"
              />
              <p className="judul-isi">Peningkatan Potensi</p>
              <p>
                Kesetaraan gender
                <br />
                menciptakan lingkungan yang
                <br />
                mendukung potensi penuh
                <br />
                setiap individu
              </p>
            </div>

            <div className="isi4-content2">
              <img className="group-icon" alt="" src="/assets/group-554.svg" />
              <p className="judul-isi">Perubahan Sosial</p>
              <p>
                Kesetaraan gender adalah kunci
                <br />
                untuk mengubah norma dan
                <br />
                persepsi sosial yang membatasi
                <br />
                peran dan ekspetasi gender.
              </p>
            </div>
          </div>
        </section>

        <h3 className="trending-topicjud">Trending Topic</h3>

        <section className="trending-topic">
          <div className="isi-trending">
            <div className="bentuk1">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Excepturi fugit eum optio sint ratione perspiciatis,
                exercitationem
                <br />
                ullam enim fuga! Cum dolorum cumque, a dolores ab doloremque
                quia!
                <br />
                Deserunt, harum cumque.
              </p>
              <Link href="/" className="btn-smr1">
                See More
              </Link>
            </div>

            <div className="bentuk2">
              <img
                className="gender-equality-0-1"
                alt=""
                src="/assets/gender-equality-0-1@2x.png"
              />
            </div>

            <div className="bentuk3">
              <img
                className="gender-equality-1-1"
                alt=""
                src="/assets/gender-equality-1-1@2x.png"
              />
            </div>

            <div className="bentuk4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Excepturi fugit eum optio sint ratione perspiciatis,
                exercitationem
                <br />
                ullam enim fuga! Cum dolorum cumque, a dolores ab doloremque
                quia!
                <br />
                Deserunt, harum cumque.
              </p>
              <Link href="/" className="btn-smr2">
                See More
              </Link>
            </div>
          </div>
        </section>
        <div id="chatContainer" className="chat-container">
          <Link href={"/diskusi"} id="btn-diskusi">
            Diskusi
          </Link>

          <Link href={"/"} id="btnScrollToTop" title="Kembali ke atas">
            &#8679;
          </Link>
        </div>
      </div>
    </main>
  );
}
