"use client"
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import PostDiskusi from './../../components/PostDiskusi';
import GetDiskusi from './../../components/GetDiskusi';
import { useState, useEffect } from "react";


export default function Diskusi() {
  const [nama, setNama] = useState("")

  useEffect(() => {
    // This code will be executed on the client-side
    const nama = localStorage.getItem("username");
    setNama(nama)
  }, []);

  const router = useRouter();

  if (nama == null) {
    toast.error("Anda harus login terlebih dahulu.");
    setTimeout(() => {
        window.location.href = "https://equaliteach.netlify.app/";
      }, 1500);
  }

  return (
    <div className="diskusi-room-container">
      <div className="diskusi-container">
        <h4>FORUM DISKUSI</h4>
        <PostDiskusi />

        <GetDiskusi />
      </div>
    </div>
  );
}
