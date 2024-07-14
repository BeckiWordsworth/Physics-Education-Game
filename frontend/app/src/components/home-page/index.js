import React from "react";
import DuoPhysicsClient from "../../model/duophysics-client.js";
import styled from "styled-components";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let userLogged = DuoPhysicsClient.isLoggedIn() ? "/dashboard" : "/user";

    return (
      <S.HomePage>
        <S.Hero>
          <S.HeroIcon>
            <img src="/logo.png" alt="Logo" />
          </S.HeroIcon>
          <S.HeroContent>
            <h1>DuoPhysics</h1>
            <p>Learn Physics for free</p>
            <br />
            <a href={userLogged}>Get Started</a>
          </S.HeroContent>
        </S.Hero>

        <S.HomeSection>
          <S.HomeSectionContent>
            <h2>A fun way to learn Physics</h2>
            <p>
              Learning with DuoPhysics is fun! Earn points for correct answers, collect badges, and level up. This
              bite-sized lessons are effective, and we have proof that it works. We have a range of subjects for your to
              dive into which are both fun and interesting.
            </p>
            <S.ScienceIcon>
              <img src="/science-book.png" alt="sciencebook" />
              <img src="/dropper.png" alt="dropper" />
              <img src="/nuclear.png" alt="nuclear" />
              <img src="/saturn.png" alt="saturn" />
              <img src="/telescope.png" alt="telescope" />
              <img src="/radar.png" alt="radar" />
              <img src="/satellite.png" alt="satelite" />
              <img src="/flask.png" alt="flask" />
              <img src="/newton-cradle.png" alt="newton" />
              <img src="/space.png" alt="space" />
            </S.ScienceIcon>
          </S.HomeSectionContent>
        </S.HomeSection>

        <S.HomeSection>
          <S.HomeSectionContent>
            <h2>Learn anywhere</h2>
            <p>
              Make your breaks and commutes more productive by learning through your phone aswell. Lessons are quick and
              can be played anywhere.
            </p>
            <S.ImageIcon>
              <img src="/smartphone.png" alt="phone" />
              <img src="/tablet.png" alt="tablet" />
              <img src="/laptop.png" alt="laptop" />
            </S.ImageIcon>
          </S.HomeSectionContent>
        </S.HomeSection>

        <S.HomeFooter>
          <S.HomeFooterContent>Learning Physics the fun way with DuoPhysics.</S.HomeFooterContent>
        </S.HomeFooter>
      </S.HomePage>
    );
  }
}

export default HomePage;

const S = {
  Homepage: styled.div``,
  Hero: styled.div`
    background-color: #1866a6;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  HeroIcon: styled.div`
    width: 200px;
  `,

  HeroContent: styled.div`
    color: white;
    font-size: 18pt;
    font-weight: bold;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    text-align: center;

    a {
      padding: 10px 50px;
      background-color: #22aa33;
      border-radius: 30px;
      color: white;
      text-decoration: none;
      font-size: 14pt;
    }

    a:hover {
      background-color: #229922;
    }
  `,

  HomeSection: styled.section`
    background-color: #ddd;
    padding: 20px;
  `,
  HomeSectionContent: styled.section`
    max-width: 600px;
    margin: 0 auto;

    section:nth-child(odd) {
      background-color: #f3f3f3;
    }
  `,

  HomeFooter: styled.div`
    background-color: #1866a6;
    min-height: 100px;
    padding: 40px 20px;
  `,

  HomeFooterContent: styled.div`
    background-color: #1866a6;
    min-height: 100px;
    padding: 40px 20px;
  `,

  ScienceIcon: styled.div`
    img {
      margin: 10px;
    }
  `,
  ImageIcon: styled.div`
    margin: 0 auto;

    img {
      height: 50px;
    }
  `,
};
