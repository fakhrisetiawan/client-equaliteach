import { useState, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const PostDiskusi = () => {
  const [pesan, setPesan] = useState("");
  const [kategori, setKategori] = useState("");

  const [nama, setNama] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const myNama = localStorage.getItem("username");
    const myToken = localStorage.getItem("token");
    setNama(myNama);
    setToken(myToken);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://server-equaliteach-rho.vercel.app/api/diskusi",
        {
          username: nama,
          discuss: pesan,
          category: kategori,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      toast.success("Berhasil menambahkan diskusi");

      // Reset form
      setPesan("");
      setKategori("");
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form id="buatDiskusi" onSubmit={handleSubmit}>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <p>TAMBAHKAN DISKUSI</p>
      <input
        type="text"
        id="pesan"
        placeholder="Masukkan Diskusi"
        value={pesan}
        onChange={(e) => setPesan(e.target.value)}
      />
      <h3 style={{ color: "#fff", marginBlock: "20px" }}>PILIH TEMA DISKUSI</h3>
      <div className="kategori-diskusi">
        <div>
          <input
            type="radio"
            name="category"
            id="kategori1"
            value="Menuju Kesetaraan Gender yang Inklusif"
            checked={kategori === "Menuju Kesetaraan Gender yang Inklusif"}
            onChange={() =>
              setKategori("Menuju Kesetaraan Gender yang Inklusif")
            }
          />
          <label htmlFor="kategori1">
            Menuju Kesetaraan Gender yang Inklusif
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            id="kategori2"
            value="Menuju Masyarakat yang Adil dan Inklusif"
            checked={kategori === "Menuju Masyarakat yang Adil dan Inklusif"}
            onChange={() =>
              setKategori("Menuju Masyarakat yang Adil dan Inklusif")
            }
          />
          <label htmlFor="kategori2">
            Menuju Masyarakat yang Adil dan Inklusif
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            id="kategori3"
            value="Mengatasi Ketidakadilan untuk Masa Depan yang Lebih Baik"
            checked={
              kategori ===
              "Mengatasi Ketidakadilan untuk Masa Depan yang Lebih Baik"
            }
            onChange={() =>
              setKategori(
                "Mengatasi Ketidakadilan untuk Masa Depan yang Lebih Baik"
              )
            }
          />
          <label htmlFor="kategori3">
            Mengatasi Ketidakadilan untuk Masa Depan yang Lebih Baik
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            id="kategori4"
            value="Membongkar Stereotip dan Membuka Peluang Baru"
            checked={
              kategori === "Membongkar Stereotip dan Membuka Peluang Baru"
            }
            onChange={() =>
              setKategori("Membongkar Stereotip dan Membuka Peluang Baru")
            }
          />
          <label htmlFor="kategori4">
            Membongkar Stereotip dan Membuka Peluang Baru
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            id="kategori5"
            value="Membangun Masyarakat yang Harmonis dan Berkelanjutan"
            checked={
              kategori ===
              "Membangun Masyarakat yang Harmonis dan Berkelanjutan"
            }
            onChange={() =>
              setKategori(
                "Membangun Masyarakat yang Harmonis dan Berkelanjutan"
              )
            }
          />
          <label htmlFor="kategori5">
            Membangun Masyarakat yang Harmonis dan Berkelanjutan
          </label>
        </div>
      </div>
      <button id="btnPosting" type="submit">
        Posting
      </button>
    </form>
  );
};

export default PostDiskusi;
