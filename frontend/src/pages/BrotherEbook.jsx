import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import LayoutComponent from "../components/Layout";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./Epson.css";

const pages = [
    {
        title: "⏰ หน้าที่ 1: คุณสมบัติ Brother MFC-L2700D",
        content: 
        <div style={{ textAlign: 'left' }}>
        ข้อดี
                <ol>
                  <li>พิมพ์เร็วและคุณภาพสูง</li>
                  <li>มีฟังก์ชันครบถ้วน (4in1)</li>
                  <li>คุณภาพงานพิมพ์คมชัด (4in1)</li>
                  <li>ความจุกระดาษมาก (4in1)</li>
                  <li>ประหยัดค่าใช้จ่าย (4in1)</li>
                </ol>
  
        ข้อเสีย
                <ol>
                  <li>ไม่มี Wi-Fi หรือ Ethernet</li>
                  <li>พิมพ์ได้เฉพาะขาวดำ</li>
                  <li>ไม่มีหน้าจอสัมผัส</li>
                  <li>ขนาดใหญ่และหนัก</li>
                  <li>เสียงดังในขณะพิมพ์</li>
                  <li>ADF ไม่รองรับการพิมพ์สองหน้าอัตโนมัติ</li>
                  <li>ค่าใช้จ่ายเริ่มต้นสูงกว่ารุ่นเลเซอร์ทั่วไป</li>
                </ol>
        </div>,
      },
      {
        title: "📦 หน้าที่ 2: วิธีเปลี่ยนหมึก Brother MFC-L2700D",
        content: 
        <div style={{ textAlign: 'left' }}>
              <ol>
              <li>ปิดเครื่องพิมพ์และเปิดฝาหน้า</li>
              <li>ดึงชุดดรัมและตลับหมึกออก</li>
              <li>ถอดตลับหมึกออกจากดรัม</li>
              <li>ใส่ตลับหมึกใหม่เข้าไปในดรัม</li>
              <li>ทำความสะอาดลูกกลิ้งดรัม</li>
              <li>ใส่ชุดดรัมและตลับหมึกกลับเข้าเครื่องพิมพ์</li>
              <li>ปิดฝาหน้าและเปิดเครื่อง</li>
              </ol>
              </div>,
      },
      {
        title: "⚙️ หน้าที่ 3: วิธีเชื่อมเครื่องพิมพ์กับโน้ตบุ๊ค (เชื่อมต่อได้ผ่าน USB เท่านั้น)",
        content: <div style={{ textAlign: 'left' }}>
              <ol>
              <li>ใช้สาย USB ที่มาพร้อมเครื่องพิมพ์ เสียบเข้าไปที่พอร์ต USB ของเครื่องพิมพ์ และเชื่อมต่ออีกข้างกับ พอร์ต USB ของโน๊ตบุ๊ค</li>
              <li>เปิดเครื่องพิมพ์และเปิดคอมพิวเตอร์หรือโน๊ตบุ๊คของคุณ</li>
              <li>ติดตั้งไดรเวอร์ โดยให้ดาวน์โหลดไดรเวอร์จากเว็บไซต์ของ Brother</li>
              <li>เปิดไฟล์ไดรเวอร์และทำตามขั้นตอนการติดตั้ง</li>
              <li>หากไดรเวอร์ติดตั้งสำเร็จ คอมพิวเตอร์จะรับรู้เครื่องพิมพ์โดยอัตโนมัติ</li>
              <li>ทดสอบการพิมพ์โดยการพิมพ์เอกสารจากโน๊ตบุ๊คไปยังเครื่องพิมพ์</li>
              </ol>
              </div>,
  
      },
      {
        title: "🛡️ หน้าที่ 4: การแก้ปัญหาต่างๆ Brother MFC-L2700D",
        content: <div style={{ textAlign: 'left' }}>
      ปัญหาเครื่องพิมพ์ไม่เชื่อมต่อกับคอมพิวเตอร์
  <ol>
      <li>ตรวจสอบการเชื่อมต่อ: ตรวจสอบสาย USB ว่ายังเชื่อมต่ออย่างถูกต้องกับเครื่องพิมพ์และคอมพิวเตอร์</li>
      <li>รีสตาร์ทเครื่องพิมพ์และคอมพิวเตอร์: ปิดและเปิดเครื่องพิมพ์และคอมพิวเตอร์ใหม่</li>
      <li>ติดตั้งไดรเวอร์ใหม่: หากไดรเวอร์เสียหายหรือไม่ได้ติดตั้ง ให้ดาวน์โหลดไดรเวอร์ใหม่จากเว็บไซต์ Brother และติดตั้งใหม่</li>
      </ol>
  
      ปัญหาเครื่องพิมพ์ไม่สามารถสแกนหรือถ่ายเอกสารได้
  <ol>
      <li>ตรวจสอบการเชื่อมต่อ: หากใช้การเชื่อมต่อผ่าน USB ให้ตรวจสอบว่าสาย USB เชื่อมต่ออย่างถูกต้อง</li>
      <li>ตรวจสอบซอฟต์แวร์สแกน: ตรวจสอบว่าไดรเวอร์สำหรับการสแกน (เช่น Brother iPrint&Scan) ถูกติดตั้งและทำงานอย่างถูกต้อง</li>
      <li>รีสตาร์ทเครื่องพิมพ์และคอมพิวเตอร์: ปิดเครื่องพิมพ์และคอมพิวเตอร์แล้วเปิดใหม่</li>
      </ol>
    </div>,
     
      },
      {
        title: "🧹 หน้าที่ 5: การแก้ปัญหาต่างๆ Brother MFC-L2700D",
        content: <div style={{ textAlign: 'left' }}>
      ปัญหาเครื่องไม่พิมพ์
  <ol>
      <li>ตรวจสอบการเชื่อมต่อ: หากใช้สาย USB ให้ตรวจสอบว่าเครื่องพิมพ์เชื่อมต่อกับคอมพิวเตอร์อย่างถูกต้องหรือไม่</li>
      <li>ตรวจสอบหมึก: ถ้าหมึกหมดหรือเครื่องแจ้งเตือนให้เปลี่ยนหมึก ให้ทำการเปลี่ยนตลับหมึก</li>
      <li>รีสตาร์ทเครื่องพิมพ์: ปิดเครื่องพิมพ์แล้วเปิดใหม่อีกครั้ง</li>
      <li>ตรวจสอบสถานะเครื่องพิมพ์: ไปที่ Control Panel - Devices and Printers บนคอมพิวเตอร์และตรวจสอบว่าเครื่องพิมพ์ตั้งค่าเป็น "เครื่องพิมพ์เริ่มต้น" และไม่มีสถานะ "Offline" หรือ "Paused"</li>
      </ol>
  
      ปัญหาเครื่องพิมพ์มีเสียงดังขณะพิมพ์
  <ol>
      <li>ตรวจสอบเศษกระดาษ: เปิดฝาเครื่องพิมพ์และตรวจสอบว่าไม่มีเศษกระดาษติดอยู่ภายใน</li>
      <li>ทำความสะอาดเครื่อง: เช็ดทำความสะอาดลูกกลิ้งและส่วนที่อาจมีหมึกหรือลูกกลิ้งติดขัด</li>
      <li>ตรวจสอบการติดตั้งหมึก: ตรวจสอบว่าตลับหมึกและดรัมติดตั้งอย่างถูกต้องและไม่หลวม</li>
      </ol>
      </div>,
       
    },
      {
    title: "📦 หน้าที่ 6: การแก้ปัญหาต่างๆ Brother MFC-L2700D",
    content: 
    <div style={{ textAlign: 'left' }}>
      ปัญหาเครื่องพิมพ์ไม่สามารถพิมพ์สองหน้า (Duplex Printing)
      <ol>
        <li>ตรวจสอบการตั้งค่าในคอมพิวเตอร์: ในขณะที่สั่งพิมพ์ ให้เลือกตัวเลือก Duplex Printing (พิมพ์สองหน้า)</li>
        <li>ตรวจสอบไดรเวอร์: หากไดรเวอร์ไม่รองรับฟังก์ชันพิมพ์สองหน้า ให้ติดตั้งไดรเวอร์ที่รองรับ</li>
      </ol>
  
      ปัญหาเครื่องพิมพ์มีปัญหาการพิมพ์คุณภาพต่ำ (หมึกเบลอ, เส้นหรือจุดบนกระดาษ)
      <ol>
        <li>ตรวจสอบหมึก: หากหมึกหมดหรือใกล้หมด ให้ทำการเปลี่ยนตลับหมึก</li>
        <li>ทำการทำความสะอาดหัวพิมพ์: หากเครื่องพิมพ์มีฟังก์ชันทำความสะอาดหัวพิมพ์ ให้ใช้ฟังก์ชันนั้นเพื่อล้างหัวพิมพ์</li>
        <li>ตรวจสอบการตั้งค่า: ตรวจสอบการตั้งค่าคุณภาพการพิมพ์ในคอมพิวเตอร์และตั้งค่าให้เหมาะสม</li>
        <li>เปลี่ยนดรัม: หากดรัมมีอายุการใช้งานมากเกินไปหรือเกิดความเสียหาย ให้เปลี่ยนดรัมใหม่</li>
      </ol>
    </div>,
  },
  {
    title: "📦 หน้าที่ 7: การแก้ปัญหาต่างๆ Brother MFC-L2700D",
    content: 
    <div style={{ textAlign: 'left' }}>
     ปัญหาเครื่องพิมพ์แจ้งว่า "Paper Jam" หรือ "กระดาษติด"
  <ol>
      <li>ตรวจสอบกระดาษติด: เปิดฝาเครื่องพิมพ์และถอดกระดาษที่ติดอยู่ภายในออกอย่างระมัดระวัง</li>
      <li>ทำความสะอาดลูกกลิ้ง: ตรวจสอบลูกกลิ้งและทำความสะอาดหากมีเศษกระดาษติดอยู่</li>
      <li>ตรวจสอบการวางกระดาษ: วางกระดาษในถาดให้ตรงและไม่เยอะเกินไป</li>
    </ol>
    </div>,
  },
];

const BrotherEbook = () => {
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

export default BrotherEbook;
