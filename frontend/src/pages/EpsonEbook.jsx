import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import LayoutComponent from "../components/Layout";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./Epson.css";

const pages = [
    {
        title: "💾 หน้าที่ 1: คุณสมบัติ Epson M3170",
        content: (
          <div style={{ textAlign: 'left' }}>
            ข้อดี
            <ol>
              <li>ประหยัดหมึกและต้นทุนการพิมพ์</li>
              <li>ความเร็วการพิมพ์สูง</li>
              <li>ฟังก์ชันครบครัน (4in1)</li>
              <li>รองรับการพิมพ์สองหน้าอัตโนมัติ</li>
              <li>รองรับการเชื่อมต่อแบบไร้สาย</li>
              <li>คุณภาพงานพิมพ์สูง</li>
              <li>ถังหมึกคุณภาพสูง เติมง่าย ไม่หกเลอะเทอะ</li>
              <li>ประหยัดพลังงานกว่าระบบเลเซอร์</li>
            </ol>
            
            ข้อเสีย
            <ol>
              <li>ราคาสูงกว่าระบบเลเซอร์ขาวดำบางรุ่น</li>
              <li>พิมพ์ได้แค่ขาว-ดำ ไม่รองรับสี</li>
              <li>ความเร็วในการพิมพ์อาจช้ากว่าเลเซอร์</li>
              <li>ถ้าพิมพ์ไม่บ่อย หมึกอาจแห้ง</li>
              <li>ขนาดใหญ่และหนัก</li>
              <li>ต้นทุนอะไหล่และค่าซ่อมสูง</li>
            </ol>
          </div>
        ),
        imageSrc: "path/to/image2.png",
      },
  {
    title: "💾 หน้าที่ 2: วิธีเปลี่ยนหมึกเครื่องพิมพ์ Epson M3170",
    content: (
      <div style={{ textAlign: "left" }}>
        <p>1. เตรียมอุปกรณ์ (ขวดหมึก Epson005)</p>
        <p>2. เปิดฝาถังหมึกเครื่องพิมพ์</p>
        <p>3. เติมหมึกใหม่ เวลาเติมหมึกไม่ต้องบีบปล่อยไว้ให้หมึกลงอย่างช้าๆ</p>
        <p>4. ปิดจุกยางและฝาครอบ</p>
        <p>5. รีเซ็ตระดับหมึกในเครื่องพิมพ์โดยกดที่หน้าจอเมนู Home - Maintenance - Reset Ink Level - Black แล้วกด OK</p>
      </div>
    ),
    imageSrc: "path/to/image2.png",
  },
  {
    title: "🌐 หน้าที่ 3: วิธีการเชื่อมต่อเครื่องพิมพ์กับโน้ตบุ๊คตามนโยบาย",
    content: (
      <div style={{ textAlign: "left" }}>
        <strong>การเชื่อมต่อผ่าน USB</strong>
        <ol>
          <li>เสียบสาย USB จากเครื่องพิมพ์ไปยังโน้ตบุ๊ก</li>
          <li>ดาวน์โหลดและติดตั้งไดรเวอร์จากเว็บไซต์ Epson</li>
          <li>ติดตั้งซอฟต์แวร์และทำตามคำแนะนำของ Epson</li>
          <li>เมื่อติดตั้งเสร็จ ทดลองพิมพ์เอกสารเพื่อเช็คความพร้อม</li>
        </ol>
        <strong>การเชื่อมต่อผ่าน Wifi</strong>
        <ol>
          <li>เปิดเครื่องพิมพ์และกดปุ่ม "Home" ตรงหน้าจอ</li>
          <li>ไปที่เมนู "Wifi Setup" - "Wi-Fi Network"</li>
          <li>เลือก Wifi ของทางออฟฟิศ แล้วใส่รหัสผ่าน</li>
          <li>ให้เช็คไอคอน Wifi (เมื่อต่อสำเร็จ เครื่องพิมพ์จะแสดง ไอคอน Wifi)</li>
          <li>ในโน้ตบุ๊ก ให้ไปที่ Settings - Devices - Printers & Scanners</li>
          <li>กด "Add a printer" แล้วเลือก Epson M3170</li>
        </ol>
      </div>
    ),
    imageSrc: "path/to/image3.png",
  },
  {
    title: "🈸 หน้าที่ 4: การแก้ปัญหาต่างๆ Epson M3170",
    content: (
      <div style={{ textAlign: "left" }}>
        <strong>ปัญหาเครื่องพิมพ์ไม่ตอบสนอง</strong>
        <ol>
          <li>ตรวจสอบว่าเครื่องพิมพ์เปิดอยู่และไฟสถานะปกติ</li>
          <li>ถ้าต่อผ่าน USB ลองเปลี่ยนสาย USB หรือช่องเสียบ</li>
          <li>ถ้าต่อผ่าน Wi-Fi ตรวจสอบว่าโน้ตบุ๊กและเครื่องพิมพ์เชื่อมกับ Wi-Fi เดียวกัน</li>
          <li>ลองรีสตาร์ทเครื่องพิมพ์และคอมพิวเตอร์</li>
        </ol>
        <strong>ปัญหาหมึกจาง / หมึกไม่ออก</strong>
        <ol>
          <li>ตรวจสอบระดับหมึก ถ้าต่ำให้เติมหมึก</li>
          <li>ทำความสะอาดหัวพิมพ์ (Home → Maintenance → Print Head Cleaning)</li>
          <li>ทำซ้ำหลายรอบถ้าจำเป็น</li>
        </ol>
        <strong>ปัญหากระดาษติด</strong>
        <ol>
          <li>ปิดเครื่องพิมพ์แล้วเปิดฝาหลัง</li>
          <li>ดึงกระดาษออกอย่างระมัดระวัง</li>
          <li>ตรวจสอบขนาดกระดาษให้ตรงตามสเปก</li>
          <li>จัดกระดาษใหม่ให้อยู่ตรงกลาง</li>
        </ol>
      </div>
    ),
    imageSrc: "path/to/image4.png",
  },
];

const EpsonEbook = () => {
  const flipbookRef = useRef();

  const downloadPDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");

    if (!flipbookRef.current) return;

    const book = flipbookRef.current.pageFlip();

    for (let i = 0; i < pages.length; i++) {
      book.turnToPage(i);
      await new Promise((r) => setTimeout(r, 300));

      const page = book.getPage(i);
      if (!page?.element) continue;

      const canvas = await html2canvas(page.element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#fff",
      });

      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    }

    pdf.save("Notebook_Manual.pdf");
  };


  return (
    <LayoutComponent>
      <div className="ebook-container">

        <div className="content">
          <button className="download-btn" onClick={downloadPDF}>
            📥 Download PDF
          </button>
          <HTMLFlipBook width={600} height={700} className="flipbook" ref={flipbookRef}>
          {pages.map((page, index) => (
              <div key={index} className="page">
                <h2>{page.title}</h2>
                {page.content}
                {page.imageSrc && <img src={page.imageSrc} alt={`Page ${index + 1}`} />}
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default EpsonEbook;
