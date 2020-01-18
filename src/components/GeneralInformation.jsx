import React from "react";
import styles from "../styles/GeneralInformationStyle.module.scss";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import avatar from "../resources/hothaohien.png";
export default function GeneralInformation({
  name,
  email,
  image,
  description,
  phone,
  address,
  facebook,
  twitter,
  git,
  linkedin,
  instagram,
  greating,
  greatingDescription
}) {
  console.log(avatar);
  return (
    <div className={styles.generalInformation}>
      <img className={styles.avatar} src={avatar} alt="image"></img>
      <div className={styles.generalDescription}>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.shortDescription}>{description}</h2>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.generalGreating}>
        <h3 className={styles.greating}> {greating} </h3>
        <p className={styles.greatingDescription}></p>
        <p className={styles.greatingDescription}>{greatingDescription}</p>
        <div className={styles.contact}>
          <h3 className={styles.greating}>Look me up on ...</h3>
          <div className={styles.socialMedia}>
            <a className={styles.channel} href={twitter}>
              <TwitterIcon style={{ fontSize: 48 }} />
            </a>
            <a className={styles.channel} href={facebook}>
              <FacebookIcon style={{ fontSize: 48 }} />
            </a>
            <a className={styles.channel} href={linkedin}>
              <LinkedInIcon style={{ fontSize: 48 }} />
            </a>
            <a className={styles.channel} href={git}>
              <GitHubIcon style={{ fontSize: 38 }} />
            </a>
            <a className={styles.channel} href={instagram}>
              <InstagramIcon style={{ fontSize: 48 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
