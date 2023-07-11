import { useEffect, useState } from "react";
import axios from "axios";

const GetDiskusi = () => {
  const [diskusi, setDiskusi] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isDataAvailable, setIsDataAvailable] = useState(true);

  useEffect(() => {
    const myToken = localStorage.getItem("token");
    setToken(myToken);
    const fetchData = async () => {
      try {
        let url = "http://server-equaliteach-rho.vercel.app/api/diskusi";

        if (selectedCategory) {
          url += `?category=${selectedCategory}`;
        }

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setIsLoading(false);

        if (response.data.diskusi.length > 0) {
          setDiskusi(response.data.diskusi);
          setIsDataAvailable(true);
        } else {
          setIsDataAvailable(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory, token]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", options);
  };

  return (
    <div className="infouser">
      <div className="header-diskusi">
        <h2>DISKUSI TERBARU</h2>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="Semua Diskusi">Semua Diskusi</option>
          <option value="Menuju Kesetaraan Gender yang Inklusif">
            Menuju Kesetaraan Gender yang Inklusif
          </option>
          <option value="Menuju Masyarakat yang Adil dan Inklusif">
            Menuju Masyarakat yang Adil dan Inklusif
          </option>
          <option value="Mengatasi Ketidakadilan untuk Masa Depan yang Lebih Baik">
            Mengatasi Ketidakadilan untuk Masa Depan yang Lebih Baik
          </option>
          <option value="Membongkar Stereotip dan Membuka Peluang Baru">
            Membongkar Stereotip dan Membuka Peluang Baru
          </option>
          <option value="Membangun Masyarakat yang Harmonis dan Berkelanjutan">
            Membangun Masyarakat yang Harmonis dan Berkelanjutan
          </option>
        </select>
      </div>
      {isLoading ? (
        <h3 style={{color: "#fff", textAlign: "center", marginTop: "20px"}}>Sedang mengambil data...</h3>
      ) : !isDataAvailable ? (
        <h3 style={{color: "#fff" , textAlign: "center", marginTop: "20px"}}>Belum ada diskusi.</h3>
      ) : (
        diskusi.map((item) => (
          <div id="infoUserDiskusi" key={item.id}>
            <label id="usernameDiskusi">{item.username}</label>
            <div id="tanggalPosting">{formatDate(item.date)}</div>
            <p id="judulDiskusi">{item.discuss}</p>
            <p id="deskripsiDiskusi">{item.category}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default GetDiskusi;
