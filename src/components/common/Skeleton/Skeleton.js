import React from "react"
import ContentLoader from "react-content-loader"
import style from '../../Users//Users.module.css';

const Skeleton = (props) => (
  <ContentLoader 
		className={style.userCard}
    speed={2}
    width={270}
    height={357}
    viewBox="0 0 270 357"
    backgroundColor="#ffffff"
    foregroundColor="#a1a1a1"
    {...props}
  >
    <circle cx="135" cy="96" r="65" /> 
    <rect x="36" y="184" rx="3" ry="3" width="198" height="24" /> 
    <rect x="-33" y="292" rx="0" ry="0" width="346" height="1" /> 
    <rect x="79" y="309" rx="3" ry="3" width="114" height="36" /> 
    <rect x="99" y="226" rx="3" ry="3" width="72" height="35" /> 
    <rect x="-31" y="-16" rx="0" ry="0" width="317" height="17" /> 
    <rect x="-36" y="356" rx="0" ry="0" width="336" height="46" /> 
    <rect x="-32" y="-30" rx="0" ry="0" width="34" height="433" /> 
    <rect x="268" y="-7" rx="0" ry="0" width="35" height="388" />
  </ContentLoader>
)

export default Skeleton;