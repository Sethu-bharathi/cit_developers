import styles from "../styles/Home.module.css";
import Navigator from "../components/Navigator.js";
import SkillCard from "../components/skillCard";
import { useMediaQuery } from "react-responsive";
import { Player } from "@lottiefiles/react-lottie-player";


export default function HomePage() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  if (!isMobile) {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.top}>
            <Navigator
              href="https://www.w3schools.com/bootstrap4/bootstrap_get_started.asp"
              title="Contact"
            />
          </div>
          <div className={styles.bottom_container}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                
              }}
            >
              
              <h1 className={styles.heading}>CIT Developers<br></br> Community</h1>
              <p className={styles.p}>
                {" "}
                Ever tried !!! Ever failed No matter Try again !! Fail again
                Fail better{" "}
              </p>
            </div>

            <div className={styles.skillholder}>
              <SkillCard src="/react.png" styl={{ position: "relative",left:"20px" }} height={100} width={100} />
              <SkillCard
                styl={{ position: "relative",right:"70px" }}
                src="/flutter.png"
                height={90}
                width={90}
              />
              <SkillCard
                styl={{ position: "relative",left:"80px" }}
                src="/angular.jpg"
                height={60}
                width={60}
              />
              <SkillCard
                styl={{ position: "relative",right:"40px" }}
                src="/vue.png"
                height={50}
                width={50}
              />
              <SkillCard
                styl={{ position: "relative",right:"0px" }}
                src="/firebase.png"
                height={40}
                width={40}
              />
              <Player style={{float:"left",position:"relative",left:"60px"}} autoplay loop src="https://assets4.lottiefiles.com/packages/lf20_4qiecwbu.json" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
