import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import icon from '../../images/2790.png'

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: any;
}

const ThreeColumns = ({ title, content, button, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="space-between" align="middle">
    
            <Col lg={22} md={22} sm={24} xs={24}>
            <main>
            <section className="cards">
              <div className="card charizard animated"></div>

            </section>
          </main>
            </Col>

           
            
          {/*             
            <Row justify="space-between" align="middle">
                <Col lg={8} md={8} sm={8} xs={24}>
                <img src={icon} width="100%" height="100%" />
                </Col>
                <Col lg={8} md={8} sm={8} xs={24}>
                <img src={icon} width="100%" height="100%" />
                </Col>
                <Col lg={8} md={8} sm={8} xs={24}>
                <img src={icon} width="100%" height="100%" />
                </Col>
              </Row> */}
        </Row>
     
       
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(ThreeColumns);
