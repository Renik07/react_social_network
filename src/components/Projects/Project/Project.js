import style from "../Projects.module.css";
import bookmark from "../../../assets/images/Feed/bookmark.png";
import message from "../../../assets/images/Feed/message.png";
import company from '../../../assets/images/Companies/company.png';

const Project = (props) => {
	const skills = props.project.skills.map((skill, i) => {
		return <div key={i} className={style.mainSkill}>{ skill }</div>
	})
	return(
    <div className={style.project}>
      <div className={style.card}>
        <div className={style.top}>
          <div className={style.header}>
            <div className={style.headerRow1}>
              <img className={style.avatar} src={company} alt="" />
              <div className={style.nameTime}>
                <div className={style.name}>{ props.project.company }</div>
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
                <div className={style.category}>Front End Developer</div>
                <div className={style.location}>{ props.project.location }</div>
              </div>
              <div className={style.buttons}>
                <img className={style.btnBookmark} src={bookmark} alt="" />
                <img className={style.btnMessage} src={message} alt="" />
								<button className={style.btnBid}>Bid Now</button>
              </div>
            </div>
          </div>
          <div className={style.main}>
            <h3 className={style.mainTitle}>{ props.project.title }</h3>
            <div className={style.fulltimePrice}>
              <span className={style.mainFulltime}>{ props.project.fulltime }</span>
              <span className={style.mainPrice}>{ props.project.price }</span>
            </div>
            <p className={style.mainDesc}>
							{ props.project.desc }
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
	)
}

export default Project;