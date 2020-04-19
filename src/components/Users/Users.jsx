import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/joker/Joker6.png";
import userBackground from "../../assets/images/background/background3.jpg";
import FriendsOnline from './FriendsOnline/FriendsOnline.jsx';
import InformationPerson from './InformationPerson/InformationPerson.jsx';
//import informationPerson from './informationPerson/informationPerson';
//import userPhoto from "../../assets/images//joker/Joker7.png";
//import userPhoto from "../../assets/images//joker/Joker9.jpg";

let Users = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={styles.friendlist}>
        <InformationPerson />
        
        <div className={styles.listOfPeople0}>
        <div className={styles.listOfPeople1}>   
        <div className={styles.pageNumber}>
            {pages.map(p => {
                return <div className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</div>
            })}
        </div>
        </div> 
        <div className={styles.listOfPerson2}>
        {
            props.users.map(u => <div className={styles.person1} key={u.id}>
                <div className={styles.wrapUserBackground}> 
                    <img src={u.photos.large !=null ? u.photos.large : userBackground} alt="Background"
                             className={styles.userBackground} />         </div>   
                    <div className={styles.wrapUserPhoto}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="User1"
                             className={styles.userPhoto}/>      </div>
                <div className={styles.name} alt="Name" >{u.name}</div>
                <div className={styles.countryAndCity}>
                        <div className={styles.country} alt="Country">{"u.location.country"}</div>
                        <div className={styles.city} alt="City">{"u.location.city"}</div>
                </div>
                        <div className={styles.status} alt="Status" >{u.status}</div>
                        <div className={styles.button}>
                        {u.followed
                            ? <div onClick={() => {
                                props.unfollow(u.id) 
                            }}><div className={styles.friend}>Friend</div></div>
                            : <div onClick={() => {
                                props.follow(u.id)
                            }}><div className={styles.addFriend}>Add friend</div></div>}
                    </div>



                </div>
                )
        }
        </div>
        </div>
        <FriendsOnline />
    </div>
}
export default Users;