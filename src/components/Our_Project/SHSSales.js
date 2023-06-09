// import React from "react";
import React, { Fragment } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./AllProject.css";
import hanSystem from '../../assets/Han System.jpg'
import card1 from '../../assets/card1.png'
import whatsapp from '../../assets/whatsapp.png'
import { Button } from "react-bootstrap";

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const SHSSales = ()=>{
    return(
     
   <Fragment>
        <section className="MainTitle"> 
            <h1 className="proname"> <Button className="back_button" href="/Our_Project"><MDBIcon fas icon="arrow-circle-left" className="back_icon"/> </Button> SHSSales</h1>
                <p  className="prodetiels">
   


                إذا كنت تريد برنامجًا يساعدك على إدارة محلاتك لجميع الأنشطة التجارية، فإن برنامج
                    الحسابات هو الخيار المثالي. بواسطته يمكنك إدارة حسابات المبيعات وحسابات العملاء
                    والموردين وحسابات المصارف بكل سهولة. يمكنك أيضًا الاطلاع على إحصائيات الأرباح
                    والخسائر وإدارة المشتريات والحصول على تقارير مفصلة. كما يمكنك معادلة المخزون
                    والاستفادة من نقاط البيع السريع لتحسين عمليات البيع. يمكنك طباعة الفواتير والتحكم في بيع
                    الجملة والتجزئة.
                    لا يتوقف دور البرنامج فقط على ذلك بل يمكنك إنشاء قاعدة بيانات العملاء والموردين
                    بسهولة. أيضًا، بإمكانك التحكم في صلاحيات المستخدمين، حيث يمكنك التحكم في نشاطات
                    السوبر ماركت، محلات الملابس، محلات الموبايلات والأحذية.
                    بالنظر إلى هذه الميزات المتعددة سوف تبني أفضل نظام تشغيل لتحسين الأداء التجاري الخاص بك    
                 </p>  

            {/* <Container className="han11">
                <Row>
                    <Col>
                    <img src={hanSystem} className="imghan"/>
                    </Col>
                    <Col>
                    <h1>فاتورة خدمات</h1>
                    <p> nnnnnnnnnnnnnnnnnnnnnmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
                    </Col>
                </Row>
      
                </Container>

                <Container className="han11">
                <Row>
                    <Col>
                    <img src={hanSystem} className="imghan"/>
                    </Col>
                    <Col>
                    <h1>فاتورة مشتريات</h1>
                    <p> nnnnnnnnnnnnnnnnnnnnnmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
                    </Col>
                </Row>
      
                </Container> */}





                







<Container>
    <Row>
        <Col  className="main-card">
            <Card style={{ width: '18rem' }} className="contact_card">
            <Card.Img variant="top"   src={card1} /> 
            <Card.Body>
                <Card.Title>فاتورة خدمات</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>

        <Col  className="main-card">
            <Card style={{ width: '18rem' }} className="contact_card">
            <Card.Img variant="top"   src={hanSystem} /> 
            <Card.Body>
                <Card.Title>فاتورة مشتريات</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        <Col  className="main-card">
            <Card style={{ width: '18rem' }} className="contact_card">
            <Card.Img variant="top"   src={hanSystem} /> 
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>


    </Row>
    </Container>

    <p  className="projects_footer">
 
        لطلب النسخه التجريبيه تواصل معنا         <br></br>
        <a href='https://api.whatsapp.com/send/?phone=%2B201555341989&text&type=phone_number&app_absent=0' className='me-4 text-reset projects_phone'>
        {/* <MDBIcon fab icon="whatsapp-square" className="projects_footer_icon"> +201555341989</MDBIcon> */}
        <img src={whatsapp} className="project_whatsapp_icon"/> <span className="projects_phone">+201555341989</span>
        </a>
     </p>
        </section>               
   </Fragment>   

              
    );
}

export default SHSSales;