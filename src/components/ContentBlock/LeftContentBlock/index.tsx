import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";

const LeftContentBlock = ({
  icon,
  title,
  content,
  section,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <LeftContentSection>
      <Fade direction="up">
        <Row justify="space-between" align="middle" id={id}>
        
          <Col lg={11} md={11} sm={12} xs={24}>
          <Fade delay={0} direction="up">
          <main>
              <section className="cards">
                <div className="card pika animated"></div>

              </section>
            </main>
          </Fade>
          </Col>
      
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
            <Fade delay={100} direction="up">
              <h1>{t(title)}</h1>
            </Fade>
            <Fade delay={300} direction="up">
              <Content>{t(content)}</Content>
            </Fade>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <Fade delay={400} direction="up">
                          <MinTitle>{t(item.title)}</MinTitle>
                          </Fade>
                          <Fade delay={500} direction="up">
                          <MinPara>{t(item.content)}</MinPara>
                          </Fade>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
