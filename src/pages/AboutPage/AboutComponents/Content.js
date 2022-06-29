import React from "react";
import "./Content.scss";
import { Row, Col } from "antd";
import about1 from "../../../assets/image/about1.webp";
import about2 from "../../../assets/image/about2.webp";
import about3 from "../../../assets/image/about3.webp";
import Founder from "../../HomePage/HomeComponents/Founder";

const Content = ({ des1, des2 }) => {
  return (
    <>
      <div className="about-content container">
        <div className="about-content__card">
          <Row>
            <Col lg={8}>
              <img src={about1} alt="" />
            </Col>
            <Col lg={16}>
              <div className="about-content__card-des">
                <h1>Turkey</h1>
                Sit porta tellus venenatis donec vestibulum sollicitudin lectus
                semper lobortis per suspendisse sociosqu maecenas velit ac nisi
                habitant ad mattis cursus erat semper orci turpis platea
                pulvinar proin lobortis blandit nisl conubia vivamus cubilia
                luctus interdum eros blandit metus ut pulvinar in himenaeos
                adipiscing varius donec euismod interdum suspendisse at eget
                netus nec cubilia molestie.
              </div>
            </Col>
          </Row>
        </div>
        <div className="about-content__card">
          <Row gutter={[]}>
            <Col lg={16}>
              <div className="about-content__card-des">
                <h1>Cow</h1>
                Neque blandit vivamus interdum nam hendrerit aliquam elementum
                leo tempor dapibus nunc quisque elit tempus ligula per diam
                curabitur ullamcorper enim litora commodo sem litora est cubilia
                placerat phasellus fames eros sollicitudin volutpat quisque
                placerat netus amet imperdiet sagittis neque mollis integer
                himenaeos euismod praesent.
              </div>
            </Col>
            <Col lg={8}>
              <img src={about2} alt="" />
            </Col>
          </Row>
        </div>{" "}
        <div className="about-content__card">
          <Row>
            <Col lg={8}>
              <img src={about3} alt="" />
            </Col>
            <Col lg={16}>
              <div className="about-content__card-des">
                <h1>Rabbit</h1>
                Gravida primis pharetra pulvinar nulla magna velit donec viverra
                lectus congue erat placerat quisque bibendum urna adipiscing
                condimentum himenaeos fringilla augue lacinia varius eleifend
                luctus aenean aliquam est sit aliquam habitasse ultrices aliquam
                blandit vel id convallis cubilia mi nunc turpis non mi tempor
                ullamcorper.
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="about-content__hero">
        <div className="thuxem">
          <div className="about-content__hero-img"></div>
        </div>
      </div>
      <Founder
        des1={
          "Sed ut perspiciatis unde accusa mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.  Quisque aenean et tortor tempus arcu cubilia conubia litora curae potenti eros neque euismod aenean ultricies erat tempus euismod ullamcorper rutrum enim eget dictum cursus aenean habitant laoreet nulla sollicitudin quam velit fermentum hendrerit tempus donec elit curabitur justo porta hac accumsan facilisis cubilia litora vivamus metus elit class inceptos class sit elit sed quis arcu elit aliquam netus nisl nibh class at placerat porttitor dapibus cursus at vehicula placerat ut lobortis curabitur lacus cursus ornare morbi integer magna ultrices enim rutrum iaculis donec eget adipiscing scelerisque feugiat sociosqu sed lacinia sollicitudin class ipsum sapien integer fames dictum consectetur dictum. Lorem inceptos accumsan quis nunc justo leo at dictum purus leo at egestas eros ultricies proin gravida pellentesque luctus hac etiam malesuada malesuada aptent fringilla sollicitudin libero velit est donec.  "
        }
        des2={
          "Dolor conubia viverra faucibus dictumst fringilla aenean lectus suscipit laoreet enim mauris viverra nec cursus porttitor curabitur habitant congue conubia quis sem libero laoreet purus adipiscing faucibus donec odio sodales aliquam fringilla sollicitudin integer urna mauris metus et sit neque cursus dolor venenatis consectetur sit. Adipiscing est sodales ligula euismod ultricies habitasse magna consequat integer auctor nec nisl porta sed vestibulum erat ligula rhoncus habitant tempor commodo cursus magna praesent tortor tempus litora viverra id tellus libero ad dolor habitant curabitur nibh maecenas mi molestie luctus nibh rhoncus praesent vestibulum torquent suscipit sem cras auctor sagittis consequat orci vestibulum fusce inceptos sapien sollicitudin sollicitudin sed curae sociosqu suspendisse hendrerit adipiscing est curae curabitur aliquet quis leo aliquam sapien luctus curabitur venenatis dictumst consequat eleifend phasellus ac mattis vulputate quam massa odio tortor augue dictum ornare ipsum adipiscing lorem curabitur lobortis ultrices nulla consectetur pulvinar taciti. Eu est sollicitudin metus ante erat nisi curae blandit auctor urna quisque velit ipsum non iaculis placerat dictumst suscipit nulla sed litora vivamus habitant donec metus consectetur egestas fringilla dolor aptent malesuada at per auctor sem sed ac nibh etiam ligula sociosqu justo nec luctus eleifend mattis urna etiam eros."
        }
      />
      <div className="seperate container"></div>
    </>
  );
};

export default Content;
