import style from "./Feed.module.css";
import bookmark from "../../../assets/images/Feed/bookmark.png";
import message from "../../../assets/images/Feed/message.png";
import avatar from '../../../assets/images/avatar.png';

const Feed = (props) => {
	const skills = props.job.skills.map((skill, i) => {
		return <div key={i} className={style.mainSkill}>{ skill }</div>
	})

  return (
    <div className={style.feed}>
      <div className={style.card}>
        <div className={style.top}>
          <div className={style.header}>
            <div className={style.headerRow1}>
              <img className={style.avatar} src={avatar} alt="" />
              <div className={style.nameTime}>
                <div className={style.name}>{ props.job.fullname }</div>
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
                <div className={style.location}>{ props.job.location }</div>
              </div>
              <div className={style.icons}>
                <img className={style.iconBookmark} src={bookmark} alt="" />
                <img className={style.iconMessage} src={message} alt="" />
              </div>
            </div>
          </div>
          <div className={style.main}>
            <h3 className={style.mainTitle}>{ props.job.title }</h3>
            <div className={style.fulltimePrice}>
              <span className={style.mainFulltime}>{ props.job.fulltime }</span>
              <span className={style.mainPrice}>{ props.job.price }</span>
            </div>
            <p className={style.mainDesc}>
							{ props.job.desc }
            </p>
						<div className={style.mainSkills}>{ skills }</div>
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
