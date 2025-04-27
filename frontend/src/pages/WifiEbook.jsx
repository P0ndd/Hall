import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import LayoutComponent from "../components/Layout";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./Ebook.css";

const WifiEbook = () => {
  const pages = [
    "📖 หน้าที่ 1: แนะนำคู่มือการเชื่อมต่อ Wi-Fi และ VPN\n\nคู่มือนี้จะช่วยให้คุณเข้าใจการใช้งานโปรแกรม OpenVPN เพื่อเชื่อมต่อ Wi-Fi และการใช้งานร่วมกับเครื่องปริ้นและโน้ตบุ๊ค รวมถึงการเข้าถึงระบบ LOS",
    "💻 หน้าที่ 2: การติดตั้งโปรแกรม OpenVPN\n\n1. ดาวน์โหลดโปรแกรม OpenVPN จากเว็บไซต์\n2. ติดตั้งโปรแกรมตามขั้นตอน\n3. เปิดโปรแกรมและกำหนดค่าเบื้องต้นตามการตั้งค่าของบริษัท",
    "🔒 หน้าที่ 3: การเชื่อมต่อ VPN ด้วย OpenVPN\n\n1. เปิดโปรแกรม OpenVPN\n2. เลือกโปรไฟล์ที่ได้รับจากฝ่ายไอที\n3. ป้อนชื่อผู้ใช้และรหัสผ่าน\n4. คลิกเชื่อมต่อเพื่อเริ่มการเชื่อมต่อ VPN",
    "📶 หน้าที่ 4: การเชื่อมต่อ Wi-Fi ด้วย OpenVPN\n\n1. เชื่อมต่อกับเครือข่าย Wi-Fi ของบริษัท\n2. เปิดโปรแกรม OpenVPN เพื่อใช้งาน VPN\n3. ตรวจสอบการเชื่อมต่อว่าเชื่อมต่อกับ VPN และ Wi-Fi สำเร็จหรือไม่",
    "🖨️ หน้าที่ 5: การเชื่อมต่อเครื่องปริ้นผ่าน Wi-Fi\n\n1. เปิดเครื่องปริ้นและเชื่อมต่อกับ Wi-Fi\n2. ไปที่ Settings > Printers and Scanners บนโน้ตบุ๊ค\n3. เลือกเครื่องปริ้นที่เชื่อมต่อกับ Wi-Fi และคลิกเพิ่มเครื่อง",
    "📱 หน้าที่ 6: การเชื่อมต่อโน้ตบุ๊คกับ Wi-Fi\n\n1. เปิดโน้ตบุ๊คและไปที่ Settings > Network & Internet\n2. เลือกเครือข่าย Wi-Fi ของบริษัทและป้อนรหัสผ่าน\n3. ตรวจสอบการเชื่อมต่อ Wi-Fi สำเร็จ",
    "🧑‍💻 หน้าที่ 7: การตั้งค่าเครื่องปริ้นให้ใช้งานผ่าน VPN\n\n1. เปิดโปรแกรม OpenVPN บนโน้ตบุ๊ค\n2. เชื่อมต่อ VPN แล้วไปที่ Settings > Printers\n3. เชื่อมต่อเครื่องปริ้นที่ต้องการใช้งานผ่านเครือข่าย VPN",
    "🔑 หน้าที่ 8: การใช้งานระบบ LOS ผ่าน VPN\n\n1. เปิดโปรแกรม OpenVPN และเชื่อมต่อ\n2. เข้าเว็บไซต์ของระบบ LOS โดยใช้เบราว์เซอร์\n3. ป้อนชื่อผู้ใช้และรหัสผ่านเพื่อเข้าใช้งานระบบ LOS",
    "⚙️ หน้าที่ 9: การแก้ไขปัญหาการเชื่อมต่อ Wi-Fi\n\n1. ตรวจสอบการเชื่อมต่อ Wi-Fi ว่ามีสัญญาณหรือไม่\n2. รีสตาร์ทเราเตอร์หากสัญญาณอ่อน\n3. เชื่อมต่อกับเครือข่ายอื่นหากมีปัญหาการเชื่อมต่อ Wi-Fi",
    "🔧 หน้าที่ 10: การแก้ไขปัญหาการเชื่อมต่อ VPN\n\n1. ตรวจสอบว่าโปรแกรม OpenVPN เปิดและเชื่อมต่อสำเร็จ\n2. ตรวจสอบการตั้งค่า VPN และโปรไฟล์การเชื่อมต่อ\n3. ติดต่อฝ่ายไอทีหากไม่สามารถเชื่อมต่อได้"
  ];
  

  const flipbookRef = useRef();

  const downloadPDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");

    if (!flipbookRef.current) {
      console.error("flipbookRef.current เป็น null หรือ undefined");
      return;
    }

    const book = flipbookRef.current.pageFlip();

    for (let i = 0; i < pages.length; i++) {
      book.turnToPage(i);
      await new Promise((r) => setTimeout(r, 100)); // รอให้หน้าโหลดเสร็จ

      const page = book.getPage(i);
      if (!page || !page.element) {
        console.error(`ไม่พบองค์ประกอบของหน้าที่ ${i + 1}`);
        continue;
      }

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

    pdf.save("WifiVPN_Manual.pdf");
  };

  return (
    <LayoutComponent>
      <div className="ebook-container">
        <button className="download-btn" onClick={downloadPDF}>
          📥 Download PDF
        </button>

        <HTMLFlipBook width={400} height={600} className="flipbook" ref={flipbookRef}>
          {pages.map((content, index) => (
            <div key={index} className="page">
              <h2>{content}</h2>
              <p>เนื้อหาของหน้า {index + 1}</p>
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </LayoutComponent>
  );
};

export default WifiEbook;
