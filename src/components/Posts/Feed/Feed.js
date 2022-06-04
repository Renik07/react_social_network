import style from "./Feed.module.css";
import bookmark from "../../../assets/images/Feed/bookmark.png";
import message from "../../../assets/images/Feed/message.png";

const Feed = () => {
  return (
    <div className={style.feed}>
      <div className={style.card}>
        <div className={style.top}>
          <div className={style.header}>
            <div className={style.headerRow1}>
              <div className={style.avatar}></div>
              {/* <img className={style.avatar} src="" alt="" /> */}
              <div className={style.nameTime}>
                <div className={style.name}>John Doe</div>
                <div className={style.time}>3 min ago</div>
              </div>
              <div className={style.iconMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={style.headerRow2}>
              <div className={style.categoryLocation}>
                <div className={style.category}>Epic Coder</div>
                <div className={style.location}>Russia</div>
              </div>
              <div className={style.icons}>
                <img className={style.iconBookmark} src={bookmark} alt="" />
                <img className={style.iconMessage} src={message} alt="" />
              </div>
            </div>
          </div>
          <div className={style.main}>
            <h3 className={style.mainTitle}>Senior Wordpress Developer</h3>
            <div className={style.fulltimePrice}>
              <span className={style.mainFulltime}>Full Time</span>
              <span className={style.mainPrice}>$30 / hr</span>
            </div>
            <p className={style.mainDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id
              magna sit amet.
            </p>
						<div className={style.mainSkills}>
							<div className={style.mainSkill}>HTML</div>
							<div className={style.mainSkill}>PHP</div>
							<div className={style.mainSkill}>CSS</div>
							<div className={style.mainSkill}>Javascript</div>
							<div className={style.mainSkill}>Wordpress</div>
						</div>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.like}>Like</div>
          <div className={style.comments}>Comments</div>
          <div className={style.views}>Views 50</div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
